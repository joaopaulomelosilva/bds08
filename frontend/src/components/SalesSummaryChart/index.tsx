import './styles.css';
import PieChartCard from '../PieChartCard';
import { FilterData, PieChartConfig, SalesByStore, sumSalesByStory } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { makeRequest } from '../../utils/requests';
import { formatPrice } from '../../utils/formatters';
import { buildSalesByStoreChart } from '../../helpers';

type Props = {
    filterData?: FilterData;
}

const SalesSummaryChart = ( {filterData} : Props) => {

    const [salesByStore, setSalesByStore] = useState<PieChartConfig>();

    const params = useMemo(() => filterData, [filterData]);

    const [totalSum, setTotalSum] = useState(0);

    useEffect( () => {

        makeRequest.get<SalesByStore[]>('/sales/by-store')
        .then((response: any) => {

            const newSalesByStore = buildSalesByStoreChart(response.data);
            setSalesByStore(newSalesByStore);


            const newTotalSum = sumSalesByStory(response.data);
            setTotalSum(newTotalSum);
        })
        .catch(() => {
            console.log("error");
        })
    }, [params]);

    return(
        <main>
            <div className="base-card Sales-Summary-Chart-container">
                <div className="total-sales-container">
                    <h1>{formatPrice(totalSum)}</h1>
                    <p>Total de vendas</p>
                </div>
                <PieChartCard
                    name={"Lojas"}
                    labels={salesByStore?.labels}
                    series={salesByStore?.series}
                />
            </div>
        </main>
    )
};

export default SalesSummaryChart;