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
        document.querySelector(".profile_edit_btn").addEventListener('click', this.profileEditBtnClickEventHandler);
    }

    profileEditBtnClickEventHandler = e=> {

        let input = document.createElement("input");
        input.setAttribute("type","file");
        input.setAttribute("accept","image/*");
        input.addEventListener("input",(e)=>{
            let file = e.currentTarget.files[0];
            let acceptExt = ["jpg","jpeg","png","gif"];
            let ext = file.type.split("/")[1];
            if(acceptExt.includes(ext) && file.size <= 5000000){

                let formData = new FormData();
                formData.append("file",file);
                formData.append("ext",ext);

                let xhr = new XMLHttpRequest();
                xhr.open("POST","/user/profile/update");
                xhr.addEventListener("load",(e)=>{
                    let txt = "프로필 변경이 완료되었습니다.";
                    modal.alert(txt).then((e)=>{
                        location.href = '/my';
                    });
                });
                xhr.send(formData);
                
            } else {
                modal.alert(`5MB 이하의 이미지 ( ${acceptExt.join(' , ')} ) 파일만 업로드 가능합니다.`);
                return;
            }
            input.remove();
        });
        input.click();

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