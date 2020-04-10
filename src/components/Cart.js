import React from 'react';

export default function Cart(props) {
  const total = Object.keys(props.selectedState).reduce(
    (acc, curr) => acc + props.selectedState[curr].cost,
    0
  );

  const summary = Object.keys(props.selectedState).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selectedState[feature];
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.formatUSD(selectedOption.cost)}
        </div>
      </div>
    );
  });

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {props.formatUSD(total)}
        </div>
      </div>
    </section>
  )
}