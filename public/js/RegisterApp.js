const log = console.log;
const idPat = /^[a-z0-9]{4,15}$/;
//const passPat = /^.*(?=^.{6,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const passPat = /^(?=.*[a-zA-Z])(?=.*[\d]).{8,20}$/;
window.addEventListener("load", () => {
    let registerApp = new RegisterApp();
});

class RegisterApp {
    constructor() {
        this.init();
    }
    init() {
        this.id_check = true;
        this.pass_check = true;
        this.passc_check = true;
        this.date_check = true;
        this.gender_check = true;
        this.addEvent();
    }

    addEvent() {
        register_id.addEventListener("input", this.check_id);
        register_password.addEventListener("input", this.check_pass);
        register_passwordc.addEventListener("input", this.check_pass);
        register_date.addEventListener("input", this.check_date);
        register_submit.addEventListener("click", this.register_process);
    }
    check_pass = e => {
        if (!passPat.test(register_password.value) || register_password.value == "") {
            this.error_text("비밀번호는 영문자와 숫자를 조합한 8자 이상 20자 이하로 구성 되어야 합니다.", "pass_err");
            register_password.style.border = "1px solid #fe8b74";
            this.pass_check = false;
        } else {
            this.error_text("", "pass_err");
            register_password.style.border = "1px solid #5685ff";
            this.pass_check = true;
        }
        if ((register_password.value != register_passwordc.value) || register_passwordc.value == "") {
            this.error_text("비밀번호와 비밀번호 확인이 일치하지 않습니다.", "passc_err");
            register_passwordc.style.border = "1px solid #fe8b74";
            this.passc_check = false;
        } else {
            this.error_text("", "passc_err");
            register_passwordc.style.border = "1px solid #5685ff";
            this.passc_check = true;
        }
    }

    check_id = e => {
        if (!idPat.test(register_id.value)) {
            this.error_text("아이디는 영문, 숫자로 4자이상 15자 이하로 구성 되어야 합니다.", "id_err");
            register_id.style.border = "1px solid #fe8b74";
            this.id_check = false;
        } else {
            this.error_text("", "id_err");
            register_id.style.border = "1px solid #5685ff";
            this.id_check = true;
        }
    }

    check_date = e => {
        if (register_date.value == "") {
            this.error_text("생년월일을 선택해주세요.", "date_err");
            register_date.style.border = "1px solid #fe8b74";
            this.date_check = false;
        } else {
            this.error_text("", "date_err");
            register_date.style.border = "1px solid #5685ff";
            this.date_check = true;
        }
    }
    check_gender = e => {
        const gender = document.querySelector(".register_gender_checkbox:checked") == null ? null : document.querySelector(".register_gender_checkbox:checked").value;
        if (gender == null) {
            this.error_text("성별을 선택해주세요.", "gender_err");
            this.gender_check = false;
        } else {
            this.error_text("", "gender_err");
            this.gender_check = true;
        }
    }

    register_process = e => {
        const id = register_id.value.trim();
        const pass = register_password.value.trim();
        const date = register_date.value;
        const gender = document.querySelector(".register_gender_checkbox:checked") == null ? null : document.querySelector(".register_gender_checkbox:checked").value;
        this.check_id();
        this.check_pass();
        this.check_date();
        this.check_gender();
        if (!this.id_check || !this.pass_check || !this.passc_check || !this.date_check || !this.gender_check) {
            return;
        }
        let formData = new FormData();
        formData.append("id", id);
        formData.append("pass", pass);
        formData.append("date", date)
        formData.append("gender", gender);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/user/register");
        xhr.send(formData);
        xhr.addEventListener("load", () => {
            let json = JSON.parse(xhr.responseText);
            if (!json.register) {
                this.error_text("중복되는 아이디 입니다. 다른 아이디를 사용해주세요", "id_err");
                register_id.style.border = "1px solid #fe8b74";
                return;
            } else { // 회원가입 성공
                modal.alert("성공적으로 회원가입 되었습니다.").then(bool => {
                    location.href = "/";
                });
            }
        });
    }


    error_text(str, dom) {
        document.querySelector(`.${dom}`).innerHTML = str;
    }

}