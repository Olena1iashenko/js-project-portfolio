document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.footer-form-input');
    const commentInput = document.querySelector('.footer-form-message');

    emailInput.addEventListener('input', function() {
        let maxLength = parseInt(emailInput.getAttribute("maxlength"));
        if (emailInput.value.length > maxLength) {
            emailInput.value = emailInput.value.substring(0, maxLength);
        }
    });

    const form = document.querySelector('.footer-form');
    form.addEventListener("submit", onSubmit);

    function onSubmit(event) {
        event.preventDefault();

        const minLength = parseInt(commentInput.getAttribute("minlength"));
        if (commentInput.value.length < minLength) {
            alert(`Comment must be at least ${minLength} characters long`);
            return;
        }

        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        fetch("https://portfolio-js.b.goit.study/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            form.reset();
            showModal("Thank you for your interest in cooperation!");
        })
        .catch(error => {
            alert("Error: We're sorry, something went wrong on our end. Please try again later or contact our support team");
        });
    }

    function showModal(message) {
        const modal = document.querySelector(".modal");
        const closeButton = document.querySelector(".modal-button");
        const backdrop = document.querySelector(".backdrop");

        document.querySelector("h2").textContent = "Thank you for your interest in cooperation!";
        document.querySelector("p").textContent = "The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.";

        modal.style.display = "block";

        closeButton.addEventListener("click", closeModal);
        backdrop.addEventListener("click", closeModal);
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }

    function closeModal() {
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
    }
});