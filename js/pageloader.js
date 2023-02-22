
   $(window).on('load',function(){
    load();
   })
   
   function load()
   {
    setTimeout(function(){
        $('.container').fadeOut();
    },5000)
   }

   let dates=['18-2-2023','19-2-2023','20-2-2023'];
   let datepicker=$('#datepicker');
   datepicker.datepicker({
    dateFormat: 'dd-mm-yy',
    beforeShowDay: available,
    onSelect: function() {
    selected = $(this).val();
    }

   })

   function available(date){    
    let dmy=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    console.log(dmy)
    if ($.inArray(dmy, dates) != -1) {
        return [true, "", "Available"];
      } else {
        console.log(dmy)
        return [false, "", "unAvailable"];
      }
   }
