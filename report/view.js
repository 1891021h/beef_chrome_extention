let button = document.createElement('div');
button.setAttribute('style', 'text-align:right;');
button.innerHTML = '<button id="create">チェック</button>';
let target = document.querySelector('.content .clearfix');
target.insertBefore(button,target.querySelector('h3'));

let reportButtons = document.querySelector('.content').children[1].querySelectorAll('form');
reportButtons.forEach(function(e){
    e.classList.add('hidden-btn');
});

document.getElementById("create").addEventListener("click", function() {
    const values = getHomeworkValues();//値取得
    let elist = [];
    //宿題それぞれについて
    for(let i = 0; i < values.length; i++){
        let homework = values[i];
        checkTestErrors(homework,elist);
    }

    console.log(elist);
    if(elist == ''){
        reportButtons.forEach(function(e){
            e.classList.remove('hidden-btn');
        });
    } else {
        window.alert(elist.join('\n'));
    }
});

function checkTestErrors(homework,elist){
    let request = homework[0][3];
    if(request == ''){
        elist.push(homework[0][1] + 'のテスト作成依頼が空欄です。');
    } else{
        console.log('OK');              
    }
}

function getHomeworkValues(){
    let values = [];
    let items = document.querySelectorAll('.homework-item');
    items.forEach(function(e){
        //左側
        left = e.querySelector('.col-sm-4').querySelectorAll('.form-group');
        let leftValues = [];
        left.forEach(function(d){
            data = d.children[1].innerText;
            leftValues.push(data);            
        });

        //中央
        centre = e.querySelectorAll('.homework-daily-item');
        let centreValues = [];
        centre.forEach(function(c){
            let tmp = c.querySelectorAll('.col-sm-6');
            let tmps = [];
            tmp.forEach(function(b){
                tmps.push(b.innerText);
            });
            centreValues.push(tmps);
        });
    values.push([leftValues,centreValues]);
    });
    console.log(values);
    /*
        [
            [
                科目，テキスト，範囲，テスト作成依頼
            ],
            [
                [日付，課題]，[日付，課題]，...
            ]
        ]

    */
   return values;
}