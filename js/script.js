class Student {
  constructor(firstName, secondName, birthYear) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
    if (this.attendance.length > 25) {
      console.log('too much');
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAverageGrade() {
    const calcAverageGrade = this.grades.reduce((total, grade) => total + grade, 0);
    const sum = calcAverageGrade / this.grades.length;
    return sum.toFixed(1);
  }

  present() {
    const emptyItem = this.attendance.indexOf(undefined);
    if (emptyItem !== -1) {
      this.attendance[emptyItem] = true;
    }
  }

  absent() {
    const emptyItem = this.attendance.indexOf(undefined);
    if (emptyItem !== -1) {
      this.attendance[emptyItem] = false;
    }
  }

  averageAttendance() {
    const visitedSessions = this.attendance.filter(value => value == true).length;
    const unVisitedSessions = this.attendance.filter(value => value == false).length;
    const totalSessions = visitedSessions * 1 / (visitedSessions + unVisitedSessions);
    return totalSessions.toFixed(1);
  };

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.averageAttendance();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}



const student1 = new Student('Jeremy', 'McAlister', 1990);
student1.addGrade(99);
student1.addGrade(99);
student1.addGrade(99);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();



console.log(student1);
console.log(`${student1.firstName} is ${student1.getAge()} years old`);
const averageGrade1 = student1.getAverageGrade();
console.log(`The average grade of ${student1.firstName} is ${averageGrade1}`);
console.log(`The average attendance of ${student1.firstName} is  ${student1.averageAttendance()}`);
console.log(`In total ${student1.firstName}\'s result is ${student1.summary()}`);




const student2 = new Student('Mika', 'Gallas', 1985);
student2.addGrade(99);
student2.addGrade(91);
student2.addGrade(94);
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.absent();
console.log(student2);
console.log(`${student2.firstName} is ${student2.getAge()} years old`);
const averageGrade2 = student2.getAverageGrade();
console.log(`The average grade of ${student2.firstName} is ${averageGrade2}`);
console.log(`The average attendance of ${student2.firstName} is  ${student2.averageAttendance()}`);
console.log(`In total ${student2.firstName}\'s result is is ${student2.summary()}`);



const student3 = new Student('Derek', 'Boateng', 1995);
student3.addGrade(60);
student3.addGrade(70);
student3.addGrade(65);
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
console.log(student3);
console.log(`${student3.firstName} is ${student3.getAge()} years old`);
const averageGrade3 = student1.getAverageGrade();
console.log(`The average grade of ${student3.firstName} is ${averageGrade3}`);
console.log(`The average attendance of ${student3.firstName} is  ${student3.averageAttendance()}`);
console.log(`In total ${student3.firstName}\'s result is ${student3.summary()}`);



const student4 = new Student('Maria', 'Shevchenko', 1993);
student4.addGrade(80);
student4.addGrade(50);
student4.addGrade(60);
student4.present();
student4.present();
student4.present();
student4.present();
student4.absent();
student4.absent();
student4.present();
student4.present();
student4.present();
student4.present();
student4.absent();
console.log(student4);
console.log(`${student4.firstName} is ${student4.getAge()} years old`);
const averageGrade4 = student4.getAverageGrade();
console.log(`The average grade of ${student4.firstName} is ${averageGrade4}`);
console.log(`The average attendance of ${student4.firstName} is  ${student4.averageAttendance()}`);
console.log(`In total ${student4.firstName}\'s result is ${student4.summary()}`);










