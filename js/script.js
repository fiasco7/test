


   var tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
   var pages = document.getElementById('tabbody').getElementsByTagName('div');

   function changeTab() {
      // ▼href属性値から対象のid名を抜き出す
      var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

      // ▼指定のタブページだけを表示する
      for(var i=0; i<pages.length; i++) {
         if( pages[i].id != targetid ) {
            pages[i].style.display = "none";
         }
         else {
            pages[i].style.display = "block";
         }
      }

      // ▼クリックされたタブを前面に表示する
      for(var i=0; i<tabs.length; i++) {
         tabs[i].style.zIndex = "0";
      }
      this.style.zIndex = "10";

      // ▼ページ遷移しないようにfalseを返す
      return false;
   }

   // ▼すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
   for(var i=0; i<tabs.length; i++) {
      tabs[i].onclick = changeTab;
   }

   // ▼最初は先頭のタブを選択
   tabs[0].onclick();




$(function () {
  var sp = 480; //SPのサイズを設定

  function masonry_execute() {
    var $demo2 = $('.js-demo02');   //コンテナとなる要素を指定

    if ( $('html').width() < sp ) { //ウィンドウ幅が480px以下だった場合、masonry破棄 (無効)
      $demo2.masonry('destroy');
    } else {                        //ウィンドウ幅が480px以上だった場合、masonry適応
      $demo2.imagesLoaded(function(){
        $demo2.masonry({
          itemSelector: '.js-item',
          columnWidth: 205,
          fitWidth: true,
          
       });
       
      });
    }
  }
  masonry_execute(); //masonry_execute関数を実行

  $(window).resize(function(){ //ウィンドウがリサイズされたら、再度masonry_execute関数を実行
    masonry_execute();
  });
});