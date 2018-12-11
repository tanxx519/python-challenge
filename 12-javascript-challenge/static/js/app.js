// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

tableData.forEach(items => {
    var row = d3.select("tbody").append("tr");

    Object.entries(items).forEach(([key, value]) => {
        var info = row.append("td");
        info.text(value);
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(info => info.datetime === inputValue);
    console.log(filteredData)
    
    filteredData.forEach(items => {
        var row = d3.select("tbody").append("tr");
        Object.entries(items).forEach(([key, value]) => {
            var info = row.append("td");
            info.text(value);
        });
    });
});
  