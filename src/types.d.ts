import { ImageSource } from "react-native-vector-icons/Icon";

/* eslint-disable no-shadow */
export enum Periods {
  FIRST_PERIOD = "Premiere Periode",
  SECOND_PERIOD = "Deuxieme Periode",
  FIRST_EXAM = "Examen Premier Semestre",
  THIRD_PERIOD = "Troisieme Periode",
  FOURTH_PERIOD = "Quatrieme Periode",
  SECOND_EXAM = "Examen Second Semestre",
  SECOND_SESSION = "Deuxieme Session",
}

export enum Degrees {
  A0 = "A0",
  A1 = "A1",
  A2 = "A2",
  D6 = "D6",
  L2 = "L2",
  G3 = "G3",
  MD = "MD",
}

export enum TypeOfCotation {
  QUIZ = "Interrogation",
  HOME_WORK = "Devoir A Domicile",
  CLASS_WORK = "Travail Dirige",
  EXAM = "Examen",
  CATCH_UP = "Rattrapage",
  PRATIC_EXAM = "Examen Pratique",
  THEORIC_EXAM = "Examen Theorique",
  HOLLIDAY_WORK = "Travaux des vaccances",
}

interface Identity {
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  placeOfBirth: string;
}

interface Address {
  completeAddress: string;
}

interface Course {
  label: string;
  ponderation?: number;
  hoursPerWeek?: number;
  hasExamSession?: boolean;
  hasSecondSession?: boolean;
}

interface Qualification {
  degree?: Degrees;
  longetivity?: number;
}

type Teacher = {
  identity?: Identity;
  address?: Address;
  courses: [Course];
  qualification?: Qualification;
};

type HomeOption = {
  label: string;
  icon: string;
  routeName: string;
  onPress: () => void;
};

interface Class {
  isCO: boolean;
  isCT: boolean;
  courses: [Course];
  label: string;
  students: [Student];
}

interface Absence {
  date: Date;
  reason?: string;
  justified?: boolean;
}

export interface AccountInfo {
  schoolId: string;
  teachearId: string;
  fName?: string;
  lName?: string;
  mName?: string;
  email?: string;
  phone?: string;
  address?: string;
  token?: string;
}

type Cotation = {
  student: Student;
  course: Course;
  period: Periods;
  type?: TypeOfCotation;
};

type Student = {
  identity?: Identity;
  //guardians?: [Guardian], // Tutaire in french
  class?: Class;
  address?: Address;
  absences?: [Absence];
  Cotes?: [Cotation];
};

type School = {
  label: string;
  slogan?: string;
  id: string;
  source?: string;
  onPress: (id: string) => void;
};

type Notification = {
  time: string;
  title: string;
  circleColor?: string;
  lineColor?: string;
  description?: string;
  seen?: boolean;
  severityLevel?: "LOW" | "HIGH" | "MEDIUM";
};

type GlobalContent = {
  accountInfo: AccountInfo | null;
  setAccountInfo: (c: AccountInfo) => void;
};
