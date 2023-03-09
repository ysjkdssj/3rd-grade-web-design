$(".menu").hover(
    function(){
        $(".sub-menu").slideDown("slow");
    },function() {
        $(".sub-menu").slideUp("fast");
    }
);