class StatisticsApp {

    constructor() {

        this.canvas = document.querySelector("#stat_canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = $(window).width();
        this.height = this.canvas.height;
        this.canvas.width = this.width;
        this.scoreArr = [];
        this.init();
    }

    async init() {
        this.addEvent();
        await this.loadData();
        this.render();
    }

    loadData(){

        return new Promise(async (res,rej)=>{
            let today = new Date();
            for(let i = 0; i < 7; i++){
                let dayCalcNum = Math.abs(i - 6);
                let day = new Date(today - 24 * 60 * 60 * 1000 * dayCalcNum);
                let date = day.getDate();
                let score = await this.getScore(day.toDBString());
                this.scoreArr.push(score);
                if(i == 6) res(true);
            }
        });

    }

    async render() {

        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");
        this.ctx.clearRect(0,0,this.width,this.height);

        let arr = [18, 30, 25, 22, 27, 63 , 40 ];
        let dotList = [];
        let bottomLinePositionCtrl = 35;
        let bottomLineMargin = 10;
        let circleRadius = 8;
        let graphHeight = this.height - bottomLinePositionCtrl - circleRadius;

        for (let i = 0; i < 7; i++) {
            // 0 => 6
            // 1 => 5
            // 2 => 4
            // 3 => 3
            // 4 => 2
            // 5 => 1
            // 6 => 0
            // n => Math.abs(n-6);

            let today = new Date();
            let dayCalcNum = Math.abs(i - 6);
            let day = new Date(today - 24 * 60 * 60 * 1000 * dayCalcNum);
            let date = day.getDate();

            let horizonSize = 15;
            let fontSize = 15;
            let horizonMargin = (this.width - (horizonSize * 7)) / 8;
            let textX = (horizonMargin * (i + 1)) + (horizonSize * i);
            let textY = this.height - fontSize;
            let score = this.scoreArr[i];
            // let score = arr[i];
            let circleY = graphHeight - (graphHeight * score * 0.01) + ( circleRadius );

            if (i === 6) { // 오늘날짜 하이라이팅
                this.ctx.fillStyle = "#5685ff";
                this.ctx.beginPath();
                this.ctx.moveTo(textX + fontSize / 2, textY);
                this.ctx.arc(textX, textY - 1, 13, -Math.PI / 2, 3 / 2 * Math.PI);
                this.ctx.closePath();
                this.ctx.fill();
            }

            this.ctx.fillStyle = i === 6 ? "#fff" : '#333';
            this.ctx.textBaseline = "middle";
            this.ctx.textAlign = "center";
            this.ctx.font = `bold ${fontSize}px Arial`;
            this.ctx.fillText(date, textX, textY);

            if(!score) continue;

            this.ctx.beginPath();
            this.ctx.strokeStyle = "#dfdfdf";
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(0 + bottomLineMargin, this.height - bottomLinePositionCtrl);
            this.ctx.lineTo(this.width - bottomLineMargin , this.height - bottomLinePositionCtrl);
            this.ctx.stroke();
            this.ctx.closePath();

            this.ctx.fillStyle = '#5685ff';
            this.ctx.beginPath();
            this.ctx.moveTo(textX, circleY);
            this.ctx.arc(textX, circleY, circleRadius, -Math.PI / 2, 3 / 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();

            if (i !== 6) {
                this.ctx.fillStyle = '#fff';
                this.ctx.beginPath();
                this.ctx.moveTo(textX, circleY);
                this.ctx.arc(textX, circleY, circleRadius - 3, -Math.PI / 2, 3 / 2 * Math.PI);
                this.ctx.fill();
                this.ctx.closePath();
            }

            dotList.push([textX, circleY , score]);
        }

        this.ctx.strokeStyle = "#5685ff";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        for (let i = 0; i < dotList.length; i++) {
            let nowDot = dotList[i];
            let nextDot = dotList[i + 1] || null;
            if (nextDot === null) continue;
            this.ctx.moveTo(nowDot[0], nowDot[1]);
            this.ctx.lineTo(nextDot[0], nextDot[1]);
        }
        this.ctx.closePath();
        this.ctx.stroke();

        for (let i = 0; i < dotList.length; i++) {
            let nowDot = dotList[i];
            this.ctx.lineWidth = 0.5;
            this.ctx.beginPath();
            this.ctx.moveTo(nowDot[0], this.height - bottomLinePositionCtrl );
            this.ctx.lineTo(nowDot[0],nowDot[1] + circleRadius);
            this.ctx.closePath();
            this.ctx.strokeStyle = "#dfdfdf";
            this.ctx.stroke();

            this.ctx.fillStyle = '#fff';
            this.ctx.beginPath();
            this.ctx.moveTo(nowDot[0], nowDot[1]);
            this.ctx.arc(nowDot[0] , nowDot[1] , circleRadius - 3, -Math.PI / 2, 3 / 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();

        }
    }

    addEvent() {
        window.addEventListener("resize",(e)=>{
            this.width = $(window).width();
            this.canvas.width = this.width;
            this.render();
        });
    }

    getScore(date) {
        return new Promise((res,rej)=>{
            
            let formData = new FormData();
            formData.append("date",date);
            let xhr = new XMLHttpRequest();
            xhr.open("POST","/record/load");
            xhr.addEventListener("load",(e)=>{

                let record = JSON.parse(xhr.responseText).record;
                record = record ? record.score*1 : record;
                res(record);

            });
            xhr.send(formData);
        });
    }

}

window.addEventListener("load", (e) => {
    window.statisticsApp = new StatisticsApp();
});


