const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Portfolio Contact from " + name;

    const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message;

    window.location.href =
        "mailto:Dhivyaselvakumar1496@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
});