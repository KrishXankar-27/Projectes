const time = document.getElementById('clock');

setInterval(function ()  {
    let date = new Date();

    time.innerHTML = date.toLocaleString(); 
}, 1000);
