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


    $('.todo .da-cancellare').click(
        function() {
            $(this).parent().remove();
        }

    );

});