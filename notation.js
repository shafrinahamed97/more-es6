const student = {
    name:'Shafrin Ahamed',
    age:15,
    claas: 'Ten',
    marks:{
        math:75,
        physics:89,
        chemistry:65

    }
}
const marks = student.marks.math;
// console.log(marks);

const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);