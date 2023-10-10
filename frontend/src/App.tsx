import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import SalesSummaryChart from './components/SalesSummaryChart';
import { FilterData } from './types';

function App() {

  const onFilterChange = (filter : FilterData) => {
    console.log(filter);
  }

  const filterTest: FilterData  = {
    store: {
      value: 'Alpinópolis',
      label: 'Alpinópolis'
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Filter onFilterChange={onFilterChange} />
      <SalesSummaryChart
        filterData={filterTest}
      />
    </div>
  );
}

export default App;
