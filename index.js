let sky = document.querySelector('.intro_block .bground .sky');
let mountain = document.querySelector('.intro_block .bground .mountain');
let human = document.querySelector('.intro_block .bground .human');
let links = document.querySelectorAll('.global_container header .menu a');
let blocks = document.querySelectorAll('.global_container .container .block');
let scroll_link = document.querySelector('.global_container .intro_block .main_intro_block .scroll');
let text_blocks = document.querySelectorAll('.global_container .container .block .text_block');
let scroll_slider = document.querySelector('.scroll_bar span');
let links_screens = document.querySelectorAll('.scroll_bar nav a');
let footer = document.querySelector('.global_container .container footer')
let header = document.querySelector('header')

function showBlocks(block, zone_block, version) {
    if (block.getBoundingClientRect().top <= zone_block) {
        switch (version) {
            case 1:
                block.style.transform = "translateX(0)";
                block.style.opacity = 1;
                break;
            default:
                break;
        }

    }
}

function swipeLinks(link, block) {
    link.addEventListener('click', function () {
        block.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
function clearLocation(){
    for(let i = 0; i<5; i++){
        links_screens[i].style.color = '#fff5'
    }
}
swipeLinks(scroll_link, blocks[0]);
swipeLinks(links[0], blocks[0]);
swipeLinks(links[1], blocks[1]);
swipeLinks(links[2], blocks[2]);
swipeLinks(links_screens[0], header);
swipeLinks(links_screens[1], blocks[0]);
swipeLinks(links_screens[2], blocks[1]);
swipeLinks(links_screens[3], blocks[2]);
swipeLinks(links_screens[4], footer);


window.addEventListener('mousemove', function (e) {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var skyX = e.screenX * 60 / w;
    var skyY = e.screenY * 60 / h;

    var mountainX = e.screenX * 30 / w;
    var mountainY = e.screenY * 30 / h;

    var humanX = e.screenX * 10 / w;
    var humanY = e.screenY * 10 / h;

    sky.style.transform = 'translate(' + skyX + 'px, ' + skyY + 'px)';
    mountain.style.transform = 'translate(' + mountainX + 'px, ' + mountainY + 'px)';
    human.style.transform = 'translate(' + humanX + 'px, ' + humanY + 'px)';
})

window.addEventListener('scroll', function (e) {

    const curr = e.target.scrollingElement.scrollTop;
    const max = document.documentElement.scrollHeight;
    const size_scr = Math.round((window.innerHeight*100)/max)*2;
    const procents = Math.round((curr*100)/(max-window.innerHeight)/1.23);

    scroll_slider.style.width = size_scr+'px';
    scroll_slider.style.top = procents+'%';
    if(procents >= 10 & procents < 37){
        clearLocation();
        links_screens[1].style.color = '#fff'
    }else if(procents >= 37 & procents < 62){
        clearLocation();
        links_screens[2].style.color = '#fff'
    }else if(procents >= 62 & procents < 75){
        clearLocation();
        links_screens[3].style.color = '#fff'
    }else if(procents >= 75){
        clearLocation();
        links_screens[4].style.color = '#fff'
    }else{
        clearLocation();
        links_screens[0].style.color = '#fff'
    }

    showBlocks(text_blocks[0], 500, 1);
    showBlocks(text_blocks[1], 500, 1);
    showBlocks(text_blocks[2], 500, 1);

});
