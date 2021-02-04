$(document).ready(function(){

  $('input').focus(function(){
    $(this).css('background-color','lightblue');
  });
   $('input').focusout(function(){
      $(this).css('background-color','white');
    });

  $('button').click(function () {
    valid = true;
    if($('#nom').val() == ""){
        $('#nom').css('background-color', '#8E1428')
        $('#nom').attr('placeholder','Veuillez entrez votre Nom')
        valid = false
    }
    if($('#prenom').val() == ""){
        $('#prenom').css('background-color', '#8E1428')
        $('#prenom').attr('placeholder','Veuillez entrez votre Prenom',)
        valid = false
    }
    if($('#email').val() == ""){
        $('#email').css('background-color', '#8E1428')
        $('#email').attr('placeholder','Veuillez entrez votre Email')
        valid = false
    }else if (!$('#email').val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
       $('#email').next('#valideemail').fadeIn().text("Entrez un email valide ! ");
        valid = false
    }
    return valid;
  })
})

    $('textarea').bind('keyup', function() {
document.getElementById('compteur_caractere').innerHTML = textarea.value.length;     
    });




// <script>
//     function KeyPress()
//     {
//         total = document.getElementById("password").value.length+1;
//         document.getElementById("compteur").innerHTML = total+" Caractere(s)"; 
//     }
// </script><br><br>