describe('problemSetSelector.changeProblemSet', function () {
  it('2 Should Return 2', function () {
    exerciseSelector.changeExercise('2')
    expect(exerciseSelector.current).toEqual('2')
  })

  it('Null Should Return 1', function () {
    exerciseSelector.changeExercise()
    expect(exerciseSelector.current).toEqual('1')
  })
})
