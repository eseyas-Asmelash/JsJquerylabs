function attachEvents() {
    //this works too
    /*$(".button").click(function(){ 
        $(".button").removeClass("selected");
        $(this).addClass("selected");
    });

    $(".button").hover(function(){
        $(this).addClass("hover");                            
    });*/


    $(".button").bind({
        click: function() {
            $(".button").removeClass("selected");
            $(this).addClass("selected");
        },
        hover: function() {
            $(this).addClass("hover");   
        },
    });
}
