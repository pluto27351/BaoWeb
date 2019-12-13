var infobox = $('.infobox');
var nowopen = $('.open');

infobox.click(function(){
  if(nowopen != $(this)){
    nowopen.removeClass("open");
    $(this).addClass("open");
    nowopen = $(this);
  }
});
