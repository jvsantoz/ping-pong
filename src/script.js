const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")
const gapX = 10

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    drawn: function () {
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0, 0, this.w, this.h)
    }
}

const line = {
    w: 15,
    h: field.h,
    drawn: function () {
    canvasCtx.fillStyle = "#ffffff" 
    canvasCtx.fillRect( field.w / 2 - this.w / 2, 0, this.w, this.h )
    },
}

const leftPaddle = {
    x: gapX,
    y: 100,
    w: line.w,
    h: 200,
    drawn: function() {
        canvasCtx.fillStyle = "#ffffff" 
        canvasCtx.fillRect( gapX, this.y, this.w, this.h )
    },
}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 100,
    w: line.w,
    h: 200,
    drawn: function () {
        canvasCtx.fillStyle = "#ffffff" 
        canvasCtx.fillRect (this.x, this.y, this.w, this.h)
    },
}

const score = {
    human: 1,
    computer: 2,
    drawn: function () {
        canvasCtx.font = "bold 100px Arial"
        canvasCtx.textAlign = "center"
        canvasCtx.textBaseline = "top"
        canvasCtx.fillStyle = "#01341D"
        canvasCtx.fillText(this.human, field.w / 4, 50)
        canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2 , 50)
    }
}

const Ball = {
    x: 300,
    y: 200,
    r: 20,
    drawn: function () {
        canvasCtx.fillStyle = "#ffffff" 
        canvasCtx.beginPath()
        canvasCtx.arc( this.x, this.y, this.r, 0, 2 * Math.PI, false )
        canvasCtx.fill()
    }
}

function setup() {
    canvasEl.width = canvasCtx.width = field.w
    canvasEl.height = canvasCtx.height = field.h
}

function drawn() {
    field.drawn()
    line.drawn()
    
    leftPaddle.drawn()
    rightPaddle.drawn()
    
    score.drawn()
    
    Ball.drawn()
}

setup() 
drawn()