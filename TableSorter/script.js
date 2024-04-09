function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("dataTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function prevPage() {
    var table = document.getElementById("dataTable");
    var rows = table.rows;
    var currentPage = parseInt(table.getAttribute("data-page"));
    var pageSize = 10; // Number of rows per page

    // Calculate the index of the first row on the previous page
    var startIndex = Math.max(1, (currentPage - 2) * pageSize + 1);

    // Calculate the index of the last row on the previous page
    var endIndex = Math.max(1, (currentPage - 1) * pageSize);

    // Hide all rows
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Show rows for the previous page
    for (var i = startIndex; i <= endIndex; i++) {
        rows[i].style.display = "";
    }

    // Update current page attribute
    table.setAttribute("data-page", currentPage - 1);
}

function nextPage() {
    var table = document.getElementById("dataTable");
    var rows = table.rows;
    var currentPage = parseInt(table.getAttribute("data-page"));
    var pageSize = 10; // Number of rows per page

    // Calculate the index of the first row on the next page
    var startIndex = currentPage * pageSize + 1;

    // Calculate the index of the last row on the next page
    var endIndex = Math.min(rows.length - 1, (currentPage + 1) * pageSize);

    // Hide all rows
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Show rows for the next page
    for (var i = startIndex; i <= endIndex; i++) {
        rows[i].style.display = "";
    }

    // Update current page attribute
    table.setAttribute("data-page", currentPage + 1);
}
