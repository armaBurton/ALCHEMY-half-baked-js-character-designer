import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const catchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const report = document.getElementById(`report`);

let headChange = 0,
    middleChange = 0,
    bottomChange = 0;

let catchPhraseArr = [];
let headDropValue = headDropdown[0].value;
let middleDropValue = middleDropdown[0].value;
let bottomDropValue = bottomDropdown[0].value;

window.addEventListener('load', () => {
    let headImg = `<img id="headPic" src="./assets/${headDropValue}-head.png" />`; 
    headEl.innerHTML = headImg;
    let middleImg = `<img id="middlePic" src="./assets/${middleDropValue}-middle.png" />`; 
    middleEl.innerHTML = middleImg;
    let bottomImg = `<img id="bottomPic" src="./assets/${bottomDropValue}-pants.png" />`; 
    bottomEl.innerHTML = bottomImg;
    displayStats();
    catchphrasesEl.textContent = `...`;
});

headDropdown.addEventListener('change', () => {
    headDropValue = headDropdown.value;
    headChange++;
    let headImg = `<img id="headPic" src="./assets/${headDropValue}-head.png" />`; 
    headEl.innerHTML = headImg;
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    middleDropValue = middleDropdown.value;
    middleChange++;
    let middleImg = `<img id="middlePic" src="./assets/${middleDropValue}-middle.png" />`;
    middleEl.innerHTML = middleImg;
    displayStats();

});


bottomDropdown.addEventListener('change', () => {
    bottomDropValue = bottomDropdown.value;
    bottomChange++;
    let bottomIMG = `<img id="middlePic" src="./assets/${bottomDropValue}-pants.png" />`;
    bottomEl.innerHTML = bottomIMG;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    let phrase = catchphraseInput.value;
    catchPhraseArr.push(phrase);
    displayCatchphrases(catchPhraseArr);
});

function displayStats() {
    report.textContent = ``;
    const statsString = makeStatsString(headChange, middleChange, bottomChange); // call this function with the correct arguments
    let headCounter = document.createElement(`p`);
    headCounter.innerHTML = `You have changed the head <span class="bolder">${statsString[0]}</span> times.`;
    let middleCounter = document.createElement(`p`);
    middleCounter.innerHTML = `You have changed the middle <span class="bolder">${statsString[1]}</span> times.`;
    let bottomCounter = document.createElement(`p`);
    bottomCounter.innerHTML = `You have changed the bottom <span class="bolder">${statsString[2]}</span> times.`;
    report.append(headCounter, middleCounter, bottomCounter);
}

function displayCatchphrases(arr) {
    catchphrasesEl.innerHTML = ` `;
    for (let a of arr){
        let p = document.createElement(`p`);
        p.textContent = a;
        catchphrasesEl.append(p);
    }
}
