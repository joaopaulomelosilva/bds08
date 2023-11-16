export type FilterData = {
    store?: Store;
}

export type Store = {
    id: number;
    name: string;
}

export type PieChartConfig = {
    labels: string[];
    series: number[];
}

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
    gender: Gender[];
    sum: number[];
}

export type Summary = {
    sum: number,
    min: number,
    max: number,
    avg: number,
    count: number
}

