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
    let nama = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    
    function sendMessage() {
        if(nama === "" || email === "" || message === ""){
            alert("Dokumen Tidak Boleh Kosong")
        } else{
            console.log('Nama :',nama)
            console.log('Email :',email)
            console.log('Your Message :',message)
            alert("Terima Kasih Telah Datang Ke Website Saya "+ nama)
        }
        
    }
    sendMessage()
}
