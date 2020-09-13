const log = console.log;




window.addEventListener("load", () => {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,

        afterLoad: function (origin, section) {

            //색인 사용
            if (section.index >= 1 && section.index <= 3) {
                startAnimation(section.index);
            }else if(section.index == 4){
                $(".last_text_area").fadeIn(1000);
            }
        },
        onLeave: function (origin, destination, direction) {
            
            if(destination.index == 5 || origin.index == 5){
                return;
            }
            resetAnimation();
        },


    });
    fullpage_api.setScrollingSpeed(400);

    addEvent();


});

function resetAnimation() {
    for (let i = 1; i <= 3; i++) {
        document.querySelector(`.animation_stick_1_section_${i}`).style.height = '0';
        document.querySelector(`.animation_stick_2_section_${i}`).style.height = '0';
        document.querySelector(`.animation_stick_3_section_${i}`).style.height = '0';
        document.querySelector(`.animation_stick_4_section_${i}`).style.width = '0';
        $(`.section_logo_section_${i}`).fadeOut(1);
        $(`.section_logo_section_${i}`).removeClass("animate__animated animate__fadeInDown  animate__delay-1s");
        $(`.section_text_section_${i}`).fadeOut(1);
        $(`.section_text_section_${i}`).removeClass("animate__animated animate__fadeIn  animate__delay-2s");
    }
    $(".last_text_area").fadeOut(1);

}

function startAnimation(idx) {
    $(`.section_logo_section_${idx}`).fadeIn(1);
    $(`.section_logo_section_${idx}`).addClass("animate__animated animate__fadeInDown  animate__delay-1s");
    $(`.section_text_section_${idx}`).fadeIn(1);
    $(`.section_text_section_${idx}`).addClass("animate__animated animate__fadeIn  animate__delay-2s");
    document.querySelector(`.animation_stick_1_section_${idx}`).style.height = '100%';
    document.querySelector(`.animation_stick_2_section_${idx}`).style.height = '100%';
    document.querySelector(`.animation_stick_3_section_${idx}`).style.height = '100%';
    document.querySelector(`.animation_stick_4_section_${idx}`).style.width = '100%';
}

let page_idx = 1;

function addEvent() {
    document.querySelector(".right_btn").addEventListener("click", () => {
        slide(page_idx, page_idx + 1 == 5 ? 1 : page_idx + 1);
        page_idx++;
        if (page_idx == 5) {
            page_idx = 1;
        }

    });
    document.querySelector(".left_btn").addEventListener("click", () => {
        slide(page_idx, page_idx - 1 == 0 ? 4 : page_idx - 1);
        page_idx--;
        if (page_idx == 0) {
            page_idx = 4;
        }
    });
    setInterval(() => {
        slide(page_idx, page_idx + 1 == 5 ? 1 : page_idx + 1);
        page_idx++;
        if (page_idx == 5) {
            page_idx = 1;
        }
    }, 5000);
}

function slide(idx, slide_idx) {
    $(`.slide_${idx}`).css('z-index', '5');
    $(`.slide_${slide_idx}`).css('z-index', '1');
    $(`.slide_${slide_idx}`).fadeIn(1);
    $(`.slide_${idx}`).fadeOut(300);

}