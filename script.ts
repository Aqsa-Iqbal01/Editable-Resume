
// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event: Event): void => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;

    // Read the profile picture if uploaded
    let profilePicURL = '';
    if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            profilePicURL = e.target?.result as string;
            generateResume();
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        profilePicURL = '';  // No file uploaded
        generateResume();  // Proceed without image
    }

    // Function to generate resume HTML
    function generateResume(): void {
        // Generate the resume content dynamically
        const resumeHTML = `
        <h2><b>Editable Resume</b></h2>
        ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%; margin-bottom: 15px;" />` : ''}
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('Resume display element is missing.');
        }
    }
});
