let div = document.getElementById("main-font-div");
const divText = div.getAttribute('data-text');

for (let i = 0; i < divText.length; i++) {
    t = divText.length
    div.innerHTML += `
        <span class = "unselectable" style = "animation-delay: ${i * (200 - i * t/2)}ms">
            ${divText[i].replace(' ', '\u2002')}
        </span>
    `;
}


for (let i = 1; i < 6; i++) {
    document.getElementById(`bottom-btn-${i}-div`).style.animationDelay = `${i * 100 + 2700}ms`;
}



function changeButtonColor(index) {
    for (let i = 1; i < 6; i++) {
        if (i != parseInt(index)) {
            document.getElementById(`bottom-btn-${i}`).style.opacity = 0.6;
        }
    }
}


function resetButtonColor() {
    for (let i = 1; i < 6; i++) {
        document.getElementById(`bottom-btn-${i}`).style.opacity = 1;
    }
}
