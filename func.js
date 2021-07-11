var idvalue;
function mostra(_id){
	document.getElementById('btn').style.display = 'block';
	document.getElementById(_id).style.display = 'block';
	document.getElementById('servicos').style.display = 'none';
	idvalue = _id;
}

function volta(){
	document.getElementById('btn').style.display = 'none';
	document.getElementById(idvalue).style.display = 'none';
	document.getElementById('servicos').style.display = 'block';
}

$("#myform").submit(function(e) {
    var url = "processa.php"; 
    $.ajax({
           type: "POST",
           url: url,
           data: $("#myform").serialize(),
           success: function(data)
           {
			swal("E-mail enviado com sucesso!","", "success"); 
           }
		   
         });
		 $('#myform')[0].reset();
		 return false;
		 
    e.preventDefault();// esse comando serve para previnir que o form realmente realize o submit e atualize a tela.
});

