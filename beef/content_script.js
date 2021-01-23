$(function() {
    $.ajax({
        type: 'GET',
        url: 'https://beef.center.kobe-u.ac.jp/2020/my/',
        dataType: 'html',
        success: function(data) {
          let task = $(data).find('.list-group-item')
            console.log(task);
          $('#frontpage-course-list').append(task);
        }
    });
});