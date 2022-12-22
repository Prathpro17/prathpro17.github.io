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



const init_cursor = (options) => {

    let pointer = document.querySelector('.pointer-dot');
    let ring = document.querySelector('.pointer-ring');

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let isHover = false
    let mouseDown = false

    let cursor_color = `rgb(100, 217, 236)`

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window['trace'] = trace

    const getOption = (option) => {
        _ringSize = 10;
        let defaultObj = {
            pointerColor: cursor_color,
            ringSize: _ringSize,
            ringClickSize: (options['ringSize'] || _ringSize) - 3,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        if (document.querySelector('button:hover')) {
            pointer.style.border = `7px solid ${cursor_color}`;
            pointer.style.top = '0px';
            pointer.style.left = '0px';
            isHover = true
        } else {
            pointer.style.border = `2px solid ${cursor_color}`;
            ring.style.padding = '10px';
            pointer.style.top = '5px';
            pointer.style.left = '5px';
            isHover = false
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - getOption('ringSize')}px, ${ringY - getOption('ringSize')}px)`;

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
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

