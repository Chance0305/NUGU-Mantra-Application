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
        document.querySelector('.evaluate_btn').addEventListener("click", this.evaluateBtnClickHandler);
    }

    evaluateBtnClickHandler = e=> {
        
        let score = this.score_input.value;
        let comment = document.querySelector("#evaluate_textarea").value.trim().toXSSFilteredText();

        if(comment == ""){
            let txt = "오늘의 한줄평을 작성해주세요!";
            modal.alert(txt);
            return;
        }
        
        modal.confirm("작성을 완료하시겠습니까?").then((e)=>{
            if(e){

                let formData = new FormData();
                formData.append("comment",comment);
                formData.append("score",score);
                let xhr = new XMLHttpRequest();
                xhr.open("POST","/record/insert");
                xhr.addEventListener("load",(e)=>{
                    let json = xhr.responseText;
                    log(json);
                });
                xhr.send(formData);
                
            }
        });
        
    }

    scoreRangeInputHandler = e => {
        let value = e.currentTarget.value;
        document.querySelector(".evaluate_part_show").innerHTML = value;
        document.querySelector(".evaluate_part_show").style.left = `calc(${value}% - 25px)`;

    }

    render(){
        document.querySelectorAll("#bottom > .bottom_icon")[0].classList.add("bottom_active");

        if(window.evaluate_exist === 1){ // 오늘 이미 작성했음

            // let txt = '오늘은 이미 작성을 마쳤습니다! 작성한 기록은 하단의 "기록" 탭에서 확인할 수 있습니다.';
            // let btnText = "뒤로가기";
            // modal.alert(txt,btnText).then((e)=>{
            //     location.href = "/menu";
            // });
            // return;

        }

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