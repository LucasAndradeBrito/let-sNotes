let msgBox = document.querySelector(".msgBox");
let header = document.querySelector(".header");
let main = document.querySelector(".container");

// Quando a pagina carregar

document.addEventListener("load", onload);

onload = () => {
  msgBox.innerHTML = `<div class="msgContent">
    <div class="titleLogin">
    <h1><small id="frtLetters">Let's</small>Notes</h1> 
    </div>
    <div class="divForm"> 
        <form class="formLogin">
            <p class="pLogin">Informe seu nome:</p>
            <input id="name" type="text" name="name" maxlength="15">
            <p class="pLogin">Informe seu sobrenome:</p>
            <input id="surName" type="text" name="surName" maxlength="15">
            <p class="pLogin">Escolha a cor do perfil:</p>
            <input id="color1" class="pflPhoto" type="button" value="">
            <input id="color2" class="pflPhoto" type="button" value="">
            <input id="enjoyBtn" onclick = "btnLogin()" type="button" value="Entrar">
        </form>
    </div>
</div>`;
};

function btnLogin() {
  msgBox.classList.add("fadeOut");
  setTimeout(() => {
    msgBox.style.display = "none";
    header.style.display = "flex";
    main.style.display = "initial";
  }, 500);
}
