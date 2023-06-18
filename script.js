const canvas = document.querySelector('.canvas');
const increaseEle = document.querySelector('#increase');
const decreaseEle = document.querySelector('#decrease');
const colorEle = document.querySelector('#color');
const brushSizeEle = document.querySelector('#brush-size');
const clear = document.querySelector('#clear');

const ctx = canvas.getContext('2d');

let color = 'black';
let size = 1;
let x = 0;
let y = 0;
let isPressed = false;

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    console.log(x, y);
}

function drawLine(moveX, moveY, x, y) {
    ctx.beginPath();
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = (size * 2);
    ctx.stroke();
}


canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x1 = e.offsetX;
        const y1 = e.offsetY;
        drawCircle(x1, y1);
        drawLine(x, y, x1, y1);
        x = x1;
        y = y1;
    }
});


increaseEle.addEventListener('click', () => {
    size = size + 1;
    if (size > 10) {
        size = 10;
    }
    brushSizeEle.innerHTML = size;
});

decreaseEle.addEventListener('click', () => {
    size = size - 1;

    if (size < 1) {
        size = 1;
    }

    brushSizeEle.innerHTML = size;
});

colorEle.addEventListener('change', (e) => {
    color = e.target.value;
});

clear.addEventListener('click', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
