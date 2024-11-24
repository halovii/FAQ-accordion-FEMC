const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionBody = header.nextElementSibling;

        accordionHeaders.forEach((otherHeader) => {
            if (otherHeader !== header) {
                otherHeader.classList.remove("active");
                otherHeader.nextElementSibling.style.maxHeight = 0;
            }
        });

        header.classList.toggle("active");
        if (header.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
    
});
