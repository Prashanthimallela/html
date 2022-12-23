let employee ={
empId:101,
empName:'ramesh',
empDesignation:'manager',
great:function(){
    console.log('welcome'+this.empName)

}
}
function student()
//console.log(employee.empDesignation)
//console.log(employee['empName'])
employee.salary=1000
console.log(employee)