// scotch display,scotch text,しっぽり明朝----------
  (function(d) {
    var config = {
      kitId: 'iim6jay',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
//--------------------------------------------------

// accent-color変化---------------------------------
const root = document.querySelector(':root');

  // 選択可能な色の配列
  var colors = ['#a7536c', '#418266', '#5373a7', '#8e53a7'];

  // ランダムな色を選択
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  root.style.setProperty("--accent-color", randomColor);

$(function(){
   
  $('.btn').on('click', function(){
    $('.object').toggleClass('is-active');
  });
  
});
//--------------------------------------------------

// カウントアップの処理------------------------------
let countup = 0; // カウントアップの初期値

function updateCountup() {
  const countupElement = document.getElementById('countup');
  countupElement.textContent = countup;

  if (countup === 100) {
    // カウントアップが終了したら何らかの処理を実行する
    console.log('Loading complete!');
  } else {
    countup++;
    setTimeout(updateCountup, 10); // 0.1秒ごとにカウントアップを更新
  }
}

// カウントアップ開始
updateCountup();

// ローディング-------------------------------------- 
jQuery(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //2回目以降アクセス時の処理
      console.log('2回目以降のアクセスです');
      $(".loading").addClass('is-active');
      
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
       $(".loading").addClass('is-active');
      $(".loading").removeClass('is-active');
     }, 3000); // ローディングを表示する時間
  }
  }
  webStorage();
 
});

function hideLoadingScreen() {
  const loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'none';
}

//aboutのオブジェクト変化----------------------------
// スクロール時に実行する関数を定義
function handleScroll() {
  // スクロール位置を取得
  var scrollPosition = window.scrollY;

  // 条件に基づいてクラスをトグル
  var square_transform = document.getElementById("square_transform");
  if (scrollPosition > 300) { // 例: 100px以上スクロールしたら is-active クラスを追加、それ以外は削除
    square_transform.classList.add("is-active");
  } else {
    square_transform.classList.remove("is-active");
  }
}
// スクロールイベントリスナーを追加
window.addEventListener("scroll", handleScroll);
//---------------------------------------------------

// footer波------------------------------------------
  var unit = 100,
  canvasList, // キャンバスの配列
  info = {}, // 全キャンバス共通の描画情報
  colorList; // 各キャンバスの色情報
/**
* Init function.
* Initialize variables and begin the animation.
*/
function init() {
  info.seconds = 0;
  info.t = 0;
  canvasList = [];
  colorList = [];
  // canvas1個めの色指定
  canvasList.push(document.getElementById("waveCanvas"));
  colorList.push(['#8e53a7']);
// 各キャンバスの初期化
  for(var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
      canvas.height = 200;//波の高さ
      canvas.contextCache = canvas.getContext("2d");
  }
  // 共通の更新処理呼び出し
  update();
}
function update() {
  for(var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      // 各キャンバスの描画
      draw(canvas, colorList[canvasIndex]);
  }
  // 共通の描画情報の更新
  info.seconds = info.seconds + .014;
  info.t = info.seconds*Math.PI;
  // 自身の再起呼び出し
  setTimeout(update, 35);
}
/**
* Draw animation function.
* 
* This function draws one frame of the animation, waits 20ms, and then calls
* itself again.
*/
function draw(canvas, color) {
  // 対象のcanvasのコンテキストを取得
  var context = canvas.contextCache;
  // キャンバスの描画をクリア
  context.clearRect(0, 0, canvas.width, canvas.height);

  //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
  drawWave(canvas, randomColor, 1, 3, 0);//drawWave(canvas, color[0],0.5, 3, 0);とすると透過50%の波が出来る
}
/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache;
  context.fillStyle = color;//塗りの色
  context.globalAlpha = alpha;
  context.beginPath(); //パスの開始
  drawSine(canvas, info.t / 0.8, zoom, delay);
  context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
  context.lineTo(0, canvas.height); //パスをCanvasの左下へ
  context.closePath() //パスを閉じる
  context.fill(); //波を塗りつぶす
}
/**
* Function to draw sine
* The sine curve is drawn in 10px segments starting at the origin. 
* drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawSine(canvas, t, zoom, delay) {
  var xAxis = Math.floor(canvas.height/2);
  var yAxis = 0;
  var context = canvas.contextCache;
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.
  var x = t; //時間を横の位置とする
  var y = Math.sin(x)/zoom;
  context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く
  // Loop to draw segments (横幅の分、波を描画)
  for (i = yAxis; i <= canvas.width + 10; i += 10) {
      x = t+(-yAxis+i)/unit/zoom;
      y = Math.sin(x - delay)/3;
      context.lineTo(i, unit*y+xAxis);
  }
}
init();
//--------------------------------------------------

//worksスライダー------------------------------------
$(function () {
  // $('.sp_btn, .sp_nav Li').on('click', function () {
  //     //ここの中に記述
  //     $(".sp_nav").fadeToggle();
  //     $(".sp_btn").toggleClass("open");
  // });

  $('.works_slider').slick({
      dots: false,//インジケーターを非表示
      infinite: true,//無限再生
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
  });
})

  // $('.gallery_slider').slick({
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     responsive: [
  //         {
  //             breakpoint: 768,
  //             settings: {
  //                 slidesToShow: 1,
  //             }
  //         }
  //     ]
  // });
// lightbox.option({
// 'alwaysShowNavOnTouchDevices': true,
// })
//--------------------------------------------------

//works viweボタン-----------------------------------
$(function(){
  $(document).on({
    'mouseenter': function () {
      $('.viewbutton').addClass('is-active');
      document.addEventListener('mousemove', function (e) {
        $('.viewbutton').css('transform', 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)');
      });
    },
  
    'mouseleave': function () {
      $('.viewbutton').removeClass('is-active');      
    }
  
  }, '.slick-slide');
});

// $(function(){
//   $(document).on({
//     'mouseenter': function () {
//       $('.slick-slide').css('cursor', 'none'); カーソルを非表示にする
//       $('.viewbutton').addClass('is-active');
//       document.addEventListener('mousemove', function (e) {
//         $('.viewbutton').css('transform', 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)');
//       });
//     },
  
//     'mouseleave': function () {
//       $('.slick-slide').css('cursor', 'auto'); マウスが離れたら通常のカーソルに戻す
//       $('.viewbutton').removeClass('is-active');      
//     }
//   }, '.slick-slide');
// });
//--------------------------------------------------



//mailicon------------------------------------------
var mailiconPc = document.getElementById('mailiconPc');

  // ホバー時の処理
  mailiconPc.addEventListener('mouseover', function() {
    // ホバー時の画像に切り替え
    this.style.backgroundImage = '.hover-pc_relative-container .img'; // ホバー時の画像のパス
  });

  // ホバー解除時の処理
  mailiconPc.addEventListener('mouseout', function() {
    // ホバー解除時に初期の画像に切り替え
    this.style.backgroundImage = '.pc_relative-container .img'; // 初期の画像のパス
  });
  //-------------------------------------------------