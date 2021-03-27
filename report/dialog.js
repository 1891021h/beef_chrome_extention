document.body.appendChild(function(){
    sc = document.createElement("script");
    const code = function(){

        const textarea = document.querySelector('#request_test_text');
        textarea.classList.add("hidden-textarea");
        textarea.insertAdjacentHTML('afterend','<div id="controler-text"></div>');
        
        //ガイド書くところ
        let area = document.querySelector('#controler-text');
        
        //編集ボタン
        const editButoons = document.getElementsByName('edit');
        //編集し始めたら一旦テキストエリアとガイドは非表示
        editButoons.forEach(function(node){
            node.addEventListener("click",function(){
                textarea.classList.add("hidden-textarea");
                area.classList.add("hidden-area");       
            });
        });

        //テスト
        function testRequestControl(){
            let subjectId = document.querySelector("#m_subject_id").value;
            console.log(`科目IDは${subjectId}`);
            let currentText = document.querySelector('.select2-selection__rendered').innerText;
            if(subjectId == 12 || subjectId == 13){
                area.innerHTML = 'この科目は理系科目です。生徒が解答する問題を講師が指定してください。';
                textarea.classList.remove("hidden-textarea");
                area.classList.remove("hidden-area");  
            } else {
                console.log("この科目は理系科目ではありません。");
                eachReferenceBook(currentText);
            }
        }

        function createSelect(array){
            const existenseSelect = document.createElement("select");
            existenseSelect.setAttribute("id","existense-select");
            existenseSelect.addEventListener("change",function(){
                textarea.value = document.getElementById("existense-select").value;
            });
            for (const val of array){
                const option = document.createElement("option");
                option.innerText = val;
                existenseSelect.appendChild(option);
            }
            return existenseSelect;
        }

        //参考書各論
        const eachReferenceBook = (currentText) => {
            switch (currentText) {
              case "【改訂新版】システム英単語Basic":
                createPullDown(["あり","なし"]);
                break;
              case "英語長文レベル別３":
                area.appendChild(createSelect(["あり","なし"]));
                textarea.value = document.getElementById("existense-select").value;
                area.classList.remove("hidden-textarea");
                break;
              case "英文読解入門 基本はここだ！":
                area.appendChild(createSelect(["あり","なし","すこし"]));
                textarea.value = document.getElementById("existense-select").value;
                area.classList.remove("hidden-textarea");
                break;
              default:
                area.innerHTML = "";
                area.appendChild(createSelect(["なし"]));
                textarea.value = document.getElementById("existense-select").value;
                area.classList.remove("hidden-textarea");
            }
          };
        
        //プルダウンつくる
        const createPullDown = (array) => {
            area.innerHTML = "";
            area.appendChild(createSelect(array));
            area.classList.remove("hidden-area");
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
                    testRequestControl();
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