const form = document.querySelector("form");

form.addEventListener("submit", e =>{
    e.preventDefault();

    function enviarPedido() { 

    const nome = document.getElementById("nome").value;
    const pedido = document.getElementById("pedido").value;
    const endereco = document.getElementById("endereco").value;

    document.getElementById("nome").value = "";
    document.getElementById("pedido").value = "";
    document.getElementById("endereco").value = "";

    if(nome =="" || pedido == "" || endereco == "" ) {
        alert("Prencha todos os campos!");
        return 0;
    }

    const mensagem = 
    `Olá, Gostaria de fazer meu pedido:
    Nome do cliente: ${nome} 
    Pedido do cliente: ${pedido} 
    Endereço do cliente: ${endereco}`;

    const numero_zap = 86995573899; //Numero da empresa

    const url = `https://wa.me/${numero_zap}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

enviarPedido();

});


