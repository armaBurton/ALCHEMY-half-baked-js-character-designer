// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
// const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const report = document.getElementById(`report`);

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headChange = 0,
    middleChange = 0,
    bottomChange = 0;

let counterArr = [];
// let chatchPhrase = ``;
let catchPhraseArr = [];
let headDropValue = headDropdown[0].value;
let middleDropValue = middleDropdown[0].value;
let bottomDropValue = bottomDropdown[0].value;

window.addEventListener('load', () => {
    let headImg = `<img id="headPic" src="./assets/${headDropValue}-head.png" />`; 
    headEl.innerHTML = headImg;
    let headCounter = document.createElement(`p`);
    headCounter.innerHTML = `You have changed the head <span class="bolder">${headChange}</span> times.`;
    let middleImg = `<img id="middlePic" src="./assets/${middleDropValue}-middle.png" />`; 
    middleEl.innerHTML = middleImg;
    let middleCounter = document.createElement(`p`);
    middleCounter.innerHTML = `You have changed the middle <span class="bolder">${middleChange}</span> times.`;
    let bottomImg = `<img id="bottomPic" src="./assets/${bottomDropValue}-pants.png" />`; 
    bottomEl.innerHTML = bottomImg;
    let bottomCounter = document.createElement(`p`);
    bottomCounter.innerHTML = `You have changed the bottom <span class="bolder">${bottomChange}</span> times.`;
    counterArr[0] = headCounter;
    counterArr[1] = middleCounter;
    counterArr[2] = bottomCounter;
    report.append(headCounter);
    report.append(middleCounter);
    report.append(bottomCounter);
    catchphrasesEl.textContent = `...`;
});

headDropdown.addEventListener('change', () => {
    counterArr[0] = ``;
    report.textContent = ``;
    // get the value of the head dropdown
    headDropValue = headDropdown.value;
    // increment the head change count state
    headChange++;
    // update the dom for the head
    let headImg = `<img id="headPic" src="./assets/${headDropValue}-head.png" />`; 
    headEl.innerHTML = headImg;

    // update the stats to show the new count
    let headCounter = document.createElement(`p`);
    headCounter.innerHTML = `You have changed the head <span class="bolder">${headChange}</span> times.`;
    counterArr[0] = headCounter;
    for (let i of counterArr){
        report.appendChild(i);
    }
    // headCounter.textContent = ' ';
});


middleDropdown.addEventListener('change', () => {
    counterArr[1] = ``;
    report.textContent = ``;
    // get the value of the middle dropdown
    middleDropValue = middleDropdown.value;
    // increment the middle change count state
    middleChange++;
    
    // update the dom for the middle
    let middleImg = `<img id="middlePic" src="./assets/${middleDropValue}-middle.png" />`;
    middleEl.innerHTML = middleImg;

    // update the stats to show the new count
    let middleCounter = document.createElement(`p`);
    middleCounter.innerHTML = `You have changed the head <span class="bolder">${middleChange}</span> times.`;
    counterArr[1] = middleCounter;
    for (let i of counterArr){
        report.appendChild(i);
    }
});


bottomDropdown.addEventListener('change', () => {
    counterArr[2] = ``;
    report.textContent = ``;
    // get the value of the bottom dropdown
    bottomDropValue = bottomDropdown.value;
    // increment the bottom change count state
    bottomChange++;
    // update the dom for the bottom
    let bottomIMG = `<img id="middlePic" src="./assets/${bottomDropValue}-pants.png" />`;
    bottomEl.innerHTML = bottomIMG;
    // update the stats to show the new count
    let bottomCounter = document.createElement(`p`);
    bottomCounter.innerHTML = `You have changed the head <span class="bolder">${bottomChange}</span> times.`;
    counterArr[2] = bottomCounter;
    for (let i of counterArr){
        report.appendChild(i);
    }
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let phrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchPhraseArr.push(phrase);
    // update the dom for the bottom
    displayCatchphrases(catchPhraseArr);
    // catchphrasesEl.innerHTML = catchPhraseArr[catchPhraseArr.length - 1];
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases(arr) {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.innerHTML = ` `;
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    for (let a of arr){
        let p = document.createElement(`p`);
        p.textContent = a;
        catchphrasesEl.append(p);
    }
}
