describe('exerciseSelector.changeExercise', function () {
  it('4 Should Return 4', function () {
    exerciseSelector.changeExercise('4')
    expect(exerciseSelector.current).toEqual('4')
  })

  it('Null Should Return 1', function () {
    exerciseSelector.changeExercise()
    expect(exerciseSelector.current).toEqual('1')
  })
})
