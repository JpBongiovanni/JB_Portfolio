import React from 'react';
import './Coin.css';

const Coin = ({
name,
price,
symbol,
marketcap,
volume,
image,
priceChange
}) => {
return (
<div className='coin-container rounded my-2'>
    <div className='coin-row'>
    <div className='coin'>
        <img src={image} alt='crypto' />
        <h1>{name}</h1>
        <p className='coin-symbol'>{symbol}</p>
    </div>
    <div className='coin-data'>
        <p className='coin-price'>Coin Price: ${price}</p>
        <p className='coin-volume'>Volume: ${volume.toLocaleString()}</p>

        {priceChange < 0 ? (
        <p className='coin-percent red'>Change: {priceChange.toFixed(2)}%</p>
        ) : (
        <p className='coin-percent green'>Change: {priceChange.toFixed(2)}%</p>
        )}

        <p className='coin-marketcap'>
        Market Cap: ${marketcap.toLocaleString()}
        </p>
    </div>
    </div>
</div>
);
};

export default Coin;