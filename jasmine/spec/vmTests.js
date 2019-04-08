describe('Testing The VM Section of the Program', function () {
  beforeEach(function () {})
  describe('vm.setExercise', function () {
    it('4 Should Return 4', function () {
      vm.setProblem('1')
      vm.setExercise('4')
      expect(vm.exercise).toEqual('4')
    })

    it('Null Should Return None', function () {
      vm.setExercise()
      expect(vm.exercise).toEqual('None')
    })
  })
  describe('vm.setProblem', function () {
    it('2 Should Return 2', function () {
      vm.setProblem('2')
      expect(vm.problemSet).toEqual('2')
    })

    it('Null Should Return None', function () {
      vm.setProblem()
      expect(vm.problemSet).toEqual('None')
    })
  })
  describe('Set Problem and Exercise', function () {
    it('Check for Problem Set 1 Exercise 3', function () {
      vm.selectedProblem('1')
      vm.selectedExercise('3')
      expect(vm.exercise).toEqual('3')
    })

    it('Check for Problem Set 2 Exercise 5', function () {
      vm.selectedProblem('2')
      vm.selectedExercise('5')
      expect(vm.exercise).toEqual('None')
    })
  })
})
