import React from 'react';
import moment from 'moment';

const TickerContainer = (props) => {
  return (
    <div className="ticker__container">
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="ticker__row">
            <th>Stock Name</th>
            <th>Current Price</th>
            <th>Last updated</th>
          </tr>
          {
            props.tickerData.toArray().map((data) => {
              return (
                <tr className="ticker__row" key={data.get('name')}>
                  <td>{data.get('name')}</td>
                  <td style={{ 'backgroundColor': data.get('backgroundColor'), 'color': data.get('color') }}>
                    {data.get('price')}
                  </td>
                  <td>{moment(data.get('lastUpdated')).fromNow()}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="tickerInfo">
        <div className="tickerInfo__container">
          <div className="tickerInfo__update tickerInfo__update--noChange" />
          No Change
        </div>
        <div className="tickerInfo__container">
          <div className="tickerInfo__update tickerInfo__update--up" />
          Increase
        </div>
        <div className="tickerInfo__container">
          <div className="tickerInfo__update tickerInfo__update--down" />
          Decrease
        </div>
      </div>
    </div>
  );
};

export default TickerContainer;
