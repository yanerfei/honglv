$(function() {
    $.ajax({
        url:'http://127.0.0.1:9091/api/getlianzai',
        dataType:'json',
        success:function(backData) {
            $('#list ul').html(template('content',backData));
        }
    })
})