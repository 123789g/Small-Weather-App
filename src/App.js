import React from "react"
import "./App.css"
import Title from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const weatherAPI = "829b2450125c0d3515b48268dedb8d26"

class App extends React.Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined,
    city: undefined,
    country: undefined
  }
  getWeather = async e => {
    e.preventDefault()
    const zip = e.target.elements.Zip.value
    const country = e.target.elements.Country.value
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&id=524901&APPID=${weatherAPI}&units=metric`
    )
    const data = await apiCall.json()
    if (zip && country) {
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        city: undefined,
        country: undefined,
        error: "Enter Valid Information."
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-1 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    wind={this.state.wind}
                    description={this.state.description}
                    error={this.state.error}
                    city={this.state.city}
                    country={this.state.country}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
