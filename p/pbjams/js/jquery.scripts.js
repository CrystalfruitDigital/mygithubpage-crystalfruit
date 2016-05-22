/*
 
 Made by Finn v3.0 - Global Scripts
 Author:   Finn Beales - hello@madebyfinn.com
 Version:  01/2012
 
 */


// Instagram Extension 

$(document).ready(function() {
    $(".instagram").instagram({
        user: '457239447',
//	 show: '16',
        clientId: '763a473a0935486fb8634b6a1c88c146'
    });

});

$(window).resize(function() {
    var width = calNewWidth('div.instafeed');
    var st = width.newWidth + "px";
    $('div.instagram').css('width', st);
    $('div.instagram-placeholder').each(function(i) {
        if (i % width.w !== width.w - 1) {
            if ($(this).hasClass('last'))
                $(this).removeClass('last');
            return;
        }
        $(this).addClass('last');
    });
});

function calNewWidth(ele) {
    var w = parseInt($(ele).width() / 150);
    var newWidth = (w * 150) + (20 * (w - 1));
    if (newWidth > $(ele).width()) {
        newWidth -= 170;
        w -= 1;
    }
    return {newWidth: newWidth, w: w};
}

function composeDistributeMes(){
    var name = $('input#store-name').val();
    var email = $('input#store-email').val();
    var domain = email.replace(/.*@/, "");
    var phone = $('input#store-phone').val();
    var textArea = $('input#store-message').val();
    var message = "Hello, my name is " + name + ". I would like to distribute PBJams products. My email is: "+ email + " And my phone number is: " + phone + ".";
    if (domain == 'gmail' || domain == 'gmail.com' || domain == 'googlemail.com')
        window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pbandjamsphl.com&su=Distribution Partner Inquery for PBJams&body='+message);
    else
        window.open('mailto:info@pbandjamsphl.com&subject=Distribution Partner Inquery for PBJams&body='+message);
}

$(document).ready(function() {
    $.noConflict();
    $("#galleryModal").on('shown.bs.modal', function() {
        var width = calNewWidth('div.instafeed');
        var st = width.newWidth + "px";
        $('div.instagram').css('width', st);

        $('div.instagram-placeholder').each(function(i) {
            if (i % width.w !== width.w - 1)
                return;
            $(this).addClass('last');
        });
    });
});