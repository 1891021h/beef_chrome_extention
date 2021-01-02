var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {

	// ここにjQueryの記述をする
    $(function() {
        $.ajax({
            type: 'GET',
            url: 'https://beef.center.kobe-u.ac.jp/2020/my/',
            dataType: 'html',
            success: function(data) {
                console.log($(data).find('.tab-pane'));
            }
        });
    });
    // document.addEventListener('DOMContentLoaded', () => {
    //   let myXml = new XMLHttpRequest();
    //   myXml.onreadystatechange = function() {
    //       if (myXml.readyState === 4) {
    //           if (myXml.status == 200) {
    //               alert("OK"); //通信成功時
    //               console.log(myXml.response.getElementsByClassName("event-list-content"));
    //           } else {
    //               alert("NO"); //通信失敗時
    //           }
    //       }
    //   }
    //   myXml.onload = function() {
    //       alert("complete"); //通信完了時
    //   }
    //   myXml.open("GET", "https://beef.center.kobe-u.ac.jp/2020/my/", true);
    //   myXml.send(null);
    // });

})
document.head.appendChild(script)
