const log = console.log;

class LoginApp {
	constructor() {
		this.init();
	}

	init() {
		this.addEvent();
	}

	addEvent() {
		document.querySelector("#login_submit").addEventListener("click", this.login_process);
	}

	login_process = e => {
		let id = user_id.value.trim().toXSSFilteredText();
		let password = user_password.value.trim().toXSSFilteredText();

		id_empty_error.style.display = "none";
		password_empty_error.style.display = "none";
		login_empty_error.style.display = "none";

		if (id === "") {
			id_empty_error.style.display = "block";
			return;
		}

		if (password == "") {
			password_empty_error.style.display = "block";
			return;
		}

		let formData = new FormData();
		formData.append("user_id", id);
		formData.append("user_password", password);
		formData.append("user_auto_login", login_auto_checkbox.checked);

		let xhr = new XMLHttpRequest(formData);
		xhr.open("POST", "/user/login");
		xhr.addEventListener("load", (e) => {
			let json = JSON.parse(xhr.responseText);
			if (!json.result) { // 로그인 실패
				login_empty_error.style.display = "block";
			} else { // 로그인 성공
				modal.alert("성공적으로 로그인 되었습니다.").then(bool => {
					location.reload();
				});

			}
		});
		xhr.send(formData);
	}
}

window.addEventListener("load", () => {
	let loginApp = new LoginApp();
});
