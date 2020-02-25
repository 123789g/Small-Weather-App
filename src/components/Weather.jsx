import React from "react"

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            In {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && (
          <p>Feels about {this.props.temperature} °C </p>
        )}
        {this.props.humidity && (
          <p>Humidity is like {this.props.humidity} g/m3</p>
        )}
        {this.props.wind && <p>Winds are hitting {this.props.wind} MPH</p>}
        {this.props.description && (
          <p> It's {this.props.description} out there</p>
        )}
        {this.props.error && <p> {this.props.error}</p>}
      </div>
    )
  }
}

export default Weather
