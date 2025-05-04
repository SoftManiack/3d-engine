//Scene обновляет все объекты и вызывает их отрисовку.
import { Shader } from "./Shader.js";

export class Scene{

    gl = {}
    program = null
    /* 

        camera
        light   

    */

    constructor(gl) {
        this.gl = gl


    }

    renderLoop(){

        for(;;){
            console.log("loop")
        }
    }

    createProgram(){
        var program = this.gl.createProgram();

        vertexShader = new Shader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource).shader
        fragmentShader = new Shader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource).shader

        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);

        this.gl.linkProgram(program);

        if (success){
            return program;
        }
        
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        
    }

    render(){
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Установка матриц камеры и модели
        // gl.uniformMatrix4fv(...);
      
        // Рисуем квадрат через TRIANGLE_STRIP
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
        requestAnimationFrame(render);
    }
}