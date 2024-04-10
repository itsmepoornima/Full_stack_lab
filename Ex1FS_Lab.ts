class Student {
    name: string;
    m1: number;
    m2:number;
    m3:number;

    constructor(name: string, m1: number,m2:number,m3:number) {
        this.name = name;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
    }
}

const students: Student[] = [
    new Student('Aruna', 100,99,99),
    new Student('Vinoth', 88,88,77),
    new Student('Divya', 88,99,45),
    new Student('Ishitha',76,95,12),
    new Student('arul',12,32,29)
];

let totalMarks: number = 0;

for (let i = 0; i < students.length; i++) {
    totalMarks = students[i].m1+students[i].m2+students[i].m3;
    const avg: number = totalMarks /3;
    console.log("Total Marks :"+totalMarks);
    console.log("Average Marks :" +avg);



    let grade: string = '';
    if (avg < 60) {
        grade = 'F';
    } else if (avg < 70) {
        grade = 'D';
    } else if (avg < 80) {
        grade = 'C';
    } else if (avg < 90) {
        grade = 'B';
    } else if (avg <= 100) {
        grade = 'A';
    }

    console.log(`${students[i].name} - Grade: ${grade}`);
}

const avgOfAllStudents: number = totalMarks / 5;
console.log(`Average of all students: ${avgOfAllStudents}`);