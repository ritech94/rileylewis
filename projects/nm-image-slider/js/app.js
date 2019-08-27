$('.demo').twentytwenty({
    // How much of the before image is visible when the page loads
    default_offset_pct: 0.5,

    // or vertical
    orientation: 'horizontal',

    // label text
    before_label: 'Before',
    after_label: 'After',

    // enable/disable overlay
    no_overlay: false,

    // move with handle
    move_with_handle_only: true,

    // click to move
    click_to_move: false
});

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
