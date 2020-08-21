class MyApp {

    constructor(){
        this.init();
    }

    init(){
        this.addEvent();
        this.render();
    }

    render(){
        document.querySelectorAll("#bottom > .bottom_icon")[2].classList.add("bottom_active");
    }

    addEvent(){

    }
    
}

window.addEventListener('load',()=>{
    let myApp = new MyApp();
});