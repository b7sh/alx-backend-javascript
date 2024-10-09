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
