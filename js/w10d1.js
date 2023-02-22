$('.content').hide();

setTimeout(loader,5000);

function loader(){
    $('.container').fadeOut();
    $('.content').fadeIn();

}

let available_date=['17-2-2023','18-2-2023','19-2-2023']
$('#datepicker').datepicker({
    dateFormat:"dd-mm-yy",
    beforeShowDay: available,
    onSelect:function(){
        console.log($(this).val())
    }
})

function available(date){
    let dmy=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    if($.inArray(dmy,available_date)!= -1){
        return [false];
    }else{
        return [ture];
    }
}

