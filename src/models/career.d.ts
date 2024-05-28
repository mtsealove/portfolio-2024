export interface CareerDetail {
    title: string;
    contents: string[];
}

export interface Career {
    companyImg: any;
    company: string;
    startAt: Date;
    endAt?: Date;
    role: string;
    items: CareerDetail[];
    roundIcon?: boolean;
}
