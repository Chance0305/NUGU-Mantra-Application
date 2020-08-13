<!DOCTYPE html>
<html lang="ko">
<head>
	<link rel="stylesheet" href="css/common.css">
	<link rel="stylesheet" href="css/login.css">
	<meta charset="UTF-8">
	<title>만트라</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
<body>
	<div class="container">
		<img src="imgs/logo.png" alt="logo" class="login-logo">
		<div class="login-title">
			명상의 기준 <span>만트라</span>
		</div>
		<div class="login-sub">
			NUGU 와 함께하는 명상 플랫폼 Ver.1.0
		</div>
		<form action="" id="login-form">
			<h1>로그인</h1>
			<div class="login-line"></div>
			<input type="text" placeholder="아이디">
			<span class="login-error">아이디 또는 비밀번호가 잘못되었습니다.</span>
			<input type="password" placeholder="비밀번호">
			<div class="login-save">
				<input type="checkbox" id="login_auto_checkbox">
				<label for="login_auto_checkbox">
					<i class="fa fa-check"></i>
				</label>
				<span>아이디 저장</span>
			</div>
			<button type="submit" id="login_submit">로그인</button>
			<a href="/register" class="join-redirect">처음이시면 회원가입을 해주세요</a>
		</form>
	</div>
</body>
</html>