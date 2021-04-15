let offerBtn = document.getElementById('offerBtn')

offerBtn.addEventListener('click',secondPageFunction)

let firstPageDiv = document.querySelector('.front-page');
let secondPageDiv = document.querySelector('.secondPage');
function secondPageFunction(){
    firstPageDiv.style.display='none';
    secondPageDiv.style.display = 'block';
}

let backBtn = document.getElementById("backBtn");

backBtn.addEventListener('click',firstPageFunction)

function firstPageFunction(){
    secondPageDiv.style.display = 'none';
    firstPageDiv.style.display='block';
}


let thirdPageDiv = document.querySelector('.thirdPage')

thirdPageDiv.addEventListener('click',checkDivision)

function checkDivision(e){
    let text = e.target.src
    text = text.slice(40,text.length-4).replace("_"," ");
    console.log(text)
    document.getElementById('temp').innerHTML = text;
}

