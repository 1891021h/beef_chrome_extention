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

  console.log('先週');
  let target = document.querySelector(".btn-warning").parentNode;
  let targetChild = document.querySelector(".btn-warning");
  let element = document.createElement("span");
  element.classList.add("pre-week");
  target.insertBefore(element,targetChild);
  element.innerHTML = '<button type=\"button\" class=\"btn\" onclick=\"setDay(\'-7\');\">先週</button>';