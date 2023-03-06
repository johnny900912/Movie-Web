$(document).ready(()=>{
    //setimg courasel
    let navText=["<i class='bx bx-chvron-left'></i>","<i class='bx bx-chvron-right'></i>" ]


    $('#main-carousel').owlCarousel({
        items:1,
        dots:false,
        loop:true,
        nav:true,
        navText: navText,
        autoplayHoverPause:true,

    })

    $('#top-movie-slide').owlCarousel({
        items:8,
        dots:false,
        loop:true,
        autoplay:false,
        autoplayHoverPause:true,
    })
    $('.movie-slide').owlCarousel({
        items:5,
        dots:false,
        nav:true,
        navText:navText,
        margin:30,
        autoplay:false,
    })
})