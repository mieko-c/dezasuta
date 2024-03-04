  // ローディング---
  jQuery(function () {
    var webStorage = function () {
      if (sessionStorage.getItem('access')) {
        //2回目以降アクセス時の処理
        console.log('2回目以降のアクセスです');
      } else {
        //初回アクセス時の処理
        sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
        $(".loading").addClass('is-active'); // loadingアニメーションを表示 
        setTimeout(function () {
          // ローディングを数秒後に非表示にする
          $(".loading").removeClass('is-active');
        }, 3000); // ローディングを表示する時間
      }
    }
    webStorage();
  });
  //---

  // カウントアップの処理---
  let countup = 0; // カウントアップの初期値

  function updateCountup() {
    const countupElement = document.getElementById('countup');
    countupElement.textContent = countup;
  
    if (countup === 100) {
      // カウントアップが終了したら何らかの処理を実行する
      console.log('Loading complete!');
    } else {
      countup++;
      setTimeout(updateCountup, 20); // 0.1秒ごとにカウントアップを更新
    }
  }
  
  // カウントアップ開始
  updateCountup();
  //---

//aboutのオブジェクト変化---
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
//---









