var object
cList = document.getElementsByClassName("time-container")
list = document.getElementsByTagName('li')


function setDaily(obj){
    var i = 0;
    while(i < 6){
        var info = cList[i].getElementsByClassName("info")[0]
        var span = info.querySelector(".value")
        var bottom = info.getElementsByTagName("footer")[0]
        span.innerHTML = obj[i].timeframes.daily.current + "hrs"
        bottom.innerHTML = "yesterday - " + obj[i].timeframes.daily.previous + "hrs"
        i++
    }
    
}
function setWeekly(obj){
    var i = 0;
    while(i < 6){
        var info = cList[i].getElementsByClassName("info")[0]
        var span = info.querySelector(".value")
        var bottom = info.getElementsByTagName("footer")[0]
        span.innerHTML = obj[i].timeframes.weekly.current + "hrs"
        bottom.innerHTML = "last week - " + obj[i].timeframes.weekly.previous + "hrs"
        i++
    }
    
}
function setMonthly(obj){
    var i = 0;
    while(i < 6){
        var info = cList[i].getElementsByClassName("info")[0]
        var span = info.querySelector(".value")
        var bottom = info.getElementsByTagName("footer")[0]
        span.innerHTML = obj[i].timeframes.monthly.current + "hrs"
        bottom.innerHTML = "last month - " + obj[i].timeframes.monthly.previous + "hrs"
        i++
    }
    
}
fetch("data.json").then(response => {
    return response.json()
}).then(obj => {
    console.log(obj[0].title)
    setMonthly(obj);
    list[0].addEventListener("click", (event)=>{
        setDaily(obj)
        for(var i = 0; i<3; i++){
            list[i].style.opacity ="1"
        }
        list[0].style.opacity = "0.5"
    })
    list[1].addEventListener("click", (event)=>{
        setWeekly(obj)
        for(var i = 0; i<3; i++){
            list[i].style.opacity ="1"
        }
        list[1].style.opacity = "0.5"
    })
    list[2].addEventListener("click", (event)=>{
        setMonthly(obj)
        for(var i = 0; i<3; i++){
            list[i].style.opacity ="1"
        }
        list[2].style.opacity = "0.5"
    })

})

