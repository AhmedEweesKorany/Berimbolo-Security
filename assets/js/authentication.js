let user = document.getElementById('user')
let mail = document.getElementById('mail')
let pass = document.getElementById('pass')
let repass = document.getElementById('repass')
let usern = document.getElementById('usern')
let email = document.getElementById('email')
let passw = document.getElementById('passw')
let repassw = document.getElementById('repassw')
let btn = document.getElementById('sub')

// btn.onclick = function(e){
//     if(usern.value.startsWith("@") || usern.value.includes("#") || usern.value.includes("$")  ){
//         user.innerHTML = "Not allowed to use special character (#,@,$)"
//         e.preventDefault()
//     }else if (usern.value == ""){
//         user.innerHTML = "Please enter the user name "
//     }
//     if(email.value.includes("@gmail.com")){

//     }else{
//         mail.innerHTML= "Invalid Email"
//         e.preventDefault()
//     }
//     if(passw.value.length > 18 ){
//         pass.innerHTML = "Too long length can't be more than 18"
//         e.preventDefault()
//     }else if(passw.value.length < 8){
//         pass.innerHTML = "Too short length can't be less then 8"
//         e.preventDefault()
//     }
//     if(repassw.value != passw.value){
//         repass.innerHTML = "Please write the password correctely"
//     }
// }
let ruser = /\w+\d*\w*/ig
let ruser2= /\d+\w+/ig
let rpassword = /(\w+|\d+)/ig 
let remail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
let rpass =  /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,16}$/;
usern.onblur = function(){
    if(ruser.test(usern.value) === false || ruser2.test(usern.value) === true){
                user.innerHTML = "Not allowed to use special character (#,@,$) or started with number"
                
            }else {
                user.innerHTML = ""
            }     
}
email.onblur = function(){
    if(remail.test(email.value) === false){
        mail.innerHTML = "Please enter an email"
    }else{
        mail.innerHTML = ""
    }
}

passw.onblur = function(){
    if(rpass.test(passw.value) === false){
        pass.innerHTML = "Weak password"
    }else{
        pass.innerHTML = ""
    }
}
repassw.onblur = function(){
    if(passw.value != repassw.value){
        repass.innerHTML = "Password doesn't match"
    }else{
        repass.innerHTML = ""
        flag = true
    }
    if (ruser.test(usern.value)===true && remail.test(email.value)===true  ){
        btn.disabled = false 
    }
}

       