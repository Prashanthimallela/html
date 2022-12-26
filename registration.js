
function validation(){
  var usid = document.registration.userid;
  var usname=document.registration.name;
  var password=document.registration.password;
  var repeatpassword=document.registration.repeatpassword;
  var Dob=document.registration.DateofBirth;
  var add=document.registration.Address;
  var edqifs=document.registration.EducationalQualification;
  var hobb =document.registration.Hobbies;
  var listqif=document.registration.listofCertifications;
 
function usid_validation(usid,ax,ay)
{
  var usid_len = usid.value.length;
  if (usid_len == 0 || usid_len >= ay || usid_len < ax)
  {
   alert("User Id should not be empty / length  between "+ax+" to "+ay);
    usid.focus();
  return false;
  }
  return true;
  }
  
  {
    if(usid_validation(usid,5,10))
    {
      if(allLetter(usid))
      {

      }
    }
  }


function usname_validation(usname,ax,ay){
  var usname_len = usname.value.length;
  if (usname_len == 0 || usname_len >= ay || usname_len < ax)
  {

    alert("User name should not be empty / length  between "+ax+" to "+ay);
    usname.focus();
  return false;
  }
  return true;
  }
  {
  if(usname_validation(usname,5,10))
    {
      if(allLetter(usname))
      {

      }
    }
  }

 /* function password_validation(password,ax,ay){
    var password_len = password.value.length;
    if (password_len == 0 || password_len >= ay || password_len < ax)
    {
  
      alert("user password should not be empty / length  between "+ax+" to "+ay);
      password.focus();
     return false;
    }
     return true;
    }
    {
    if(password_validation(password,5,10))
      {
        if(allLetter(password))
        {
        }
      }
    }

  }*/
  function Password(inputtxt) 
{ 
var password= " /^[A-Za-z]\w{7,14}$/";
if(inputtxt.value.match(password)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}
}


