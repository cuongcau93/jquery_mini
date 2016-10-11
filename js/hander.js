//MINI 1601
$(document).ready(function(){

    $('#mini1').click(function(){
        $('div.waper > h1').css('background','red');
    });

});

//MINI 1602
$(document).ready(function(){
    $('#mini2').click(function(){
       $('#myselect').val('2');
    });
});

//MINI 1603
$(document).ready(function(){
    $('#mini3').click(function(){
        $('#append').append('<div><h1>JQuery Core</h1></div>')
    });
});

//MINI 1604
$(document).ready(function(){
    $('#mini4').click(function(){
        $('li').each(function(index, elem){
            $(elem).prepend('<b>'+index+': </b>');
        });
    });
});

//MINI 1605: Thay doi link
$(document).ready(function(){
    $('#mini5').click(function(){
        $('#tut').attr('href','http://vnexpress.net').text('bao la cai')
    })
})

//MINI6 ScollTop

$(document).ready(function(){
    $('#mini6').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow')
        return false;
    });
});

//MINI7 Disable/enable

$(document).ready(function(){
    $('#form-button-submit').click(function(){
    $(this).prop('disabled',true);
    $('#mini7').show();

    setTimeout(function(){
        $('#form-button-submit').prop('disabled',false);
        $('#mini7').hide();
    }, 2000);

    }); 

});





































