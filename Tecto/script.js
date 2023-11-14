document.addEventListener("DOMContentLoaded", function () {
    // Get the map section element
    var mapSection = document.getElementById("mapSection");

    // Get the button that opens the map
    var openMapButton = document.getElementById("openMapButton");

    // When the user clicks on the button, show the map section and hide other sections
    openMapButton.addEventListener("click", function () {
        mapSection.classList.toggle("hidden");
        hideOtherSections("mapSection");
    });

    // Function to hide other sections when showing a specific section
    function hideOtherSections(sectionToShow) {
        var sections = document.querySelectorAll("#main-content > div");
        sections.forEach(function (section) {
            if (section.id !== sectionToShow) {
                section.classList.add("hidden");
            }
        });
    }
});
