var $f = jQuery.noConflict();

$f(function() {
    $f('#logofb').bind('click', function() {
        alert('O site redirecionado a seguir é o OFICIAL do Facebook');
        $f(window.document.location).attr('href', 'https://www.facebook.com/');
    });
});

$f(function() {
    $f('.mudafundo').bind('click', function() {
        $f('.content2').css('background', 'black');
        $f('.mudafundo').css('color', 'white');
        $f('h5,h1,h6').css('color', 'white');
        $f('.obs1').css('color', 'white');
    });
});

$f(function() {
    $f('.voltafundo').bind('click', function() {
        $f('.content2').css('background', 'linear-gradient(#ffffff, #dbdde6)');
        $f('.voltafundo').css('color', 'white');
        $f('h1').css('color', 'black');
        $f('h6').css('color', '#82818f');
        $f('h5').css('color', '#323363');
        $f('.obs1').css('color', '#6e6e79');
        $f('#logofb').css('color', 'white');
    });
});

$f(function() {
    $f('#entre').bind('click', function(p) {
        p.preventDefault();

        var pega = $f('#email1').val();
        alert('Ola prezado com o email: ' + pega + ', Esse site é apenas uma recriação, para acessar o site Oficial do Facebook clique no logo a esquerda.');

        $f('#email1').val("");
        $f('#passwd').val("");

    });
});

$f(function() {
    $f('#cadastre').bind('click', function(f) {
        f.preventDefault();

        var pega2 = $f('#name').val();

        alert('Ola ' + pega2 + ', Esse site é apenas uma recriação, para acessar o site Oficial do Facebook clique no FACEBOOK que está escrito no inicio deste site ');

        $f('#name').val("");
        $f('#sobrenome').val("");
        $f('#email2').val("");
        $f('#password').val("");
        $f('#date').val("");
        $f('#radio').val("");
    });
});