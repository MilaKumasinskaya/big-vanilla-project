import {ManType} from "./Destructuring";

type LessonType = {
    title: string
}

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Lena',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
});


test('', () => {
    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Nezavisimosti street');
});

test('', () => {
    const [ls1, ls2] = props.lessons

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})