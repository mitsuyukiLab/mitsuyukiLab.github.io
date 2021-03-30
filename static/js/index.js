

$(document).ready(function(){

    // <div class="nav"> ページ内リンクヘッダー位置調整 
    var headerHight = 100;
    $('a[href^="#"]').click(function(){
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
        
        $("html,body").animate({ scrollTop:position }, 550, "swing");
    });

    // <footer> 年跨ぎ修正
    $("#copyright").html("© "
    + new Date().getFullYear()+ " Mitsuyuki Lab.");
    });
