// scotch display,scotch text,しっぽり明朝---
(function(d) {
    var config = {
      kitId: 'iim6jay',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
//---

// accent-color変化---
const root = document.querySelector(':root');

  // 選択可能な色の配列
  var colors = ['#a7536c', '#418266', '#5373a7', '#8e53a7'];

  // ランダムな色を選択
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  root.style.setProperty("--accent-color", randomColor);
//---

// ハンバーガーメニュー---
$('.sp_btn, .sp_nav Li').on('click', function () {
  //ここの中に記述
  $(".sp_nav").fadeToggle();
  $(".sp_btn").toggleClass("open");
});
//---