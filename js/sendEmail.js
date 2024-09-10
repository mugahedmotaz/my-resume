
function emailSend() {
  Email.send({
    SecureToken : "90416335-90b2-43b7-802b-ccd4ca7c9c70",
    To : 'mugahedmotaz@gmail.com',
    From :  'mugahedmotaz@gmail.com',
    Subject : "This is the subject",
    Body : "Email : " + document.getElementById("email").value+ "<br/> " +
            "Subject : " + document.getElementById("subject").value+ "<br/> " +
   "Message : " + document.getElementById("message").value+ "<br/> "
    }).then( message => {
        Swal.fire({
          title:"تم إستلام رسالتك بنجاح",
          text: "  سيتم الرد عليك في اقرب وقت    ",
          icon: "success"
        });
    });
  }