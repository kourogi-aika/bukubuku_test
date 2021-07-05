// ここからナビボタン
$(function(){

  $(".menu").hide();

  $(".navButton").click( function(){
    $(".menu").slideToggle();
  });
});

//ここから花びら

window.addEventListener('DOMContentLoaded', () => {
  // コンテナを指定
  const section = document.querySelector('#background');

  // 花びらを生成する関数
  const createPetal = () => {
    const petalEl = document.createElement('span');
    petalEl.className = 'petal';
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(petalEl);

    // 一定時間が経てば花びらを消す
    setTimeout(() => {
      petalEl.remove();
    }, 10000);
  }

  // 花びらを生成する間隔をミリ秒で指定
  setInterval(createPetal, 200);
});

　//ロード画面

$(function(){
setTimeout(function(){
$(".anime").css("display", "none");
$('.anime').fadeOut();
},3500);
});

$(function(){
 $(".mainSite").css({opacity:'0'});
 setTimeout(function(){
 $(".mainSite").css("display", "block");
 $(".mainSite").stop().animate({opacity:'1'},1000);//1秒かけてコンテンツを表示
 },4000);//約4秒後に
});


