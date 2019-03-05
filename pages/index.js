import React from 'react';
import { connect } from 'react-redux';
import {
  shape,
  bool,
  string,
  func,
  arrayOf,
  number,
} from 'prop-types';
import { Button } from 'antd';
import { loadWeatherData } from '../store/actions/weather';
import createInitialPropsLoader from '../helpers/createInitialPropsLoader';
import { getWeatherChartData } from '../store/selectors/getWeatherChartData';
import { WeatherChart, Layout } from '../components';

const withStore = connect(store => ({
  weatherData: getWeatherChartData(store),
}), {
  loadWeatherData,
});

class App extends React.Component {
  componentDidMount() {
    const { initialProps, loadWeatherData: loadData } = this.props;

    if (initialProps.isLoaded) {
      return;
    }

    loadData();
  }

  renderCharts = () => {
    const { weatherData } = this.props;

    return weatherData
      .map(item => <WeatherChart key={item.city._id} city={item.city} list={item.list} />);
  }

  render() {
    const { weatherData } = this.props;
    return (
      <Layout>
        <div>
          <Button type="primary">Here could be login button</Button>
        </div>
        {
          weatherData
            ? this.renderCharts()
            : null
        }
      </Layout>
    );
  }
}

App.propTypes = {
  initialProps: shape({
    isLoaded: bool,
    error: string,
  }).isRequired,
  loadWeatherData: func.isRequired,
  weatherData: arrayOf(shape({
    city: shape({
      name: string.isRequired,
    }).isRequired,
    list: arrayOf(shape({
      temperature: number.isRequired,
      date: string.isRequired,
    })).isRequired,
  })),
};

App.defaultProps = {
  weatherData: [],
};

App.getInitialProps = createInitialPropsLoader(loadWeatherData);

export default withStore(App);
