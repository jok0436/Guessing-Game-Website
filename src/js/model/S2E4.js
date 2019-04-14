/*
Author:
Josiah Kerr | 10 April 2019
Problem:
Write a program to play a number guessing game. The USER mentally selects a number between
0 and 99 and the computer ties to guess it. The computer outputs its guess, and the User response
with "COLD" if the guess is more than 40 from the target number, "COOL" if the guess is within
20-39 of the target number, “WARM” if the guess is within 10-19 of the target number, “HOT” if
the guess is within 1-9 of the target number or “correct”. The computer should keep count of the
number of guesses. The computer should complain if the USER has lied.
*/
class S2E4 {
  constructor (newRangeLow = 0, newRangeHigh = 99) {
    this.guesses = 0
    this.currentGuess = 0
    this.gotIt = false
    this.rangeLow = newRangeLow
    this.rangeHigh = newRangeHigh
    this.validNumbers = this.generateArray(this.rangeLow, this.rangeHigh)
    this.invalidNumbers = []
  }
  handleInput (input = 'None') {
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
        this.gotIt = true
        break
      default:
        break
    }
  }
  bindLowHigh (givenRangeLow, givenRangeHigh) {
    var forwardOffsetLow = Math.min(this.rangeHigh + 1, this.currentGuess + givenRangeLow)
    var forwardOffsetHigh = Math.min(this.rangeHigh + 1, this.currentGuess + givenRangeHigh)
    var backOffsetLow = Math.max(this.rangeLow - 1, this.currentGuess - givenRangeHigh)
    var backOffsetHigh = Math.max(this.rangeLow - 1, this.currentGuess - givenRangeLow)
    this.removeFromValidOutsideRange(backOffsetLow, backOffsetHigh, forwardOffsetLow, forwardOffsetHigh)
    this.generateInvalidNumbers()
    this.sortValidInvalid()
  }
  removeFromValidOutsideRange (low, high, low2, high2) {
    var range = this.generateArray(low, high)
    var range2 = this.generateArray(low2, high2)
    var isInside = false
    for (let index = 0; index < this.validNumbers.length; index++) {
      if (range.includes(this.validNumbers[index]) || range2.includes(this.validNumbers[index])) {
        isInside = true
      }
      if (!isInside) {
        this.validNumbers[index] = -10
      }
      isInside = false
    }
    var newValues = []
    for (let i3 = 0; i3 < this.validNumbers.length; i3++) {
      if (this.validNumbers[i3] !== -10) {
        newValues.push(this.validNumbers[i3])
      }
    }
    this.validNumbers = newValues
  }
  bindForward (forwardOffsetLow, forwardOffsetHigh) {
    for (let index = forwardOffsetLow; index <= forwardOffsetHigh; index++) {
      if (!this.validNumbers.includes(index) && !this.invalidNumbers.includes(index) && this.isWithinLowHigh(index)) {
        this.validNumbers.push(index)
      }
    }
  }
  bindBackward (backOffsetLow, backOffsetHigh) {
    for (let i2 = backOffsetLow; i2 >= backOffsetHigh; i2--) {
      if (!this.validNumbers.includes(i2) && !this.invalidNumbers.includes(i2) && this.isWithinLowHigh(i2)) {
        this.validNumbers.push(i2)
      }
    }
  }
  isWithinLowHigh (item) {
    return item >= this.rangeLow && item <= this.rangeHigh
  }
  guess () {
    this.guesses++
    if (this.validNumbers.length > 0) {
      this.currentGuess = this.generateGuessNumber()
      return this.currentGuess
    } else {
      return -1
    }
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
