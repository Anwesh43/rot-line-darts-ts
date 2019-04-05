const w : number = window.innerWidth
const h : number = window.innerHeight
const scGap : number = 0.05
const scDiv : number = 0.51
const nodes : number = 5
const lines : number = 4
const strokeFactor : number = 90
const sizeFactor : number = 2.9
const foreColor : string = "#283593"
const backColor : string = "#BDBDBD"

class RotLineDartStage {

    canvas : HTMLCanvasElement = document.createElement('canvas')
    context : CanvasRenderingContext2D

    initCanvas() {
        this.canvas.width = w
        this.canvas.height = h
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    render() {
        this.context.fillStyle = backColor
        this.context.fillRect(0, 0, w, h)
    }

    handleTap() {
        this.canvas.onmousedown = () => {

        }
    }

    static init() {
        const stage : RotLineDartStage = new RotLineDartStage()
        stage.initCanvas()
        stage.render()
        stage.handleTap()
    }
}
