
let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue = '';



for(item of buttons){
    item.addEventListener('click', (e) => {
      buttonText = e.target.innerText;
      console.log('button text is', buttonText);
      if(buttonText == 'x'){
        buttonText = '*'; // buttonText is changed so that eval can understand the function
        screenValue += buttonText;
        screen.value = screenValue;
      }
      else if(buttonText == 'C'){
        screenValue = "";
        screen.value = screenValue;
      }
      else if(buttonText == '='){
        screen.value = eval(screenValue); // eval used to perform mathematical operations
      }
      
        
        
        
      
      else {
        screenValue += buttonText;
        screen.value = screenValue;
      }
    })
  }
  

  
  
  
  