import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnyChart from 'anychart-react'
import anychart from 'anychart'

const data = [{x: 7, y: 4, name: "Tom"}, {x: 20, y: 7, name: "Tim"}, {x: 90, y: 90, name: "Tam"}]
const quarters = {
  rightTop: {
    title: {
      text: 'LEADERS',
      fontColor: '#ff8f00',
      padding: 10
    }
  },
  rightBottom: {
    title: {
      text: 'VISIONARIES',
      fontColor: '#ff8f00',
      padding: 10
    }
  },
  leftTop: {
    title: {
      text: 'CHALLENGERS',
      fontColor: '#ff8f00',
      padding: 10
    }
  },
  leftBottom: {
    title: {
      text: 'NICHE PLAYERS',
      fontColor: '#ff8f00',
      padding: 10
    }
  }
}


class App extends Component {

    state = {
      chartData: data
    }
  render() {
    var chart = anychart.quadrant();
    const dataSet = anychart.data.set(this.state.data);  
    var markers = chart.marker(dataSet);
    // set labels settings
    markers.labels()
      .enabled(true)
      .fontFamily('Arial')
      .fontColor('#546e7a')
      .position('right')
      .anchor('left-center')
      .offsetX(0)
      .offsetY(0)
      .format('{%Name}');
    // disabled tooltip
    markers.tooltip(false);

    chart.quarters(quarters);


    return (
      <div className="App">
       
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <AnyChart
            width='100%'
            height='100%' 
            id='bar-chart'
            instance={chart}
        />
        <svg src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Internal_organs.svg"></svg>
      </div>

    );
  }
}

export default App;
