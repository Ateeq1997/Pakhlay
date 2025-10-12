// js/contactForm.js
export function setupContactForm() {
  const form = document.getElementById("whatsappForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "923199549958"; // ✅ WhatsApp format: 92 + number without 0
    let whatsappMessage = `Hello, I am ${name}.
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    let url =
      `https://wa.me/${phoneNumber}?text=` + encodeURIComponent(whatsappMessage);

    window.open(url, "_blank"); // opens WhatsApp chat in new tab
  });
}
