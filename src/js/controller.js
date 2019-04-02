var exerciseSelector = new Vue({
  el: '#exercise_Selector',
  data: {
    current: 'None'
  },
  methods: {
    changeVisibility: function (WhichProblem = '1') {
      var content = document.getElementById('exercise_Selector')
      var elements = content.getElementsByClassName('btn btn-secondary')
      for (let index = 0; index < elements.length; index++) {
        let element = elements[index]
        element.disabled = true
        if (WhichProblem === '1' || (WhichProblem === '2' && element.innerHTML !== '5')) {
          element.disabled = false
        }
      }
    },
    changeExercise: function (WhichExercise = '1') {
      this.current = WhichExercise
      console.log(this.current)
    }
  }
})
var problemSetSelector = new Vue({
  el: '#problem_Set_Selector',
  data: {
    current: 'None'
  },
  methods: {
    changeProblemSet: function (whichProblem = '1') {
      this.current = whichProblem
      exerciseSelector.changeVisibility(this.current)
    }
  }
})
var inputBox = new Vue({
  el: '#input',
  data: {

  },
  methods: {
    submit: function () {
      var node = document.createElement('LI')
      node.classList.add('list-group-item')
      var inputDiv = document.getElementById('input')
      var input = inputDiv.getElementsByClassName('form-control fixed-bottom').item(0)
      var textnode = document.createTextNode(input.value)
      input.value = ''
      node.appendChild(textnode)
      var content = document.getElementById('content')
      var elements = content.getElementsByClassName('list-group list-group-flush')
      elements.item(0).appendChild(node)
    }
  }
})
