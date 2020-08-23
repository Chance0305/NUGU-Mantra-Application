<?php use Gondr\App\Library; ?>
<link rel="stylesheet" href="css/my.css">
<script src="js/myApp.js"></script>

<div class="profile_container">

    <div class="profile_top">
        <div class="profile_title">PROFILE</div>
        <div class="profile_circle_container">
            <div class="parent-wrapper">

                <div class="profile_circle height_same_width">
                    <div class="parent-wrapper flex-center-row">
                        <img src="imgs/dummy4.png" alt="profile_img">
                        <div class="profile_edit_btn">
                            <div class="parent-wrapper">
                                <i class="far fa-edit"></i>
                            </div>
                        </div>
                    </div>
                    <div class="profile_text">
                        <span class="profile_name">
                            <?= htmlentities(Library::getUser()->user_name) ?>
                        </span>
                        <span class="profile_id">
                        <?= htmlentities(Library::getUser()->user_id) ?>
                        </span>
                    </div>
                </div>

                
            </div>
        </div>
    </div>

    <div class="profile_bottom">
        
    </div>

</div>

<!-- https://www.pinterest.co.kr/pin/586312445226385149/ -->