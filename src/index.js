module.exports = function solveSudoku(matrix) {

  const originalMatrix = JSON.parse(JSON.stringify(matrix));
  let currentMatrix = JSON.parse(JSON.stringify(matrix));

  function checkNoDuplicates(checkingArray) {
    let uniqueSet = new Set(checkingArray);
    return checkingArray.length === uniqueSet.size;
  }

  function removeZeros(arrayForRemove) {
    let arrayWithoutZeros = arrayForRemove.filter(digit => digit !== 0);
    return arrayWithoutZeros;
  }

  function getMiniSquare(bigSquare, vertical, horizontal) {
    let miniSquare = [];

    if (vertical <= 2) {
      if (horizontal <= 2) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 0; h <= 2; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      } else if (horizontal >= 3 && horizontal <= 5) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 3; h <= 5; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      } else {
        for (let v = 0; v <= 2; v++) {
          for (let h = 6; h <= 8; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      }
    } else if (vertical >= 3 && vertical <= 5) {
      if (horizontal <= 2) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 0; h <= 2; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      } else if (horizontal >= 3 && horizontal <= 5) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 3; h <= 5; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      } else {
        for (let v = 3; v <= 5; v++) {
          for (let h = 6; h <= 8; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      }
    } else {
      if (horizontal <= 2) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 0; h <= 2; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      } else if (horizontal >= 3 && horizontal <= 5) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 3; h <= 5; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      } else {
        for (let v = 6; v <= 8; v++) {
          for (let h = 6; h <= 8; h++) {
            if (bigSquare[v][h] !== 0) {
              miniSquare.push(bigSquare[v][h]);
            }
          }
        }
      }
    }
    return checkNoDuplicates(miniSquare);
  }

  function getRow(bigSquare, vertical) {
    let oneRow = removeZeros(bigSquare[vertical]);
    return checkNoDuplicates(oneRow);
  }

  function getColumn(bigSquare, horizontal) {
    let oneColumn = [];

    for (let v = 0; v <= 8; v++) {
      if (bigSquare[v][horizontal] !== 0) {
        oneColumn.push(bigSquare[v][horizontal]);
      }
    }
    return checkNoDuplicates(oneColumn);
  }

  function checkDigit(bigSquare, vertical, horizontal) {
    if (bigSquare[vertical][horizontal] !== 0) {
      return false;
    } else {
      return true;
    }
  }

  function fillMatrix(original, current) {
    const originalMatrix = JSON.parse(JSON.stringify(original));
    let currentMatrix = JSON.parse(JSON.stringify(current));
    let tempMatrix = JSON.parse(JSON.stringify(current));
    let coordinatesOfChangedFields = [];

    function putDigitInMatrix(bigSquare, vertical, horizontal, digit) {
      let tempBigSquare = JSON.parse(JSON.stringify(bigSquare));
      tempBigSquare[vertical][horizontal] = digit;
      if (getMiniSquare(tempBigSquare, vertical, horizontal) && getRow(tempBigSquare, vertical) && getColumn(tempBigSquare, horizontal)) {
        tempMatrix = JSON.parse(JSON.stringify(tempBigSquare));
      }
    }

    for (let verticalCoordinate = 0; verticalCoordinate <= 8; verticalCoordinate++) {
      for (let horizontalCoordinate = 0; horizontalCoordinate <= 8; horizontalCoordinate++) {
        if (checkDigit(originalMatrix, verticalCoordinate, horizontalCoordinate)) {
          let coordinates = [verticalCoordinate, horizontalCoordinate];
          coordinatesOfChangedFields.push(coordinates);
          let previousDigitValue = currentMatrix[verticalCoordinate][horizontalCoordinate];
          for (let digit = previousDigitValue + 1; digit <= 9; digit++) {
            putDigitInMatrix(tempMatrix, verticalCoordinate, horizontalCoordinate, digit);
            if (JSON.stringify(tempMatrix) !== JSON.stringify(currentMatrix)) {
              currentMatrix[verticalCoordinate][horizontalCoordinate] = digit;
              tempMatrix = JSON.parse(JSON.stringify(currentMatrix));
              break;
            }

            function reverseTraverse() {
              currentMatrix[verticalCoordinate][horizontalCoordinate] = 0;
              coordinatesOfChangedFields.pop();
              verticalCoordinate = coordinatesOfChangedFields[coordinatesOfChangedFields.length - 1][0];
              horizontalCoordinate = coordinatesOfChangedFields[coordinatesOfChangedFields.length - 1][1];
              digit = currentMatrix[verticalCoordinate][horizontalCoordinate];
            }

            if (digit === 9) {
              do {
                reverseTraverse();
              } while (currentMatrix[verticalCoordinate][horizontalCoordinate] === 9);
            }
          }
        }
      }
    }
    return currentMatrix;
  }

  return fillMatrix(originalMatrix, currentMatrix);
}
