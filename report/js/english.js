document.body.appendChild(function(){
    sc = document.createElement("script");
    const code = function(){
        //参考書各論
        const eachReferenceBookEnglish = (currentText) => {
            switch (currentText) {
                case "【5訂版】システム英単語Basic":
                    createPullDown(["あり","なし"]);
                    break;
                case "【改訂新版】システム英単語Basic":
                    oldVersion();
                    break;
                case "【5訂版】システム英単語":
                    createPullDown(["あり","なし"]);
                    break;
                case "【改訂新版】システム英単語":
                    createPullDown(["あり","なし"]);
                    break;
                case "システム英単語 Basic(基礎単語のチェック)":
                    pleaseUseAlternative("【5訂版】システム英単語Basic");
                    break;
                case "システム英単語 Basic(１～３章)":
                    pleaseUseAlternative("【5訂版】システム英単語Basic");
                    break;
                case "システム英単語 Basic(４章)":
                    pleaseUseAlternative("【5訂版】システム英単語Basic");
                    break;
                case "システム英単語(１～２章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case "システム英単語(１～４章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case "システム英単語(５章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case ">システム英単語(3章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case "システム英単語(4章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case "速読英熟語":
                    ;
                    break;
                case "速読英熟語(熟語)":
                    oldVersion();
                    break;
                case "速読英熟語(シャドーイング)":
                    area.innerHTML = "";
                    area.appendChild(createSelect(["なし"]));
                    textarea.value = document.getElementById("existense-select").value;
                    const msg = document.createElement('div');
                    msg.innerText = ('シャドーイングの確認テストはありません。熟語の確認テストを受験させたい場合は，「速読英熟語」を別に選択してください。');
                    area.appendChild(msg);
                    area.classList.remove("hidden-area");
                    break;
                case "肘井学のゼロから英文法":
                    createPullDown(["あり","なし"]);
                    break;
                case "全レベル問題集 英文法 2入試必修・共通テスト":
                    createPullDown(["あり","なし"]);
                    break;
                case "全レベル問題集 英文法 2センター試験レベル":
                    oldVersion();
                    break;
                case "［4thEd］NextStage":
                    createPullDown(["あり","なし"]);
                    break;
                case "［4thEd］NextStage(文法・語法・会話)":
                    pleaseUseAlternative("［4thEd］NextStage");
                    break;
                case "［4thEd］NextStage(発音・アクセント)":
                    pleaseUseAlternative("［4thEd］NextStage");
                    break;
                case "[四] スクランブル英文法・語法":
                    createPullDown(["あり","なし"]);
                    break;
                case "[四] スクランブル英文法・語法(文法・語法・会話)":
                    pleaseUseAlternative("[四] スクランブル英文法・語法");
                    break;
                case " [四] スクランブル英文法・語法(発音・アクセント)":
                    pleaseUseAlternative("[四] スクランブル英文法・語法");
                    break;
                case "Vintage　NewEdition":
                    createPullDown(["あり","なし"]);
                    break;
                case "Vintage New Edition(文法・語法・会話)":
                    pleaseUseAlternative("Vintage　NewEdition");
                    break;
                case "Vintage New Edition(発音・アクセント)":
                    pleaseUseAlternative("Vintage　NewEdition");
                    break;
                case "Vintage 3rd Edition":
                    oldVersion();
                    break;
                case "肘井学の読解のための英文法":
                    createPullDown(["あり","なし"]);
                    break;
                case "基礎英文解釈の技術100":
                    createPullDown(["あり","なし"]);
                    break;
                case "入門英文解釈70":
                    createPullDown(["あり","なし"]);
                    break;
                case "英語長文ハイトレ２":
                    oldVersion();
                    break;
                case "[新々装版] 英語長文ハイトレ2":
                    createPullDown(["あり","なし"]);
                    break;
                case "ポラリスレベル1":
                    createPullDown(["あり","なし"]);
                    break;
                case "英語長文レベル別３":
                    oldCurriculum();
                    break;
                case "英文読解入門 基本はここだ！":
                    oldCurriculum();
                    break;
                case "英文法基礎パターンドリル":
                    oldCurriculum();
                    break;
                case "やっておきたい300":
                    oldCurriculum();
                    break;
                case "中学英語をもう一度ひとつひとつわかりやすく。":
                    createPullDown(["あり","なし"]);
                    break;
                case "大岩英文法英語長文編"://区別のしようがない
                    createPullDown(["あり","なし"]);
                    break;
                case "英文読解の透視図":
                    createPullDown(["あり","なし"]);
                    break;
                case "ポレポレ 英文読解プロセス50":
                    createPullDown(["あり","なし"]);
                    break;
                case "英会話問題のトレーニング":
                    createPullDown(["あり","なし"]);
                    break;
                case "英語整序問題精選600":
                    createPullDown(["あり","なし"]);
                    break;
                case "英作文ハイトレ　自由英作文編":
                    createPullDown(["あり","なし"]);
                    break;
                case "英作文ハイトレ　和文英訳編":
                    createPullDown(["あり","なし"]);
                    break;
                case "英作文ハイトレ和文英訳編 (例題)":
                    createPullDown(["あり","なし"]);
                    break;
                case "英作文ハイトレ 和文英訳編（語法文例・テーマ別文例）":
                    createPullDown(["あり","なし"]);
                    break;
                case "英作文ハイトレ 和文英訳編":
                    createPullDown(["あり","なし"]);
                    break;
                case "英文和訳演習 入門篇":
                    createPullDown(["あり","なし"]);
                    break;
                case "英文和訳演習 基礎篇":
                    createPullDown(["あり","なし"]);
                    break;
                case "英文和訳演習 中級篇":
                    createPullDown(["あり","なし"]);
                    break;
                case "英文和訳演習 上級篇":
                    createPullDown(["あり","なし"]);
                    break;
                case "短期で攻める 英語整序問題200":
                    createPullDown(["あり","なし"]);
                    break;
                case "石井雅勇の「前置詞」":
                    createPullDown(["あり","なし"]);
                    break;
                case "最難関大への英作文":
                    createPullDown(["あり","なし"]);
                    break;
                case "英文解釈要約精講[新装版](Exercise)":
                    createPullDown(["あり","なし"]);
                    break;
              default:
                area.innerHTML = "";
                area.appendChild(createSelect(["あり","なし"]));
                textarea.value = document.getElementById("existense-select").value;
                // const outOf = document.createElement('div');
                // outOf.innerText = ('その参考書はルート外です。');
                // area.appendChild(outOf);
                area.classList.remove("hidden-area");
            }
          };
    }
    src = code.toString().slice(11,-1);
    sc.type="text/javascript";
    sc.text=src
    return sc;
  }()
  );