// $(function() {
//     $.ajax({
//         type: 'GET',
//         url: 'https://beef.center.kobe-u.ac.jp/2020/my/',
//         dataType: 'html',
//         success: function(data) {
//           let task = $(data).find('.list-group-item')
//             console.log(task);
//           $('#frontpage-course-list').append(task);
//         }
//     });
// });

fetch('https://beef.center.kobe-u.ac.jp/2020/my/?myoverviewtab=timeline',{credentials: 'include'})
  .then(function(response){ return response.text(); })
  .then(text => new DOMParser().parseFromString(text, "text/html"))
  .then(function(text){
    console.log(text);
    upcomingEvent = text.querySelector(".tab-content").innerHTML
    console.log(upcomingEvent);
    let target = document.querySelector("#region-main");
    let targetChild = document.querySelector("#user-notifications")
    let element = document.createElement("div");
    target.insertBefore(element,targetChild);
    element.innerHTML = upcomingEvent;
  });