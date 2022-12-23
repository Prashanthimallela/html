

function empolyee( Name,EmpId,DateOfJoining,HoursWorked,Designation){
    this.Name=Name;
    this.EmpId=EmpId;
    this.DateOfJoining=DateOfJoining;
    this.HoursWorked=HoursWorked;
    this.Designation=Designation;

}
function validateForm(){
    var Name1 =document.myForm.user1.value;
    var EmpId1= document.myForm.EmpI.value;
    var DateOfJoining1=document.myForm.Doj.value;
    var HoursWorked1=document.myForm.HoursWorked.value;
    var Designation1=document.myForm.Designation.value;
    if(Name1==''){
        alert("Name is required**")
        return false;
   
       }
       else if(EmpId1==''){
           alert("EmpId is required**")
           return false;
   
       }
       else if(EmpId1==''){
        alert("EmpId is required**")
        return false;
       }
        else if(DateOfJoining1==''){
            alert("DateOfJoining is required**")
            return false;
        }
            else if(HoursWorked1==''){
                alert("HoursWorked is required**")
                return false;
            }
            else if(Designation1==''){
                alert("Designation is required**")
                return false;
           }
       else{
           return Employee();
       }

}
    

    function Employee(){
    var Employee=NewEmployee(Name,EmpId,DateOfJoining,HoursWorked,Designation)
    var Name =document.getElementById("Name").value;
    var EmpId= parseInt(document.getElementById("EmpId").value);
    var DateOfJoining=document.getElementById("DateOfJoining").value;
    var HoursWorked=(document.getElementById("HoursWorked").value);
    var Designation=document.getElementById("Designation").value;


    if(Empolyee.designation='manager'){
       var salary=Empolyee.HoursWorked*90;

    }
    
    else if(Empolyee.designation='Consultant')
    {
        var salary=Empolyee.HoursWorked*80;
    }

    else if(Empolyee.designation='Trainee')
    {
        var salary=Empolyee.HoursWorked*70;
    }
    var result=Employee.Name+"who is a"+Employee.Designation+"will get $"+salary+"salary"
    localStorage.setItem('Employee',result)
        
        }
    
