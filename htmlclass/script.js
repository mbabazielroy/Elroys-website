document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    function showTabContent(tabIndex) {
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("current");
        });
        tabContents[tabIndex].classList.add("current");
    }

    tabLinks.forEach((tabLink, index) => {
        tabLink.addEventListener("click", function() {
            showTabContent(index);
            tabLinks.forEach((tab) => {
                tab.classList.remove("current");
            });
            tabLink.classList.add("current");
        });
    });

    // Show the first tab content by default
    showTabContent(0);
});
