const imgs = document.querySelectorAll('.item')
console.log(imgs)
imgs.forEach(img => {
  img.addEventListener('click', clickFunction)
})
function clickFunction() {
  imgs.forEach(item => {
    item.classList.remove('active')
  })
  this.classList.add('active')
}