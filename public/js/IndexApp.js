class IndexApp {
    constructor() {

        this.statusCanvas = document.querySelector("#main_status_canvas");
        this.statusCtx = this.statusCanvas.getContext("2d");
        this.main_status_text = document.querySelector(".main_status_text");
        this.init();
    }

    init() {
        this.addEvent();
        this.loadSrc();
        this.resizeGraph();
        this.editText();
    }

    loadSrc() {
        //spl.show();
        //setTimeout(()=>{spl.fadeOut()},1000);
        document.querySelectorAll("#bottom > .bottom_icon")[0].classList.add("bottom_active");
    }

    addEvent() {
        $(window).on("resize", this.resizeGraph);
    }

    editText = e => {
        if (user_score < 40) {
            $(this.main_status_text).html("당장 명상을 하셔야겠는데요?");
        } else if (user_score < 60) {
            $(this.main_status_text).html("명상이 필요해 보여요");
        } else if (user_score < 80) {
            $(this.main_status_text).html("오늘도 짧은 명상 어떠세요?");
        } else if (user_score <= 100) {
            $(this.main_status_text).html("요즘 좋은 일 있으신가봐요!");
        }
    }

    resizeGraph = e => {
        let $dom = $('.main_status_graph');
        let size = $dom.width();
        $dom.height(size);
        this.statusCanvas.width = size;
        this.statusCanvas.height = size;

        this.statusCtx.clearRect(0, 0, size, size);

        this.statusCtx.fillStyle = "#fff3";
        this.statusCtx.beginPath();
        this.statusCtx.moveTo(size / 2, size / 2);
        this.statusCtx.arc(size / 2, size / 2, size / 2, -Math.PI / 2, 3 / 2 * Math.PI);
        this.statusCtx.fill();
        this.statusCtx.closePath();

        this.statusCtx.fillStyle = "#fff";
        this.statusCtx.beginPath();
        this.statusCtx.moveTo(size / 2, size / 2);
        this.statusCtx.arc(size / 2, size / 2, size / 2, -Math.PI / 2, -Math.PI / 2 + (user_score / 100) * (2 * Math.PI));
        this.statusCtx.fill();
        this.statusCtx.closePath();

        this.statusCtx.save();
        this.statusCtx.globalCompositeOperation = 'destination-out';
        this.statusCtx.beginPath();
        this.statusCtx.moveTo(size / 2, size / 2);
        this.statusCtx.arc(size / 2, size / 2, size / 2 - 2, 0, 2 * Math.PI, false);
        this.statusCtx.fill();
        this.statusCtx.restore();

        this.statusCtx.textBaseline = 'middle';
        this.statusCtx.textAlign = 'center';

        this.statusCtx.font = "20px noto";
        this.statusCtx.fillText(window.user_name, size / 2, size / 2 - 35);

        this.statusCtx.font = "bold 32px noto";
        this.statusCtx.fillText(`${user_score.toFixed(2)}`, size / 2, size / 2);

    }
}


window.addEventListener("load", () => {
    let indexApp = new IndexApp();

});