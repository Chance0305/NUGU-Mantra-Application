<script src="js/CalendarApp.js"></script>
<link rel="stylesheet" href="css/calendar.css">
<div class="calendar_container">
    <div id="calendar">

        <div class="calendar_top">
            <i class="fa fa-chevron-left" data-num="-1"></i>
            <span id="calendar_year_month"></span>
            <i class="fa fa-chevron-right" data-num="1"></i>
        </div>

        <table class="calendar_table">
            <thead>
                <tr>
                    <th>SUN</th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THE</th>
                    <th>FRI</th>
                    <th>SAT</th>
                </tr>
            </thead>
            <tbody>
                
                
            </tbody>
        </table>
        
    </div>
    
    <div id="day_info">
        <div class="day_info_top">
            <canvas width="100" height="100" id="date_canvas"></canvas>
            <div class="day_info_box">
                <p class="day_info_today"></p>
                <div class="day_info_text"></div>
            </div>
        </div>

        <div class="day_info_btn">
            월간 통계 보러 가기
        </div>
    </div>
</div>