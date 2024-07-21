jQuery(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){
    e.preventDefault();
    jQuery("header nav").toggleClass("open")
    });
    jQuery("header nav a").click(function(){

    jQuery("header nav").removeClass("open")
    var dev = jQuery(this).attr("href");
    jQuery("html,body").animate({
        "scrollTop":jQuery(dev).offset().top
    })
    });
}
