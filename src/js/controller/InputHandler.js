class InputHandler {
  static outputFromInputBox (data) {
    var inputDiv = document.getElementById('input')
    var input = inputDiv.getElementsByClassName('form-control fixed-bottom').item(0)
    this.output(input.value)
    input.value = ''
  }

  static output (data = 'Oops! Something bad happened...') {
    var node = document.createElement('LI')
    node.classList.add('list-group-item')
    var textnode = document.createTextNode(data)
    node.appendChild(textnode)
    var content = document.getElementById('content')
    var elements = content.getElementsByClassName('list-group list-group-flush')
    elements.item(0).appendChild(node)
  }
}
