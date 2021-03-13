// fetch('https://beef.center.kobe-u.ac.jp/2020/calendar/view.php?view=upcoming',{credentials: 'include'})
// .then(function(response){ return response.text(); })
// .then(text => new DOMParser().parseFromString(text, "text/html"))
// .then(function(text){
//   upcomingEvent = text.querySelector(".eventlist").innerHTML
//   console.log(upcomingEvent);
//   let target = document.querySelector("#region-main");
//   let targetChild = document.querySelector("#user-notifications")
//   let element = document.createElement("div");
//   element.classList.add("top-cal")
//   target.insertBefore(element,targetChild);
//   element.innerHTML = upcomingEvent;
// });
function preWeek(){
  let target = document.querySelector(".btn-warning").parentNode;
  let targetChild = document.querySelector(".btn-warning");
  target.insertAdjacentHTML('afterbegin','<button type=\"button\" class=\"btn btn-primary\" onclick=\"setDay(\'-7\');\">先週</button>');
}

function removeClass(text){
  let query = "." + text;
  let target = document.querySelectorAll(query);
  target.forEach(function(node){
    node.classList.remove(text);
  });
}

removeClass("btn-primary");
removeClass("btn-info");

preWeek();