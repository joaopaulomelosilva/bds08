import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
        labels?: string[];
        name: string;
        series?: number[];
    }

const SalesSummaryChart = ({labels = [], name, series = []} : Props) => {
    return(
        <main>
            <div className="base-card Sales-Summary-Chart-container">
                <div className="total-sales-container">
                    <h1>R$ 746.484,00</h1>
                    <p>Total de vendas</p>
                </div>
                <div className="pie-chart">
                    <ReactApexChart
                        options={buildPieChartConfig(labels, name)}
                        type="donut"
                        width="270"
                        height="340"
                        series={series}
                    />
                </div>
            </div>
        </main>
    )
};

export default SalesSummaryChart;