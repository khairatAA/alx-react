import { Seq } from 'immutable';

export default function printBestStudents(grade) {
    const gradesSeq = Seq(grade)

    const bestStudentsSeq = gradesSeq.filter(student => student.score >= 70);

    const formattedStudentsSeq = bestStudentsSeq.map(student => ({
        ...student,
        firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
        lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
    }));

    const formattedStudentsObject = formattedStudentsSeq.toObject();

    console.log(formattedStudentsObject);
}
