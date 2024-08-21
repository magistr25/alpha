import CountryList from './components/CountryList.tsx';
import FilterButton from "./components/FilterButton.tsx";

const App = () => {
    return (
        <div>
            <h1>Country Info</h1>
            <FilterButton />
            <CountryList />
        </div>
    );
};

export default App;


