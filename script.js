    // Form submission handling
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
          // Submit form data (e.g., using AJAX) and display success message
          displayToast("Registration successful!");
          // Reset form after successful submission
          this.reset();
        }
      });
  
      // Form validation
      function validateForm() {
        let form = document.getElementById("registrationForm");
        if (form.checkValidity() === false) {
          Event.preventDefault();
          Event.stopPropagation();
          form.classList.add('was-validated');
          return false;
        }
        return true;
      }
  
      function displayToast(message) {
        alert('Registration successful!');
      }