# profile-about-contact-page
this project builds upon stage 0 (single card application) and introduces functionality. It includes a form validation and an about me page

The focus remains on:
 •  Semantic HTML
 •  Accessibility
 •  Responsiveness
 •  Consistent data-testid attributes
⸻

 Project Overview

In this stage, I :
 • Extended my Stage 0 single-card app into a multi-page web application.
 • Added two new pages:
 1. Contact Us Page — includes a fully validated form.
 2.  About Me Page — includes reflective, structured content using semantic HTML.

⸻

 Contact Us Page

 Required Fields

Field data-testid Validation
Full Name test-contact-name Required
Email test-contact-email Required, must be valid (name@example.com)
Subject test-contact-subject Required
Message test-contact-message Required, minimum 10 characters
Submit Button test-contact-submit Triggers validation
Error Messages test-contact-error-<field> Linked to invalid fields
Success Message test-contact-success Displays on valid submission

 Validation Rules
 • All fields are required.
 • Email must be in a valid format.
 • Message must contain at least 10 characters.
 • Show error messages for invalid inputs and a success message only after a valid submission.

 Accessibility Checklist
 • Each input has a linked <label for="...">.
 • Error messages use aria-describedby to associate with inputs.
 • Entire form is fully keyboard-accessible.

⸻

 About Me Page

 Required Sections

Section data-testid
Bio test-about-bio
Goals in this program test-about-goals
Areas of low confidence test-about-confidence
Note to future self test-about-future-note
Extra thoughts test-about-extra

 Structure Guidelines
 • Wrap all content in <main data-testid="test-about-page">.
 • Use <section> for each major area.
 • Include clear headings (<h2>, <h3>) for hierarchy and readability.

⸻

 General Requirements
 •  Use semantic HTML across all pages.
 •  Maintain accessibility with proper labels, alt text, and ARIA attributes.
 •  Ensure responsive design for mobile, tablet, and desktop.
 •  Support keyboard navigation for all interactive elements.
 •  Write clean, modular, and readable code.

⸻

 Deployment

Hosted application using:
 • Netlify
 • GitHub 

⸻
 Suggested Project Structure

├── index.html              # From Stage 0 (main card)
├── contact.html            # Contact Us page
├── about.html              # About Me page
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── form-validation.js
├── images/
└── README.md


✨ Author

Lauren
