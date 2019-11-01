/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var solution = []; //fixme
  for (var i = 0; i < n; i++) {
    board.set(i, Array(n));
  }

  //iterate the solution for each piece (n times, double for loops)
  for (var i = 0; i < n; i++) {
    var hashRow = board.get(i);
    for (var j = 0; j < n; j++)b     {
      hashRow[j] = 1;
      // board.set(hashRow[j], 1);
      if ((board.hasRowConflictAt(i) === false) && (board.hasColConflictAt(j) === false)) {
      //if row doesnt have conflicts or col doesnt have conflicts
      //place piece (1)
      } else {
        //else
        //nothing (place 0)
        hashRow[j] = 0;
      }
    }
  }
  for (var i = 0; i < n; i++) {
    solution.push(board.get(i));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.solution), solution);
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  console.log(window.Board.findNRooksSolution(n), 'find n Rooks');
  var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board([[0]]);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution), board);
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
