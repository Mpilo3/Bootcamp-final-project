document.getElementById('newsletter-form').addEventListener('submit', function(event){
    event.preventDefault();

    let isValid = true

    const userEmail = document.getElementById('userEmail');
    const errorMsg = document.getElementById('userErrorMsg');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(userEmail.value.trim() === '') {
        errorMsg.textContent = 'An email is required!';
        document.getElementById('userEmail').style.borderColor = "hsl(3, 100%, 77%)";
        isValid = false;
    }else if (!emailRegex.test(userEmail.value.trim())){
        errorMsg.textContent = 'Valid email required';
        document.getElementById('userEmail').style.backgroundColor = "hsla(3, 100%, 89%, 0.89)";
        document.getElementById('userEmail').style.borderColor = "hsl(3, 100%, 77%)";
        isValid = false;
    }

    if (!isValid) {
        setTimeout(() => {
            errorMsg.textContent = '';
            userEmail.style.borderColor = '';
            userEmail.style.backgroundColor = '';
            userEmail.value = '';
        }, 3500);
    }

    if (isValid) {
        const emailValue = userEmail.value.trim();

        document.getElementById('pst-sbscrptn').textContent = 
            `A confirmation email has been sent to ${emailValue}. 
            Please open it and click the button inside to confirm your subscription.`;

        userEmail.value = '';
        errorMsg.textContent = '';

        document.getElementById('pop-msg-wrp').style.display = 'block';
    }
});

document.getElementById('dismiss-btn').addEventListener('click', function() {
    document.getElementById('pop-msg-wrp').style.display = 'none';
});