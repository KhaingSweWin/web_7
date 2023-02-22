$(document).ready(function(){
    $('h2,p').css(
        {
            'color':'blue',
            'text-transform':'uppercase'
        }
    )

    $('.tobuy').prepend('<li>Veggie</li>');
    $('.tobuy').append('<li>Clothes</li>');
    $('.tobuy').before('<h1>Heading a thi </h1>');
    $('.tobuy').after('<h3>Hola</h3>')


    $('p').appendTo('ul')
    $('li').each(function(ele){
        console.log($(this).html())
        if(ele%2==0)
        {
            $(this).addClass('highlight')
        }
        else{
            console.log("not even")
        }
    })
    for(let index=0;index<6;index++){
        $('.row1').append('<div class="col-md-2"></div>')
    }
   
    $('.row1').children().addClass('height')
    $('.height').on('click mouseover',function(){
        //console.log($(this).addClass('highlight'))
        $(this).toggleClass('highlight')
    })
    $('.height').each(function(index){
        $(this).attr('id','small_box'+(index+1))
    })
})