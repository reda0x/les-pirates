let hide = document.getElementById('hide')
let show = document.getElementById('show')
let bar = document.getElementById('side-bar')
hide.onclick = () => {
    bar.style.right = '-240px'
}
show.onclick = () => {
    bar.style.right = '0'
}

let header = document.getElementById('header')

window.addEventListener('scroll', function(){
    let lastScroll = 0
    const scrolled = window.pageYOffset;
    if (scrolled >= 450){
       header.classList.replace('header', 'header-scroll')

    }else{
        header.classList.replace('header-scroll', 'header')
    }
})

const topbutt = document.getElementById('top')
window.addEventListener('scroll', function(){
    const scrolled2 = window.pageYOffset;
    if (scrolled2 <= 170){
        topbutt.classList.replace('back-to-top-button','back-to-top-button-active')
    }else{
        topbutt.classList.replace('back-to-top-button-active','back-to-top-button')
    }

})