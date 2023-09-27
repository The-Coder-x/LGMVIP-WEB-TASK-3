let screen = document.getElementById('display_container');
let buttons = document.querySelectorAll('button');
let screenValue = '';
function fact(buttonText) {
  if (buttonText < 0) 
        return -1;
  else if (buttonText == 0) 
      return 1;
  else {
      return (buttonText * fact(buttonText - 1));
  }
}
for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
       
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value  = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value  = screenValue;      
        }
        else if(buttonText == '⌫'){
            screenValue = screenValue.toString().slice(0,-1);
            screen.value  = screenValue;  
        }
        else if(buttonText == '÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == 'sin'){
            buttonText = "Math.sin(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == 'cos'){
            buttonText = "Math.cos(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == 'tan'){
            buttonText = "Math.tan(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == '√'){
            buttonText = "Math.sqrt(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == '3√'){
            buttonText = "Math.cbrt(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == '^'){
            buttonText = "Math.pow(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == 'π'){
            buttonText = "Math.PI * ";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == 'e'){
            buttonText = "Math.exp(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == 'log'){
            buttonText = "Math.log(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        else if(buttonText == '!'){
            buttonText = "fact(";
            screenValue += buttonText;
            screen.value  = screenValue;

          }
        
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
       
        else{
            screenValue += buttonText;
            screen.value  = screenValue;
        }

    })
}



const togglebtn = document.getElementsByClassName("toggle_btn")[0];

const navbarlinks = document.getElementsByClassName('navbar-links')[0];
const child_container = document.getElementsByClassName("child_container")[0];



togglebtn.addEventListener('click' , () =>{
    navbarlinks.classList.toggle('active');
    child_container.classList.toggle('active');

})