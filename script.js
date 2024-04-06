fetch("https://randomuser.me/api/?results=5").then(response => {
    return response.json(); // Convert data to JSON
}).then(data => {
    let tableData = "";
    // Map over each user and create a row for the table
    data.results.map(user => {
        tableData += `<tr>
                        <td>${user.name.first}</td>
                        <td>${user.location.city}</td>
                    </tr>`;
    });
    // Insert rows into the table body
    document.getElementById("table_body").innerHTML = tableData;
});
