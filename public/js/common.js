const log = console.log;
window.spl = new Object();
window.modal = new Object();

window.addEventListener("load", () => {

    // spl API start

    spl.$dom = $("#splash_screen");

    spl.show = function () {
        this.$dom.show();
    }

    spl.hide = function () {
        this.$dom.hide();
    }

    spl.fadeIn = function () {
        this.$dom.fadeIn();
    }

    spl.fadeOut = function () {
        this.$dom.fadeOut();
    }

    spl.animateItmes = function (duration) {
        this.$dom.find("img").css({
            "transition": `transform ${duration / 1000}s`
        });

        this.$dom.find("img").css({
            "transform": "scale(1.2) rotate(360deg)"
        });
    }

    // spl API end

    // modal API 

    modal.$confirm_dom = $("#alert_screen_confirm");
    modal.$ok_dom = $("#alert_screen_ok");

    modal.confirm = function (text) {
        this.$confirm_dom.find('.alert_text').html(text.toXSSFilteredText());
        this.$confirm_dom.fadeIn();
        return new Promise((res, rej) => {

            document.querySelector('.alert_ok').addEventListener("click", (e) => {
                res(true);
                this.$confirm_dom.fadeOut();
            });

            document.querySelector(".alert_refuse").addEventListener("click" , (e)=>{
                res(false);
                this.$confirm_dom.fadeOut();
            });

        });
    }

    modal.alert = function (text, btnText=null) {
        this.$ok_dom.find('.alert_text').html(text.toXSSFilteredText());
        document.querySelector('.alert_ok_only').innerHTML = btnText != null ? btnText : "확인";
        this.$ok_dom.fadeIn();
        return new Promise((res, rej) => {
            document.querySelector('.alert_ok_only').addEventListener("click", (e) => {
                res(true);
                this.$ok_dom.fadeOut();
            });
        });
    }

    modal.ok_hide = function(){
        this.$ok_dom.fadeOut();
    }

    // modal API end

    $(".height_same_width").each((idx,x)=>{
        $(x).css({height:`${$(x).width()}px`});
    });

    window.addEventListener("resize",(e)=>{
        $(".height_same_width").each((idx,x)=>{
            $(x).css({height:`${$(x).width()}px`});
        }); 
    });
    
    $("#option_btn").on('click',()=>{
        window.modal.alert("기능 개발중입니다.");
    });

    $("#logo_white").on('click',()=>{
        location.href = '/';
    });
});

String.prototype.toXSSFilteredText = function () {
    let entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    let returnTxt = this.replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
    return returnTxt;
}

// let p = new Promise( (resolve, reject) => {
        //     setTimeout(()=>{
        //         console.log("작업끝");
        //         reject();
        //     },2000)
        // });  //프로미스 객체안에는 콜백 함수가 들어간다.
        //이 콜백함수는 매개변수가 총 4개인데 2개밖에 안써

        // p.then( data => {
        //     console.log(data);
        // }).catch( err => {
        //     console.log(err);
        // })


Date.prototype.toDBString = function(){
    return `${this.getFullYear()}-${this.getMonth()+1}-${this.getDate()}`;
}