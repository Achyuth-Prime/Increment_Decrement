const countValue = document.getElementById('counter');

document.querySelector(".negbut").addEventListener("click",decrement);

document.querySelector(".posbut").addEventListener("click",increment);



function increment(){
    // get the vlue from UI
    let value = parseInt(countValue.textContent);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.textContent = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.textContent);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.textContent = value;
};