# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

1.The first screenshot visualizes the desktop design, after the completed challenge. 
![](/assets/images/screenshot-desktop-design.jpg)

2.The second screenshot visualizes the desktop active states, for both the input and the 'subscribe to the newsletter' button.
![](/assets/images/desktop-active-states.jpg)

3.The following screenshot shows the error message if the user submits an empty string.
![](/assets/images/Error-message-after-submitting-empty-email-input.jpg)

4.The following screenshots shows the error messages if the user submits the email that does not meet the email format.
![](/assets/images/Error-message-after-submitting-an-invalid-email.jpg)

5.The following screenshot shows how the user receives the success message after submitting the correct email format.
1[](/assets/images/success-message-after-subscribing.jpg)

6.The underneath screenshot shows the active state for the pop/success message with the hover effect.
![](/assets/images/success-message-active-states.jpg)

### Links

- Solution URL: (https://github.com/Mpilo3/Bootcamp-final-project.git)
- Live Site URL: (https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript Functions

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

- I learned that and still carrying it with me is that centering a div, is one most of the coolest part of coding, because div is there for a reason, it will be a div inside a div.

```html
<div id="form-wrp" class="signupForm">
    <div class="img-cntnr">
      <img id="illustrati........">
    </div>
    <div id="insideForm" class="signupForm">
      <div id="nwslttrCard"
```

- I really had a hard time having to centre the success-message as a pop up after the subscription, but it also came with a lot of knowledge, and gave me the full bacground on the CSS being the hardcore styling foundation before the frameworks.

```css
.post-subs {
    display: none;
    background-color: hsl(0, 0%, 100%);
    border-radius: 20px;
    padding: 2.5rem;
    height: 500px;
    width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 1000;
}
```

- JavaScript is one of the web develpoment, it took me to an extent of thinking you be able to change text, but I learned that even with cases, of how the web reacts to errors, to being able to put a response on the user input or the way it stricts the user input. The greatest knowlodge received is being able to change/alter any of the node/elements from HTML and CSS structure.

```js
document.getElementById('userEmail').style.backgroundColor = "hsla(3, 100%, 89%, 0.89)";
        document.getElementById('userEmail').style.borderColor = "hsl(3, 100%, 77%)";
        isValid = false;
```

### Continued development

The part of the develpment I want to withheld is being able to interact the JavaScript with HTML and CSS structre, including being able to alter picture, text content, styling based on the cases the user is facing, or currently be in act with. This includes extending my understanding in the web development journey.

With CSS also being able to alter changes along the devices of how the content should be visible or visualized according to the user preferences also,  on how the user would interact with the web design based on how the responsive the web is, it's an important part of the journey I also learned also.


### Useful resources

- [W3 Schools]([](https://www.w3schools.com/)) - This helped me with understanding the basics of CSS3, on how responsive the web can be without frameworks but just with only CSS, and an understanding of the flex and differentiating with width of the devies to give the user different preferences.

- [Freecode camp](https://www.freecodecamp.org/) - The freecode camp helped with understanding the basics of JavaScript, with how the syntax of the front-end it can be useful, how the interaction between web structures.


## Author

- Website - [Celmpilo Mbatha](https://www.your-site.com)

