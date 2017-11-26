import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import tickerActions from '../actions/ticker';

import Header from './Header';
import TickerContainer from './TickerContainer';

let showTickerRow = true;
class App extends React.Component {
  interval;

  componentDidMount() {
    this.updateTicker();
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

    const intervalSeconds = parseInt(this.getRandomTickerValue(1000, 3000), 10);
    this.interval = setInterval(() => {
      this.updateTicker();
    }, intervalSeconds);
  };

  render() {
    return (
      <div className="ticker">
        <Header />
        {(() => {
          if (this.props.tickerData) {
            return (
              <TickerContainer
                tickerData={this.props.tickerData}
              />
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
