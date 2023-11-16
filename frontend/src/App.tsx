import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import SalesSummaryChart from './components/SalesSummaryChart';
import { FilterData } from './types';

type ControlComponentsData = {
  filterData: FilterData;
}

function App() {

  const initialFilterData : FilterData ={
    store: {
      id: 0,
      name: ''
    }
  }

  const [controlComponentsData, setcontrolComponentsData] = useState<ControlComponentsData>(
    {
      filterData: initialFilterData
    });

  const onFilterChange = (filter : FilterData) => {
    setcontrolComponentsData({filterData: filter});
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Filter onFilterChange={onFilterChange} />
        <SalesSummaryChart
          filterData={controlComponentsData.filterData}
        />
      </main>
    </div>
  );
}

export default App;
