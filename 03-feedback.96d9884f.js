!function(){var e=document.querySelector("form"),a=document.querySelector('[name="email"]'),t=document.querySelector('[name="message"]');e.addEventListener("input",_.throttle((function(){var e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),1e3)),e.addEventListener("submit",(function(e){e.preventDefault();var a=e.currentTarget.elements,t=a.email,l=a.message;if(""===t.value||""===l.value)return alert("Please fill in all the fields!");console.log("Email: ".concat(t.value,", Message: ").concat(l.value)),e.currentTarget.reset(),window.localStorage.clear()})),0!==localStorage.length&&(user=localStorage.getItem("feedback-form-state"),user=JSON.parse(user),a.value=user.email,t.value=user.message)}();
//# sourceMappingURL=03-feedback.96d9884f.js.map
