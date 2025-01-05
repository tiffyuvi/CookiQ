function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected radio button values for the questions
    var question1Answer = document.querySelector('input[name="q1"]:checked');
    var question4Answer = document.querySelector('input[name="q4"]:checked');
    var question5Answer = document.querySelector('input[name="q5"]:checked');
    var question6Answer = document.querySelector('input[name="q6"]:checked');
    var question7Answer = document.querySelector('input[name="q7"]:checked');
    var question9Answer = document.querySelector('input[name="q9"]:checked');
    var question10Answer = document.querySelector('input[name="q10"]:checked');
    var question11Answer = document.querySelector('input[name="q11"]:checked');
    var question13Answer = document.querySelector('input[name="q13"]:checked');
    var question14Answer = document.querySelector('input[name="q14"]:checked');
    var question16Answer = document.querySelector('input[name="q16"]:checked');

    // Get the selected checkbox values for other questions
    var question2Answers = Array.from(document.querySelectorAll('input[name="q2"]:checked'))
        .map(checkbox => checkbox.value);
    var question3Answers = Array.from(document.querySelectorAll('input[name="q3"]:checked'))
        .map(checkbox => checkbox.value);
    var question8Answers = Array.from(document.querySelectorAll('input[name="q8[]"]:checked'))
        .map(checkbox => checkbox.value);

    // Check if the necessary radio buttons have been selected
    if (!question1Answer || !question4Answer || !question5Answer || !question6Answer || !question7Answer || !question9Answer || !question10Answer || !question11Answer || !question13Answer || !question14Answer || !question16Answer) {
        alert("Please answer all the required questions.");
        return;
    }

    // Prepare the parameters to send to EmailJS
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        question1: question1Answer.value, // Answer to cooking time question
        question2: question2Answers.join(", "), // Cooking utensil choices
        question3: question3Answers.join(", "), // Memorization method choices
        question4: question4Answer.value, // Toughest thing in the kitchen (STEM, Humanities, etc.)
        question5: question5Answer.value, // Toughest thing as a chef (procrastination, overwhelmed, etc.)
        question6: question6Answer.value, // Favorite way to start cooking (study method)
        question7: question7Answer.value, // Experimenting with methods
        question8: question8Answers.join(", "), // Handling mistakes
        question9: question9Answer.value, // Motivation to keep cooking
        question10: question10Answer.value, // Best time of day for cooking
        question11: question11Answer.value, // Favorite cuisine type
        question13: question13Answer.value, // Favorite cooking method
        question14: question14Answer.value, // Best kitchen appliance
        question16: question16Answer.value, // Most memorable cooking experience
    };

    const serviceID = "service_fwn8hvq"; // Replace with your EmailJS service ID
    const templateID = "template_km11tzw"; // Replace with your EmailJS template ID

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields after sending email
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            // Reset all selected radio and checkbox options
            document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
            document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);

            // Success message
            alert("Your Message Has Been Sent Successfully!");
        })
        .catch((err) => {
            console.error(err);
            alert("An error occurred while sending your message. Please try again.");
        });
}
