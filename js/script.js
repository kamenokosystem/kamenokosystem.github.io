$(function () {

  //ナビゲーションバーがトップで固定された際に影をつける
  const select = document.querySelector('.gnav-dummy');
  const observer = new window.IntersectionObserver( (entry) => {
  if (!entry[0].isIntersecting) {
      document.querySelector('.gnav').classList.add('gnav-shaddoow');
    } else {
      document.querySelector('.gnav').classList.remove('gnav-shaddoow');
    }
  });
  observer.observe(select);

  //トップロゴのアニメーション
  const div = document.querySelector('.logo-img')
  div.animate([{opacity: '0'}, {opacity: '1'}], 1500);

  //ページ内スクロール
  var navHeight = $(".gnav").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 900, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 900);
    return false;
  });

});
