/*
Author:
Josiah Kerr | 15 April 2019 | Last Updated 19 April 2019
Problem:
Write a program to play a number guessing game. The USER mentally selects a number between
0 and 99 and the computer ties to guess it. The computer outputs its guess, and the User response
with "Try higher", "Try lower" or “correct”. The computer should keep count of the number of
guesses. The computer should complain if the USER has lied.
*/
import { Exercise } from '../model/Exercise'
export class S2E3 extends Exercise {
  constructor () {
    super()
    this.validNumbers = this.generateArray(0, 99)
    this.getCurrent()
  }
  input (guess) {
    switch (guess) {
      case 'Try higher':
        this.removeFromValid(true)
        break
      case 'Try lower':
        this.removeFromValid(false)
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
      return this.currentGuess
    }
  }
  getInitialStatement () {
    return 'Think of a number between 0-99, ill try to guess it and you can respond with "Try higher" "Try lower" or "correct" enter "Start" now and ill start guessing'
  }

  generateArray (left, right) {
    var allNumbers = []
    for (let index = left; index <= right; index++) {
      allNumbers[index] = index
    }
    return allNumbers
  }
  removeFromValid (whichWay = false) {
    switch (whichWay) {
      case true:
        this.validNumbers = this.validNumbers.filter(xNumber => xNumber > this.currentGuess)
        break
      case false:
        this.validNumbers = this.validNumbers.filter(xNumber => xNumber < this.currentGuess)
        break
      default:
        break
    }
    this.getCurrent()
  }
  getCurrent () {
    var sum = 0
    for (var i = 0; i < this.validNumbers.length; i++) {
      sum += parseInt(this.validNumbers[i])
    }
    this.currentGuess = Math.round(sum / this.validNumbers.length)
  }
}
