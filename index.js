// template_m6krp3a
// service_zr7d8kh
// q89ZcCUF1ZCYFxvu6

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_zr7d8kh',
      'template_m6krp3a',
      event.target,
      'q89ZcCUF1ZCYFxvu6'
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at jvariara@gmail.com"
      );
    });
}
