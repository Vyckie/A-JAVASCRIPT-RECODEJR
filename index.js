var listaDeTarefas = [];
var tarefasConcluidas = [];

function add(){
    var tarefa = document.getElementById('valor').value;// armazena a tarefa que foi digitada 
    
    listaDeTarefas.push(tarefa); // lista com todas as tarefas digitadas
        
    document.getElementById('valor').value=""; // limpar o valor na caixa do input
     
    list();
    
}

function list(){
    let tbody = document.getElementById('tbody');//tabela de tarefas nao feitas
    tbody.innerHTML="";
    for(let i = 0; i<listaDeTarefas.length; i++){ 
        let linha = tbody.insertRow();//cria uma linha para cada tarefa
        let coluna_check = linha.insertCell();//cria coluna 1
        let coluna_tarefa = linha.insertCell();//cria coluna 2
        let coluna_delet = linha.insertCell();//cria coluna 3

        coluna_check.innerHTML = "<input type='checkbox' onclick='check("+i+")'>"; //adiciona um checkbox na primeira coluna 
        coluna_tarefa.innerHTML = listaDeTarefas[i];//adiciona a tarefa na posição i na segunda coluna
        coluna_delet.innerHTML = "<input type='button' onclick='delet("+i+")' value='delet'>"; // deletar tarefa na posição i

        
    }
}

function delet(i){
    
    let tbody = document.getElementById('tbody');
    tbody.deleteRow(i); //deletar toda linha da tarefa i
    listaDeTarefas.splice(i,1); // deleta tarefa da lista de tarefas
    list();
   
    
}

function check(i){
    
    tarefasConcluidas.push(listaDeTarefas[i]); //adiciona a tarefa na lista de tarefas concluidas
    delet(i);// deleta a tarefa das lista de tarefas a fazer
    list2();

    
    
}
function delet2(i){
    
    let tbody2 = document.getElementById('tbody2');
    tbody2.deleteRow(i); //deletar toda linha da tarefa i
    tarefasConcluidas.splice(i,1); // deleta tarefa da lista de tarefas
    list2();
   
    
}
function list2(){
    let tbody2 = document.getElementById('tbody2');//tabela de tarefas nao feitas
    tbody2.innerHTML="";
    for(let i = 0; i<tarefasConcluidas.length; i++){
        let linha = tbody2.insertRow(); //cria uma linha para cada tarefa concluida
        let coluna_tarefa = linha.insertCell(); // cria coluna com a tarefa concluida
        let coluna_delet = linha.insertCell();  

        coluna_tarefa.innerHTML = tarefasConcluidas[i];
        coluna_delet.innerHTML = "<input type='button' onclick='delet2("+i+")' value='delet'>"; //deleta tarefa
        
    }
}
