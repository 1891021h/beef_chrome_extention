const sendGoogleForm = (nextDate) => {
    const dummy_send_target = document.createElement("iframe");
    dummy_send_target.style.display = "none";
    dummy_send_target.name = "dummy_send_target";
    document.body.appendChild(dummy_send_target);

    const form_iframe = document.createElement("iframe");
    const foo = "foo";
    const bar = "bar";
    const baz = "baz";

    form_iframe.src = encodeURI(`https://docs.google.com/forms/u/0/d/e/1FAIpQLScb5fguhWD92wSlbe2murPAZdFzbIobIB_PWdWo_RWbjpCVaQ/formResponse?entry.1043867152=${bar}&entry.1385859732=${baz}&entry.154293683=${foo}&submit=Submit`);
    
    form_iframe.style.display = "none";    
    document.body.appendChild(form_iframe);
}

const nextDateSoFar = document.querySelector("#formset-info .col-sm-5 .form-group:last-child div:nth-child(2) div:last-child p").innerText;
const comparedNextDateSoFar = `${nextDateSoFar.slice(0,10)}${nextDateSoFar.slice(13)}`;

const nextDateWill = document.querySelector("#t_report_test_start_date").value;

if(comparedNextDateSoFar == nextDateWill) {
    console.log("次回通常");
} else {
    console.log("次回振替");
}

const saveButton = document.querySelector(".pull-right.btn-group").querySelector("button:last-child");
saveButton.addEventListener("click",sendGoogleForm);

document.body.insertAdjacentHTML("beforeEnd","<form id=\"custom_form\" target=\"dummy_send_target\"><button type=\"submit\">送信</button></form>");