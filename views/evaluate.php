<script src="js/EvaluateApp.js"></script>
<link rel="stylesheet" href="css/evaluate.css">

<div class="evaluate_container">
    <div class="evaluate_top">
        <div class="evaluate_top_icons">
            <a href="/menu"><i class="fas fa-chevron-left"></i></a>
            <span></span>
            <i class="far fa-question-circle"></i>
        </div>
    </div>
    <div class="evaluate_bottom">
        <div class="evaluate_fix">
            <img src="imgs/user_icon.png" alt="user_img" id="evaluate_user_img">

            <div class="evaluate_user_part evaluate_part">
                <div class="evaluate_user_name">정재성</div>
                <p class="evaluate_user_type">명상 초보자</p>
            </div>

            <div class="evaluate_text_part evaluate_part">
                <div class="evaluate_title">오늘의 하루는 어떠셨나요?</div>
                <div class="evaluate_sub_title">작성한 내용은 하단의 기록 탭에서 확인할 수 있습니다.</div>
            </div>

            <div class="evaluate_part evaluate_score_part">
                <div class="evaluate_score_text">오늘 하루를 점수로 알려주세요!</div>
                <div class="evaluate_show_box">
                    <div class="evaluate_part_show flex-center-row">50</div>
                </div>
                <input type="range" id="score_range" value="50" min="0" max="100">
                <textarea id="evaluate_textarea" placeholder="오늘의 한줄평을 적어주세요!"></textarea>
            </div>
            <div class="evaluate_part evaluate_btn flex-center-row">작성 완료</div>
        </div>
    </div>
</div>
