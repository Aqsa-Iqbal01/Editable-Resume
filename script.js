"use strict";
// Get references to the form and display area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //prevent page reload
    // Collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable ="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable ="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('thenresume display is missing.');
    }
});
