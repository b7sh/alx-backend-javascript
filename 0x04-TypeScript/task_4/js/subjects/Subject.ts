namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    constructor(techer: Subjects.Teacher) {
      this.teacher = techer;
    }

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
