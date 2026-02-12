welcomeMessage()

function welcomeMessage(){
    let name = prompt("What Is Your Name....")
    console.log('User Name :',name)
   if(name == null || name.trim() == ""){
    name = "Guest"
   }
   document.getElementById('welcome-speech').innerHTML = (`Hello, ${name} Welcome To My Website`)
    
}

function validasiForm(){
    
}