$('.container-fluid').animate({width:'100%'},1000);
$('.container-fluid').animate({height:'100vh'},1000,function(){
    $('h2').slideDown(1000,function(){
        $('.div').slideDown(1000)
    })
});
