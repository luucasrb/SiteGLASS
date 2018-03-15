 
function muda(foto){
    document.getElementById("icone").src = foto;
}

function calc_total(){
    var qtd = parseInt(document.getElementById('cqtd').value);
    var total = qtd*1500;
    document.getElementById('cpreco').value = total;
}