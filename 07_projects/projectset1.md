# Project related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-q63sfs?file=1-colorChanger%2Findex.html)

# Solution code


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