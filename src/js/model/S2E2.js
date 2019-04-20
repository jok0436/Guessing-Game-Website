/*
Author:
Josiah Kerr | 15 April 2019 | Last Updated 19 April 2019
Problem:
Write a program to play a number guessing game. The program shall generate a random number
between 0 and 99. The USER inputs his/her guess, and the program shall response with "COLD"
if the guess is more than 40 from the target number, "COOL" if the guess is within 20-39 of the
target number, “WARM” if the guess is within 10-19 of the target number, “HOT” if the guess is
within 1-9 of the target number or "You got it in n trials" if the guess is correct.
*/
import { Exercise } from '../model/Exercise'
export class S2E2 extends Exercise {
  constructor () {
    super()
    this.secretNumber = Math.round((Math.random() * 100)) - 1
  }
  input (guess = 50) {
    this.guesses++
    this.currentGuess = parseInt(guess)
  }
  output () {
    var difference = Math.abs(this.secretNumber - this.currentGuess)
    switch (true) {
      case (difference > 40):
        return 'COLD (40+)'
      case (difference >= 20):
        return 'COOL (20-39)'
      case (difference >= 10):
        return 'WARM (10-19)'
      case (difference >= 1):
        return 'HOT (1-9)'
      case (this.currentGuess === this.secretNumber):
        this.hasWon = true
        return 'You got it in ' + this.guesses + ' trials'
      default:
        return 'Something went wrong!'
    }
  }
  getInitialStatement () {
    return 'I have a random number between 0-99, Guess what it is!!!'
  }
}
