function  getValue(){
    return null
}
let a,b,c
[a=8,b=5, c =10]=getValue() || [];
console.log("b:"+b)
console.log("c:"+c)
function show(){
    return[
        "Tom",
        "kelvin",
        [
            "red","blue","green"
        ]

    ]
}
[n1, n2,
    [c1, c2, c3]
]=show();
console.log(c2)
let x= 10;
let y= 20;
[x,y]=[y,x]
console.log("X:"+x)
console.log("Y:"+y)

let student={
    fristName:"karl",
    lastName:"Lewis"
}
let{fristName:fName,lastName:lName}=student;
console.log(fName)
let person={
    fristName:'john',
    lastName:'Doe',
    middleName:'c',
    currentAge:28
};
let{fristName,lastName,middleName='',currentAge:age=18}=student;
console.log(middleName)
console.log(age)
console.log(fristName,lastName)

const sales = [ 

      { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
      { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
      { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
      { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
      { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ]; 
    let salesPrice=sales.map((value)=> {
        if(value.discount){
            value.sale=value.original=(value.original*value.discount)
            value.total=value.sale*value.stock
        }
        else{
            value.sale=value.original
            value.total=value.sale*value.stock

        }
        return value
    })
    for(var i=0;i<2;i++){
    console.log(salesPrice[i])}
    /*function computeSales(sales) {

        return sales.map(({ item, stock, original, discount = 0 }) => {
    
          const sale = original * (1 - discount);
    
          const total = sale * stock;
    
          return {
    
            Item: item,
    
            Stock: stock,
    
            Original: original,
    
            Sale: sale,
    
            Total: total
    
          };
    
        });
    
      }
    
     
    
      console.log(computeSales(sales));*/
    
    //create an array of 4 employee objects
    //for empolyee who's age is beyond 60 add a pf field with of salary

    
        var employee1=[
        {name:"prashu",age:69,id:774,salary:10000},
        {name:"supraja",age:21,id:780,salary:20000},
        {name:"srija",age:70,id:775,salary:30000},
        {name:"meghu",age:21,id:787,salary:4000}
        ]
        
       let empobj=employee1.map((value) =>{
        if(value.age>60){
            value.pf=value.salary*0.12
        }
        else{
            value.pf="pf is not applicable"
        }
        return value 
       })
    
    console.log(empobj)