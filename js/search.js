$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#comps *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        if($('.title').css('display') == 'block'){
          console.log('hey this is block display')
          $('.title-2').css('display') == 'block';
          $('.justify-text').css('display') == 'block';
        }else{
          $('.title-2').css('display') == 'none !important';
          $('.justify-text').css('display') == 'none !important';
        }

      });
    });
});
