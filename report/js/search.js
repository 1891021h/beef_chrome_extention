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
});

removeClass("btn-primary");
removeClass("btn-info");
preWeek();
makeScheduleTabDefault();


/**************************************************
 * functions
 **************************************************/

/***** 担当生徒名をプルダウンにセット *****/
function setStList(stList){
  let target = document.querySelector(".search-in").children[1].firstElementChild.firstElementChild;
  let targetInput = target.querySelector(".text");
  target.removeChild(targetInput);
  let element = document.createElement("select");
  element.classList.add("form-control");
  element.setAttribute('name','TStudents[last_name]');
  element.setAttribute('id',"tstudents-last-name");

  let optionNow = document.createElement('option');
  let stNow = getParam('TStudents%5Blast_name%5D');
  optionNow.setAttribute('value', stNow);
  optionNow.innerHTML = stNow;
  element.appendChild(optionNow);//検索中
  
  for(let i = 0; i < stList.length; i++){
    let option = document.createElement('option');
    option.setAttribute('value', stList[i][2]);
    option.innerHTML = stList[i][2] +"("+ stList[i][3] +")";
    element.appendChild(option);
  };

  let optionNone = document.createElement('option');
  optionNone.setAttribute('value', '');
  optionNone.innerHTML = '指示なし';
  element.appendChild(optionNone);//検索中
  
  target.appendChild(element);
}

/* 先週ボタンの表示　*/
function preWeek(){
  let target = document.querySelector(".btn-warning").parentNode;
  let targetChild = document.querySelector(".btn-warning");
  target.insertAdjacentHTML('afterbegin','<button type=\"button\" class=\"btn btn-primary\" onclick=\"setDay(\'-7\');\">先週</button>');
}

/* クラスを削除する汎用の関数 */
function removeClass(text){
  let query = "." + text;
  let target = document.querySelectorAll(query);
  target.forEach(function(node){
    node.classList.remove(text);
  });
}

/* 特訓スケジュールのタブを最初から開く */
function makeScheduleTabDefault(){
  let content3 = document.querySelector("#tab3");
  content3.classList.add("active");
  let content1 = document.querySelector("#tab1");
  content1.classList.remove("active");

  let navTab3 = document.querySelector(".nav-tabs li:nth-child(2)");
  navTab3.classList.add("active");
  let navTab1 = document.querySelector(".nav-tabs li:first-child");
  navTab1.classList.remove("active");
}

/* URLからクエリを取得する */
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}