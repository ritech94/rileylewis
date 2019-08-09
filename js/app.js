// Smoothing Scrolling
$('.navbar a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 48
        }, 1000);
    }

});

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

// Close responsive menu when scroll trigger is clicked
$('.navbar a[href^="#"]').click(() => {
    $('.navbar-collapse').collapse('hide');
})

// Year for copyright
$(function() {
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
});

// EmailJS
function sendMail() {
    var cFN = document.getElementById('contact-first-name');
    var cLN = document.getElementById('contact-last-name');
    var cE = document.getElementById('contact-email');
    var cP = document.getElementById('contact-phone');
    var cM = document.getElementById('contact-message');
    var cS = document.getElementById('contact-status');

    if (cFN.value != '' && cLN.value != '' && cE.value != '' && cP.value != '' && cM.value != '') 
    {
        // Send data via EmailJS
        emailjs.send('gmail', 'ritech', 
        {
            "contact_email": cE.value,
            "contact_name": cFN.value + ' ' + cLN.value,
            "contact_phone": cP.value,
            "contact_msg": cM.value
        });

        // Clear Form Fields
        cFN.value = '';
        cLN.value = '';
        cE.value = '';
        cP.value = '';
        cM.value = '';

        // Display Sent Message
        cS.innerHTML = 'Message Sent!';
    }
    else {
        cS.innerHTML = 'Please fill the missing fields!';
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}