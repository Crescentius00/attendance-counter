let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count = count + 1
    countEl.textContent = count;
}

function save(){
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = 0;
    alert("Saved successfully!");
}

function clearEntries(){
   saveEl.textContent = "Previous Entries: ";
   count = 0;
   countEl.textContent = 0;
   alert("Previous entries cleared!");
}