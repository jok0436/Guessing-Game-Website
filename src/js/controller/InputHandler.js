class InputHandler {
  constructor (newMessageLimit = 7) {
    this.current = new Exercise()
    this.messageLimit = newMessageLimit
    this.messageCount = 0
  }
  outputFromInputBox (data) {
    var inputDiv = document.getElementById('input')
    var input = inputDiv.getElementsByClassName('form-control fixed-bottom').item(0)
    this.output(input.value)
    if (input.value !== 'clear') {
      this.current.input(input.value)
      this.output(this.current.output())
    }
    input.value = ''
  }
  output (data = 'Oops! Something bad happened...') {
    var node = document.createElement('LI')
    var textnode = document.createTextNode(data)
    var cards = document.getElementById('cards')
    if (this.messageCount > this.messageLimit) {
      cards.removeChild(cards.firstElementChild)
      this.messageCount--
    }
    if (data === 'clear') {
      while (cards.firstChild) {
        cards.removeChild(cards.firstChild)
      }
      this.messageCount = 0
    } else {
      node.classList.add('list-group-item')
      node.appendChild(textnode)
      cards.appendChild(node)
      this.messageCount++
    }
  }

  execute (problemSet = 2, exercise = 1) {
    problemSet = parseInt(problemSet)
    exercise = parseInt(exercise)
    switch (problemSet) {
      case 1:
        break
      case 2:
        switch (exercise) {
          case 1:
            this.current = new S2E1()
            break
          case 2:
            this.current = new S2E2()
            break
          case 3:
            this.current = new S2E3()
            break
          case 4:
            this.current = new S2E4()
            break
          default:
            break
        }
        break
      default:
        break
    }
    this.output(this.current.getInitialStatement())
  }
}
