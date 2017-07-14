$.getJSON("/all", function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        $("#pets-table").append("<tr><td>" + data[i].name + "</td>" +
            "<td>" + data[i].class + "</td>" +
            "<td>" + data[i].legs + "</td>" +
            "<td>" + data[i].weight + "</td>" +
            "<td>" + data[i].petName + "</td></tr>");
    };
});

$("#sort-weight").on("click", function() {
    $("#pets-table").empty();
    $("#pets-table").append("<tr><th>Name</th><th>Class</th><th>Num of Legs</th>" +
        "<th id='active'>Weight</th><th>But I Call It..</th</tr>");

    $.getJSON("/weight", function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            $("#pets-table").append("<tr><td>" + data[i].name + "</td>" +
                "<td>" + data[i].class + "</td>" +
                "<td>" + data[i].legs + "</td>" +
                "<td>" + data[i].weight + "</td>" +
                "<td>" + data[i].petName + "</td></tr>");
        };
    });
});

$("#sort-name").on("click", function() {
    $("#pets-table").empty();
    $("#pets-table").append("<tr><th id='active'>Name</th><th>Class</th><th>Num of Legs</th>" +
        "<th>Weight</th><th>But I Call It..</th</tr>");

    $.getJSON("/name", function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            $("#pets-table").append("<tr><td>" + data[i].name + "</td>" +
                "<td>" + data[i].class + "</td>" +
                "<td>" + data[i].legs + "</td>" +
                "<td>" + data[i].weight + "</td>" +
                "<td>" + data[i].petName + "</td></tr>");
        };
    });
});