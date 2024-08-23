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
            navigate("/liked");
        } else {
            navigate("/");
        }
    };

    return (
        <div className="app-wrapper">
            <header className="app-header">
                <h1 className="logo" onClick={() => navigate("/")}>Country Info</h1>
                <FilterButton onToggle={handleToggle} />
            </header>
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<CountryList showLiked={false} />} />
                    <Route path="/liked" element={
                        likedCountries.length === 0 ? (
                            <p>No liked countries</p>
                        ) : (
                            <CountryList showLiked={true} />
                        )
                    } />
                    <Route path="/country/:name" element={<CountryDetail />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
