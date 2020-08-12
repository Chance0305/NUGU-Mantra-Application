const log = console.log;
const idPat = /^[a-z0-9]{4,15}$/;
window.addEventListener("load", () => {
    let registerApp = new RegisterApp();
});

class RegisterApp {
    constructor() {
        this.init();
    }
    init() {
        this.addEvent();
    }

    addEvent() {
        register_id.addEventListener("input", this.check_id);
        register_password.addEventListener("input", this.check_pass);
        register_passwordc.addEventListener("input" , this.check_pass);
        register_submit.addEventListener("click", this.register_process);
    }
    check_pass = e => {
        if(register_password.value != register_passwordc.value){
            this.error_text("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            register_password.style.border = "1px solid #fe8b74";
            register_passwordc.style.border = "1px solid #fe8b74";
        }else {
            this.error_text("");
            register_password.style.border = "1px solid #5685ff";
            register_passwordc.style.border = "1px solid #5685ff";
        }
    }

    check_id = e => {
        if (!idPat.test(e.target.value)) {
            this.error_text("아이디는 영문, 숫자로 4~15글자로 구성됩니다.");
            e.target.style.border = "1px solid #fe8b74";
        } else {
            this.error_text("");
            e.target.style.border = "1px solid #5685ff";
        }
    }

    register_process = e => {
        const id = register_id.value;
        const pass = register_password.value;
        const passc = register_passwordc.value;
        const date = register_date.value;

    }

    error_text(str) {
        document.querySelector(".register-error").innerHTML = str;
    }

}