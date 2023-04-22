let data = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
     {id:3, name:"karen", age:"19",profession:"admin"},
    ];

   let box;
 data.forEach(function(el){
    
     box = document.createElement('div');
    let display_data =
    `
    <div class ="box"> ${el.id} Name: ${el.name} Profession:${el.profession} Age:${el.age}</div>
`
box.innerHTML = display_data;
cards.append(box);
});
function filter_data(){
  
   let profession = document.getElementById("profesion");
    let select = document.getElementById("select").value;
   
   let newArray =  data.filter(function(el){
    box.innerHTML = "";
        return el.profession === "admin";         
    })
    
    newArray = box;;
   
    if(select === "developer"){
        data.filter(function(el){
         
        if(el.profession === "developer"){
            box.innerHTML =  `<div class ="box"> ${el.id} Name: ${el.name} Profession:${el.profession} Age:${el.age}</div>`;
            console.log(el);
            box.innerHTML = "";
           
        }            
    })
    }
}
function Add_data(){
event.preventDefault();
let name = document.querySelector("#name").value;
let profesion = document.querySelector("#profession").value;
let age =  document.querySelector("#age").value;
let box = document.createElement('div');
let ol = document.createElement('ol');
const display_data = `<ol class = "box">
    <li> 
     Name: ${name}   Profession:${profesion}   Age:${age}
    </li>
    </ol>`;
box.innerHTML = display_data;
cards.append(box);

}