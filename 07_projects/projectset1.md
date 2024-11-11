# Project related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-q63sfs?file=1-colorChanger%2Findex.html)

# Solution codes


## project 1
```javascript
 console.log("Adarsh Chaudhary");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```

## project 2

``` javascript

const form=document.querySelector('form');
// const height=document.querySelector('height')

form.addEventListener('submit',function(e){
  e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
      result.innerHTML="please give height value";
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
      result.innerHTML="please give weight value";
    }
    else{
      const bmi=(weight/((height*height)/10000)).toFixed(2);
      let message;
      if(bmi<18.6){
        message="You are Under Weight";
      }
      else if(bmi>=18.6 && bmi<=24.9){
        message="You are in Normal Range";
      }
      else{
        message="You are OverWeight"
      }
      result.innerHTML=`<span>${bmi}</span><br>${message}`;

    }
})

```

## project 3
``` javascript

const center=document.querySelector('.center');
// const clock=document.querySelector('#clock');
const clock=document.getElementById('clock');

// const d=new Date();
// const time=d.toLocaleTimeString();
// const hour=d.getHours();
// const minutes=d.getMinutes();
// const seconds=d.getSeconds();
// clock.addEventListener('click',function(e){
//     e.preventDefault();
//     clock.innerHTML=`${time}`;
//     // clock.innerHTML=`${hour}:${minutes}:${seconds}`;
// })

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)
// console.log(d.getSeconds());
```

## project 4
```javascript
 let randomint=(parseInt(Math.random()*100+1));

const submit=document.querySelector('#subt');

const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuesses=1;
let playgame=true;

if(playgame){
   submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value)
        validateGuess(guess);
   })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert(`Please Enter a valid number`);
    }
    else if(guess<1){
      alert(`Enter a number greater than 1`);
    }
    else if(guess>100){
      alert(`Enter a number less than 100`);
    }
    else{
      prevGuess.push(guess);
      if(numGuesses>10){
        displayGuess(guess);
        displayMessage(`No. of attemps over. Random number was ${randomint}`);
        endGame();
      }
      else{
        displayGuess(guess);
        // numGuesses++;
        checkGuess(guess);
      }
    }
}

function checkGuess(guess){
    if(guess===randomint){
      displayMessage(`Wow you guessed it.`);
      alert('WON');
    }
    else if(guess>randomint){
      displayMessage(`Number is Too high.`)
    }
    else if(guess<randomint){
      displayMessage(`Number is Too low.`);
    }
}

function displayGuess(guess){
    userinput.value='';
    guessSlot.innerHTML+=`${guess},`
    numGuesses++;
    remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(message){
    lowOrhigh.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
  userinput.value='';
  userinput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML= `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playgame=false;
  newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
      randomint=(parseInt(Math.random()*100+1));
      prevGuess=[]
      numGuesses=1;
      guessSlot.innerHTML='';
      remaining.innerHTML=`${11-numGuesses}`;
      userinput.removeAttribute('disabled');
      startOver.removeChild(p)
      playgame=true;
    })
}



```