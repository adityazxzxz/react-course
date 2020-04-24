import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <h1>Detail Portfolio</h1>
            <p>this is detail for portfolio {props.match.params.id}</p>
        </div>
    );
};

export default PortfolioItemPage;