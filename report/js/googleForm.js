const currentSubject = document.querySelector("#formset-info .col-sm-3 .col-sm-8").innerText;//科目を取得する

const dateFormForTeachers = document.querySelector('#t_report_test_start_date');//既存のフォームを取得
dateFormForTeachers.classList.add("super-hidden-area");//既存のフォームを隠す（display:none/dialog.css）
dateFormForTeachers.insertAdjacentHTML('beforebegin','<input id="my-date-form" type="datetime-local" name="example" min="2021-04-01T00:00" max="2022-03-31T23:59">');//その上に新しいフォーム作成
dateFormForTeachers.parentNode.parentNode.classList.remove('col-sm-4');

const undecidedCol = document.querySelector('#undecided_flg_checkbox').parentNode.parentNode;
//undecidedCol.classList.remove('col-sm-4');

const myDateForm = document.querySelector('#my-date-form');//自作フォームをパス取得
myDateForm.addEventListener('change',function () {
    dateFormForTeachers.value = myDateForm.value;
});//自作フォームにchangeイベントを追加。変更したらオリジナルフォームの値を変更
myDateForm.value = dateFormForTeachers.value.replace(/\//g,'-').replace(' ','T');//自作フォームの値はオリジナルフォームの値にする。ただし置換。/を-に，空白をTに。

const sendGoogleForm = () => {//Googleフォーム送信処理（詳細割愛）
    const nextDateWill = myDateForm.value;
    if(!(comparedNextDateSoFar == nextDateWill)) {
        const dummy_send_target = document.createElement("iframe");
        dummy_send_target.style.display = "none";
        dummy_send_target.name = "dummy_send_target";
        document.body.appendChild(dummy_send_target);

        const form_iframe = document.createElement("iframe");
        const foo = dataList[6];
        const bar = `${dataList[2]}／${currentSubject.replace(/\r?\n/g," ")}／${dataList[0]}`;
        const baz = `${nextDateWill.slice(0,10).replace(/-/g,'/')} ${nextDateWill.slice(11)}`;

        form_iframe.src = encodeURI(`https://docs.google.com/forms/u/0/d/e/1FAIpQLScb5fguhWD92wSlbe2murPAZdFzbIobIB_PWdWo_RWbjpCVaQ/formResponse?entry.1385859732=${foo}&entry.154293683=${bar}&entry.1043867152=${baz}&submit=Submit`);
        
        form_iframe.style.display = "none";    
        document.body.appendChild(form_iframe);
        console.log('次回振替');
    } else {
        console.log('次回通常');
        console.log(comparedNextDateSoFar);
        console.log(nextDateWill);
    }
}

const nextDateSoFar = document.querySelector("#formset-info .col-sm-5 .form-group:last-child div:nth-child(2) div:last-child p").innerText;
const comparedNextDateSoFar = `${nextDateSoFar.slice(0,10)}${nextDateSoFar.slice(13)}`.replace(/\//g,'-').replace(' ','T');

const saveButton = document.querySelector(".pull-right.btn-group").querySelector("button:last-child");//保存ボタンをパスで取得
saveButton.addEventListener("click",sendGoogleForm);//保存ボタンにクリックイベントを追加

document.body.insertAdjacentHTML("beforeEnd","<form id=\"custom_form\" target=\"dummy_send_target\" style=\"display:none;\"><button type=\"submit\">送信</button></form>");//ダミーボタン

// document.querySelector("#formset-school-info > div > div:nth-child(1) > div.col-sm-10 > div > label:nth-child(1)").classList.add('borther');
// document.querySelector("#formset-school-info > div > div:nth-child(1) > div.col-sm-10 > div > label:nth-child(3)").classList.add('borther');
document.querySelector("#formset-school-info > div > div:nth-child(1) > div.col-sm-10 > div > div:nth-child(2)").classList.add('enough');