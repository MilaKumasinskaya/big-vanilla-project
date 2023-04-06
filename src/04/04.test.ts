test('should take old men older then 90', () => {
    const ages = [18,20,35,90,56,1,98,10,100];

    const oldAges = ages.filter((e) => e > 90);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(98);expect(oldAges[1]).toBe(100);

})

test('should take courses cheaper then 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ];

    const cheapCourses = courses.filter((e) => e.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('REACT');

})
test('get only completed tasks', () => {
    const tasks = [
        {id: 1,title: 'Milk', isDone: true},
        {id: 2,title: 'Sugar', isDone: false},
        {id: 3,title: 'Tea', isDone: false},
        {id: 4,title: 'Coffee', isDone: true},
    ];

    const completedTasks = tasks.filter((e) => e.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(4);
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1,title: 'Milk', isDone: true},
        {id: 2,title: 'Sugar', isDone: false},
        {id: 3,title: 'Tea', isDone: false},
        {id: 4,title: 'Coffee', isDone: true},
    ];

    const uncompletedTasks = tasks.filter((e) => !e.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(2);
    expect(uncompletedTasks[1].id).toBe(3);
})