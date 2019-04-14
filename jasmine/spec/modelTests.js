describe('Testing The Model Section of the Program', function () {
  for (let index = 0; index <= 99; index++) {
    describe('S2E4 Working with ' + index, function () {
      var ex = new S2E4()
      var guesses = 0
      do {
        guesses++
        var guess = parseInt(ex.guess())
        var difference = Math.abs(index - guess)
        switch (true) {
          case difference === 0:
            ex.handleInput('correct')
            break
          case difference > 40:
            ex.handleInput('COLD')
            break
          case difference > 20:
            ex.handleInput('COOL')
            break
          case difference > 10:
            ex.handleInput('WARM')
            break
          case difference > 0:
            ex.handleInput('HOT')
            break
          default:
            break
        }
      } while (!ex.gotIt && guesses !== 100)
      it('ex.gotIt should be true', function () {
        expect(ex.gotIt).toEqual(true)
      })
      it('ex.guesses should match recorded guesses', function () {
        expect(guesses).toEqual(ex.guesses)
      })
    })
  }
})
