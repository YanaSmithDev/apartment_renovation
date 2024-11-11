// $(function () {
//   $(".running-line").marquee({
//     duration: 19000,
//     startVisible: true,
//     duplicated: true,
//   });
// });

Fancybox.bind("[data-fancybox]", {});

$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,

    infinite: false,
  });
});

emailjs.init("ztvBHeZLLjqHhcBSu");
// function sendMail() {
//   emailjs
//     .send("service_xdx85vn", "template_4iumy12", {
//       to_name: "Имя",
//       message: "Привет!",
//       reply_to: "email@example.com",
//     })
//     .then((response) => console.log("Письмо успешно отправлено!", response))
//     .catch((error) => console.log("Возникла ошибка...", error));
// }

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_xdx85vn", "template_4iumy12", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      event.target.reset();
    });
};

window.onload = function () {
  document
    .getElementById("contact-form--overlay")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_xdx85vn", "template_4iumy12", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      const modalWind = document.getElementById("mobileOverlay");
      event.target.reset();
      modalWind.close();
    });
};
