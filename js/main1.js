var $l = jQuery.noConflict();

//scripts da imagem do começo
$l(function() {
    $l('.containerP').hide();
    $l(document).bind('scroll', function() {
        if ($l(this).scrollTop() > 100) {
            $l('.imagem').fadeOut(2000);
            $l('.containerP').show();
            $l('.content2').animate({
                'margin-top': '-100px'
            }, 1200);
        }
    });
});

$l(function() {
    $l(document).bind('scroll', function() {
        if ($l(this).scrollTop() > 100) {
            $l('.imagem').fadeOut(2000);
            $l('.content1-1').animate({
                'margin-top': '0px'
            }, 1200);
        }
    });
});

// FIM scripts da imagem do começo




$l(function() {
    $l('.procuramusica2').bind('click', function() {
        $l('.containerP').css('position', 'fixed');
        $l('.containerP').animate({
            'margin-top': '-305px'
        }, 800);

    });
});





// scrolls

$l(function() {
    $l('#voltou').bind('click', function() {
        $l('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});



$l(function scrollou() {
    $l('nav a, .procuramusica2').bind('click', function(e) {
        e.preventDefault();

        var id = $l(this).attr('href'),
            targetOffset = $l(id).offset().top;

        $l('html, body').animate({
            scrollTop: targetOffset
        }, 800);
    });

});


$l(function() {
    $l(document).bind('scroll', function() {
        if ($l(this).scrollTop() == false) {
            $l('.containerP').css('position', 'absolute');
            $l('.containerP').css('margin-top', '0px');
        }

    });
});

$l(function() {
    $l(document).bind('scroll', function() {
        if ($l(this).scrollTop() > 100) {
            $l('#voltou').fadeIn();

        } else {
            $l('#voltou').fadeOut();
        }
    });
});

$l(function() {
    $l('nav a, .procuramusica2').bind('click', function() {
        $l(document).bind('scroll', function() {
            if ($l(this).scrollTop() > 0) {
                $l('#voltou').css('position', 'fixed');
                $l('#voltou').css('bottom', '0');
            }
        });
    });
});


// FIM scrolls


$l(function() {

    $l(document).bind('scroll', function() {
        if ($l(this).scrollTop() > 100) {
            $l('.animationsh3').slideDown(2000);
        }

    });

});


$l(function() {

    $l(document).bind('scroll', function() {

        if ($l(this).scrollTop() > 280) {
            $l('.animationsh3').css('padding-top', '90px');
        }


    });

});




$l(function() {
    $l('.about').bind('click', function() {
        $l.ajax({
            url: 'sobre.html',
            success: function(t) {
                $l('body, document').prepend(t);
                $l('.ind').remove();
            },
            complete: function() {
                alert('foi');
            }
        });
    });
});