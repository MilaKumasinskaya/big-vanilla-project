const ages = [18,20,35,90,56,1,98,10,100]
const predicate = (age: number) => {
    return age > 90;
}
const oldAges = [98,100];
type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}
const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150},
]