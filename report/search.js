/******* 
 * 2021 version.
 * Ryo TAKAYANAGI, Nishinomiya-Kitaguchi-Kou, Hyogo Pref., JP
*/

fetch('https://www.takedajuku-system.com/t-students/search-list/02')
.then(function(response){ return response.text(); })
.then(text => new DOMParser().parseFromString(text, "text/html"))
.then(function(text){
  let stList = [];
  let nodeList = text.querySelectorAll('.table .clickable');
  nodeList.forEach(function(node){
    stNumber = node.querySelector("td:nth-child(2)").innerHTML;
    stName = node.querySelector("td:nth-child(3)").innerHTML;
      let stFamilyName = stName.split('　')[0];
      let stFirstName = stName.split('　')[1];
    stList.push([stNumber,stName,stFamilyName,stFirstName]);
  })
  setStList(stList);
  const param = location.search;
  //console.log(getParam('TStudents%5Blast_name%5D'));
});

function setStList(stList){
  let target = document.querySelector(".search-in").children[1].firstElementChild.firstElementChild;
  let targetInput = target.querySelector(".text");
  target.removeChild(targetInput);
  // console.log(target);
  // console.log(targetInput);
  //let targetChild = document.querySelector("#tstudents-last-name");
  let element = document.createElement("select");
  element.classList.add("form-control");
  element.setAttribute('name','TStudents[last_name]');
  element.setAttribute('id',"tstudents-last-name");

  let optionNow = document.createElement('option');
  stNow = getParam('TStudents%5Blast_name%5D');
  optionNow.setAttribute('value', stNow);
  optionNow.innerHTML = stNow;
  element.appendChild(optionNow);
  
  for(let i = 0; i < stList.length; i++){
    let option = document.createElement('option');
    option.setAttribute('value', stList[i][2]);
    option.innerHTML = stList[i][2] +"("+ stList[i][3] +")";
    console.log(option);
    element.appendChild(option);
  };
  console.log(element);
  target.appendChild(element);
  // element.innerHTML = upcomingEvent;
}

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

let content3 = document.querySelector("#tab3");
content3.classList.add("active");
let content1 = document.querySelector("#tab1");
content1.classList.remove("active");

let navTab3 = document.querySelector(".nav-tabs li:nth-child(2)");
navTab3.classList.add("active");
let navTab1 = document.querySelector(".nav-tabs li:first-child");
navTab1.classList.remove("active");

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// let target = document.querySelector("#sidr-id-collapseOne ul li a:first-child")
// target.href = "https://www.takedajuku-system.com/t-student-special-training-schedules/search-list#tab3";
// console.log(target);
// console.log(target.href);


// https://www.takedajuku-system.com/t-student-special-training-schedules/search-list?TStudents%5Blast_name%5D=&TStudents%5Bfirst_name%5D=&TStudentSpecialTrainingSchedules%5Bpresence_or_absence_cd%5D=&TStudentSpecialTrainingSchedules%5Btest_start_date_from%5D=2021%2F03%2F15+00%3A00&TStudentSpecialTrainingSchedules%5Btest_start_date_to%5D=2021%2F03%2F15+23%3A59&search=%E6%A4%9C%E7%B4%A2%E3%81%99%E3%82%8B#tab3

const today = new Date();
let lastMonth = ( '00' + today.getMonth() ).slice( -2 );
let month = ( '00' + today.getMonth() + 1 ).slice( -2 );
let day = ( '00' + today.getDate() ).slice( -2 );
let enc = encodeURI('別所');