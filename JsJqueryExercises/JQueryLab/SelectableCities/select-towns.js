function attachEvents() {
    $("#items li").on("click", function(){ 
        $(this).toggleClass("selected");                             
        $(this).css({"background-color": "grey"});
    }); 

    $("#showTownsButton").click(function(){ 
        var arr = []
        $(".selected").each(function(){
            arr.push($(this).text());
        });
        $("#selectedTowns").append(`Selected Town: ${arr.join(", ")}`);
    });

}
