/*
Author:
Josiah Kerr | 10 April 2019 | Last Updated 19 April 2019
Problem:
Write a program to play a number guessing game. The USER mentally selects a number between
0 and 99 and the computer ties to guess it. The computer outputs its guess, and the User response
with "COLD" if the guess is more than 40 from the target number, "COOL" if the guess is within
20-39 of the target number, “WARM” if the guess is within 10-19 of the target number, “HOT” if
the guess is within 1-9 of the target number or “correct”. The computer should keep count of the
number of guesses. The computer should complain if the USER has lied.
*/
class S2E4 extends Exercise {
  constructor (newRangeLow = 0, newRangeHigh = 99) {
    super()
    this.rangeLow = newRangeLow
    this.rangeHigh = newRangeHigh
    this.validNumbers = this.generateArray(this.rangeLow, this.rangeHigh)
    this.invalidNumbers = []
  }
  input (input = 'None') {
    switch (input) {
      case 'COLD':
        this.bindLowHigh(40, this.rangeHigh)
        break
      case 'COOL':
        this.bindLowHigh(20, 39)
        break
      case 'WARM':
        this.bindLowHigh(10, 19)
        break
      case 'HOT':
        this.bindLowHigh(1, 9)
        break
      case 'correct':
        this.hasWon = true
        break
      default:
        break
    }
  }
  output () {
    if (this.hasWon) {
      return 'I got it in ' + this.guesses + ' trials'
    } else if (this.validNumbers.length === 0) {
      return 'You Lied!'
    } else {
      this.guesses++
      this.currentGuess = this.generateGuessNumber()
      return this.currentGuess
    }
  }
  getInitialStatement () {
    return 'Think of a number between 0-99, ill try to guess it and you can respond with COLD (more than 40) COOL (20-39) WARM (10-19) HOT (1-9) ' +
    'or correct... enter "Start" now and ill start guessing'
  }
  bindLowHigh (givenRangeLow, givenRangeHigh) {
    var forwardsRange = this.generateArray(Math.min(this.rangeHigh + 1, this.currentGuess + givenRangeLow), Math.min(this.rangeHigh + 1, this.currentGuess + givenRangeHigh))
    var backwardsRange = this.generateArray(Math.max(this.rangeLow - 1, this.currentGuess - givenRangeHigh), Math.max(this.rangeLow - 1, this.currentGuess - givenRangeLow))
    this.validNumbers = this.validNumbers.filter(xNumber => xNumber !== this.currentGuess)
    this.validNumbers = this.validNumbers.filter(xNumber => (forwardsRange.includes(xNumber) || backwardsRange.includes(xNumber)))
    this.generateInvalidNumbers()
    this.sortValidInvalid()
  }
  generateArray (left, right) {
    var allNumbers = []
    for (let index = left; index <= right; index++) {
      allNumbers[index] = index
    }
    return allNumbers
  }
  generateGuessNumber () {
    return this.validNumbers[Math.floor(Math.random() * this.validNumbers.length)]
  }
  generateInvalidNumbers () {
    this.invalidNumbers = this.generateArray(this.rangeLow, this.rangeHigh).filter((el) => !this.validNumbers.includes(el))
  }
  sortValidInvalid () {
    this.validNumbers.sort(function (a, b) {
      return a - b
    })
    this.invalidNumbers.sort(function (a, b) {
      return a - b
    })
  }
}
