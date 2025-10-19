document.addEventListener("DOMContentLoaded", function () {
    // Get the dropdown element
    let yearDropdown = document.getElementById("year-dropdown");

    if (yearDropdown) {
        // Define the range of years
        let startYear = 2000;
        let endYear = 2050;

        // Loop and add options
        for (let i = startYear; i <= endYear; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            yearDropdown.appendChild(option);
        }
        console.log("✅ Years added to dropdown");
    } else {
     
    }
});
