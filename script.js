function sendMail(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        // other form data...
    };

    console.log("Params:", params); // Log for debugging

    // Send form data to the admin email (template_3hrnqm8)
    emailjs
        .send("service_hrrg719", "template_3hrnqm8", params)
        .then(
            function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Quiz submitted successfully! Please wait while we prepare your recipe.");
            },
            function(error) {
                console.log("FAILED...", error);
                alert("There was an error submitting the quiz.");
            }
        );

    // Send confirmation email to the user (template_9i3p6az)
    emailjs
        .send("service_hrrg719", "template_9i3p6az", {
            name: params.name,
            email: params.email,
            message: "Thank you for submitting your quiz! We will prepare your recipe and get back to you soon."
        })
        .then(
            function(response) {
                console.log("Autoreply SUCCESS!", response.status, response.text);
            },
            function(error) {
                console.log("Autoreply FAILED...", error);
            }
        );
}