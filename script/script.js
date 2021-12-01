// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const report = document.getElementById(`report`);

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headChange = 0,
    middleChange = 0,
    bottomChange = 0;

let counterArr = [];
let chatchPhrase = ``;
let catchPhraseArr = [];
let headDropValue = headDropdown[0].value;
let middleDropValue = middleDropdown[0].value;
let bottomDropValue = bottomDropdown[0].value;

window.addEventListener('load', () => {
    let headImg = `<img id="headPic" src="./assets/${headDropValue}-head.png" />`; 
    headEl.innerHTML = headImg;
    let headCounter = document.createElement(`p`);
    headCounter.textContent = `You have changed the head ${headChange} times.`;
    let middleImg = `<img id="middlePic" src="./assets/${middleDropValue}-middle.png" />`; 
    middleEl.innerHTML = middleImg;
    let middleCounter = document.createElement(`p`);
    middleCounter.textContent = `You have changed the middle ${middleChange} times.`;
    counterArr[0] = headCounter;
    counterArr[1] = middleCounter;
    report.append(headCounter);
    report.append(middleCounter);
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
    headCounter.textContent = `You have changed the head ${headChange} times.`;
    counterArr[0] = headCounter;
    for (let i of counterArr){
        report.appendChild(i);
    }
    // headCounter.textContent = ' ';
});


middleDropdown.addEventListener('change', () => {
    counterArr[1] = ``;
    report.textContent =``;
    // get the value of the middle dropdown
    middleDropValue = middleDropdown.value;
    // increment the middle change count state
    middleChange++;
    
    // update the dom for the middle
    let middleImg = `<img id="middlePic" src="./assets/${middleDropValue}-middle.png" />`;
    middleEl.innerHTML = middleImg;

    // update the stats to show the new count
    let middleCounter = document.createElement(`p`);
    middleCounter.textContent = `You have changed the head ${middleChange} times.`;
    counterArr[1] = middleCounter;
    for (let i of counterArr){
        report.appendChild(i);
    }
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown

    // increment the bottom change count state
    
    // update the dom for the bottom

    // update the stats to show the new count
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
