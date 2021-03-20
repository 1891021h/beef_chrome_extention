let button = document.createElement('div');
button.setAttribute('style', 'text-align:right;');
button.innerHTML = '<button id="create">情報送信</button>';
let target = document.querySelector('.content .clearfix');
target.insertBefore(button,target.querySelector('h3'));

document.getElementById("create").addEventListener("click", function() {
    pdfMake.fonts = {
        yourFontName: {
          normal: 'https://example.com/fonts/fontFile.ttf',
          bold: 'https://example.com/fonts/fontFile2.ttf',
          italics: 'https://example.com/fonts/fontFile3.ttf',
          bolditalics: 'https://example.com/fonts/fontFile4.ttf'
        }
    }

    // JSON形式で content にPDF出力用のデータを設定
    var pdfContent = {
        content: [
            { text: "This is pdfmake test."},
            { text: "これは等幅ゴシック体(ipagp.tff)のテストです。", font: "IPAmincho"},
            { text: "これは等幅明朝体(ipamp.tff)のテストです。", font: "IPAgothic"}
    ],
    defaultStyle: {
        font: 'yourFontName'
      }
    }

    // pdfmakeで content を設定した変数を引数としてPDF生成
    pdfMake.createPdf(pdfContent).open();
  })    