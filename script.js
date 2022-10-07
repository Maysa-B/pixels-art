window.onload = function () {
    let selectColor = document.getElementById('cor1');
    selectColor.className = 'color selected';
}

function createFirstBoard() {
    const pai = document.getElementById('pixel-board');

    for (let id = 1; id <= 25; id += 1) {
        const criarLi = document.createElement('div');
        criarLi.className = 'pixel';

        if (id % 5 == 0) {
            pai.appendChild(criarLi);
            let criarBr = document.createElement('br');
            criarBr.className = 'brs';
            pai.appendChild(criarBr);
        } else {
            pai.appendChild(criarLi);
        }
    }
}

createFirstBoard()

function createColor() {
    let pai = document.getElementById('color-palette');
    let cor1 = document.createElement('div');
    cor1.style.backgroundColor = 'black';
    cor1.id = 'cor1';
    cor1.className = 'color';
    pai.appendChild(cor1);

    for (let id = 2; id <= 4; id += 1) {
        let newColor = document.createElement('div');
        newColor.id = 'cor' + id;
        newColor.className = 'color';

        function gerar_cor() {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        return `rgb(${r}, ${g}, ${b})`;
        }

        newColor.style.backgroundColor = gerar_cor();
        pai.appendChild(newColor);
    }
}

createColor();


const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');

cor1.addEventListener('click', mudaClass);
cor2.addEventListener('click', mudaClass);
cor3.addEventListener('click', mudaClass);
cor4.addEventListener('click', mudaClass);

function mudaClass(event) {
    let colors = document.getElementsByClassName('color');

    for (let id = 0; id < colors.length; id += 1) {
        let corAtual = colors[id];

        if (corAtual.className == 'color selected') {
            corAtual.className = 'color';
        } else {
            corAtual = 'color';
        }
    }

    event.target.className = 'color selected';
}

function addListener() {
    let pixels = document.getElementsByClassName('pixel');

    for (let id = 0; id < pixels.length; id += 1) {
        pixels[id].addEventListener('click', changeColor);
    }
}

addListener();

function changeColor(event) {
    let newColor = document.getElementsByClassName('selected')[0];
    let theCor = newColor.style.backgroundColor;
    console.log(theCor);

    let pixel = event.target;

    pixel.style.backgroundColor = theCor;
}

const botaoClear = document.getElementById('clear-board');
botaoClear.addEventListener('click', clear);

function clear() {
    let pixels = document.getElementsByClassName('pixel');

    for (let id = 0; id < pixels.length; id += 1) {
        let pixel = pixels[id];

        pixel.style.backgroundColor = 'white';
    }
}

const botaoInputPixel = document.getElementById('generate-board');
botaoInputPixel.addEventListener('click', createBoard);

function createBoard() {
    const pai = document.getElementById('pixel-board');
    const input = document.getElementById('board-size').value;
    let pixelscriados = 0;
    let number = 0;

    if (input < 5) {
        pixelscriados = 5 * 5;
        number = 5;
    } else if (input > 50) {
        pixelscriados = 50 * 50;
        number = 50;
    } else {
        pixelscriados = input * input;
        number = input;
    }

    if (input == '') {
        alert('Board Inválido!');
    } else {
        deleteBoard();

        for (let id = 1; id <= pixelscriados; id += 1) {
            const criarLi = document.createElement('div');
            criarLi.className = 'pixel';

            if (input <= 30) {

            if (id % number == 0) {
                pai.appendChild(criarLi);
                let criarBr = document.createElement('br');
                criarBr.className = 'brs';
                pai.appendChild(criarBr);
            } else {
                pai.appendChild(criarLi);
            }
        } else {
            if (id % number == 0) {
                criarLi.style.width = '23px';
                criarLi.style.height = '23px';
                pai.appendChild(criarLi);
                let criarBr = document.createElement('br');
                criarBr.className = 'brs';
                pai.appendChild(criarBr);
            } else {
                criarLi.style.width = '23px';
                criarLi.style.height = '23px';
                pai.appendChild(criarLi);
            }
        }

        }
    }

    addListener();
}

function deleteBoard() {
    const deletar = document.querySelectorAll('.pixel');
    const alsoDelete = document.querySelectorAll('.brs');

    for (let id = 0; id < deletar.length; id += 1) {
        deletar[id].remove();
    }

    for (let id = 0; id < alsoDelete.length; id += 1) {
        alsoDelete[id].remove();
    }
}

//para o requisito 12, pesquisei sobre como gerar cores aleatória e esse site me chamou atenção: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

