'use strict'
let candyform= document.getElementById("candyform");
let ulEl =document.getElementById("list")
let candy=[]

function Candy (candyType,quantity,location) {

    this.candyType=candyType;
    this.quantity=quantity;
    this.location=location
    candy.push(this);
}
function settingItems(){
    let data= JSON.stringify(candy);
    localStorage.setItem('candy',data);
}
function gettingItems() {
    let stringObj = localStorage.getItem('candy');

    let normalObj = JSON.parse(stringObj);
    

    if (normalObj !== null) {
        candy = normalObj;
    }
    render();
}

// function render(){
//     ulEl.textContent='';
//     for (let i= 0; i< candy.length; i++) {
//         let liEl=document.createElement('li');
//         liEl.textContent=`you choose our lovely candy${candy[i].candyType} and ordered ${candy[i].quantity} and we will send it to our location ${candy[i].location}`}
//        ulEl.appendChild(liEl);
//     }

function render() {
    ulEl.textContent = '';
    for (let i = 0; i < candy.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${candy[i].candyType} ordered ${candy[i].quantity} cups ${candy[i].location}`;
        ulEl.appendChild(liEl);
    }
}
// render();
function handelSubmit (event){
    event.preventDefault();
    let candyType=event.target.candyType.value;
    let quantity=event.target.quantity.value;
    let location=event.target.location.value;
 new Candy(candyType,quantity,location);  
 settingItems();

 render(); 
}
gettingItems();

candyform.addEventListener('submit',handelSubmit)