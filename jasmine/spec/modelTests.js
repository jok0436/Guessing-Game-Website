var exNames = ['ERROR', 'S2E1', 'S2E2', 'S2E3', 'S2E4']
describe('Testing The Model Section of the Program', function () {
  for (let i = 1; i <= 4; i++) {
    describe('Testing Exercise ' + exNames[i], function () {
      for (let index = 0; index <= 99; index++) {
        describe(exNames[i] + ' Working with ' + index, function () {
          var inputHandler = new InputHandler()
          var guesses = 0
          inputHandler.execute(2, i)
          inputHandler.current.secretNumber = index
          do {
            switch (i) {
              case 1:
              case 2:
                inputHandler.current.input(guesses)
                inputHandler.current.output()
                break
              case 3:
                let guess = parseInt(inputHandler.current.output())
                switch (true) {
                  case (guess < index):
                    inputHandler.current.input('Try higher')
                    break
                  case (guess > index):
                    inputHandler.current.input('Try lower')
                    break
                  case (guess === index):
                    inputHandler.current.input('correct')
                    break
                  default:
                    break
                }
                break
              case 4:
                let cGuess = parseInt(inputHandler.current.output())
                let difference = Math.abs(index - cGuess)
                switch (true) {
                  case (difference === 0):
                    inputHandler.current.input('correct')
                    break
                  case (difference > 40):
                    inputHandler.current.input('COLD')
                    break
                  case (difference > 20):
                    inputHandler.current.input('COOL')
                    break
                  case (difference > 10):
                    inputHandler.current.input('WARM')
                    break
                  case (difference > 0):
                    inputHandler.current.input('HOT')
                    break
                  default:
                    break
                }
                break
              default:
                break
            }
            guesses++
          } while (!(guesses > 100 || inputHandler.current.hasWon))
          if (!inputHandler.current.hasWon) {
            console.log(inputHandler.current)
          }
          it('inputHandler.current.secretNumber should match index', function () {
            expect(inputHandler.current.secretNumber).toEqual(index)
          })
          it('inputHandler.current.hasWon should be true', function () {
            expect(inputHandler.current.hasWon).toEqual(true)
          })
          it('inputHandler.current.guesses should match recorded guesses: ' + guesses, function () {
            expect(guesses).toEqual(inputHandler.current.guesses)
          })
        })
      }
    })
  }
})
