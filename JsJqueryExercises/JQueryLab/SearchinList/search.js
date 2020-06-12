function search() {
    $("#towns li").css("font-weight", "normal");
    $(`#towns li:contains(${$("#searchText").val()})`).css("font-weight", "bold");
}

