var div = document.getElementById("main-font-div");
const divText = div.getAttribute('data-text');

for (let i = 0; i < divText.length; i++) {
    t = divText.length
    div.innerHTML += `
        <span class = "unselectable" style = "animation-delay:${i * (200 - i * t/2)}ms">
            ${divText[i].replace(' ', '\u2002')}
        </span>
    `;
    //console.log(`${i} ` + i*(300- i*t) +  ` ${(i*(300-i*t)) - ((i-1)*(300-(i-1)*t))}`);
    // i * (300 - i * t)
    console.log((t*1+(i*100-i*2))-(t*1+((i-1)*100-(i-1)*2)))
}


function buttonHover() {
    var div2 = document.getElementById("bottom-icons-div");
    console.log(div2.innerHTML);
}