/****** 先週までの特訓を最大2か月分検索 ******/
// 日付の取得
const today = new Date();
let lastMonth = ( '00' + today.getMonth() ).slice( -2 );
let month = ( '00' + today.getMonth() + 1 ).slice( -2 );
let day = ( '00' + today.getDate() ).slice( -2 );
let enc = encodeURI('別所');

// 検索する情報の取得
let col4 = document.querySelector('#formset-info .col-sm-4').querySelectorAll('.form-group');
let col3 = document.querySelector('#formset-info .col-sm-3').querySelectorAll('.form-group');
let col5 = document.querySelector('#formset-info .col-sm-5 .form-group:nth-child(2)').querySelectorAll('.col-sm-6:nth-child(2)');

let dataList = [];
for(let i = 1; i < col4.length; i++){
    let value = col4[i].querySelector('.form-control-static').innerText;
    dataList.push(value);
}
for(let i = 0; i < col3.length; i++){
    let value = col3[i].querySelector('.form-control-static').innerText;
    dataList.push(value);
}
col5.forEach(function(node){
    time = node.querySelector('.form-control-static').innerText;
    dataList.push(time);
});

//URL生成
const url = "https://www.takedajuku-system.com/t-student-special-training-schedules/search-list?TStudents%5Blast_name%5D={STLASTNAME}&TStudents%5Bfirst_name%5D={STFIRSTNAME}&TStudentSpecialTrainingSchedules%5Btest_start_date_from%5D=2021%2F{FROMMONTH}%2F{FROMDAY}+00%3A00&TStudentSpecialTrainingSchedules%5Btest_start_date_to%5D=2021%2F{TOMONTH}%2F{TODAY}+{TOTIME}&TLecturers%5Blast_name%5D={LTRLASTNAME}&TLecturers%5Bfirst_name%5D={LTRFIRSTNAME}&search=%E6%A4%9C%E7%B4%A2%E3%81%99%E3%82%8B#tab3";

let toMonth = dataList[7].substr(5,2);
let toDay = dataList[7].substr(8,2);
let fromMonth = Number(toMonth) - 1;
fromMonth = ( '00' + fromMonth).slice( -2 );
let fromDay = toDay;
let toTime = dataList[7].substr(14,5);
toTime = toTime.replace(':','%3A');

let stName = dataList[2].split(' ');
let ltrName = dataList[6].split(' ');

replaced = url.replace('{FROMMONTH}',fromMonth).replace('{FROMDAY}',fromDay).replace('{TOMONTH}',toMonth).replace('{TODAY}',toDay).replace('{TOTIME}',toTime).replace('{STLASTNAME}',stName[0]).replace('{STFIRSTNAME}',stName[1]).replace('{LTRLASTNAME}',ltrName[0]).replace('{LTRFIRSTNAME}',ltrName[1]);

let space = document.querySelector('.content form');
//検索結果にアクセス
fetch(replaced)
.then(function(response){ return response.text(); })
.then(text => new DOMParser().parseFromString(text, "text/html"))
.then(function(text){
    const preSt = text.querySelector('.table.table-striped.table-hover tbody tr:nth-last-child(2) a');
    if (preSt === null){
        console.log('初回特訓');
    } else{
        const preUrl = 'https://www.takedajuku-system.com' + preSt.getAttribute('href');
        space.insertAdjacentHTML('beforebegin','<div>まず先週のレポートに宿題達成・テスト結果を入力すること</div><a href="' + preUrl +'" class="btn-animation-02" id="pre-url"><span>先週のレポートへ</span></a>');
    }
});

//フォーム
//space.insertAdjacentHTML('afterbegin','<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQFUR-_DfJTJlqGvphfAassAGty2_PcxccITFMWg4IOFT7vA/viewform?embedded=true" width="800" height="300" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>');