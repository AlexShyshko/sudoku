module.exports = function solveSudoku(matrix) {

  let currentMatrix = [[], [], [], [], [], [], [], [], []];

  function createComparedMatrix(matrix, currentMatrix) {
    for (let verticalCoordinate = 0; verticalCoordinate <= 8; verticalCoordinate++) {
      for (let horizontalCoordinate = 0; horizontalCoordinate <= 8; horizontalCoordinate++) {
        if (matrix[verticalCoordinate][horizontalCoordinate] === 0) {
          currentMatrix[verticalCoordinate].push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        } else {
          currentMatrix[verticalCoordinate].push([matrix[verticalCoordinate][horizontalCoordinate]]);
        }
      }
    }
  }

  function remoweAlreadyWrittenDigitsFromRows(currentMatrix) {
    for (let verticalCoordinate = 0; verticalCoordinate <= 8; verticalCoordinate++) {

      function createArrayOfDidgitsForComparsion(subMatrix) {
        let result = [];

        for (let field of subMatrix) {
          if (field.length === 1) {
            result.push(field[0]);
          }
        }
        return result;
      }

      let arrayOfDidgitsForComparsion = createArrayOfDidgitsForComparsion(currentMatrix[verticalCoordinate]);

      for (let horizontalCoordinate = 0; horizontalCoordinate <= 8; horizontalCoordinate++) {
        if (currentMatrix[verticalCoordinate][horizontalCoordinate].length !== 1) {
          for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
            for (let fieldLength = 0; fieldLength < currentMatrix[verticalCoordinate][horizontalCoordinate].length; fieldLength++) {
              if (currentMatrix[verticalCoordinate][horizontalCoordinate][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                currentMatrix[verticalCoordinate][horizontalCoordinate].splice([fieldLength], 1);
                fieldLength--;
              }
            }
          }
        }
      }
    }
  }

  function remoweAlreadyWrittenDigitsFromColumns(currentMatrix) {
    for (let horizontalCoordinate = 0; horizontalCoordinate <= 8; horizontalCoordinate++) {

      function createArrayOfDidgitsForComparsion(currentMatrix) {
        let result = [];

        for (let i = 0; i < currentMatrix.length; i++) {
          if (currentMatrix[i][horizontalCoordinate].length === 1) {
            result.push(currentMatrix[i][horizontalCoordinate][0]);
          }
        }
        return result;
      }

      let arrayOfDidgitsForComparsion = createArrayOfDidgitsForComparsion(currentMatrix);

      for (let verticalCoordinate = 0; verticalCoordinate <= 8; verticalCoordinate++) {
        if (currentMatrix[verticalCoordinate][horizontalCoordinate].length !== 1) {
          for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
            for (let fieldLength = 0; fieldLength < currentMatrix[verticalCoordinate][horizontalCoordinate].length; fieldLength++) {
              if (currentMatrix[verticalCoordinate][horizontalCoordinate][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                currentMatrix[verticalCoordinate][horizontalCoordinate].splice([fieldLength], 1);
                fieldLength--;
              }
            }
          }
        }
      }
    }
  }

  function remoweAlreadyWrittenDigitsFromMiniSquares(currentMatrix) {

    function createArrayOfDidgitsForComparsion(miniSquare) {
      let result = [];

      if (miniSquare === 1) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 0; h <= 2; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 2) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 3; h <= 5; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 3) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 6; h <= 8; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 4) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 0; h <= 2; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 5) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 3; h <= 5; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 6) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 6; h <= 8; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 7) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 0; h <= 2; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 8) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 3; h <= 5; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      } else if (miniSquare === 9) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 6; h <= 8; h++) {
            if (currentMatrix[v][h].length === 1) {
              result.push(currentMatrix[v][h][0]);
            }
          }
        }
      }
      return result;
    }

    for (let square = 1; square <= 9; square++) {
      let arrayOfDidgitsForComparsion = createArrayOfDidgitsForComparsion(square);

      if (square === 1) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 0; h <= 2; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 2) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 3; h <= 5; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 3) {
        for (let v = 0; v <= 2; v++) {
          for (let h = 6; h <= 8; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 4) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 0; h <= 2; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 5) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 3; h <= 5; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 6) {
        for (let v = 3; v <= 5; v++) {
          for (let h = 6; h <= 8; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 7) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 0; h <= 2; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 8) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 3; h <= 5; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      } else if (square === 9) {
        for (let v = 6; v <= 8; v++) {
          for (let h = 6; h <= 8; h++) {
            if (currentMatrix[v][h].length !== 1) {
              for (let comparsionLength = 0; comparsionLength < arrayOfDidgitsForComparsion.length; comparsionLength++) {
                for (let fieldLength = 0; fieldLength < currentMatrix[v][h].length; fieldLength++) {
                  if (currentMatrix[v][h][fieldLength] === arrayOfDidgitsForComparsion[comparsionLength]) {
                    currentMatrix[v][h].splice([fieldLength], 1);
                    fieldLength--;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function guessExcludedDigitsInRows(currentMatrix) {
    for (let digit = 1; digit <= 9; digit++) {
      for (let v = 0; v <= 8; v++) {
        let currentRow = currentMatrix[v];
        let counter = 0;
        let exclusivePosition;

        function createArrayOfAlreadyPlacedDidgits(subMatrix) {
          let result = [];
  
          for (let field of subMatrix) {
            if (field.length === 1) {
              result.push(field[0]);
            }
          }
          return result;
        }

        let arrayOfAlreadyPlacedDidgits = createArrayOfAlreadyPlacedDidgits(currentRow);

        if (!arrayOfAlreadyPlacedDidgits.includes(digit)) {
          for (let h = 0; h <= 8; h++) {

            if (currentRow[h].length > 1 && currentRow[h].includes(digit)) {
              counter++;
              exclusivePosition = h;
            }

          }

          if (counter === 1) {
            currentRow[exclusivePosition].splice(0, currentRow[exclusivePosition].length, digit);
            counter = 0;
            exclusivePosition = undefined;
          } else {
            counter = 0;
          }

        } else {
          continue;
        }
      }
    }
  }

  function guessExcludedDigitsInColumns(currentMatrix) {
    for (let digit = 1; digit <= 9; digit++) {
      for (let h = 0; h <= 8; h++) {

        function createCurrentColumn(){
          let result = [];

          for (let i = 0; i <= 8; i++) {
            result.push(currentMatrix[i][h]);
          }
          
          return result;
        }

        let currentColumn = createCurrentColumn();
        let counter = 0;
        let exclusivePosition;

        function createArrayOfAlreadyPlacedDidgits(subMatrix) {
          let result = [];
  
          for (let field of subMatrix) {
            if (field.length === 1) {
              result.push(field[0]);
            }
          }
          return result;
        }

        let arrayOfAlreadyPlacedDidgits = createArrayOfAlreadyPlacedDidgits(currentColumn);

        if (!arrayOfAlreadyPlacedDidgits.includes(digit)) {
          for (let v = 0; v <= 8; v++) {

            if (currentColumn[v].length > 1 && currentColumn[v].includes(digit)) {
              counter++;
              exclusivePosition = v;
            }

          }

          if (counter === 1) {
            currentMatrix[exclusivePosition][h].splice(0, currentMatrix[exclusivePosition][h].length, digit);
            counter = 0;
            exclusivePosition = undefined;
          } else {
            counter = 0;
          }

        } else {
          continue;
        }
      }
    }
  }

  function guessExcludedDigitsInMiniSquares(currentMatrix){
    for (let digit = 1; digit <= 9; digit++) {
      for (let square = 1; square <= 9; square++) {

        function createCurrentMiniSquare(miniSquare) {
          let result = [];

          if (miniSquare === 1) {
            for (let v = 0; v <= 2; v++) {
              for (let h = 0; h <= 2; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 2) {
            for (let v = 0; v <= 2; v++) {
              for (let h = 3; h <= 5; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 3) {
            for (let v = 0; v <= 2; v++) {
              for (let h = 6; h <= 8; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 4) {
            for (let v = 3; v <= 5; v++) {
              for (let h = 0; h <= 2; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 5) {
            for (let v = 3; v <= 5; v++) {
              for (let h = 3; h <= 5; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 6) {
            for (let v = 3; v <= 5; v++) {
              for (let h = 6; h <= 8; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 7) {
            for (let v = 6; v <= 8; v++) {
              for (let h = 0; h <= 2; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 8) {
            for (let v = 6; v <= 8; v++) {
              for (let h = 3; h <= 5; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          } else if (miniSquare === 9) {
            for (let v = 6; v <= 8; v++) {
              for (let h = 6; h <= 8; h++) {
                result.push(currentMatrix[v][h]);
              }
            }
          }
          return result;
        }

        let currentMiniSquare = createCurrentMiniSquare(square);
        let counter = 0;
        let exclusivePositionV;
        let exclusivePositionH;
  
        function createArrayOfAlreadyPlacedDidgits(subMatrix) {
          let result = [];
  
          for (let field of subMatrix) {
            if (field.length === 1) {
              result.push(field[0]);
            }
          }
          return result;
        }

        let arrayOfAlreadyPlacedDidgits = createArrayOfAlreadyPlacedDidgits(currentMiniSquare);

        if (!arrayOfAlreadyPlacedDidgits.includes(digit)) {
          
          if (square === 1) {
            let verticalCoordinate = 0;
            let horizontalCoordinate = 0 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 3) {
                horizontalCoordinate = 0;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 2) {
            let verticalCoordinate = 0;
            let horizontalCoordinate = 3 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 6) {
                horizontalCoordinate = 3;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 3) {
            let verticalCoordinate = 0;
            let horizontalCoordinate = 6 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 9) {
                horizontalCoordinate = 6;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 4) {
            let verticalCoordinate = 3;
            let horizontalCoordinate = 0 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 3) {
                horizontalCoordinate = 0;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 5) {
            let verticalCoordinate = 3;
            let horizontalCoordinate = 3 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 6) {
                horizontalCoordinate = 3;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 6) {
            let verticalCoordinate = 3;
            let horizontalCoordinate = 6 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 9) {
                horizontalCoordinate = 6;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 7) {
            let verticalCoordinate = 6;
            let horizontalCoordinate = 0 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 3) {
                horizontalCoordinate = 0;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 8) {
            let verticalCoordinate = 6;
            let horizontalCoordinate = 3 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 6) {
                horizontalCoordinate = 3;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          } else if (square === 9) {
            let verticalCoordinate = 6;
            let horizontalCoordinate = 6 - 1;

            for (let currentMiniSquarePosition = 0; currentMiniSquarePosition < currentMiniSquare.length; currentMiniSquarePosition++) {
              horizontalCoordinate++;
              if (horizontalCoordinate === 9) {
                horizontalCoordinate = 6;
                verticalCoordinate++;
              }

              if (currentMiniSquare[currentMiniSquarePosition].length > 1 && currentMiniSquare[currentMiniSquarePosition].includes(digit)) {
                counter++;

                if (counter === 1) {
                  exclusivePositionV = verticalCoordinate;
                  exclusivePositionH = horizontalCoordinate;
                }
              }
            }

            if (counter === 1) {
              currentMatrix[exclusivePositionV][exclusivePositionH].splice(0, currentMatrix[exclusivePositionV][exclusivePositionH].length, digit);
              counter = 0;
            } else {
              counter = 0;
            }
          }
        } else {
          continue;
        }
      }
    }
  }

  function checkCurrentMatrix(currentMatrix) {
    for (let v = 0; v <= 8; v++) {
      for (let h = 0; h <= 8; h++) {
        if (currentMatrix[v][h].length !== 1) {
          return false;
        }
      }
    }
    return true;
  }

  function finalConverting(currentMatrix) {
    for (let v = 0; v <= 8; v++) {
      currentMatrix[v] = currentMatrix[v].join('').split('');
      currentMatrix[v] = currentMatrix[v].map(digit => Number(digit));
    }
  }

  createComparedMatrix(matrix, currentMatrix);

  do {
    remoweAlreadyWrittenDigitsFromRows(currentMatrix);
    remoweAlreadyWrittenDigitsFromColumns(currentMatrix);
    remoweAlreadyWrittenDigitsFromMiniSquares(currentMatrix);

    guessExcludedDigitsInRows(currentMatrix);
    guessExcludedDigitsInColumns(currentMatrix);
    guessExcludedDigitsInMiniSquares(currentMatrix);
  } while (checkCurrentMatrix(currentMatrix) === false);

  finalConverting(currentMatrix);

  return currentMatrix;
}
