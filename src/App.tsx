import './App.css';
import CountryList from './components/CountryList.tsx';
import FilterButton from "./components/FilterButton.tsx";
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CountryDetail from './components/CountryDetail.tsx';

const App = () => {
    const likedCountries = useSelector((state: RootState) => state.cards.likedCountries);
    const navigate = useNavigate();

    const handleToggle = (newShowLiked: boolean) => {
        if (newShowLiked) {
            navigate("/alpha/liked");
        } else {
            navigate("/alpha/");
        }
    };

    return (
        <div className="app-wrapper">
            <header className="app-header">
                <h1 className="logo" onClick={() => navigate("/alpha/")}>Country Info</h1>
                <FilterButton onToggle={handleToggle} />
            </header>
            <main className="app-main">
                <Routes>
                    <Route path="/alpha/" element={<CountryList showLiked={false} />} />
                    <Route path="/alpha/liked" element={
                        likedCountries.length === 0 ? (
                            <p>No liked countries</p>
                        ) : (
                            <CountryList showLiked={true} />
                        )
                    } />
                    <Route path="/alpha/country/:name" element={<CountryDetail />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
