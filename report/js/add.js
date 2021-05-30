const advice = document.querySelector('textarea[name="t_report[advice_from_the_instructor]"]');
advice.value = "***********************\n【次回の特訓】\n生徒：校舎\n講師：校舎\n***********************";

const commentSet = document.querySelector("#formset-comment-info");
commentSet.insertAdjacentHTML('afterbegin','<div class="import-button"><span id="import-previous">前回のデータをインポート</span></div>');

const askPassword = () => {
    myPassword = prompt("この機能は限定公開です。パスワードを入力してください。","");
    let bool;
    if (myPassword == "e70") {
        bool = true;
    } else {
        bool = false;
    };
    return bool;
}

const  importPrevious = () => {
    const preUrl = document.getElementById("pre-url").href;
        if (askPassword()) {
        fetch(preUrl)
        .then(function(response){ return response.text(); })
        .then(text => new DOMParser().parseFromString(text, "text/html"))
        .then(function(text){
            console.log(text);
            const previousContent = text.querySelector("#formset-comment-info > div > div:nth-child(4) > div:nth-child(1) > div > div > p")
            const previousAdvice = text.querySelector("#formset-comment-info > div > div:nth-child(4) > div:nth-child(2) > div > div > p")
            const previousTheGoal = text.querySelector("#formset-comment-info > div > div:nth-child(3) > div:nth-child(1) > div > div > p")
            
            document.querySelector('textarea[name="t_report[special_training_info]"]').value = previousContent.innerText;
            document.querySelector('textarea[name="t_report[advice_from_the_instructor]"]').value = previousAdvice.innerText;
            document.querySelector('textarea[name="t_report[next_time_goals]"]').value = previousTheGoal.innerText;
            });
        } else {
            alert('パスワードが違います');
        }
}

document.getElementById("import-previous").addEventListener('click',importPrevious);