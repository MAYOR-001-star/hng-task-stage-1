function updateTime() {
  const timeEl = document.querySelector('[data-testid="currentTimeUTC"]');
  if (timeEl)
    timeEl.textContent = "Current Time (UTC): " + new Date().toUTCString();
}
setInterval(updateTime, 1000);
updateTime();

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name && email && message) {
      document.getElementById("successMsg").textContent =
        "Message sent successfully!";
      form.reset();
    }
  });
}
