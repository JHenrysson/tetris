document.addEventListener('DOMContentLoaded',() => {

    const grid = document.querySelector('.grid')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10
    const height = 10
    let currentPosition = 4


    // assign functions to the keycodes
    function control (e){
        if(e.keyCode === 39){
            moveRight()
        }else if(e.keyCode === 38){
            rotate()
        }else if (e.keyCode === 37){
            moveLeft()
        }else if (e.keyCode === 40){
            moveDown()
        }
    }
    document.addEventListener('keyup',control)




    // the tetrominos

    const lTetrominoes = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]
    const tTetrominoes = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]
    const oTetrominoes = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]
    const iTetrominoes = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]
    const theTetrominoes = [lTetrominoes, tTetrominoes, oTetrominoes, iTetrominoes]

    // randomly selected a tetrominoes
    let random = Math.floor(math.random() * theTetrominoes.length)
    let currentRotation = 0
    let current = theTetrominoes[random][currentRotation]

    // draws the shape
    function draw() {
        current.forEach(index => (
            squares[currentPosition + index].classList.add('block')
        ))
    }

    //undraw the shape

    function undraw() {
        current.forEach(index =>
            squares[currentPosition + index].classList.remove('block')
        )
    }


// move down shape

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

//move left and prevent collisions with the shapes moving left
    function moveRight(){
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition+index)% width === width-1)
        if(!isAtRightEdge) currentPosition+=1
        if(current.some(index => squares[currentPosition +index].classList.contains('block2'))){
            currentPosition -=1
        }
            draw()

    }
    function moveLeft(){
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        if(!isAtLeftEdge)currentPosition -= 1
        if(current.some(index => squares [currentPosition + index].classList.contains('block2'))){
            currentPosition += 1
        }
        draw()
    }
    // rotate the tetromino

    function rotate(){
        undraw()
        currentRotation ++
        if (currentRotation === current.length){
            currentRotation = 0
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }
draw()




}





)