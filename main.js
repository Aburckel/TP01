$(document).ready(function(){  
    $("#form").submit(function(e) {
        if(!$('#email').val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
			alert("L'email saisi n'est pas valide");
		}  
		
		  if(!$('#mdp').val().match(/^.{8,20}$/)){
			alert("La longueur du mot de passe doit etre comprise entre 8 et 20");
		} 
		
		if(!$('#mdp').val().match(/(?=.*\d)(?=.*[A-Z])(?=.*\W)./)){
			alert("Le mot de passe doit contenir : Une majuscule, un chiffre et un caractere spéciale");
		}
    });
});