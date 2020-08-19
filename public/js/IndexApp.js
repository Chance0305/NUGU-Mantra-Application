class IndexApp {
    constructor(){

        this.statusCanvas = document.querySelector("#main_status_canvas");
        this.statusCtx = this.statusCanvas.getContext("2d");
        
        this.init();
    }

    init(){
        this.addEvent();
        this.loadSrc();
        this.resizeGraph();
    }

    loadSrc(){
        //spl.show();
        //setTimeout(()=>{spl.fadeOut()},1000);
        
    }

    addEvent(){
        $(window).on("resize",this.resizeGraph);
    }

    resizeGraph = e => {
        let $dom = $('.main_status_graph');
        let size = $dom.width();
        $dom.height(size);
        this.statusCanvas.width = size;
        this.statusCanvas.height = size;

        this.statusCtx.clearRect(0,0,size,size);

        this.statusCtx.fillStyle = "#fff3";
        this.statusCtx.beginPath();
        this.statusCtx.arc(size/2 , size/2 , size/2 , -Math.PI/2 , 3/2*Math.PI );
        this.statusCtx.fill();
        this.statusCtx.closePath();
        
        this.statusCtx.fillStyle = "#fff";
        this.statusCtx.beginPath();
        this.statusCtx.arc(size/2 , size/2 , size/2 , -Math.PI/2 , -Math.PI/2 + (0.6) * (2*Math.PI) );
        this.statusCtx.fill();
        this.statusCtx.closePath();

        this.statusCtx.save();
        this.statusCtx.globalCompositeOperation = 'destination-out';
        this.statusCtx.beginPath();
        this.statusCtx.arc(size/2, size/2, size/2 - 2, 0, 2 * Math.PI, false);
        this.statusCtx.fill();
        this.statusCtx.restore();

        this.statusCtx.font = "25px noto";
        this.statusCtx.textAlign = 'center';
        this.statusCtx.textBaseline = 'middle';
        this.statusCtx.fillText("정재성",size/2,size/2);
        
    
    }
}

window.addEventListener("load",()=>{
    let indexApp = new IndexApp();

});