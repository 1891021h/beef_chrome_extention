document.body.appendChild(function(){
    sc = document.createElement("script");
    const code = function(){

        const dialog = document.querySelector('.homework-dialog-content');
        const left = dialog.children[0];
        const textarea = document.querySelector('#request_test_text');
        textarea.classList.add("hidden-textarea");
        // textarea.insertAdjacentHTML('beforebegin','<div class"request-controler"><button id="controler-button">ガイド表示</;button></div>');
        textarea.insertAdjacentHTML('afterend','<div id="controler-text"></div>');
        
        //ガイド書くところ
        let area = document.querySelector('#controler-text');
        
        //編集ボタン
        const editButoons = document.getElementsByName('edit');
        //編集し始めたら一旦テキストエリアとガイドは非表示
        editButoons.forEach(function(node){
            node.addEventListener("click",function(){
                textarea.classList.add("hidden-textarea");
                area.classList.add("hidden-textarea");       
            });
        });
        
        //数学
        function math(currentText){
            if(currentText == '［改訂４］初めから始める 数学B'){
                area.innerHTML = '生徒が解答する問題を講師が指定してください。';
                textarea.classList.remove("hidden-textarea");//テキストエリアを表示
                area.classList.remove("hidden-textarea");//テキスト表示     
            }
        }

        //テスト
        function testRequestControl(subjectId){
            const currentText = document.querySelector('.select2-selection__rendered').innerText;
            if(subjectId == '12'){
                area.innerHTML = 'この科目は数学です．';
                textarea.classList.remove("hidden-textarea");//テキストエリアを表示
                area.classList.remove("hidden-textarea");//テキスト表示       
            } else{
                area.innerHTML = 'この科目は数学ではありません．';
                area.classList.remove("hidden-textarea");//テキスト表示  
            }
        }

        //上書きされる関数
        function getReferenceBookById(id) {
            if (!id) {
                $('#reference_book_limit').attr('data-limit', '');
                $('#reference_book_limit').text('');
                $('#homework-history-dialog-button').html('');
                return;
            }

            dispLoading("処理中...");
            $.ajax({
                url: "/ajax/get-m-reference-book",
                dataType: "json",
                type: "POST",
                cache: false,
                data: {
                    m_reference_book_id: id
                },
            })
            // 通信成功時
                .done( function(data) {
                    let limit_message = '';
                    if (data['upper_limit']) {
                        let limit = data['upper_limit'] ? data['upper_limit']  : '';
                        let unit = data['upper_limit_unit'] ? data['upper_limit_unit'] : '';
                        limit_message = '全' + limit + unit;

                        $('#reference_book_limit').attr('data-limit', limit);
                    }else {
                        $('#reference_book_limit').attr('data-limit', '');
                    }

                    let button = '<input type="button" class="btn btn-primary" name="history" value="宿題履歴" onClick="showHomeworkHistoryDialog(' + data['id'] + ');">';
                    $('#reference_book_limit').text(limit_message);
                    $('#homework-history-dialog-button').html(button);
                    const subjectId = document.querySelector("#m_subject_id").getAttribute("value");
                    //testRequestControl();
                    console.log(subjectId);
                })
                // 通信失敗時
                .fail( function(data) {
                })
                // 処理終了時
                .always( function(data) {
                    // Lading 画像を消す
                    removeLoading();
                });
            }
    }
    src = code.toString().slice(11,-1);
    sc.type="text/javascript";
    sc.text=src
    return sc;
  }()
  );