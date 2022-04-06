//设置12小时制还是24小时制
const is_24_or_12 = true
//h获取cloums数组
let colums = Array.from(document.getElementsByClassName('coloum'))
//每位数字的偏移值
let size = 86
//数组的类名
let class_Name = ['now', 'near', 'far', 'far', 'morefar', 'morefar']

function getTime() {
  let nowTme = new Date()
  let hours = is_24_or_12 ? nowTme.getHours() : nowTme.getHours() % 12 || 12
  hours = hours < 10 ? '0' + hours : hours
  let minutes = nowTme.getMinutes() < 10 ? '0' + nowTme.getMinutes() : nowTme.getMinutes()
  let seconds = nowTme.getSeconds() < 10 ? '0' + nowTme.getSeconds() : nowTme.getSeconds()
  return hours + '' + minutes + '' + seconds
}
const getClass = (n, i) => {
  return class_Name.find((classes, index) => {
    return i - index == n || i + index == n
  }) || ''
}
setInterval(() => {
  //获取当前时间
  let time = getTime()
  colums.forEach((cloum, index) => {
    let everyTime = time[index]
    let offect = everyTime * size
    cloum.style.transform = `translateY(calc(50vh - ${offect + size / 2}px))`
    Array.from(cloum.children).forEach((ele, index) => {
      ele.className = 'num ' + getClass(everyTime, index)
    })
  })
  if (time[0] == 2) {
    Array.from(colums[1].children).forEach(ele => {
      if (ele.innerText > 3) {
        ele.classList.add('show')
      }
    })
  }
}, 1000)