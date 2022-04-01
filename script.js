'use strict';
//func();
//creaating input using dom
// let input=document.createElement('input')
// input.type="text";
// input.setAttribute('id','input')

var value=["A Game of Thrones","A Clash of Kings",
"A Storm of Swords","The Hedge Knight",
"A Feast for Crows","The Sworn Sword","The Mystery Knigh",
"A Dance with Dragons","The Princess and the Queen",
"The Rogue Prince"]
let input=document.createElement('select')
//input.type="text";
input.setAttribute('id','input')
document.body.appendChild(input)
for(let val of value){
    var option=document.createElement('option');
    option.value=val;
    option.text=val;
    //option.value=val;
    // console.log(option);
    // option.text=val.charAt(0)+val.slice(1);
    //console.log(option.text)
input.appendChild(option);}
document.body.appendChild(input);
//creating a button with dom
let button=document.createElement('button')
button.addEventListener("click",func);
button.innerHTML="search";
document.body.appendChild(button)
//creating a table
let table=document.createElement('table');
table.setAttribute('id', 'table')
document.body.append(table);
let tabledata=""
//asyn,await,fetch,try,catch usage function
async function func(){
    try{
    let data=await fetch("https://www.anapioficeandfire.com/api/books");
    //console.log(data);
    let res=await data.json();
    //console.log(res);
    //creating thead and tbody for table
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.append(thead,tbody);
    let tr0 = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.innerHTML = 'Name';
    let th2 = document.createElement('th');
    th2.innerHTML = 'Author';
    let th3 = document.createElement('th');
    th3.innerHTML = 'ISBN';
    let th4 = document.createElement('th');
    th4.innerHTML = 'Number of Pages';
    let th5 = document.createElement('th');
    th5.innerHTML = 'Publisher';
    let th6 = document.createElement('th');
    th6.innerHTML = 'Released Date';
    let th7 = document.createElement('th');
    th7.innerHTML = 'Characters';
    //putting values in the table
    res.map((values)=>{
        tabledata += `<tr>
        <td>${values.name}</td>
        <td>${values.authors}</td>
        <td>${values.isbn}</td>
        <td>${values.numberOfPages}</td>
        <td>${values.publisher}</td>
        <td>${values.released}</td>
        <td>${values.Characters}</td>
        </tr>`;
    })
   
    //appending the values to the thead and tbody
    thead.append(tr0)
    tr0.append(th1,th2,th3,th4,th5,th6,th7)
    tbody.innerHTML=(tabledata)
    let inputval=input.value;
    //console.log(inputval)
    //iterating through the table for the input value
    let tr=tbody.getElementsByTagName("tr")
    //console.log(tr)
    for(let i=0; i<10; i++){
        let td1=tr[i].getElementsByTagName("td")[0];
        let td2=tr[i].getElementsByTagName("td")[1];
        let td3=tr[i].getElementsByTagName("td")[2];
        let td4=tr[i].getElementsByTagName("td")[3];
        let td5=tr[i].getElementsByTagName("td")[4];
        let td6=tr[i].getElementsByTagName("td")[5];
        let td7=tr[i].getElementsByTagName("td")[6];
        //console.log(td1,td2,td3,td4,td5,td6,td7)
        if(td1||td2||td3||td4||td5||td6||td7){
            let text1=td1.innerHTML||td1.textContent;
            let text2=td2.innerHTML||td2.textContent;
            let text3=td3.innerHTML||td3.textContent;
            let text4=td4.innerHTML||td4.textContent;
            let text5=td5.innerHTML||td5.textContent;
            let text6=td6.innerHTML||td6.textContent;
            let text7=td7.innerHTML||td7.textContent;
            //console.log(text1,text2,text3,text4,text5,text6,text7)
            if(text1==inputval||text2==inputval||text3==inputval
                ||text4==inputval
                ||text5==inputval||text6==inputval||text7==inputval){
                    //showing output for the input value
                    alert(`name:${td1.textContent}
Author:${td2.textContent}
ISBN:${td3.textContent}
No.of.pages:${td4.textContent}
Publisher:${td5.textContent}
Released Date:${td6.textContent}
Characters:${td7.textContent}`)
document.getElementById("input").value="";
                }
        }
        
        
    }
}catch(error){
    foo();
}
    }
  
    function foo(){
        return new Promise((resolve,reject)=>reject("this is rejetcted"));
    }