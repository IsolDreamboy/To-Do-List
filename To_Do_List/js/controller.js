
let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
  //pegar valor do input
  let valorInput = input.value;
  //validação
  if (
    (valorInput !=="") && (valorInput!== null) && (valorInput!== undefined)){
      
      ++contador;
      
      let novoItem = `  <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">

        <span id="icone_${contador}" class="material-symbols-outlined" style="color:#202420; font-size: 35px;">circle</span>

        </div>


        <div onclick="marcarTarefa(${contador})" class="item-nome">

          ${valorInput}

        </div>
        
        
        <div class="item-botao">

          <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">delete</span></button>

        </div>
      </div>`;

      //adicionar novo item no main(campos)
      main.innerHTML += novoItem; 

      //zerar os campos
      input.value ="";
      input.focus();
    }

} 

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');
  var icone = document.getElementById('icone_'+id);

  if(classe == "item"){
    item.classList.add('clicado');

    
   
    icone.textContent = 'check_circle';
    icone.style.color = '#314D29'
    item.parentNode.appendChild(item);
  }
  else{
    item.classList.remove('clicado')
    icone.textContent = 'circle';
    icone.style.color = '#202420'
    item.parentNode.prepend(item);
  }
}

input.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    btnAdd.click();
  }
})
