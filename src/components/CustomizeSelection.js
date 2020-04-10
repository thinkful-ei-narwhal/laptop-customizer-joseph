import React from 'react';
import Processor from './Processor';
import OperatingSystem from './OperatingSystem';
import VideoCard from './VideoCard';
import Display from './Display';

export default function CustomizeSelection(props) {
  return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Processor 
        selections={props.store}
        formatUSD={props.formatUSD}
        updateFeature={props.updateFeature} />
      <OperatingSystem 
        selections={props.store}
        formatUSD={props.formatUSD}
        updateFeature={props.updateFeature} />
      <VideoCard 
        selections={props.store}
        formatUSD={props.formatUSD}
        updateFeature={props.updateFeature} />
      <Display 
        selections={props.store}
        formatUSD={props.formatUSD}
        updateFeature={props.updateFeature} />
    </form>
  )
}