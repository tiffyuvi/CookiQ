// Initialize EmailJS with your public key
(function() {
    emailjs.init("vzs-AO7J9zMDOfoul");
})();

// Function to send email
function sendMail() {
    // Collect form data
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value, // User's email
        q1: document.querySelector('input[name="q1"]:checked')?.value || '',
        q2: Array.from(document.querySelectorAll('input[name="q2[]"]:checked')).map(el => el.value).join(', '),
        q3: Array.from(document.querySelectorAll('input[name="q3[]"]:checked')).map(el => el.value).join(', '),
        q4: document.querySelector('input[name="q4"]:checked')?.value || '',
        q5: document.querySelector('input[name="q5"]:checked')?.value || '',
        q6: document.querySelector('input[name="q6"]:checked')?.value || '',
        q7: document.querySelector('input[name="q7"]:checked')?.value || '',
        q8: Array.from(document.querySelectorAll('input[name="q8[]"]:checked')).map(el => el.value).join(', '),
        q9: document.querySelector('input[name="q9"]:checked')?.value || '',
        q10: document.getElementById("q10").value || '', // Text input
        q11: document.querySelector('input[name="q11"]:checked')?.value || '',
        q12: document.querySelector('input[name="q12"]:checked')?.value || '',
        q13: document.querySelector('input[name="q13"]:checked')?.value || '',
        q14: document.querySelector('input[name="q14"]:checked')?.value || '',
        q15: document.querySelector('input[name="q15"]:checked')?.value || '',
        q16: document.querySelector('input[name="q16"]:checked')?.value || '',
        studyTools: document.getElementById("studyTools").value || '', // Additional field for "Current Study Tools"
        additionalThoughts: document.getElementById("additionalThoughts").value || '' // Optional input
    };

    console.log("Params:", params); // Log the params for debugging

    // Send form data to yourself (admin email)
    emailjs
        .send("service_hrrg719", "template_3hrnqm8", params)
        .then(
            function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Quiz submitted successfully!");
            },
            function(error) {
                console.log("FAILED...", error);
                alert("There was an error submitting the quiz.");
            }
        );

    // Send autoreply email to the user
    emailjs
        .send("service_hrrg719", "template_9i3p6az", {
            name: params.name,
            email: params.email, // User's email
            q1: params.q1,
            q2: params.q2,
            q3: params.q3,
            q4: params.q4,
            q5: params.q5,
            q6: params.q6,
            q7: params.q7,
            q8: params.q8,
            q9: params.q9,
            q10: params.q10,
            q11: params.q11,
            q12: params.q12,
            q13: params.q13,
            q14: params.q14,
            q15: params.q15,
            q16: params.q16,
            studyTools: params.studyTools,
            additionalThoughts: params.additionalThoughts
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

