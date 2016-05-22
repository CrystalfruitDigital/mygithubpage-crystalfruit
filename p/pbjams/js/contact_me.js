$(function() {

  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var subject = $("input#subject").val();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      // alert(subject+name+email+phone+message+firstName);

      // If the Subject is Booking, prepend the date, number of guests and location to the message!
      if (subject == 'Booking') {
        var date = $("input#date");
        var guestCount = $("input#guestCount");
        var location = $("input#location");

        message.prepend("Date: " + date + " - Number of Guests Expected: " + guestCount + " - Location: " + location);
      }

      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          subject: subject,
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          alert("Success!");
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          alert("Error!");
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
      })
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
