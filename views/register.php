<!DOCTYPE html>
<html lang="ko">

<head>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/register.css">
    <script src="js/Toast.js"></script>
    <script src="js/RegisterApp.js"></script>
    <meta charset="UTF-8">
    <title>만트라</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>

<body>
    <div class="container">
        <div id="toast-list"></div>
        <img src="imgs/logo.png" alt="logo" class="register-logo">
        <div class="register-title">
            명상의 기준 <span>만트라</span>
        </div>
        <div class="register-sub">
            NUGU 와 함께하는 명상 플랫폼 Ver.1.0
        </div>
        <form action="" id="register-form">
            <h1>회원가입</h1>
            <div class="register-line"></div>
            <input id="register_id" type="text" placeholder="아이디">
            <span class="register-error id_err"></span>
            <input id="register_password" type="password" placeholder="비밀번호">
            <span class="register-error pass_err"></span>
            <input id="register_passwordc" type="password" placeholder="비밀번호 확인">
            <span class="register-error passc_err"></span>
            <input id="register_date" type="text" placeholder="생년월일 6자리" maxlength="6">
            <span class="register-error date_err"></span>
            <div class="register-gender">
                <input type="radio" value="male" id="register_gender_m" class="register_gender_checkbox" name="register_gender">
                <label for="register_gender_m" id="register_gender_label_m">
                    <i class="fa fa-check"></i>
                </label>
                <span>남성</span>
                <input type="radio" value="female" id="register_gender_w" class="register_gender_checkbox" name="register_gender">
                <label for="register_gender_w" id="register_gender_label_w">
                    <i class="fa fa-check"></i>
                </label>
                <span>여성</span>
            </div>
            <span class="register-error gender_err" style="margin-top: 30px;"></span>
            <button type="button" id="register_submit">회원가입</button>
            <a href="/login" class="login-redirect">이미 아이디가 있으신가요?</a>
        </form>
    </div>
    <div style="height: 300px;"></div>
</body>

</html>