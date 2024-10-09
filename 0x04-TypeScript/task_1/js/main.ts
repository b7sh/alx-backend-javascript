export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export class StudentClass implements IStudentClass{
  private _firstName!: string;
  private _lasstName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lasstName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this._firstName;
  }
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface IStudentClassConstructor {
  new (firstName: string, lasstName: string): IStudentClass;
}
