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

    lastScroll = scrolled
    console.log(scrolled)
})