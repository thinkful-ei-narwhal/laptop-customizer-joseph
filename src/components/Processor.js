import React from 'react';
import slugify from 'slugify';

export default function Processor(props) {
  const feature = "Processor"
  const featureHash = feature + '-' + 0;
  const options = props.selections[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={feature}
          checked={item.name === props.selections[feature].name}
          onChange={e => props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({props.formatUSD(item.cost)})
        </label>
      </div>
    );
  });

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>Processor</h3>
      </legend>
      {options}
    </fieldset>
  )
}