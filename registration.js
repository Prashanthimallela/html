function validation(){
    var name=document.registration.user1.value
    var password=document.registration.pwd1.value
    var RepeatPassword=document.registration.repwd1.value
    var address=document.registration.doj1.value
    var Education=document.registration.edqfs1.value
    if(name==""|| name.length<=6){
        alert("enter the username atleast of 6 characters ")

    }
    else if(password){
    }
    else if(dob==""){
        alert("enter the date of birth")
    }
    else if(address==""){
        alert("enter the education qulifications")
    }

}