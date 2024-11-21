let name=document.getElementById("userName")
let email=document.getElementById("userEmail")
let pswd=document.getElementById("pswd")
let submitBtn=document.getElementById("btn")
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(name.value!=""&&email.value!=""&&pswd.value!=""){
    const nameValue=name.value;
    const emailValue=email.value;
    const pswdValue=pswd.value;
    localStorage.setItem("name",nameValue)
    localStorage.setItem("email",emailValue)
    localStorage.setItem("pswd",pswdValue)
    alert("Sign Up done successfully!!!!!  ")
    setTimeout(()=>{
        window.location.href="login.html"
    },2000)

    }else{
        alert("please fill the correct details!!!!")
    }
    })
