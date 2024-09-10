var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
var messageBody =  "Email" + email + "<br> Subject" + subject + "<br> Message " + message;
function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mugahedmotaz@gmail.com",
    Password: "B0217804DE880975665C54576B11E160385D",
    To: "mugahedmotaz@gmail.com",
    From: email,
    Subject: subject,
    Body: messageBody,
  }).then((message) => {
    if (message === "true") {
      alert("gahfakfaskfgakhfae");
    } else {
      alert("not done");
    }
  });
}
