$(document).ready(function(){

  $('#content').on('click', '.btn', function(){
    if($(this).prev().hasClass("red")) {
      $(this).removeClass('red');
      $(this).prev().removeClass('red');
      $(this).text('Цвет текста: красный');
    } else {
      $(this).addClass('red');
      $(this).prev().addClass('red');
      $(this).text('Цвет текста: черный');
    }
  });

  const tab = $('.link');
  tab.click(function(){
    
    tab.parent().removeClass('active');
    $(this).parent().addClass('active');

    let info = $(this).attr("href")+" #content";
    $("#content").hide("fast", loadContent);
    $("#loader").fadeIn("normal");

    function loadContent() {
      $("#content").load(info, "", function() {
        $("#content").show("normal", hideLoader()) 
      })
    }

    function hideLoader(){
      $("#loader").fadeOut("normal");
    }

    return false;

  })
})

