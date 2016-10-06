import * as React from 'react';
import 'isomorphic-fetch';

export class ApiDemo extends React.Component {
  constructor() {
    super();
    this.state = { forecasts: [], loading: true };

    fetch('/api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });

    /*    fetch('/api/SampleData/WeatherForecasts')
            .then(response => response.json())
            .then((data: WeatherForecast[]) => {
                this.setState({ forecasts: data, loading: false });
            });*/

            /*

            interface WeatherForecast {
                dateFormatted: string;
                temperatureC: number;
                temperatureF: number;
                summary: string;
            }
            */

      this.renderForecastsTable = this.renderForecastsTable.bind(this);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
          : this.renderForecastsTable(this.state.forecasts);

        return <div>
            <p>This component demonstrates fetching data from the server.</p>
            { contents }
            <p>For more sophisticated applications, consider an architecture such as Redux or Flux for managing state. You can generate an ASP.NET Core application with React and Redux using <code>dotnet new aspnet/spa/reactredux</code> instead of using this template.</p>
        </div>;
    }

    renderForecastsTable(forecasts) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
            {forecasts.map(forecast =>
                <tr key={ forecast.dateFormatted }>
                    <td>{ forecast.dateFormatted }</td>
                    <td>{ forecast.temperatureC }</td>
                    <td>{ forecast.temperatureF }</td>
                    <td>{ forecast.summary }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

export default ApiDemo;
