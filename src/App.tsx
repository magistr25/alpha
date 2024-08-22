import './App.css';
import CountryList from './components/CountryList.tsx';
import FilterButton from "./components/FilterButton.tsx";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail.tsx';

const App = () => {
    const [showLiked, setShowLiked] = useState(false);
    const likedCountries = useSelector((state: RootState) => state.cards.likedCountries);

    const handleToggle = (newShowLiked: boolean) => {
        setShowLiked(newShowLiked);
    };

    return (
        <div className="app-wrapper">
            <header className="app-header">
                <h1 className="logo">Country Info</h1>
                <FilterButton onToggle={handleToggle} />
            </header>
            <main className="app-main">
                <Routes>
                    <Route path="/" element={
                        showLiked && likedCountries.length === 0 ? (
                            <p>No liked countries</p>
                        ) : (
                            <CountryList showLiked={showLiked} />
                        )
                    } />
                    <Route path="/country/:name" element={<CountryDetail />} />
                </Routes>
            </main>
        </div>

    );
};

export default App;
