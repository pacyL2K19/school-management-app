interface Identity {
    name: string;
    firstName: string;
    lastName: string;
};

interface Address {
    completeAddress: string
};

interface Course {
    label: string;
    ponderation: number;
    hoursPerWeek: number;
    hasExamSession: boolean;
    hasSecondSession: boolean;
};

interface Qualification {
    degree: "A0" | "A1" | "A2" | "D6" | "L2" | "G3" | "MD";
    longetivity: number
};

interface Teacher {
    identity: Identity;
    address: Address,
    courses: [Course]
    qualification: Qualification
};

interface Class {
    isCO: boolean;
    isCT: boolean;
    courses: [Course];
    label: string;
    students: [Student]
};

interface Student {
    identity: Identity;
    guardians: [Guardian] // Tutaire in french
    class: Class
}