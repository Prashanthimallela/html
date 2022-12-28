let array=[]
function validation(){
  var usid = document.getElementById("userid").value;
  var usname=document.getElementById("name").value;
  var password=document.getElementById("psw").value;
  var repeatpassword=document.getElementById("rpsw").value;
  var Dob=document.getElementById("doj").value;
  var add=document.getElementById("add").value;
  var edqifs=document.getElementById("item").value;
  var hobb =document.getElementById("hbs").value;
  var listqif=document.getElementById("cert").value;
   array.push(usname)
   array.push(Dob)
   array.push(add)
   array.push(edqifs)
   array.push(hobb)
   array.push(listqif)
   var output="usname:-"+array[0]+"<br>"+"Dob:-"+array[1]+"<br>"+"add:-"+array[2]+"<br>"+"edqifs:-"+array[3]+"<br>"+"hobb:-"+array[4]+"<br>"+"listqif:-"+array[5]+"<br>"
   localStorage.setItem("output1",output)
  if(password!=repeatpassword){
    alert("notmatched")
    return false;
  }
  else{
    return true;
  }





}
function generateUserId() {
  var usid = (Math.pow(10,8));
  var userid=Math.trunc(parseInt(usid)*Math.random());
  document.getElementById("userid").value =userid;
}
window.onload = generateUserId;


