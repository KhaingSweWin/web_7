$('.show').on('click',function(){
    $.getJSON('https://jsonplaceholder.typicode.com/posts',function(result){
    console.log(result)
    result.forEach(item => {
        let tr=$('<tr></tr>')
        tr.append('<td>'+item.userId+'</td>')
        tr.append('<td>'+item.id+'</td>')
        tr.append('<td>'+item.title+'</td>')
        tr.append('<td>'+item.body+'</td>')
        $('.post').append(tr)
    });
    })
})