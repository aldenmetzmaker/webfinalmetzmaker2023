import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChessRook, faChessKnight, faChessBishop, faChessQueen, faChessKing, faChessPawn } from '@fortawesome/free-solid-svg-icons';
//for the chess pieces that i am using, npm install @fortawesome/free-solid-svg-icons
//reference https://fontawesome.com/docs/web/use-with/react/

const BOARD_SIZE = 8;
// here i define the piece, using what i imported above
const Piece = ({ piece }) => {
    // here i map chess piece letters to their FontAwesome icon
  const pieceIcons = {
    r: faChessRook,
    n: faChessKnight,
    b: faChessBishop,
    q: faChessQueen,
    k: faChessKing,
    p: faChessPawn,
  };

  const pieceIcon = pieceIcons[piece.toLowerCase()];
  // Render the icon if it exists, with a color based on whether the piece is white or black
  return (
    <View style={styles.piece}>
      {pieceIcon && <FontAwesomeIcon icon={pieceIcon} size={32} color={piece === piece.toUpperCase() ? 'white' : 'black'} />}
    </View>
  );
};
// here i define a component for a spot on the chess board
const Spot = ({ isBlack, piece }) => (
  <View style={[styles.spot, isBlack && styles.blackSpot]}>
    {piece && <Piece piece={piece} />}
  </View>
);
// here i define a component for the chess board
const Board = () => {
  const [board, setBoard] = useState([
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],//fill in pieces
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],//^lowercase are black
    Array(BOARD_SIZE).fill(null),
    Array(BOARD_SIZE).fill(null),
    Array(BOARD_SIZE).fill(null),
    Array(BOARD_SIZE).fill(null),
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],//uppercase are white
  ]);
// here i define a function for rendering a single spot on the board
  const renderSpot = (row, col) => (
    <Spot
      key={`${row}-${col}`}
      isBlack={(row + col) % 2 === 1}
      piece={board[row][col]}
    />
  );
// in this last part i am rendering the entire board by mapping over the rows and columns
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((_, colIndex) => renderSpot(rowIndex, colIndex))}
        </View>
      ))}
    </View>
  );
};
//styles for the components
const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  spot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackSpot: {
    backgroundColor: '#555555',
  },
  piece: {
    width: 32,
    height: 32,
  },
});

export default Board;
