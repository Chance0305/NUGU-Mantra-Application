class StatisticsApp {

    constructor(){

        this.canvas = document.querySelector("#stat_canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = $(window).width();
        this.height = this.canvas.height;
        this.canvas.width = this.width;

        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    render(){

        let arr = [20,30,40,60,70,20,30];

        document.querySelectorAll("#bottom > .bottom_icon")[1].classList.add("bottom_active");

        let today = new Date();
        for(let i = 0; i < 7; i++){

            // 0 => 6
            // 1 => 5
            // 2 => 4
            // 3 => 3
            // 4 => 2
            // 5 => 1
            // 6 => 0
            // n => Math.abs(n-6);
            let dayCalcNum = Math.abs(i-6);
            let day = new Date( today - 24 * 60 * 60 * 1000 * dayCalcNum );
            let date = day.getDate();
            log(date);
            let horizonSize = 15;
            let fontSize = 15;
            let horizonMargin = ( this.width - ( horizonSize * 7 ) ) / 8;
            
            this.ctx.textBaseline = "middle";
            this.ctx.textAlign = "left";
            this.ctx.fillStyle = "#333";
            this.ctx.font = `bold ${fontSize}px Arial`;

            let left = ( horizonMargin * (i + 1) ) + ( horizonSize * i );
            let yPost = this.height - fontSize;
            this.ctx.fillText(date,left,yPost);

            let bottomLinePositionCtrl = 35;
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#dfdfdf";
            this.ctx.lineWidth = 1;
            this.ctx.moveTo( 0 , this.height - bottomLinePositionCtrl );
            this.ctx.lineTo( this.width ,this.height - bottomLinePositionCtrl );
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    addEvent(){
        
    }

}

window.addEventListener("load",(e)=>{
    let statisticsApp = new StatisticsApp();
});


