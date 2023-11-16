import { PieChartConfig, SalesByGender } from "../types";


export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

export function convertSalesToPieChart(salesData: SalesByGender[]): PieChartConfig {

    const labels: string[] = salesData.map(item => item.gender).flat();

    const genders = salesData.map(item => item.sum);
    const series: number[] = genders.flat();

    const pieChartConfig: PieChartConfig = {
        labels,
        series,
    };

    return pieChartConfig;
}