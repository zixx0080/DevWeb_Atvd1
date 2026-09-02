document.addEventListener("DOMContentLoaded", () => { 
  //isso aqui faz meu scpipt ser executado so depois da pagina ser carregada


  // aqui eu estou definindo e pegando minhas variaveis (constantes)
  // id seleciona um elemento HTML e selector uma classe CSS
  const botaoInvocar = document.getElementById("btnInvocar");
  const areaPrincipal = document.querySelector(".principal");
  const gifShenlong = document.getElementById("gifShenlong");
  const videoShenlong = document.getElementById("loopShenlong");
  const formPedido = document.getElementById("formPedido");

  // isso so me permiti executar o script se todos os elementos existirem na pagina
  if (!botaoInvocar || !areaPrincipal || !gifShenlong || !loopShenlong || !formPedido) return;

  // deixa as midias escondidas ate eu iniciar a ação
  gifShenlong.style.display = "none";
  videoShenlong.style.display = "none";


  botaoInvocar.addEventListener("click", () => { // apos eu clicar...
    areaPrincipal.classList.add("shenlong-ativo"); // usa minha classe CCS do shenlong invocado colocando na minha area principal
    gifShenlong.style.display = "block"; // chama meu giff 
    videoShenlong.style.display = "none"; // isso aqui esconde o meu video em loop ate o giff acabar
    videoShenlong.pause(); // não executa o video ainda
    videoShenlong.currentTime = 0; // inicio o video sempre do tempo 0

    botaoInvocar.style.display = "none";

    setTimeout(() => {
        formPedido.classList.remove("invisivel"); // apos 3 segundos, o formulario aparece pois retirei que deixa ele invisivel
    }, 3000); // espera 3 segundos



    botaoInvocar.textContent = "Shenlong invocado"; // muda o texto do botão
    botaoInvocar.disabled = true; //impede de clicar nele dnv



    // o giff por traz do video some apos 2,5 segundos e o video comeca a entrar em loop
    setTimeout(() => {
      gifShenlong.style.display = "none";
      videoShenlong.style.display = "block";
      videoShenlong.play();
    }, 2500);
  });
});