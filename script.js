

function inserir(num){
    var res = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = res + num;
}

function cancel(){
    document.getElementById('display').innerHTML = '';
}

function cancelEntry(){
    var res = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = res.substring(0,res.length -1);
}

function calc(){
    var res = document.getElementById('display').innerHTML;
    if(res){
        document.getElementById('display').innerHTML = eval(res);
    }
}