class CalendarApp {
    constructor() {
        this.list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.nowMonth = new Date().getMonth();
        this.dateArr = [];
        this.init();

    }

    init() {
        this.addEvent();
        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");
        this.drawMonth();
    }

    newDate(month, date = 1) {
        let n = new Date();
        n.setDate(date);
        n.setMonth(month);
        return n;
    }

    addEvent() {
        $(".calendar_top > i").on("click",  this.moveDateBtnClickHandler);
    }

    moveDateBtnClickHandler = e => {
        let num = $(e.currentTarget).data('num')*1;
        this.nowMonth += num;
        this.drawMonth();
    }

    drawMonth(){
        let date = this.newDate(this.nowMonth);
        $(".calendar_table > tbody").remove();
        let txt = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
        $("#calendar_year_month").html(txt);

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let lastDate = this.list[month];
        let trtd = document.createElement("tbody");
        let dNum = 1;

        this.dateArr = [];

        if (year % 4 && year % 100 != 0 || year % 400 == 0){
            lastDate = 29;
            this.list[1] = 29;
        }



        for(let i = 1; i <= 6; i++){

            //trtd.push("<tr>");
            let tr = document.createElement("tr");

            for(let j = 1; j <= 7; j++){

                let td = document.createElement("td");
                let data = new Date(`${year}-${month+1}-${dNum}`).toDateString();
                let dayObject = new DateTD(new Date(data),td, data == new Date().toDateString());

                if( (i == 1 && j <= day) || dNum > lastDate ){

                    //trtd.push(`<td><span></span></td>`);
                    dayObject.dom.innerHTML = `<span></span>`;
                    dayObject.date = null;

                } else {

                    //let data = `${year}-${month+1}-${dNum}`;
                    //trtd.push(`<td data-date="${data}"><span>${dNum}</span></td>`);

                    dayObject.dom.innerHTML = `<span>${dNum}</span>`;
                    dNum++;

                }

                this.dateArr.push(dayObject);
                tr.appendChild(dayObject.dom);

            }
            
            //trtd.push("</tr>");
            trtd.appendChild(tr);
        }

        if(this.dateArr.find(x=>{return x.active}) === undefined){
            let first = this.dateArr.find(x=> x.date != null);
            this.changeActive(first.date);
        }
        $(".calendar_table").append(trtd);

    }

    changeActive(date){
        let preObj = this.dateArr.find(x=>{return x.active});
        let clickObj = this.dateArr.find(x=>{return x.date == date});

        if(preObj !== undefined){
            preObj.active = false;
            preObj.domActiveAction();
        }

        clickObj.active = true;
        clickObj.domActiveAction();
    }

}

window.addEventListener("load", () => {
    window.calendarApp = new CalendarApp();
});

class DateTD {
    constructor(date,dom,active = false){

        this.active = active;
        this.date = date;
        this.dom = dom;

        this.dom.dataset.date = this.date.toDateString();

        if(this.active){
            this.dom.classList.add("calendar_active");
        }

        this.dom.addEventListener("click",(e)=>{
            if(this.date === null) return;
            window.calendarApp.changeActive(this.date);
        });

    }

    domActiveAction(){
        if(this.active) this.dom.classList.add("calendar_active");
        else this.dom.classList.remove("calendar_active");
    }


}