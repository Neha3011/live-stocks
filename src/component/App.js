import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';
import tickerActions from '../actions/ticker';

class App extends React.Component {
  componentWillMount() {
    const data = [
      ['shld', 115.48604266229276],
      ['yhoo', 18.827506511543984],
      ['evi', 34.093290276385595],
      ['msft', 134.7039343700621]
    ];
    // TODO REMOVE THIS WHEN SOCKET IS DONE
    this.props.actions.fetchTickerData(data);
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  updateTicker = () => {
    const data = [
      ['shld', this.getRandomInt(100, 200)],
      ['yhoo', this.getRandomInt(10, 50)],
      ['evi', this.getRandomInt(10, 100)]
    ];

    this.props.actions.fetchTickerData(data);
  };

  render() {
    return (
      <div className="ticker">
        {(() => {
          if (this.props.tickerData) {
            return ([
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr className="ticker__row">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Last updated</th>
                  </tr>
                  {
                    this.props.tickerData.toArray().map((data) => {
                      return (
                        <tr className="ticker__row" key={data.get('name')}>
                          <td>{data.get('name')}</td>
                          <td style={{ 'backgroundColor': data.get('color') }}>{data.get('price')}</td>
                          <td>{moment(data.get('lastUpdated')).fromNow()}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>,
              <div className="tickerInfo">
                <button onClick={this.updateTicker}>Update</button>
                <div className="tickerInfo__container">
                  <div className="tickerInfo__update tickerInfo__update--noChange" /> No Change
                </div>
                <div className="tickerInfo__container">
                  <div className="tickerInfo__update tickerInfo__update--up" /> Increase
                </div>
                <div className="tickerInfo__container">
                  <div className="tickerInfo__update tickerInfo__update--down" /> Decrease
                </div>
              </div>
            ]);
          }
        })()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    'tickerData': state.get('tickerData')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators(tickerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
