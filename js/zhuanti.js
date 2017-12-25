$(function() {
    $.ajax({
        url:'http://127.0.0.1:9091/api/gettopics',
        dataType:'json',
        success:function(backData) {
            console.log(backData);
            $('#list ul').html(template('content',backData));
        }
    })
})