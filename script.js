document.querySelectorAll('.accordion-header').forEach(accor => {
    accor.addEventListener('click', function() {
        const accordionContent = this.nextElementSibling;

        // Toggle visibility based on current display
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});
