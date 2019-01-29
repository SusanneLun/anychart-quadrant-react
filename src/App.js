import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnyChart from 'anychart-react'
import anychart from 'anychart'

const data = [{x: 7, value: 4, name: "Tom"}, {x: 2, value: 7, name: "Tim"}, {x: 9, value: 9, name: "Tam"}, {x: 3, value: 5, name: "Eric"}]
const quarters = {
  rightTop: {
    title: {
      text: '',
      fontColor: '#ff8f00',
      padding: 10
    }
  },
  rightBottom: {
    title: {
      text: '',
      fontColor: '#ff8f00',
      padding: 10
    }
  },
  leftTop: {
    title: {
      text: '',
      fontColor: '#ff8f00',
      padding: 10
    }
  },
  leftBottom: {
    title: {
      text: '',
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

    let chart = anychart.quadrant();
    let yTitle = chart.yAxis().title();
    yTitle.enabled(true);
    yTitle.text("Power Rating --->");
    yTitle.align("bottom");

    let yScale = anychart.scales.linear();


    let yAxis = chart.yAxis(0);
    yAxis.scale(yScale);


    chart.xAxis().title("Interest Rating --->");

    chart.yScale().minimum(0);
    chart.yScale().maximum(10);
    chart.xScale().minimum(0);
    chart.xScale().maximum(10)

    chart.title("Power/Interest Ratings")
    chart.container("container")
    chart.draw();


    const dataSet = anychart.data.set(this.state.chartData);
    console.log(dataSet)
    var markers = chart.marker(dataSet);
    // set labels settings
    markers.labels()
      .enabled(true)
      .fontFamily('Arial')
      .fontColor('#546e7a')
      .position('right')
      .anchor('left-center')
      .offsetX(2)
      .offsetY(2)
      .format('{%Name}');
    // disabled tooltip
    markers.tooltip(false);

    chart.quarters(quarters);


    return (
      <div className="App">
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
