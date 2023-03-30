/* mostrar elementos na tela -> utilizamos querySelector */
const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;

console.log(botaoTrailer);
console.log("mostrar o document", document);
console.log(document.querySelector('.botao-trailer'));

function alternarModal(){
	modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener ('click', () => {
    alternarModal();
    video.setAttribute('src', linkDoVideo);
})

botaoFecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', '');
});



