import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CustomizeSelection from './components/CustomizeSelection';
import Cart from './components/Cart';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <CustomizeSelection
            updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
            store={this.props.features}
            selected={this.state.selected}
            formatUSD={(num) => USCurrencyFormat.format(num)} />
          <Cart 
            selectedState={this.state.selected}
            formatUSD={(num) => USCurrencyFormat.format(num)} />
        </main>
      </div>
    );
  }
}

export default App;
