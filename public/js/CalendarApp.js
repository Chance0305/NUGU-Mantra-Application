class CalendarApp {
    constructor(){
        this.init();

    }

    init(){
        this.addEvent();
        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");
    }

    addEvent(){
        
    }
    
}

window.addEventListener("load",()=>{
    let calendarApp = new CalendarApp();
});