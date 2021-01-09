$(function () {
    let design = $('#design');
    let development = $('#development');
    let product = $('#product');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');

    $(design).hide();
    $(development).hide();
    $(product).hide();

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(design).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(development).show(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(product).show(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    $(design, destext).on('click', function () {
        $('.des').slideDown();
        $(design).hide(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'16px'})
    });
    $(development, devtext).on('click', function () {
        $('.dev').slideDown();
        $(development).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(product, protext).on('click', function () {
        $('.pro').slideDown();
        $(product).hide(500);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })

    //Overlay images

    $('.port').hover(function(){
        $('.porttext',this).slideToggle('milliseconds');
     }, function(){
        $('.porttext',this).slideToggle('milliseconds');
     });


    //Form Validation
        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + "," +"Thanks for your comment, we'll comeback to you soon");
            }
            

        });



});