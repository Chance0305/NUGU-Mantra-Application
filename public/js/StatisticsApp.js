class StatisticsApp {

    constructor(){
        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    render(){
        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");
    }

    addEvent(){
             
    }

}

window.addEventListener("load",(e)=>{
    let statisticsApp = new StatisticsApp();
});