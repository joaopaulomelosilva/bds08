import './styles.css';
import PieChartCard from '../PieChartCard';
import { FilterData, PieChartConfig, SalesByGender, Summary } from '../../types';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/requests';
import { convertSalesToPieChart, formatPrice } from '../../utils/formatters';

type Props = {
    filterData?: FilterData;
}

const SalesSummaryChart = ( {filterData} : Props) => {

    const [totalSum, setTotalSum] = useState<number>(0);

    const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

    useEffect(() => {
        makeRequest.get<SalesByGender[]>(`/sales/by-gender?storeId=${filterData?.store?.id}`) 
        .then((response) => {
            const pieChart = convertSalesToPieChart(response.data);
            setSalesByGender(pieChart as PieChartConfig);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [filterData]);
    
    useEffect(() => {
        makeRequest.get<Summary>(`/sales/summary?storeId=${filterData?.store?.id}`) 
        .then((response) => {
            setTotalSum(response.data.sum);
        })
        .catch((error) => {
            console.error(error);
        })
    }, [filterData]);

    return(
        <div className="base-card Sales-Summary-Chart-container">
            <div className="total-sales-container">
                <h1>{formatPrice(totalSum)}</h1>
                <p>Total de vendas</p>
            </div>
            <PieChartCard
                name={"Lojas"}
                labels={salesByGender?.labels}
                series={salesByGender?.series}
            />
        </div>
    )
};

export default SalesSummaryChart;