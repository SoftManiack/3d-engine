// Mesh примитивы

export class Mesh {

    key
    name

    constructor(name){
        this.key = globalThis.crypto.getRandomValues()
        this.name = name
    }

    setGeometry(vertices, indices){

    }

    setMatrial(shaderProgram){

    }

    setTransform(){

    }

    draw(){

    }
}