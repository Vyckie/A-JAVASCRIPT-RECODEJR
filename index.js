var listaDeTarefas = [];

function add(){
    var tarefa = document.getElementById('valor').value;// armazena a tarefa que foi digitada 
    
    listaDeTarefas.push(tarefa); // lista com todas as tarefas digitadas
        
    document.getElementById('valor').value=""; // limpar o valor na caixa do input
    
    console.log(tarefa);
     
    list();
    console.log("ARRAY "+listaDeTarefas)
}

function list(){
    var tbody = document.getElementById('tbody');
    tbody.innerHTML="";
    for(let i = 0; i<listaDeTarefas.length; i++){
        let linha = tbody.insertRow();
        let coluna_check = linha.insertCell();
        let coluna_tarefa = linha.insertCell();
        let coluna_delet = linha.insertCell();

        coluna_check.innerHTML = "<input type='checkbox'>";
        coluna_tarefa.innerHTML = listaDeTarefas[i];
        coluna_delet.innerHTML = "<input type='button' onclick='delet("+i+")' value='delet'>";

        
    }
}

function delet(i){
    alert('Deletando '+ listaDeTarefas[i]);
    var tbody = document.getElementById('tbody');
    tbody.deleteRow(i); //deletar linha da tarefa
    listaDeTarefas.splice(i,1);
    list();
   
    
}