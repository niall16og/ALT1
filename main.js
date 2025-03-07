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

const sidebar = document.querySelector("aside");

let menuStatus;

window.onload = function() {
                countWords();
                menuClose();
            }

const button = document.querySelector(".menu button");

function menuToggle() {
    if (menuStatus === false) {
        menuStatus = true;
        menuOpen();
    } else {
        menuStatus = false;
        menuClose();
    }
}

function menuOpen() {
    sidebar.classList.add('show');
    button.style.transform = "rotate(180deg)";
    button.style.transition = "transform 0.3s ease";
}

function menuClose() {
    sidebar.classList.remove('show');
    button.style.transform = "rotate(0deg)";
    button.style.transition = "transform 0.3s ease";
}

// Initial state
if (menuStatus === false) {
    menuClose();
} else if (menuStatus === true) {
    menuOpen();
} else {
    menuClose();
}
