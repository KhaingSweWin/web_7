$(document).ready(function(){
    console.log($('.menu'))
    console.log($('li:first-child').text())
    console.log($('li:lt(2)'))
    console.log($('li:nth-child(2)').text())
    console.log($('li:last-child').text())

    $('li:last-child').css('color','red')
    $('li:first-child').css('font-size','2rem')
    $('li:nth-child(odd)').css('background-color','blue')
    

    $('li:lt(1)').css({
        "color":"orange",
        "font-size":"2.5rem",
        "background-color":"pink"
    })
})

