$(".menu ul li").hover (
    function() {
        $(this).children("ul").slideDown("3");
    },
    function() {
        $(this).children("ul").slideUp("fast");
    }
);