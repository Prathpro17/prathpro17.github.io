let div = document.getElementById("main-font-div");
let divText = div.getAttribute('data-text');

for (let i = 0; i < divText.length; i++) {
    var span = document.createElement('span');
    span.style.animationDelay = `${i * (200 - (i * (divText.length / 2)))}ms`
    span.innerHTML = divText[i].replace(' ', '\u2002')
    div.appendChild(span);
}


for (let i = 1; i < 6; i++) {
    try {
        document.getElementById(`bottom-btn-${i}-div`).style.animationDelay = `${(i * 100) + 2700}ms`;
    }
    catch(err) {
        if (err.name == 'TypeError') {}
        else {
            console.log(`ERROR (catched): ${err}`)
        }
    }
}



function changeButtonColor(index) {
    try {
        for (let i = 1; i < 6; i++) {
            if (i != parseInt(index)) {
                document.getElementById(`bottom-btn-${i}`).style.opacity = 0.5;
            }
        }
    }
    catch(err) {
        if (err.name == 'TypeError') {}
        else {
            console.log(`ERROR (catched): ${err}`)
        }
    }
}


function resetButtonColor() {
    try {
        for (let i = 1; i < 6; i++) {
            document.getElementById(`bottom-btn-${i}`).style.opacity = 1;
        }
    }
    catch(err) {
        if (err.name == 'TypeError') {}
        else {
            console.log(`ERROR (catched): ${err}`)
        }
    }
}


function redirect(website) {
    window.location.href = `http://www.${website}.com`
}
