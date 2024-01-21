const countValue =document.querySelector('#counter');
function increment() {
    //get the value
    let value = parseInt(countValue.innerText);
    //update the value
    value=value+1;
     //set the value on UI
    countValue.innerText=value;
};

function decrement(){
    //get the value
    let value = parseInt(countValue.innerText);
    //update the value
    value=value-1;
     //set the value on UI
    countValue.innerText=value;
};

//we can also write
// const decrement = () =>{
//     //get the value
//     let value = parseInt(countValue.innerText);
//     //update the value
//     value=value-1;
//      //set the value on UI
//     countValue.innerText=value;
// };