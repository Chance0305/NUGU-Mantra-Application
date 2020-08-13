class Toast {
    constructor(text, type = 0) {
        this.colors = ['#fa7358', '#5685ff'];
        this.$toast = $(`<div class='toast'></div>`);
        this.$toast.css('background-color', this.colors[type]);
        this.$toast.text(text);

        $("#toast-list").prepend(this.$toast);
    }

    show() {
        this.$toast.animate({ 'margin-top': '30px', 'opacity': '1' }, 200);
        setTimeout(() => {
            this.$toast.remove();
        }, 2000);
    }
}
