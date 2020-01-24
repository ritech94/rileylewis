// Smooth Scrolling
$('.navbar a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );
    var navHeight = 85;

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - navHeight
        }, 1000);
    }

});

// Close responsive menu when scroll trigger is clicked
$('.navbar a[href^="#"]').click(() => {
    $('.navbar-collapse').collapse('hide');
})

// Copyright Year
$(function() {
    var cYear = new Date().getFullYear();
    $('#year').html(cYear);
});

// EmailJS
$('#submit').on('click', function(e) {
    e.preventDefault();

    var cName = document.getElementById('contact-name');
    var cEmail = document.getElementById('contact-email');
    var cMessage = document.getElementById('contact-message');
    var cStatus = document.getElementById('contact-status');

    if (cName.value != '' && cEmail.value != '' && cMessage.value != '') {
        // Send data via EmailJS
        emailjs.send('gmail', 'ritech',
        {
            "to_email": "ri.tech94@gmail.com",
            "from_email": "no-reply@alorthotics.ca",
            "contact_email": cEmail.value,
            "contact_name": cName.value,
            "contact_phone": "No Data",
            "contact_msg": cMessage.value
        });

        // Clear Form Fields
        cName.value = '';
        cEmail.value = '';
        cMessage.value = '';

        // Display Sent Message
        cStatus.innerText = 'Message Sent!';
    } else {
        cStatus.innerText = 'Please fill the missing fields!';
    }

})

// Lazy Load Images
function lazyload() {
    var lazyloadImages = document.getElementsByClassName('lazy-load');
    for (var i = 0; i < lazyloadImages.length; i++) {
        if (lazyloadImages[i].getAttribute('data-src')) {
            lazyloadImages[i].setAttribute('src', lazyloadImages[i].getAttribute('data-src'));
        }
    }
}
$(function() {
    lazyload();
})

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}