class MyApp {

    constructor(){
        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    render(){
        document.querySelectorAll("#bottom > .bottom_icon")[2].classList.add("bottom_active");
    }

    addEvent(){
        document.querySelector(".profile_bottom_btn").addEventListener("click", this.logoutBtnClickEventHandler);
    }

    logoutBtnClickEventHandler = e => {
        window.modal.confirm("로그아웃 하시겠습니까?").then((e)=>{
            if(e) location.href = "/logout";
        });
    }
    
}

window.addEventListener('load',()=>{
    let myApp = new MyApp();
});