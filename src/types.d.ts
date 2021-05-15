import { GestureResponderEvent, ImageSourcePropType } from "react-native";

/* eslint-disable no-shadow */
enum Periods {
    FIRST_PERIOD = "Premiere Periode",
    SECOND_PERIOD = "Deuxieme Periode",
    FIRST_EXAM = "Examen Premier Semestre",
    THIRD_PERIOD = "Troisieme Periode",
    FOURTH_PERIOD = "Quatrieme Periode",
    SECOND_EXAM = "Examen Second Semestre",
    SECOND_SESSION = "Deuxieme Session"
}

enum Degrees {
    A0 = "A0",
    A1 = "A1",
    A2 = "A2",
    D6 = "D6",
    L2 = "L2",
    G3 = "G3",
    MD = "MD"
}

enum TypeOfCotation {
    QUIZ = "Interrogation",
    HOME_WORK = "Devoir A Domicile",
    CLASS_WORK = "Travail Dirige",
    EXAM = "Examen",
    CATCH_UP = "Rattrapage",
    PRATIC_EXAM = "Examen Pratique",
    THEORIC_EXAM = "Examen Theorique",
    HOLLIDAY_WORK = "Travaux des vaccances"
}

interface Identity {
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    placeOfBirth: string
};

interface Address {
    completeAddress: string
};

interface Course {
    label: string;
    ponderation?: number;
    hoursPerWeek?: number;
    hasExamSession?: boolean;
    hasSecondSession?: boolean;
};

interface Qualification {
    degree?: Degrees;
    longetivity?: number
};

type Teacher = {
    identity?: Identity,
    address?: Address,
    courses: [Course],
    qualification?: Qualification
};

type HomeOption = {
    label: string,
    // backgroundImage: string,
    icon: ImageSourcePropType,
    routeName: string
    onPress?: (event: GestureResponderEvent) => void
}

interface Class {
    isCO: boolean;
    isCT: boolean;
    courses: [Course];
    label: string;
    students: [Student]
};

interface Absence {
    date: Date;
    reason?: string;
    justified?: boolean
}

type Cotation = {
    student: Student,
    course: Course,
    period: Periods,
    type?: TypeOfCotation
    
}

type Students = {
    identity?: Identity,
    guardians?: [Guardian], // Tutaire in french
    class?: Class,
    address?: Address,
    absences?: [Absence],
    Cotes?: [Cotation]
}
