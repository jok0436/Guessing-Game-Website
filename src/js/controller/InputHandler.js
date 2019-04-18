class InputHandler {
  constructor () {
    this.current = new Exercise()
  }
  outputFromInputBox (data) {
    var inputDiv = document.getElementById('input')
    var input = inputDiv.getElementsByClassName('form-control fixed-bottom').item(0)
    this.output(input.value)
    this.current.input(input.value)
    this.output(this.current.output())
    input.value = ''
  }
  output (data = 'Oops! Something bad happened...') {
    var node = document.createElement('LI')
    node.classList.add('list-group-item')
    var textnode = document.createTextNode(data)
    node.appendChild(textnode)
    var content = document.getElementById('content')
    var elements = content.getElementsByClassName('list-group list-group-flush')
    elements.item(0).appendChild(node)
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
