function initializeTable() {
   $("#createLink").click(function(){
        var markup = `<tr><td>${$("#newCountryText").val()}</td>
        <td>${$("#newCapitalText").val()}</td>
        <td><a href="#" id="upLink">[Up]</a>
        <a href="#" id="downLink">[Down]</a>
        <a href="#" id="deleteLink">[Delete]</a></td></tr>`;
        $("#countriesTable").append(markup);
        $("#newCountryText").val("");
        $("#newCapitalText").val(""); 
        fixrow();
    });

    
    $("#countriesTable").on("click", "#upLink", function(){
        var row_num = $(this).closest('tr').index();
        var row = $(this).closest('tr');
        if (row_num > 2) {
            row.insertBefore(row.prev());
        }
        fixrow(); 
    });

    $("#countriesTable").on("click", "#downLink", function(){
        var row_num = $(this).closest('tr').index();
        var table_len = $("#countriesTable tr").length;             
        var row = $(this).closest('tr');
        if (row_num <= table_len) {
        row.insertAfter(row.next());
        }
        fixrow();
    });

    $("#countriesTable").on('click', '#deleteLink', function () {
            $(this).closest('tr').remove();
        });

    function fixrow() {
        $("#countriesTable a").css("display", "inline");     
        $("#countriesTable tr:nth-child(3) td a:contains(Up)").first().css("display", "none");
        $("#countriesTable tr:last-child td a:contains(Down)").last().css("display", "none");
    }
            
    
}

