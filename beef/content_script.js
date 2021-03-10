/*
ダッシュボード(失敗)


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
*/

/*
カレンダー(応急処置)
*/

fetch('https://beef.center.kobe-u.ac.jp/2020/calendar/view.php?view=upcoming',{credentials: 'include'})
.then(function(response){ return response.text(); })
.then(text => new DOMParser().parseFromString(text, "text/html"))
.then(function(text){
  console.log(text);
  upcomingEvent = text.querySelector(".eventlist").innerHTML
  console.log(upcomingEvent);
  let target = document.querySelector("#region-main");
  let targetChild = document.querySelector("#user-notifications")
  let element = document.createElement("div");
  element.classList.add("top-cal")
  target.insertBefore(element,targetChild);
  element.innerHTML = upcomingEvent;
});