# Project related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-q63sfs?file=1-colorChanger%2Findex.html)

# Solution codes

## project 6

``` javascript

// generate a random no.

const randomColor=function(){
  const hex='0123456789ABCDEF';
  let color='#';
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}

const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
// const body=document.querySelector('body');
start.addEventListener('click',function(){
  function changebgclr(){
    document.body.style.backgroundColor=randomColor();
  }
  let interval=setInterval(changebgclr,1000);
  stop.addEventListener('click',function(){
    clearInterval(interval);
  })
})



```

## project 5

``` javascript
console.log('Project 5');
const insert=document.querySelector('#insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' '? "Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
    </div>
  `
})

```