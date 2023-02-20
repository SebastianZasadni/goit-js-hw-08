const form = document.querySelector('form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

form.addEventListener('input', 
_.throttle((function() {
    const user = {
        email: email.value,
        message: message.value,
      };
    
     localStorage.setItem("feedback-form-state", JSON.stringify(user));
    }), 1000));

form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
      event.preventDefault();
      const {
        elements: { email, message }
      } = event.currentTarget;
    
      if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
      }
    
      console.log(`Email: ${email.value}, Message: ${message.value}`);
      event.currentTarget.reset();
      window.localStorage.clear();
    };

if (localStorage.length !== 0) {
 let newUser = localStorage.getItem('feedback-form-state');
 newUser = JSON.parse(newUser);
 email.value = newUser.email;
 message.value = newUser.message;
};
