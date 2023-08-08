// INITIALIZE AOS

AOS.init();

startLoader();

setTimeout(() => {
    exitLoader() 
}, 3000);

// LOAD LOADER

function startLoader() {
    const loaders = ['.loader-primary', '.loader-secondary', '.loader-tertiary', '.loader-content'];
    let delay = 0;
    
    loaders.forEach((loader) => {
        setTimeout(() => {
            $(loader).css('left', '0');
        }, delay);
        delay += 200;
    });

    setTimeout(() => {
        $('.loader-content .logo-content').fadeIn(500);
    }, delay + 500);
}

function exitLoader() {
    $('.loader-content .logo-content').fadeOut(500, () => {
        const loaders = ['.loader-primary', '.loader-secondary', '.loader-tertiary', '.loader-content'];
        let delay = 200;

        loaders.reverse().forEach((loader) => {
            setTimeout(() => {
                $(loader).css('left', '100%');
            }, delay);
            delay += 200;
        });

        setTimeout(() => {
            $('.loader').fadeOut();
        }, delay);
    });
}

// SHOW HEADER WHEN WINDOW SCROLL

$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }

    $('.scroll-top').on('click', function() {
        $(this).animate({
            scrollTop: $('html, body').scrollTop(0)
        }, 'slow');
    })

});

// HAMBURGER ANIMATION

let isSidebarActive = false;

$('.hamburger-wrapper').click(function() {
    if(!isSidebarActive) {
        $(this).addClass('active');
        $('.sidebar').addClass('active');
        $('.group-content').addClass('blur');
        isSidebarActive = true;
    } else {
        $(this).removeClass('active')
        $('.sidebar').removeClass('active');
        $('.group-content').removeClass('blur');
        isSidebarActive = false;
    }
    
});

$('.group-content').click(function() {
    if(isSidebarActive) {
        $('.hamburger-wrapper').removeClass('active');
        $('.sidebar').removeClass('active');
        $('.group-content').removeClass('blur');
    }
})
