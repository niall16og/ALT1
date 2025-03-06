function countWords(){
    const selectDiv = document.querySelector("main");
    const text = selectDiv.innerText;
    const words = text.trim().split(/\s+/);
    let wordCount = words.filter(word => word.length > 0).length;
    console.log(wordCount);
    document.querySelector(".word-count").textContent = wordCount;


const pageName = window.location.pathname.split("/").pop();

let wordCounts = JSON.parse(localStorage.getItem("wordCounts")) || {};
wordCounts[pageName] = wordCount;
localStorage.setItem("wordCounts", JSON.stringify(wordCounts));

console.log(`Stored word count for ${pageName}: ${wordCount}`);
}

window.onload = countWords;

/*
function displayWordCounts() {
    const wordCounts = JSON.parse(localStorage.getItem("wordCounts")) || {};
    
    const outputDiv = document.getElementById("wordCountsDisplay");
    outputDiv.innerHTML = "<h1>Word Counts for All Pages</h1>";
    let totalCount;
    
    if (Object.keys(wordCounts).length === 0) {
        outputDiv.innerHTML += "<p>No word counts available yet. Visit other pages first!</p>";
    } else {
        for(const [page, count] of Object.entries(wordCounts)) {
            outputDiv.innerHTML += `<p><strong>${page}</strong>: ${count} words</p>`;
            totalCount  += count;
        }
    }
    
    outputDiv.innerHTML += `<hr><p><b>Total</b>: ${totalCount} words</p>`;
}

window.onload = displayWordCounts;

function clearWordCounts() {
    localStorage.removeItem("wordCounts");
    alert("Word Counts Cleared!");
    location.reload();
}
*/