$(function () {
$('#envoyer').click(function () {
	$('#resultat').toggle();
			var taille = $('#taille').val();
			var poid = $('#poid').val();
			var result = $('#resultatimc').val();
			 

			taille = taille/100;
			result = (poid / (taille * taille)).toFixed(2);

     $('#resultatimc').html(result)

    if (result <= 18.5 ){
		$('#imc').html(+result+' < 18.5 : insuffisance pondérale ')
    }
    else if (result >=18.5 && result <=24.9){
    	$('#imc').html('18.5< '+ result +' < 24.9 : poids normal')
	}
	else if (result >=24.9 && result <=29.9){
		$('#imc').html('25< '+ result +' < 29.9 : surpoids')
    }
	else if (result >30){$('#imc').html(result+' > 30 : obésité ')}

		})


})