export class Shader {

    cursorX
    cursorY

    vertexShaderSource = `
        attribute vec2 aPosition;
        void main() {
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `;
    
    fragmentShaderSource = `
        void main() {
            gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0); // голубой цвет
        }
    `;
        
    constructor() {
        this.cursorX = 0.0
        this.cursorY = 0.0
    }

    createProgram(){
        
    }

    render(){

    }
}