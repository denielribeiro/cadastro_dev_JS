const devAdd = document.getElementById("buttonAdd");
const buttonRegister = document.getElementById("buttonRegister");
const devList = document.getElementById("devList");

//Cria o evento de adicionar o nome do Dev

devAdd.addEventListener("click", function (ev) {
  const tecnoList = document.getElementById("tecnoList");
  const devName = document.querySelector('input[name="name"]').value;
  const devExp = document.createElement("ul");
  devExp.id = "devExp";
  const devLi = document.createElement("h3");
  devLi.innerText = devName;
  devLi.id = "devName";
  devExp.appendChild(devLi);
  tecnoList.appendChild(devExp);
  tecnoList.appendChild(document.createElement("br"));
  console.log(devName);
  const clearName = (document.getElementById("name").value = "");
  console.log(clearName);
  addTecno();
});

//Função para adicionar/remover tecnologias
function addTecno() {
  const tecnoUl = document.createElement("ul");
  tecnoUl.id = "tecnoSelec";

  const nameTecno = document.createElement("label");
  nameTecno.innerText = "Tecnologia: ";

  const tecnoInput = document.createElement("input");
  tecnoInput.type = "text";
  tecnoInput.name = "name";
  tecnoInput.id = "tecnoInput";
  tecnoInput.placeholder = "Adicione a tecnologia";
  tecnoInput.value = "";

  const tecnoExpA = document.createElement("input");
  tecnoExpA.type = "radio";
  tecnoExpA.name = "exp";
  tecnoExpA.id = "expA";
  tecnoExpA.value = "0-2 Anos";
  const expAtext = document.createElement("label");
  expAtext.innerText = " 0-2 Anos ";

  const tecnoExpB = document.createElement("input");
  tecnoExpB.type = "radio";
  tecnoExpB.name = "exp";
  tecnoExpB.id = "expB";
  tecnoExpB.value = "3-5 Anos";
  const expBtext = document.createElement("label");
  expBtext.innerText = " 3-5 Anos ";

  const tecnoExpC = document.createElement("input");
  tecnoExpC.type = "radio";
  tecnoExpC.name = "exp";
  tecnoExpC.id = "expC";
  tecnoExpC.value = "5+ Anos";
  const expCtext = document.createElement("label");
  expCtext.innerText = " 5+ Anos ";

  const tecnoButtonAdd = document.createElement("button");
  tecnoButtonAdd.innerText = "Adicionar Tecnologia";
  tecnoButtonAdd.id = "buttonTec";
  tecnoButtonAdd.onclick = addTecnoLine();

  //Função que aciona o botão de inserir tecnologia
  function addTecnoLine() {
    tecnoUl.appendChild(nameTecno);
    tecnoUl.appendChild(tecnoInput);
    tecnoUl.appendChild(document.createElement("br"));
    tecnoUl.appendChild(tecnoExpA);
    tecnoUl.appendChild(expAtext);
    tecnoUl.appendChild(tecnoExpB);
    tecnoUl.appendChild(expBtext);
    tecnoUl.appendChild(tecnoExpC);
    tecnoUl.appendChild(expCtext);
    tecnoUl.appendChild(document.createElement("br"));
    tecnoUl.appendChild(tecnoButtonAdd);
    tecnoList.appendChild(tecnoUl);
  }

  //Função que recebe o click do botão adiciona tecnologia
  tecnoButtonAdd.addEventListener("click", function (ev) {
    ev.preventDefault();

    const tecnoInput = document.getElementById("tecnoInput");
    const tecnoInputValue = tecnoInput.value;
    const exp = document.querySelector("input[name='exp']:checked");
    const expValue = exp.value;

    const devExp = document.getElementById("devExp");
    const devSpan = document.createElement("span");
    devSpan.id = devSpan;
    const tecnoLine = document.createElement("p");
    tecnoLine.id = "tecnoLine";
    tecnoLine.className = "tecnoLine";
    const buttonRemove = document.createElement("button");
    buttonRemove.innerText = "Remover";
    buttonRemove.id = "buttonRemove";

    const tecnoInputText = document.createTextNode("- " + tecnoInputValue + " => ");
    const expText = document.createTextNode(expValue);
    tecnoLine.appendChild(tecnoInputText);
    tecnoLine.appendChild(expText);
    devSpan.appendChild(tecnoLine);
    devSpan.appendChild(buttonRemove);
    devExp.appendChild(devSpan);

    tecnoInput.value = "";
    //Função que aciona o botão que remove a tecnologia
    buttonRemove.addEventListener("click", function removeTecnoline(ev) {
      devExp.removeChild(devSpan);
    });
  });
}

// Função de cadastra o Desenvolvedor

buttonRegister.addEventListener("click", function (ev) {
  const devName = document.getElementById("devName");

  const devUl = document.createElement("ul");
  devUl.id = "devUl";

  const devLiTec = document.querySelectorAll(".tecnoLine");
  const devLiTextArray = [];

  devLiTec.forEach((devLiContent) => {
    const devLi = devLiContent.innerText;
    const devLiText = document.createTextNode(devLi);
    devLiTextArray.push(devLiText);
  });

  devUl.appendChild(devName);
  devList.appendChild(devUl);

  devLiTextArray.forEach((liItem) => {
    const liElement = document.createElement("li");
    liElement.textContent = liItem.nodeValue;
    devUl.appendChild(liElement);
  });

  console.log(devLiTextArray);

  const clearTecnolist = document.getElementById("tecnoList");
  clearTecnolist.innerHTML = "";
});
