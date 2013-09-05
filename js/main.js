$(document).ready(function() {

// INDEX

    $('.carousel').carousel({
  interval: 6500
})
    $('.camp-options img').mouseenter(function() {
    $(this).fadeTo('fast', 1);
    })
    $('.camp-options img').mouseleave(function() {
    $(this).fadeTo('fast', 0.75);
    });

     $('.camp-options img').mouseenter(function() {
    $(this).animate({marginTop : '-10px', width : '330px', height : '210px'}, 'fast');
    })
    $('.camp-options img').mouseleave(function() {
    $(this).animate({ marginTop : '0', width : '320px', height : '200px',});
    });


// TEAM


    // Paul
    $('#paul').mouseenter(function() {
    $(this).text('Camp Director');    
    });
    $('#paul').mouseleave(function() {
    $(this).text('Paul');    
    });
    // David
    $('#david').mouseenter(function() {
    $(this).text('Assistant Camp Director');    
    });
    $('#david').mouseleave(function() {
    $(this).text('David');    
    });
    // Miki
    // David
    $('#miki').mouseenter(function() {
    $(this).text('Head Counselor');    
    });
    $('#miki').mouseleave(function() {
    $(this).text('Miki');    
    });


//CAREERS

// $('a').click(function() {
//         // get the id of the target
//         var targetId = $(this).attr('href');
//         console.log(targetId);

//         // use jquery to select the target
//         var target = $(targetId);
//         console.log(target);

//         // figure out how far the target is from the top of the page
//         var topDistance = target.position().top;
//         console.log(topDistance);

//         // scroll to the location of the target
//         $('body').animate({ scrollTop : topDistance });
//         //scroll really slowly
//         // $('body').animate({ scrollTop : topDistance }, 10000);
//         return false; //overrides default
//     });


//END

});
