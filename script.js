const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionBody = header.nextElementSibling;

        // Close all other accordion items
        accordionHeaders.forEach((otherHeader) => {
            if (otherHeader !== header) {
                otherHeader.classList.remove("active");
                otherHeader.nextElementSibling.style.maxHeight = 0;
            }
        });

        // Toggle the current item
        header.classList.toggle("active");
        if (header.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
    
});
