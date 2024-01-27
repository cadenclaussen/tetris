function setup() {
  createCanvas(600, 600);
  board = createboard()
  peices = createPeices()
}

function draw() {
  background("black");
  drawboard(board)
  board = renderpeice(1, 1, peices["I"], 0, board)
}

// Creates the board
function createboard() {
  board = []
  
  for (row=0; row<=9; row++) {
    board.push([])
    for (column=0; column<=19; column++) {
      board[row].push("")
    }  
  }

  return board
}



// Draws the board
function drawboard(board) {
  stroke(255, 0, 0)
  
  for (x=140; x<=460; x+=32) {
    line(x, 0, x, 600)
  }
  
  for (y=0; y<=600; y+=30) {
    line(140, y, 460, y)
  }
  
  for (row=0; row<=9; row++) {
    for (column=0; column<=19; column++) {
      if (board[row][column] === "X") {
        fill(237, 109, 109)
        rect(row*32 + 140, column*30, 32, 30)
      }
    }  
  }
}

function renderpeice(x, y, peice, type, board) {
  // console.log(peice, type)
  for (i=0; i<4; i++) {
    change = peice[type][i]
    board[x + change[0]][y + change[1]] = "X"
  }
  return board
}






























function createPeices() {
  var peices = {
    "I": [
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3]
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2]
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3]
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1]
      ]
    ],

    "L": [
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 2]
      ],
      [
        [2, 1],
        [2, 2],
        [1, 2],
        [0, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [2, 2],
        [2, 3]
      ],
      [
        [1, 1],
        [2, 1],
        [3, 1],
        [1, 2]
      ]
    ],

    "J": [
      [
        [2, 0],
        [2, 1],
        [2, 2],
        [1, 2]
      ],
      [
        [1, 1],
        [1, 2],
        [2, 2],
        [3, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [1, 2],
        [1, 3]
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [2, 2]
      ]
    ],

    "O": [
      [
        [1, 1],
        [2, 1],
        [1, 2],
        [2, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [1, 2],
        [2, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [1, 2],
        [2, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [1, 2],
        [2, 2]
      ]
    ],

    "T": [
      [
        [1, 1],
        [2, 1],
        [3, 1],
        [2, 2]
      ],
      [
        [2, 0],
        [1, 1],
        [2, 1],
        [2, 2]
      ],
      [
        [2, 0],
        [1, 1],
        [2, 1],
        [3, 1]
      ],
      [
        [2, 0],
        [2, 1],
        [3, 1],
        [2, 2]
      ]
    ],

    "S": [
      [
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2]
      ],
      [
        [1, 0],
        [1, 1],
        [2, 1],
        [2, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2]
      ],
      [
        [1, 0],
        [1, 1],
        [2, 1],
        [2, 2]
      ]
    ],

    "Z": [
      [
        [1, 1],
        [2, 1],
        [2, 2],
        [3, 2]
      ],
      [
        [2, 0],
        [1, 1],
        [2, 1],
        [1, 2]
      ],
      [
        [1, 1],
        [2, 1],
        [2, 2],
        [3, 2]
      ],
      [
        [2, 0],
        [1, 1],
        [2, 1],
        [1, 2]
      ]
    ]
  }
  
  return peices
}