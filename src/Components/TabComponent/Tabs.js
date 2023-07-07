import { useState } from 'react';

import './Tabs.css';

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTab1 = () => {
        setActiveTab(1);
    };
    const handleTab2 = () => {
        setActiveTab(2);
    };
    const handleTab3 = () => {
        setActiveTab(3);
    };

    return (
        <div className="Tabs">
            <ul className="nav">
                <li
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={handleTab1}
                >
                    Top Posts
                </li>
                <li
                    className={activeTab === 2 ? 'active' : ''}
                    onClick={handleTab2}
                >
                    Lowest Views
                </li>
                <li
                    className={activeTab === 3 ? 'active' : ''}
                    onClick={handleTab3}
                >
                    Highest Scoring
                </li>
            </ul>

            <div className="outlet">
                {activeTab === 1 ? (
                    <FirstTab />
                ) : activeTab === 2 ? (
                    <SecondTab />
                ) : (
                    <ThirdTab />
                )}
            </div>
        </div>
    );
};

export default Tabs;
