import CurrentDate from './components/CurrentDate';
import Header from './components/Header';
import TimeTable from './components/TimeTable';
import './index.css';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <CurrentDate/>
        <TimeTable/>
      </div>
    </>
  );
}

export default App;
