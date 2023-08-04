//active navebar

//nav hide

//ccxounter dasign
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 5642, 1000);
  counter("count2", 687, 4790, 20000);
  counter("count3", 485, 5789, 1000);
  counter("count4", 556, 6987, 900);
});
