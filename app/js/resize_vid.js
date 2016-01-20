var min_w = 320; // minimum video width allowed
var vid_w_orig;  // original video dimensions
var vid_h_orig;

jQuery(function() { // runs after DOM has loaded

    vid_w_orig = parseInt(jQuery('video').attr('width'));
    vid_h_orig = parseInt(jQuery('video').attr('height'));

    jQuery(window).resize(function () { resizeToCover(); });
    jQuery(window).trigger('resize');
});

function resizeToCover() {

    // set the video viewport to the parent size
    jQuery('#video-viewport').width(jQuery('.middle.tab-bar-section').width());
    jQuery('#video-viewport').height(jQuery('.middle.tab-bar-section').height());

    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery('.middle.tab-bar-section').width() / vid_w_orig;
    var scale_v = jQuery('.middle.tab-bar-section').height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    // now scale the video
    jQuery('video').width(scale * vid_w_orig);
    jQuery('video').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-viewport').scrollLeft((jQuery('video').width() - jQuery('.middle.tab-bar-section').width()) / 2);
    jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery('.middle.tab-bar-section').height()) / 2);

};

$('#video-viewport').click(function() {
    var video = $('#video_r').get(0);
//    video.play();
//    location.reload();
     location.href = 'index.html'; 
    return false;
});
