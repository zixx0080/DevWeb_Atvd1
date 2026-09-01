document.addEventListener("DOMContentLoaded", () => { 
  //isso aqui faz meu scpipt ser executado so depois da pagina ser carregada


  // aqui eu estou definindo e pegando minhas variaveis (constantes)
  // id seleciona um elemento HTML e selector uma classe CSS
  const botaoInvocar = document.getElementById("btnInvocar");
  const areaPrincipal = document.querySelector(".principal");
  const gifShenlong = document.getElementById("gifShenlong");
  const videoShenlong = document.getElementById("loopShenlong");

  // isso so me permiti executar o script se todos os elementos existirem na pagina
  if (!botaoInvocar || !areaPrincipal || !gifShenlong || !loopShenlong) return;

  // deixa as midias escondidas ate eu iniciar a ação
  gifShenlong.style.display = "none";
  videoShenlong.style.display = "none";


  botaoInvocar.addEventListener("click", () => { // apos eu clicar...
    areaPrincipal.classList.add("shenlong-ativo");
    gifShenlong.style.display = "block";
    videoShenlong.style.display = "none";
    videoShenlong.pause();
    videoShenlong.currentTime = 0;

    botaoInvocar.textContent = "Shenlong invocado"; // muda o texto do botão
    botaoInvocar.disabled = true; //impede de clicar nele dnv

    // após 2,5 segundos, o GIF some e o vídeo entra em loop
    setTimeout(() => {
      gifShenlong.style.display = "none";
      videoShenlong.style.display = "block";
      videoShenlong.play();
    }, 2500);
  });
});