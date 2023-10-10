export type FilterData = {
    store: Store;
    //storeName: string;
}

export type Store = {
    value: string;
    label: string;
}

export type SalesByStore = {
    storeName: string;
    sum: number;
}

export const sumSalesByStory = (salesByStory: SalesByStore[] = []) => {
    return salesByStory.reduce((previousValue, currentvalue) => {
        return previousValue + currentvalue.sum;
    }, 0);
}

export type PieChartConfig = {
    labels: string[];
    series: number[];
}

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';