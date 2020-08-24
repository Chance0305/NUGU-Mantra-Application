<script>const user_score = <?= $result->score ?>;</script>

<link rel="stylesheet" href="css/index.css">
<script src="js/IndexApp.js"></script>

<!-- 작성 규칙은 현재 보고있는 화면은 section#main 안으로 들어갈 예정 -->

<div class="main_status">
    <div class="main_status_top">
        <img src="imgs/user_icon.png" alt="user_img">
        <i class="fas fa-question-circle"></i>
    </div>

    <div class="main_status_graph">
        <canvas id="main_status_canvas"></canvas>
    </div>

    <div class="main_status_text flex-center-row">
        명상이 필요해 보여요!!
    </div>
</div>

<div class="main_guide_text">
    조용하고 한적한 곳에서 명상 해주세요.<br>
    잠들기 약 30분전, 제일 잔잔할때가 가장 이상적입니다.
</div>

<a href="/menu" class="main_start_btn flex-center-row">
    만트라 서비스 시작하기
</a>