import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import SalesSummaryChart from './components/SalesSummaryChart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <SalesSummaryChart
        name=''
        labels={['Masculino', 'Feminino', 'Outros']}
        series={[10, 20, 2]}
      />
    </div>
  );
}

export default App;
