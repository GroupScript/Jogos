//Mostra imagem avisando se um campo está sendo preenchido corretamente
function validar(campo){
	switch (campo){
		case "nome":
			var td = document.getElementById("valid_nome");

			if(!/^[A-z]+$/.test(document.getElementById("nome").value))
				td.innerHTML = "<img width='35px' src='imagens/incorrect.png'>";
			else
				td.innerHTML = "<img width='35px' src='imagens/correct.png'>";
					
			if(document.getElementById("nome").value == "")
				td.innerHTML = "";
			break;

		case "sobrenome":
			var td = document.getElementById("valid_snome");

			if(!/^[A-z]+$/.test(document.getElementById("sobrenome").value))
				td.innerHTML = "<img width='35px' src='imagens/incorrect.png'>";
			else
				td.innerHTML = "<img width='35px' src='imagens/correct.png'>";
					
			if(document.getElementById("sobrenome").value == "")
				td.innerHTML = "";
			break;

		case "email":
			var td = document.getElementById("valid_email");

			if(!/^(\w|[._%-])+\@(\w|[.-])+\.[a-z]{2,4}$/.test(document.getElementById("email").value))
				td.innerHTML = "<img width='35px' src='imagens/incorrect.png'>";
			else
				td.innerHTML = "<img width='35px' src='imagens/correct.png'>";
			
			if(document.getElementById("email").value == "")
				td.innerHTML = "";
			break;

		case "senha":
			var td = document.getElementById("valid_senha");

			if(!/^(\W|\w){8,}$/.test(document.getElementById("senha").value))
				td.innerHTML = "<img width='35px' src='imagens/incorrect.png'>";
			else
				td.innerHTML = "<img width='35px' src='imagens/correct.png'>";
			
			if(document.getElementById("senha").value == "")
				td.innerHTML = "";
			break;
				
		case "senha2":
			var td = document.getElementById("valid_senha2");

			if(document.getElementById("senha").value != document.getElementById("senha2").value)
				td.innerHTML = "<img width='35px' src='imagens/incorrect.png'>";
			else
				td.innerHTML = "<img width='35px' src='imagens/correct.png'>";
							
			if(document.getElementById("senha2").value == "")
				td.innerHTML = "";
			break;

		case "telefone":
			var td = document.getElementById("valid_telefone");

			if(!/^(\(\d{2}\)\s\d{4}\-\d{4})|(\d{10})$/.test(document.getElementById("telefone").value))
				td.innerHTML = "<img width='35px' src='imagens/incorrect.png'>";
			else
				td.innerHTML = "<img width='35px' src='imagens/correct.png'>";
			
			if(document.getElementById("telefone").value == "")
				td.innerHTML = "";
			break;
	}
}

//Formulário de cadastro só é enviado se os campos estiverem corretos
function verificar_cadastro(){
	if(!/^[A-z]+$/.test(document.getElementById("nome").value)){
		alert("Nome inv\u00e1lido!");
		return false;
		}
	if(!/^[A-z]+$/.test(document.getElementById("sobrenome").value)){
		alert("Sobrenome inv\u00e1lido!");
		return false;
		}
	if(!/^([a-z]|\W|[0-9])+\@[a-z]+(\.[a-z]+)+$/.test(document.getElementById("email").value)){
		alert("E-mail inv\u00e1lido!");
		return false;
		}
	if(!/^(\W|\w){8,}$/.test(document.getElementById("senha").value)){
		alert("Senha inv\u00e1lida!");
		return false;
		}
	if(document.getElementById("senha").value != document.getElementById("senha2").value){
		alert("Senhas n\u00E3o correspondem!");
		return false;
		}
	else{
		alert("Enviado com sucesso!");
		return true;
	}
}

//Formulário de contato só é enviado se os campos estiverem corretos
function verificar_contato(){
	if(!/^[A-z]+$/.test(document.getElementById("nome").value)){
		alert("Nome inv\u00e1lido!");
		return false;
		}
	if(!/^([a-z]|\W|[0-9])+\@[a-z]+(\.[a-z]+)+$/.test(document.getElementById("email").value)){
		alert("E-mail inv\u00e1lido!");
		return false;
		}
	if(!/^(\(\d{2}\)\s\d{4}\-\d{4})|(\d{10})$/.test(document.getElementById("telefone").value)){
		alert("Telefone inv\u00e1lido!");
		return false;
		}
	else{
		alert("Enviado com sucesso!");
		return true;
	}
}

//Formulário de login só é enviado se os campos estiverem corretos
function verificar_login(){
	if((!/^[A-z]+$/.test(document.getElementById("nome").value))||(!/^(\W|\w){8,}$/.test(document.getElementById("senha").value))){
		alert("Nome de usu\u00e1rio ou senha inv\u00e1lidos!");
		return false;
		}
	else{
		alert("Voc\u00EA est\u00e1 logado como "+document.getElementById("nome").value+"!");
		return true;
	}
}