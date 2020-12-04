$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function newpage(){
    window.open("https://www.disneyplus.com/pt-br/video/81ca31cc-605f-4c25-9ced-6f1c1ca279fb");
}

function infopage(){
    window.open("https://www.disneyplus.com/pt-br/series/the-mandalorian/3jLIGMDYINqD");
}
function navegar(elem){
    window.open(elem);
}