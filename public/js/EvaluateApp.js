class EvaluateApp {
    constructor(){
        this.score_input = document.querySelector("#score_range");

        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    addEvent(){
        this.score_input.addEventListener("input", this.scoreRangeInputHandler);
    }

    scoreRangeInputHandler = e => {
        let value = e.currentTarget.value;
        document.querySelector(".evaluate_part_show").innerHTML = value;
        document.querySelector(".evaluate_part_show").style.left = `calc(${value}% - 25px)`;
    }

    render(){
        document.querySelectorAll("#bottom > .bottom_icon")[0].classList.add("bottom_active");

        let txt = `오늘하루를 평가해 점수를 매기고, 한줄평을 작성하는 곳 입니다.`;
        let btnText = "알겠어요!";
        // modal.alert(txt,btnText);

        let today = new Date();
        let str = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`;
        $(".evaluate_top_icons > span").html(str);
    }
}

window.addEventListener("load",()=>{
    window.evaluateApp = new EvaluateApp();
});