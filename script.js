let msgBox = document.querySelector(".msgBox");
let checkColor = { color: 0 };
let header = document.querySelector(".header");
let main = document.querySelector(".container");

// Quando a pagina carregar

onload = () => {
  msgBox.innerHTML = `
  <div class="msgContent">
    <div class="titleLogin">
      <h1><small id="frtLetters">Let's</small>Notes</h1> 
      </div>
      <div class="divForm"> 
          <form class="formLogin">
              <label class="labelLogin">Informe seu nome:</label>
              <input id="name" type="text" name="name" maxlength="15">
              <label class="labelLogin">Informe seu sobrenome:</label>
              <input id="surName" type="text" name="surName" maxlength="15" value="">
              <label class="labelLogin">Escolha a cor do perfil:</label>
              <input id="color1" onclick = "btnColor1()" onclick ="btnCheck()" class="pflPhoto" type="radio" value="">
              <input id="color2" onclick = "btnColor2()" class="pflPhoto" type="radio" value="">
              <input id="enjoyBtn" onclick = "btnLogin()" type="button" value="Entrar">
          </form>
      </div>
      <div class="alertBox fadeOut">
        <p id="alertMsg"></p>
        <button id="alertBtn" onclick = "btnReturn()">Retornar</button>
      </div>
  </div>`;
};

//Tela de login

//Definição da cor do perfil:

function btnColor1() {
  checkColor = { color: 1 };

  return btnCheck();
}

function btnColor2() {
  checkColor = { color: 2 };

  return btnCheck();
}

function btnCheck() {
  let color1 = document.querySelector("#color1");
  let color2 = document.querySelector("#color2");

  if (checkColor.color == 1) {
    color1.style.border = "5px solid #f5d01f";
    color2.style.border = "none";
  } else {
    color1.style.border = "none";
    color2.style.border = "5px solid #f5d01f";
  }
}

//Botão entrar, retornar e condições de login

function btnLogin() {
  let name = document.querySelector("#name");
  let surName = document.querySelector("#surName");
  let divForm = document.querySelector(".divForm");
  let alertBox = document.querySelector(".alertBox");
  let alertMsg = document.querySelector("#alertMsg");

  if (name.value == "" || surName.value == "" || checkColor.color == 0) {
    if (name.value == "" && surName.value == "" && checkColor.color == 0) {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor informe seu nome, sobrenome e escolha uma cor para perfil`;
      }, 300);
    } else if (
      name.value != "" &&
      surName.value == "" &&
      checkColor.color == 0
    ) {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor informe seu sobrenome e escolha uma cor para perfil`;
      }, 300);
    } else if (
      name.value == "" &&
      surName.value != "" &&
      checkColor.color == 0
    ) {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor informe seu nome e escolha uma cor para perfil`;
      }, 300);
    } else if (
      name.value == "" &&
      surName.value == "" &&
      checkColor.color != 0
    ) {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor informe seu nome e sobrenome`;
      }, 300);
    } else if (
      name.value == "" &&
      surName.value != "" &&
      checkColor.color != 0
    ) {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor, informe seu nome`;
      }, 300);
    } else if (
      name.value != "" &&
      surName.value == "" &&
      checkColor.color != 0
    ) {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor, informe seu sobrenome`;
      }, 300);
    } else {
      alertBox.classList.toggle("fadeOut");
      divForm.classList.toggle("fadeOut");

      setTimeout(() => {
        divForm.style.display = "none";
        alertBox.style.display = "flex";
        alertMsg.innerHTML = `Por favor, escolha uma cor para perfil`;
      }, 300);
    }
  } else {
    msgBox.classList.add("fadeOut");
    setTimeout(() => {
      msgBox.style.display = "none";

      header.innerHTML = `
      <div class="title">
        <h1><small id="frtLetters">Let's</small>Notes</h1> 
        <div class="profile">
          <div class="imgProfile">
            <p>${name.value[0].toUpperCase()}${surName.value[0].toUpperCase()}</p>
          </div>
          <div class="nameProfile">
            <p id="name">${
              name.value[0].toUpperCase() + name.value.substring(1)
            } ${surName.value[0].toUpperCase() + surName.value.substring(1)}</p>
            <p id="nameSmall"><small>Bem vindo(a) ao Let'sNotes</small></p>
          </div>
        </div>
      </div>`;

      if (checkColor.color == 1) {
        let profile = document.querySelector(".imgProfile");
        profile.style.backgroundColor = "#20b2aa";
      } else {
        let profile = document.querySelector(".imgProfile");
        profile.style.backgroundColor = "#ad20b2";
      }

      main.innerHTML = `
      <section class="toInspire">
        <h2>Para Inspirar</h2>
        <div class="inspireMsg">
          <div class="firstMsg">
            <p style="font-size: 1.2rem; font-weight: 400">
              "A tragédia da vida não está em não alcançar seu objetivo. A
              tragédia está em não ter objetivo para alcançar."
            </p>
            <p class="writter">
              <strong>Benjamin E. Mays</strong>, American civil rights leader
            </p>
          </div>
          <div class="secondMsg">
            <p style="font-size: 1.2rem; font-weight: 400">
              "Até que possamos gerenciar o tempo, não podemos gerenciar mais
              nada."
            </p>
            <p class="writter">
              <strong>Peter Drucker</strong>, management consultant
            </p>
          </div>
        </div>
      </section>
      <section class="myTasks">
        <h2>Minhas Tarefas</h2>
        <form class="form">
          <input id="inputTask" type="text" name="task" placeholder="Digite uma tarefa">
          <input id="btnAdd" onclick="addTask()" type="button" value="Adicionar">
        </form>
      </section>
      <section class="tasks"></section>`;
    }, 500);
  }
}

function btnReturn() {
  let divForm = document.querySelector(".divForm");
  let alertBox = document.querySelector(".alertBox");

  alertBox.classList.toggle("fadeOut");
  divForm.classList.toggle("fadeOut");

  setTimeout(() => {
    divForm.style.display = "initial";
    alertBox.style.display = "none";
    alertMsg.innerHTML = null;
  }, 300);
}

//Seção minhas tarefas

function addTask() {
  let inputTask = document.querySelector("#inputTask");
  let spaceTask = document.querySelector(".tasks");

  if (inputTask.value != "") {
    spaceTask.innerHTML += `
    <div class="divTask">
      <div class="divAdderTask">
        <input class="adderTask" onclick="checkbox()" type="checkbox" name="task" >
        <p class="pTask">${inputTask.value}</p>
      </div>
        <input id="removeTask" onclick="removeTask()" type="button" value="Remove" >
    </div>
    `;
    inputTask.value = "";
  }
}

function checkbox() {
  let labelTask = document.querySelector(".pTask");
  let check = document.querySelector(".adderTask");

  if (check.checked) {
    labelTask.style.textDecoration = "line-through";
    // console.log("Check");
  } else {
    labelTask.style.textDecoration = "none";
    // console.log("UnCheck");
  }
}

function removeTask() {}
