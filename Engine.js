
export class Engine {

    canvas = {}
    gl = {}

    constructor(){
        this.canvas = document.getElementById('glcanvas');
        this.gl = canvas.getContext('webgl');
    }

    start(){
        
    }

    renderLoop(){

        // зачем  отделять движок от сцены
        // отрсовать объекты на сцене

    }

    clear(){

    }

}