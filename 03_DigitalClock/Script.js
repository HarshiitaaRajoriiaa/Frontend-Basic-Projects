let date = new Date();
const clock = document.querySelector('#clock')
console.log(clock)
setInterval(function () {
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);