document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile menu after a link is tapped. The menu itself (open/close)
// is plain CSS via the checkbox above, so this is a nice-to-have, not a requirement.
const navCheck = document.getElementById("navCheck");
const navLinks = document.getElementById("navLinks");

if (navLinks) {
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (navCheck) navCheck.checked = false;
    });
  });
}

// Keep the contact form working without disabling the standard FormSubmit flow.
// We only block obvious bot submissions via the honeypot and give feedback while
// the browser submits normally to the external FormSubmit endpoint.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formNote = document.getElementById("formNote");
  const honeypot = contactForm.querySelector('input[name="_honey"]');

  contactForm.addEventListener("submit", (event) => {
    if (honeypot && honeypot.value.trim() !== "") {
      event.preventDefault();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    if (formNote) {
      formNote.textContent = "Sending your message...";
    }
  });
}
