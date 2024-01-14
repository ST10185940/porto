function updatedateTime(){
    const currentdate = new Date();
    const formattedDateTime = currentdate.toLocaleString();
    document.getElementById('date').innerHTML = formattedDateTime;
}

updatedateTime();
setInterval(updatedateTime,1000);