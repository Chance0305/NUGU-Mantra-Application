
window.addEventListener("load", () => {
    let menu = new Menu();
});


class Menu {
    constructor() {
        this.init();
    }


    init() {
        this.slide_arr = [0, 1, 2];
        this.slide_idx = 0;
        this.slide_container = document.querySelector(".slide_container");
        this.slideStart();
        this.addEvent();
        document.querySelectorAll("#bottom > .bottom_icon")[0].classList.add("bottom_active");
    }


    addEvent() {

    }


    slideStart() {
        setInterval(() => {
            this.slide();
        }, 3000);
    }

    slide() {
        this.slide_container.style.left = this.slide_arr[this.slide_idx = this.slide_idx + 1 == 3 ? 0 : this.slide_idx + 1] * -100 + "%";
    }

}