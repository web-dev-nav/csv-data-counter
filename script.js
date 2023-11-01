// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the HTML elements you'll be working with
    const countButton = document.getElementById("countButton");
    const rowCount = document.getElementById("rowCount");
    const countValue = document.getElementById("countValue");

    // Add a click event listener to the "countButton" element
    countButton.addEventListener("click", function () {
        // Replace 'open_signuplist.csv' with the path to your CSV file on the server.
        const csvFile = 'open_signuplist.csv';

        // Fetch the CSV file
        fetch(csvFile)
            .then(response => response.text()) // Read the response as text
            .then(csvData => {
                // Split the CSV data into rows using line breaks
                const rows = csvData.split("\n");

                // Calculate the row count by subtracting 1 (for the header row)
                const rowCount = rows.length - 1;

                // Update the text content of the "countValue" element with the row count
                countValue.textContent = rowCount;

                // Make the "rowCount" element visible (assuming it was previously hidden)
                rowCount.style.display = "block";
            })
            .catch(error => {
                // Handle errors, such as the file not being found or network issues
                console.error("Error reading CSV file:", error);
            });
    });
});
