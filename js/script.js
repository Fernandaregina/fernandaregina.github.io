// __________Habilidades________________________
const divs = document.querySelectorAll('.section-hab div');

divs.forEach((div) => {
    div.addEventListener('click', () => {
        // Remove a classe 'active' de todas as divs
        divs.forEach((d) => {
            d.classList.remove('active');
        });
        
        // Adiciona a classe 'active' apenas à div clicada
        div.classList.add('active');
        // Define um atraso para mostrar o span após 500 milissegundos (0,5 segundos)
       
    });
});


// __________ Footer________________________


const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

document.getElementById('anoAtual').innerText = anoAtual;

