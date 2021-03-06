document.body.appendChild(function(){
    sc = document.createElement("script");
    const code = function(){
        //参考書各論
        const eachReferenceBookEnglish = (currentText) => {
            switch (currentText) {
                case "【改訂新版】システム英単語Basic":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英語長文レベル別３":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文読解入門 基本はここだ！":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文法基礎パターンドリル":
                    createPullDown(["あり", "なし"]);
                    break;
                case "大岩英文法英語長文編":
                    createPullDown(["なし"]);
                    break;
                case "大岩英文法超基礎文法編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "【改訂新版】システム英単語":
                    createPullDown(["あり", "なし"]);
                    break;
                case "［7thEd］Forest":
                    createPullDown(["なし"]);
                    break;
                case "［4thEd］NextStage":
                    createPullDown(["あり", "なし"]);
                    break;
                case "やっておきたい300":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英語長文ハイトレ２":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英語長文レベル別４":
                    createPullDown(["あり", "なし"]);
                    break;
                case "速読英熟語":
                    createPullDown(["あり", "なし"]);
                    break;
                case "入門英文解釈70":
                    createPullDown(["あり", "なし"]);
                    break;
                case "やっておきたい500":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文法ファイナル標準編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "頻出英語長文":
                    createPullDown(["あり", "なし"]);
                    break;
                case "ポレポレ 英文読解プロセス50":
                    createPullDown(["あり", "なし"]);
                    break;
                case "やっておきたい700":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英語長文ハイトレ３":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文法ファイナル難関編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "[改訂版]リンガメタリカ":
                    createPullDown(["あり", "なし"]);
                    break;
                case "キムタツリスニング":
                    createPullDown(["なし"]);
                    break;
                case "キムタツリスニングSUPER":
                    createPullDown(["なし"]);
                    break;
                case "TopGrade":
                    createPullDown(["あり", "なし"]);
                    break;
                case "スーパー講義 英文法・語法 正誤":
                    createPullDown(["あり", "なし"]);
                    break;
                case "やっておきたい1000":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英会話問題のトレーニング":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英語整序問題精選600":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英作文ハイトレ　自由英作文編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英作文ハイトレ　和文英訳編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文和訳演習 入門篇":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文和訳演習 基礎篇":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文和訳演習 中級篇":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文和訳演習 上級篇":
                    createPullDown(["あり", "なし"]);
                    break;
                case "Rise読解演習４　最難関編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "短期で攻める 英語整序問題200":
                    createPullDown(["あり", "なし"]);
                    break;
                case "読み解き英語長文800":
                    createPullDown(["あり", "なし"]);
                    break;
                case "リスニングのトレーニング 必修編":
                    createPullDown(["なし"]);
                    break;
                case "リスニングのトレーニング 上級編":
                    createPullDown(["なし"]);
                    break;
                case "医歯薬系英単語600":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英文読解の透視図":
                    createPullDown(["あり", "なし"]);
                    break;
                case "石井雅勇の「前置詞」":
                    createPullDown(["あり", "なし"]);
                    break;
                case "最難関大への英作文":
                    createPullDown(["あり", "なし"]);
                    break;
                case "短期で攻める発アク300":
                    createPullDown(["なし"]);
                    break;
                case "POWER　STAGE":
                    createPullDown(["あり", "なし"]);
                    break;
                case "Vintage　NewEdition":
                    createPullDown(["あり", "なし"]);
                    break;
                case "Canpass英語":
                    createPullDown(["あり", "なし"]);
                    break;
                case "ポラリスレベル３":
                    createPullDown(["あり", "なし"]);
                    break;
                case "東大の英語27ヵ年":
                    createPullDown(["なし"]);
                    break;
                case "東大の英語リスニング15ヵ年":
                    createPullDown(["なし"]);
                    break;
                case "河合　マーク式総合　英語":
                    createPullDown(["なし"]);
                    break;
                case "駿台　センター実戦　英語":
                    createPullDown(["なし"]);
                    break;
                case "Ｚ会　センター実戦　英語":
                    createPullDown(["なし"]);
                    break;
                case "河合　センターパック　英語":
                    createPullDown(["なし"]);
                    break;
                case "駿台　センターパック　英語":
                    createPullDown(["なし"]);
                    break;
                case "Ｚ会　センターパック　英語":
                    createPullDown(["なし"]);
                    break;
                case "Evergreen":
                    createPullDown(["なし"]);
                    break;
                case "センター試験のツボ　リスニング":
                    createPullDown(["なし"]);
                    break;
                case "センター試験のツボ　第1・2・3問":
                    createPullDown(["なし"]);
                    break;
                case "きめる！共通テスト英語":
                    createPullDown(["あり", "なし"]);
                    break;
                case "[五] 英単語ターゲット1900":
                    createPullDown(["あり", "なし"]);
                    break;
                case "[三] でる順ターゲット 中学英単語1800":
                    createPullDown(["あり", "なし"]);
                    break;
                case "[三] UPGRADE　英文法・語法問題":
                    createPullDown(["あり", "なし"]);
                    break;
                case "[四] スクランブル英文法・語法":
                    createPullDown(["あり", "なし"]);
                    break;
                case "［六］速読英単語 必修編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "段階突破テスト(英語)":
                    createPullDown(["slackで依頼のこと"]);
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
                    pleaseUseAlternative("【5訂版】システム英単語Basic");
                    break;
                case "システム英単語(１～４章)":
                    pleaseUseAlternative("【5訂版】システム英単語Basic");
                    break;
                case "システム英単語(５章)":
                    pleaseUseAlternative("【5訂版】システム英単語Basic");
                    break;
                case "速読英熟語(熟語)":
                    createPullDown(["あり", "なし"]);
                    break;
                case "速読英熟語(シャドーイング)":
                    createPullDown(["ｼｬﾄﾞｰｲﾝｸﾞは なし"]);
                    break;
                case "［4thEd］NextStage(文法・語法・会話)":
                    pleaseUseAlternative("［4thEd］NextStage");
                    break;
                case "［4thEd］NextStage(発音・アクセント)":
                    pleaseUseAlternative("［4thEd］NextStage");
                    break;
                case "英会話題題のトレーニング(第1章)":
                    createPullDown(["なし"]);
                    break;
                case "英会話題題のトレーニング(第2章)":
                    createPullDown(["なし"]);
                    break;
                case "英会話題題のトレーニング(第3章)":
                    createPullDown(["なし"]);
                    break;
                case "大岩英文法超基礎文法編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "キムタツリスニング":
                    createPullDown(["なし"]);
                    break;
                case "英作文ハイトレ和文英訳編 (例題)":
                    pleaseUseAlternative("英作文ハイトレ 和文英訳編");
                    break;
                case "英作文ハイトレ 和文英訳編（語法文例・テーマ別文例）":
                    pleaseUseAlternative("英作文ハイトレ 和文英訳編");
                    break;
                case "英作文ハイトレ 和文英訳編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "リスニングのトレーニング 必修編":
                    createPullDown(["なし"]);
                    break;
                case "短期で攻める発アク300":
                    createPullDown(["なし"]);
                    break;
                case "POWER STAGE（文法・語法・会話）":
                    pleaseUseAlternative("POWER　STAGE");
                    break;
                case "POWER STAGE（発音・アクセント）":
                    pleaseUseAlternative("POWER　STAGE");
                    break;
                case "Vintage New Edition(文法・語法・会話)":
                    pleaseUseAlternative("Vintage　NewEdition");
                    break;
                case "Vintage New Edition(発音・アクセント)":
                    pleaseUseAlternative("Vintage　NewEdition");
                    break;
                case "センター試験のツボ　リスニング	":
                    createPullDown(["なし"]);
                    break;
                case "センター試験のツボ　第1・2・3問":
                    createPullDown(["なし"]);
                    break;
                case "	[三] UPGRADE(文法・語法・会話)	":
                    pleaseUseAlternative("[三] UPGRADE　英文法・語法問題");
                    break;
                case "[三] UPGRADE(発音・アクセント)":
                    pleaseUseAlternative("[三] UPGRADE　英文法・語法問題");
                    break;
                case "[四] スクランブル英文法・語法(文法・語法・会話)":
                    pleaseUseAlternative("[四] スクランブル英文法・語法");
                    break;
                case "	[四] スクランブル英文法・語法(発音・アクセント)":
                    pleaseUseAlternative("[四] スクランブル英文法・語法");
                    break;
                case "［改］英検2級総合対策教本":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英検2級ライティング大特訓":
                    createPullDown(["あり", "なし"]);
                    break;
                case "TEAP 全パート徹底トレーニング":
                    createPullDown(["あり", "なし"]);
                    break;
                case "短期完成 英検2級 3回過去問題集":
                    createPullDown(["なし"]);
                    break;
                case "［2018］英検2級 過去6回 全問題集":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英検2級面接大特訓":
                    createPullDown(["あり", "なし"]);
                    break;
                case "［三］英検準1級 文で覚える単熟語":
                    createPullDown(["あり", "なし"]);
                    break;
                case "必携英語表現集":
                    createPullDown(["なし"]);
                    break;
                case "英語ライティングの原理原則":
                    createPullDown(["あり", "なし"]);
                    break;
                case "［新］英検2級をひとつひとつわかりやすく。":
                    createPullDown(["なし"]);
                    break;
                case "［四］TOEFLテスト 英単語3800":
                    createPullDown(["あり", "なし"]);
                    break;
                case "完全攻略! TOEFL IBTテスト":
                    createPullDown(["なし"]);
                    break;
                case "TOEFL IBTテスト 必修フレーズ100":
                    createPullDown(["なし"]);
                    break;
                case "TOEFL IBT TEST リスニングのエッセンス":
                    createPullDown(["なし"]);
                    break;
                case "［4］ETS公認ガイド TOEFL IBT":
                    createPullDown(["あり", "なし"]);
                    break;
                case "［改］TOEFL スピーキング問題110":
                    createPullDown(["なし"]);
                    break;
                case "Official TOEFL iBT Tests Volume2":
                    createPullDown(["なし"]);
                    break;
                case "TOEIC L＆R 出る単特急 金のフレーズ":
                    createPullDown(["あり", "なし"]);
                    break;
                case "公式TOEIC Listening＆Reading 問題集3":
                    createPullDown(["あり", "なし"]);
                    break;
                case "公式TOEIC Listening＆Reading 問題集2":
                    createPullDown(["あり", "なし"]);
                    break;
                case "公式TOEIC Listening＆Reading 問題集1":
                    createPullDown(["あり", "なし"]);
                    break;
                case "TOEIC（R）WRITING テスト問題集":
                    createPullDown(["あり", "なし"]);
                    break;
                case "TOEIC（R）SPEAKING テスト問題集":
                    createPullDown(["なし"]);
                    break;
                case "頂上制覇 TOEIC S/W 究極の技術":
                    createPullDown(["あり", "なし"]);
                    break;
                case "［改］英検準1級総合対策教本":
                    createPullDown(["あり", "なし"]);
                    break;
                case "短期完成 英検準1級 3回過去問題集":
                    createPullDown(["なし"]);
                    break;
                case "［2018］英検準1級 過去6回 全問題集":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英検準1級面接大特訓":
                    createPullDown(["あり", "なし"]);
                    break;
                case "システム英単語(3章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case "システム英単語(4章)":
                    pleaseUseAlternative("【5訂版】システム英単語");
                    break;
                case "センター過去問(英語)":
                    createPullDown(["なし"]);
                    break;
                case "Vintage 3rd Edition":
                    createPullDown(["あり", "なし"]);
                    break;
                case "【5訂版】システム英単語":
                    createPullDown(["あり", "なし"]);
                    break;
                case "パラグラフリーディング③":
                    createPullDown(["なし"]);
                    break;
                case "パラグラフリーディング②":
                    createPullDown(["なし"]);
                    break;
                case "パラグラフリーディング①":
                    createPullDown(["なし"]);
                    break;
                case "肘井学のゼロから英文法":
                    createPullDown(["あり", "なし"]);
                    break;
                case "[七] 速読英単語 必修編":
                    createPullDown(["あり", "なし"]);
                    break;
                case "肘井学の読解のための英文法":
                    createPullDown(["あり", "なし"]);
                    break;
                case "【5訂版】システム英単語Basic":
                    createPullDown(["あり", "なし"]);
                    break;
                case "超入門英文解釈の技術60":
                    createPullDown(["なし"]);
                    break;
                case "[9]東大の英語25カ年":
                    createPullDown(["なし"]);
                    break;
                case "[新々装版] 英語長文ハイトレ2":
                    createPullDown(["対応中"]);
                    break;
                case "中学英語をもう一度ひとつひとつわかりやすく。":
                    createPullDown(["対応中"]);
                    break;
                case "英文法 レベル別(3)標準編 改訂版":
                    createPullDown(["あり", "なし"]);
                    break;
                case "全レベル問題集 英文法 2センター試験レベル":
                    createPullDown(["あり", "なし"]);
                    break;
                case "ポラリスレベル２":
                    createPullDown(["あり", "なし"]);
                    break;
                case "ポラリスレベル1":
                    createPullDown(["あり", "なし"]);
                    break;
                case "イチから鍛える英語長文300":
                    createPullDown(["あり", "なし"]);
                    break;
                case "イチから鍛える英語長文500":
                    createPullDown(["あり", "なし"]);
                    break;
                case "イチから鍛える英語長文700":
                    createPullDown(["あり", "なし"]);
                    break;
                case "日東駒専&amp;産近甲龍の英語":
                    createPullDown(["なし"]);
                    break;
                case "GMARCH&amp;関関同立の英語":
                    createPullDown(["なし"]);
                    break;
                case "全レベル問題集 英文法 2入試必修・共通テスト 改訂版":
                    createPullDown(["対応中"]);
                    break;
                case "基礎英文解釈の技術100":
                    createPullDown(["あり", "なし"]);
                    break;
                case "英語長文レベル別５":
                    createPullDown(["あり", "なし"]);
                    break;
                case "共通テスト対策 4週間":
                    createPullDown(["なし"]);
                    break;
                case "英文解釈要約精講[新装版](Exercise)":
                    createPullDown(["あり", "なし"]);
                    break;
                case "関正生のリスニング プラチナルール":
                    createPullDown(["なし"]);
                    break;
                case "英文解釈要約精講[新装版](例題)":
                    createPullDown(["例題は不可"]);
                    break;
                case "英単語熟語鉄壁":
                    createPullDown(["あり", "なし"]);
                    break;
                case "共通テスト英語面白いほどとれる本":
                    createPullDown(["なし"]);
                    break;
                case "英語長文ハイトレ1":
                    createPullDown(["あり", "なし"]);
                    break;
                case "世界一わかりやすい英文法・語法特別講座":
                    createPullDown(["なし"]);
                    break;
                case "きめる！共通テスト 英語リスニング":
                    createPullDown(["なし"]);
                    break;
                case "共通テスト実戦模試　英語リスニング":
                    createPullDown(["なし"]);
                    break;
                case "共通テスト 英語の点数が面白いほどとれる本":
                    createPullDown(["あり", "なし"]);
                    break;
                case "共通テスト実戦模試 英語リーディング":
                    createPullDown(["なし"]);
                    break;
                case "ハイスコア！共通テスト攻略 英語リスニング":
                    createPullDown(["なし"]);
                    break;
                case "[六] 英単語ターゲット1900":
                    createPullDown(["あり", "なし"]);
                    break;
                case "共通テスト実戦対策問題集　英語（リーディング）":
                    createPullDown(["あり", "なし"]);
                    break;
                case "ハイスコア！共通テスト攻略 英語リーディング":
                    createPullDown(["あり", "なし"]);
                    break;
                case "solution1":
                    createPullDown(["あり", "なし"]);
                    break;
                case "solution2":
                    createPullDown(["あり", "なし"]);
                    break;
                case "solution3":
                    createPullDown(["あり", "なし"]);
                    break;
                case "NEXUS リスニング＆リーディング":
                    createPullDown(["なし"]);
                    break;
                case "NEXUS　リスニング＆リーディング":
                    createPullDown(["なし"]);
                    break;
                case "駿台共通テスト対策　英語リーディング":
                    createPullDown(["なし"]);
                    break;
                case "[新]FINAL時事英語":
                    createPullDown(["あり", "なし"]);
                    break;
              default:
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

// area.innerHTML = "";
// area.appendChild(createSelect(["なし"]));
// textarea.value = document.getElementById("existense-select").value;
// const msg = document.createElement('div');
// msg.innerText = ('シャドーイングの確認テストはありません。熟語の確認テストを受験させたい場合は，「速読英熟語」を別に選択してください。');
// area.appendChild(msg);
// area.classList.remove("hidden-area");
// break;