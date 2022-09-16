let hide = document.getElementById('hide')
let show = document.getElementById('show')
let bar = document.getElementById('side-bar')
hide.onclick = () => {
    bar.style.right = '-240px'
}
show.onclick = () => {
    bar.style.right = '0'
}