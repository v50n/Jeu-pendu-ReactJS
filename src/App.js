import React from 'react'
import './sass/app.scss';
import wordsList from './wordsDictionary';
import Word from './components/word';
import ButtonLetter from './components/buttonLetter';




const MAX_TRY = 6;

function generateWord(){
  var wordArr =[];
  var randomIndex = Math.floor(Math.random() * (wordsList.length));
  for(let i =0; i<wordsList[randomIndex].length; i++){
    wordArr.push(wordsList[randomIndex][i]);
  }
  return wordArr
}

const DEFAULT_STATE = { 
  words: generateWord(), //["A","B","C","A","D"]
  currentIndexLetter: [],
  nbTryError: 0,
  finishGame: false
}


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      ...DEFAULT_STATE
    }
    
  }

  handleBtnClick = letter => {
    var { words,currentIndexLetter, nbTryError } = this.state;

    var copieCurrentIndexArr = this.state.currentIndexLetter.slice(); 

    if(nbTryError >= MAX_TRY){
      return;
    }else{
      for (let i = 0; i < words.length; i++){
        if(!currentIndexLetter.includes(i)){ // check if the user has already select this letter. If not we continue to lookup
          if(words[i].toLowerCase() == letter){
            copieCurrentIndexArr.push(i)
          }
        }
      }
      if(copieCurrentIndexArr.length == currentIndexLetter.length){ // if the user aren't found correct letter
       
        if(this.state.nbTryError === MAX_TRY-1){
          
          this.setState({
            finishGame: true
          });
        }
        this.setState({
          currentIndexLetter: copieCurrentIndexArr,
          nbTryError: nbTryError + 1
        });

      }else{
        this.setState({
          currentIndexLetter: copieCurrentIndexArr,
        });
      }

    }    
  }


  newGame = (e) => {
    e.preventDefault()
      window.location.reload(false);
  }

  render(){
    var {words,currentIndexLetter, nbTryError, finishGame} = this.state
    return (
      <div className="App">
        <div className="title">
          <h1>Jeu pendu</h1>
        </div>
        <section className="game">
          <div className="word-letter">
           {
            words.map((letter,index) => {
              if(currentIndexLetter.includes(index)){
                return(<Word word={letter} isFound="Matched" key={index} />)       
              }else{
                  return(<Word word={letter} isFound="notFound" key={index} />)       
              }

             })
           }
          </div>
          <div className="select-letter">
            <div className="line-1">
              <ButtonLetter letter="a" key="a" onClick={this.handleBtnClick} />
              <ButtonLetter letter="b" key="b" onClick={this.handleBtnClick} />
              <ButtonLetter letter="c" key="c" onClick={this.handleBtnClick} />
              <ButtonLetter letter="d" key="d" onClick={this.handleBtnClick} />
              <ButtonLetter letter="e" key="e" onClick={this.handleBtnClick} />
              <ButtonLetter letter="f" key="f" onClick={this.handleBtnClick} />
              <ButtonLetter letter="g" key="g" onClick={this.handleBtnClick} />
              <ButtonLetter letter="h" key="h" onClick={this.handleBtnClick} />
              <ButtonLetter letter="i" key="i" onClick={this.handleBtnClick} />

            </div>
            <div className="line-2">
              <ButtonLetter letter="j" key="j" onClick={this.handleBtnClick} />
              <ButtonLetter letter="k" key="k" onClick={this.handleBtnClick} />
              <ButtonLetter letter="l" key="l" onClick={this.handleBtnClick} />
              <ButtonLetter letter="m" key="m" onClick={this.handleBtnClick} />
              <ButtonLetter letter="n" key="n" onClick={this.handleBtnClick} />
              <ButtonLetter letter="o" key="o" onClick={this.handleBtnClick} />
              <ButtonLetter letter="p" key="p" onClick={this.handleBtnClick} />
              <ButtonLetter letter="q" key="q" onClick={this.handleBtnClick} />
              <ButtonLetter letter="r" key="r" onClick={this.handleBtnClick} />
            </div>
            <div className="line-3">
              <ButtonLetter letter="s" key="s" onClick={this.handleBtnClick} />
              <ButtonLetter letter="t" key="t" onClick={this.handleBtnClick} />
              <ButtonLetter letter="u" key="u" onClick={this.handleBtnClick} />
              <ButtonLetter letter="v" key="v" onClick={this.handleBtnClick} />
              <ButtonLetter letter="w" key="w" onClick={this.handleBtnClick} />
              <ButtonLetter letter="x" key="x" onClick={this.handleBtnClick} />
              <ButtonLetter letter="y" key="y" onClick={this.handleBtnClick} />
              <ButtonLetter letter="z" key="z" onClick={this.handleBtnClick} />
            </div>
          </div>
          <div className="console">
            <h2>Il vous reste: {MAX_TRY - nbTryError} essais</h2>
            
            <div className="image-person">
              <img src={`img/img${nbTryError}.png`} alt="image"/>
            </div>
            <button onClick={this.newGame}>Nouvelle partie</button>
          </div>
        </section>
        <div className="result">
        {
          finishGame ? (
            <div className="result-box">
            <h1>Vous avez perdu</h1>
            <h2>le mot est: {words.join('')} </h2>
            </div>
            ) : (
              <div className="result-box">
              </div>
            )

        }
        </div>
      </div>
    );
  }
}

export default App;
