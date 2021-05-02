import React from 'react';
import portfolioData from '../../data/PortfolioData';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const Portfolios = () => {
    return (
        <div className="py-5" style={{ background: "#000000" }}>
            <div className="container">
                <h2 className="pt-4 mb-5 display-5 fw-bolder text-center border-bottom border-danger w-50 pb-3 mx-auto">My Latest Projects</h2>
                <div className="row gy-5 justify-content-center align-items-center">
                    {
                        portfolioData.map(pd => <PortfolioCard key={pd.id} portfolio={pd} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolios;