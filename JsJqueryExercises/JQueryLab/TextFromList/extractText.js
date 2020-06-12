function extractText() {
//$( "#btn" ).click(function(e) {
    //  e.preventDefault();
    var arr = `${$("li:nth-child(1)").text()}, 
    ${$("li:nth-child(2)").text()}, 
    ${$("li:nth-child(3)").text()}`;
    $("#result").append(arr);
    $("#btn").addClass("btn-warning")
    .prop('disabled', true);
    //});
}

