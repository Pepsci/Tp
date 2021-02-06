$(document).ready(function(){

  $('input').focus(function(){
    $(this).css('background-color','lightblue');
  });
   $('input').focusout(function(){
      $(this).css('background-color','white');
    });
  $('.ajouter').click(function () {

    valid = true;
    if($('#nom').val() == ""){
        $('#nom').css('background-color', '#8E1428')
        $('#nom').attr('placeholder','Veuillez entrez votre Nom')
        valid = false
    }if($('#prenom').val() == ""){
        $('#prenom').css('background-color', '#8E1428')
        $('#prenom').attr('placeholder','Veuillez entrez votre Prenom',)
        valid = false
    }if($('#email').val() == ""){
        $('#email').css('background-color', '#8E1428')
        $('#email').attr('placeholder','Veuillez entrez votre Email')
        valid = false
    }if (!$('#email').val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
       $('#email').next('#valideemail').fadeIn().text("Entrez un email valide ! ");
        valid = false
    }else {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var ligne = "<tr><td><input type='checkbox' name='select'></td><td>" + nom + "</td><td>" + prenom + "</td><td>" + email + "</td></tr>";
        $('#email').next('#valideemail').fadeOut().text("Email valide ! ");
        $("table.tableau").append(ligne);
        $('.table').css({'visibility':'visible',});

        $(".supprimer").click(function() {
        $("table.tableau").find('input[name="select"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("table.tableau tr").remove();
            }
        });
    });
  }
return valid;

  })
})

