//var descricao = "";
var listaDeTarefas = [];

const tabela = document.getElementById('tabela');

function add(){
    var tarefa = document.getElementById('valor').value;// armazena a tarefa que foi digitada atraves do input
     
    listaDeTarefas.push(tarefa) // lista com todas as tarefas digitadas
    
    

    //document.getElementById('tabela').innerHTML = listaDeTarefas + "<input type='checkbox'>";
    
    document.getElementById('valor').value="";
    console.log(tarefa);
    list();
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
        coluna_delet.innerHTML = "<input type='submit' value='delet'>"
    }
}