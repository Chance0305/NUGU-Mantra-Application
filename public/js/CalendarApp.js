class CalendarApp {
    constructor(){
            this.list = [31,28,31,30,31,30,31,31,30,31,30,31];
            this.init();

    }

    init(){
        this.addEvent();
        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");
        this.drawMonth(new Date());
    }

    addEvent(){
        
    }
    
    drawMonth(date){
        let $tbody = $(".calendar_table > tbody");
        let txt = `${date.getFullYear()}년 ${date.getMonth()+1}월`;
        $("#calendar_year_month").html(txt);
        $tbody.html("");

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let lastDate = this.list[month];
        let trtd = '';
        let dNum = 1;

        if (year % 4 && year % 100 != 0 || year % 400 == 0) lastDate = this.list[1] = 29;

        
    }

}

window.addEventListener("load",()=>{
    let calendarApp = new CalendarApp();
});