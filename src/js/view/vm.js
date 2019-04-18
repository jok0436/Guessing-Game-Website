var vm = new Vue({
  el: '#app',
  data: {
    problems: [{
      id: '1',
      exercises: [1, 2, 3, 4, 5]
    }, {
      id: '2',
      exercises: [1, 2, 3, 4]
    }],
    problemSet: 'None',
    exercise: 'None',
    inputHandler: new InputHandler()
  },
  methods: {
    submit: function () {
      this.inputHandler.outputFromInputBox()
    },
    setProblem: function (newProblem = 'None') {
      if (this.checkProblem(newProblem)) {
        this.problemSet = newProblem
      } else {
        this.problemSet = 'None'
      }
    },
    setExercise: function (newExercise = 'None') {
      if (this.checkExercise(newExercise)) {
        this.exercise = newExercise
      } else {
        this.exercise = 'None'
      }
    },
    checkProblem: function (newProblem) {
      for (let problem of this.problems) {
        if (problem.id === newProblem) {
          return true
        }
      }
      return false
    },
    checkExercise: function (newExercise) {
      var problemSet = parseInt(this.problemSet)
      problemSet--
      if (!isNaN(problemSet)) {
        for (let exercise of this.problems[problemSet].exercises) {
          if (exercise.toString() === newExercise.toString()) {
            return true
          }
        }
      }
      return false
    },
    showAlert: function () {
      $('#selectorAlert').show()
    },
    hideAlert: function () {
      $('#alertDismisser').click()
    },
    output: function (data = 'None') {
      this.inputHandler.output(data)
    },
    selectedExercise: function (newExercise = 'None') {
      this.setExercise(newExercise)
      this.output(`You have selected Problem Set: ${this.problemSet} Exercise: ${this.exercise}`)
      this.hideAlert()
      this.inputHandler.execute(this.problemSet, this.exercise)
    },
    selectedProblem: function (newProblem = 'None') {
      this.setProblem(newProblem)
      this.setExercise('None')
      this.showAlert()
    }
  }
})
