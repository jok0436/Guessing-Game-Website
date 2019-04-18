/*
Author:
Josiah Kerr | 15 April 2019
Problem:
Write a program to play a number guessing game. The program shall generate a random number
between 0 and 99. The USER inputs his/her guess, and the program shall response with "Try
higher", "Try lower" or "You got it in n trials" if the guess is correct.

Problem Set 2 Question 1 Algorithm:
Set variable secretNumber to random value between 0-99
Set variable guesses to 0
When user inputs guess
	Guesses++
	If guess is higher than secretNumber
		Return ‘Try lower’
	Else if guess is lower than secretNumber
		Return ‘Try higher’
	Else if guess equals secretNumber
		Return ‘You got it in ‘ + guesses + ‘ trials’
	Else
		Return ‘Something went wrong!’
*/

class S2E1 extends Exercise {
  constructor () {
    super()
    this.secretNumber = Math.round((Math.random() * 100)) - 1
  }
  input (guess = 50) {
    this.guesses++
    this.currentGuess = parseInt(guess)
  }
  output () {
    switch (true) {
      case (this.currentGuess > this.secretNumber):
        return 'Try lower'
      case (this.currentGuess < this.secretNumber):
        return 'Try higher'
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
