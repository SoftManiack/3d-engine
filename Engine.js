import { Scene } from "./Scene.js";

export class Engine {


    // инициализация сцены

    canvas = {}
    gl = {}

    constructor(){
        this.canvas = document.getElementById('glcanvas');
        this.gl = canvas.getContext('webgl');
        
    }

    initScene(){

    }

    clear(){

    }

}