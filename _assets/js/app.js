function stickyHeader() {
    $(window).on('scroll', function(event) {
        var scrollValue = $(window).scrollTop();
        var windowHeight = $( window ).height();
        var heightMark = $('.height-mark').position().top;
        if ( scrollValue > heightMark) {
             
             $('.navbar').addClass('navbar-light');
             $('.navbar').addClass('bg-light');
             $('.navbar').addClass('navbar-scroll');
     
        } 
        else{
            
            $('.navbar').removeClass('bg-light');
            $('.navbar').addClass('navbar-light');
            $('.navbar').removeClass('navbar-scroll');
            
        }
    });
}

function setEmailAndPhone() {
    var email = atob("c3VwdWwuYW1hcmFrb29uQGdtYWlsLmNvbQ==")
    var phone = atob("KDY0NykgNTY4IDIyNTE=")
    var $emailElement = $('span#email-text')
    var $phoneElement = $('span#phone-text')
    setTimeout(function() {
        $emailElement.text(email);
        $phoneElement.text(phone);
    }, 3000)
}

$(function() {
    stickyHeader();
    setEmailAndPhone();
});
