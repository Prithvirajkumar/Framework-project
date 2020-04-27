let g = G$('John', 'Doe');

g.greet().setLang('en').greet(true).log();

$('#login').click(function() {
    let loginGrtr = G$('John', 'Doe');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).DOMGreeting('#greeting', true).log();
});