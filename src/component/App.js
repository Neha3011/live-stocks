import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';
import tickerActions from '../actions/ticker';

let showTickerRow = true;
class App extends React.Component {
  interval;

  componentDidMount() {
    const intervalSeconds = parseInt(this.getRandomTickerValue(1000, 2000));
    this.interval = setInterval(() => {
      this.updateTicker();
    }, intervalSeconds);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRandomTickerValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  updateTicker = () => {
    const data = [
      ['shld', this.getRandomTickerValue(100.44, 200.56)],
      ['yhoo', this.getRandomTickerValue(10.56, 50.33)],
      ['evi', this.getRandomTickerValue(10.78, 100.23)],
      ['aks', this.getRandomTickerValue(10.78, 100.23)],
      ['ebr', 138.1275844301807],
      ['intc', this.getRandomTickerValue(10.56, 150.33)],
      ['tck', this.getRandomTickerValue(10.56, 170.33)]
    ];

    if (showTickerRow) {
      data.push(['MSFT', this.getRandomTickerValue(10.78, 100.23)]);
    }
    showTickerRow = false;
    this.props.actions.fetchTickerData(data);
  };

  render() {
    return (
      <div className="ticker">
        <div className="ticker__header">
          <div className="ticker__header__name">
            Live Stocks Demo
          </div>
        </div>
        {(() => {
          if (this.props.tickerData) {
            return (
                <div className="ticker__container">
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
                      <div className="tickerInfo__update tickerInfo__update--noChange" /> No Change
                    </div>
                    <div className="tickerInfo__container">
                      <div className="tickerInfo__update tickerInfo__update--up" /> Increase
                    </div>
                    <div className="tickerInfo__container">
                      <div className="tickerInfo__update tickerInfo__update--down" /> Decrease
                    </div>
                  </div>
                </div>
            );
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
