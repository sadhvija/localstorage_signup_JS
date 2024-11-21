const loginBtn=document.getElementById("btn")
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let nameStorage=localStorage.getItem("name")
    let pswdStorage=localStorage.getItem("pswd")
    let inputName=document.getElementById("userName").value 
    let inputPswd=document.getElementById("userPswd").value
    if(nameStorage==inputName && pswdStorage==inputPswd){
        alert("login done successfully!!!! ")
        setTimeout(()=>{
            window.location.href="home.html"
        },2000)    
    }else{
        alert("invalid credentials!!!!  ")
    }
    
})