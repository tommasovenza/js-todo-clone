

$(document).ready(function() {
    
    var coseDaFare = [
        'Javascript',
        'php',
        'mysql'
    ];

    for (var i = 0; i < coseDaFare.length; i++) {

        var cloneLi = $('.template li').clone();

        cloneLi.text(coseDaFare[i]);
        
        $('.todo ul').append(cloneLi);
    }



});

