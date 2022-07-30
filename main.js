let cl = false

$('#btn').click(function(){
    if (cl == false) {
        $('.color').css('display', 'flex');
        
        cl = true;
    } else if (cl == true) {
        $('.color').css('display', 'none');
        
        cl = false;
    }
   
});

$('.red-color').click(function(){
    let task = $('#inp').val();
    $('#wrap').append("<div class='RedSticker'>"+task+"<div>");
        $('#inp').val("");
})

$('.orange-color').click(function(){
    let task = $('#inp').val();
    $('#wrap').append("<div class='OrSticker'>"+task+"<div>");
        $('#inp').val("");
})
$('.green-color').click(function(){
    let task = $('#inp').val();
    $('#wrap').append("<div class='GrSticker'>"+task+"<div>");
        $('#inp').val("");
})
