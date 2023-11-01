document.addEventListener("DOMContentLoaded", function () {
    const countButton = document.getElementById("countButton");
    const rowCount = document.getElementById("rowCount");
    const countValue = document.getElementById("countValue");

    countButton.addEventListener("click", function () {
        // Replace 'your-csv-file.csv' with the path to your CSV file on the server.
        const csvFile = 'open_signuplist.csv';

        fetch(csvFile)
            .then(response => response.text())
            .then(csvData => {
                const rows = csvData.split("\n"); // Split the CSV into rows
                const rowCount = rows.length - 1; // Subtract 1 to exclude header row

                countValue.textContent = rowCount;
                rowCount.style.display = "block";
            })
            .catch(error => {
                console.error("Error reading CSV file:", error);
            });
    });
});
