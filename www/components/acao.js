$(document).on("click", "#cadastrar", function(){
  
  var parametros  = {
    "nome":$("#nome").val(),
    "tipo":$("#tipo").val(),
    "modelo":$("#modelo").val(),
    "placa":$("#placa").val(),
    "horario":$("#horario").val()
    
    
    };

      $.ajax({
      type:"post", //Forma de envio
      url: "https://estacionamento0.000webhostapp.com/cadastroCarro.php",  //Local de envio
      data: parametros, // Os dados enviados
      success: function(data){ //Função de Sucesso de Cadastro
        
            navigator.notification.alert("Cadastrado com Sucesso!!!");
          $("#nome").val("");
          $("#tipo").val("");
          $("#modelo").val("");
          $("#placa").val("");
          $("#horario").val("");
                   

      },
      error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
      }
  });
});



//---------------- listas -----------------

$(document).on("click", "#buscarn",function(){
      var parametro ={
      "placa":$("#placa").val()
    };
    
    $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://estacionamento0.000webhostapp.com/listas.php",
    data: parametro, // pra onde vai enviar
    dataType:"json", // o que eu vou enviar
    // caso sucesso
    success: function(data){
        $("#nome").val(data.tbCarro.nome);
        $("#modelo").val(data.tbCarro.modelo);
        $("#entrada").val(data.tbCarro.entrada);
        $("#saida").val(data.tbCarro.saida);   
        $("#pago").val(data.tbCarro.pago);                
  },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao buscar registros!");
    }
  });
});