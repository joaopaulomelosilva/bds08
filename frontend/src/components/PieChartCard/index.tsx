
import ReactApexChart from 'react-apexcharts';
import './styles.css';
import { buildPieChartConfig } from './helpers';

type Props = {
    labels?: string[];
    name: string;
    series?: number[];
}

const PieChartCard = ({labels = [], name, series = []} : Props) => {
    return(
        <div className="pie-chart">
            <ReactApexChart
                options={buildPieChartConfig(labels, name)}
                type="donut"
                width="270"
                height="340"
                series={series}
            />
        </div>
    )
};

export default PieChartCard;