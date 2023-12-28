//*  AI functions for the game //*

// *info:return the winning X or O or T for tie or '' for no winner
export function getWinner(board: string[][]): string {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === 'X') {
        return 'X';
      } else if (board[i][0] === 'O') {
        return 'O';
      }
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] === 'X') {
        return 'X';
      } else if (board[0][i] === 'O') {
        return 'O';
      }
    }
  }

  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] === 'X') {
      return 'X';
    } else if (board[0][0] === 'O') {
      return 'O';
    }
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] === 'X') {
      return 'X';
    } else if (board[0][2] === 'O') {
      return 'O';
    }
  }

  // Check for tie
  let tie = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        tie = false;
      }
    }
  }

  if (tie) {
    return 'T';
  }

  return '';
}
