$(document).ready(function() {
    $('#portfolio-wrapper-header').particleground({
      dotColor: '#888',
      lineColor: '#B1B1B1'
    });

    //$('#portfolio-wrapper-header').particleground('pause');

    var typed = new Typed('#intro-text', {
        strings: ["Welcome ...", "I write code", "for a living ...", "I am a ...", "web developer"],
        typeSpeed: 120,
        backSpeed: 0,
        loop: true
    });

});