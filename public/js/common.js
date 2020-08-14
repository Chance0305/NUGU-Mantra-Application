window.spl = new Object();
window.addEventListener("load",()=>{

    spl.$dom = $("#splash_screen");

    spl.show = function(){
        this.$dom.fadeIn();
    }

    spl.hide = function(){
        this.$dom.fadeOut();
        console.log(this.$dom);
    }

    spl.animateItmes = function(duration){
        this.$dom.find("img").css({
            "transition":`transform ${duration/1000}s`
        });

        this.$dom.find("img").css({
            "transform":"scale(1.2)"
        });

        

    }

    spl.animateItmes(1500);

});