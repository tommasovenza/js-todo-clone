$(document).ready(function() {

    var coseDaFare = [
        'Javascript',
        'php',
        'mysql'
    ];

    for (var i = 0; i < coseDaFare.length; i++) {

        var cloneLi = $('.template li').clone();

        cloneLi.prepend(coseDaFare[i]);

        $('.todo ul').append(cloneLi);
    }


    $(document).on('click', '.todo .da-cancellare', 
        function() {
            $(this).parent().remove();
        }

    );


    $('#button').click(function() {

        var valoreDiInput = $('#input').val();
        
        var cloneLi2 = $('.template li').clone();

        cloneLi2.prepend(valoreDiInput);
       
        $('.todo ul').append(cloneLi2);

        // svuoto al click il campo input
        $('#input').val('');
    });    


});