
     let arr=[]
     var list=document.getElementById("item").value
        function ADD() {
            var list=document.getElementById("item").value
            arr.push(list);
            document.getElementById("update").innerHTML=arr;
            localStorage.setItem('list',arr);
            
        }
        