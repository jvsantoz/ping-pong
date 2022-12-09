const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")

const lineWidth = 15

function setup() {
    canvasEl.width = canvasCtx.width = window.innerWidth
    canvasEl.height = canvasCtx.height = window.innerHeight
}

function drawn() {
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    canvasCtx.fillStyle = "#ffffff"

    //Desenhando linha do centro
    canvasCtx.fillRect( 
        window.innerWidth / 2 - lineWidth / 2, 
        0, 
        lineWidth, 
        window.innerHeight 
    )

    //Raquete Esquerda
    canvasCtx.fillRect(10, 100, lineWidth, 200)

    //Raquete Direita
    canvasCtx.fillRect(
        window.innerWidth - lineWidth - 10,
        200,
        lineWidth,
        200
    )

    //Desenhando a bola
    canvasCtx.beginPath()
    canvasCtx.arc(500, 300, 20, 0, 2 * Math.PI, false)
    canvasCtx.fill()

    //Desenhando o placar
    canvasCtx.font = "bold 100px Arial"
    canvasCtx.textAlign = "center"
    canvasCtx.textBaseline = "top"
    canvasCtx.fillStyle = "#01341D"
    canvasCtx.fillText('3', window.innerWidth / 4, 50)
    canvasCtx.fillText('0', window.innerWidth / 4 + window.innerWidth / 2 , 50)

}

setup() 
drawn()