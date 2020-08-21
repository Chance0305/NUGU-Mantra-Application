class EvaluateApp {
    constructor(){
        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    addEvent(){

    }

    render(){
        let txt = `오늘하루를 평가해 점수를 매기고, 한줄평을 작성하는 곳 입니다.`;
        let btnText = "알겠어요!";
        // modal.alert(txt,btnText);
    }
}

window.addEventListener("load",()=>{
    window.evaluateApp = new EvaluateApp();
});