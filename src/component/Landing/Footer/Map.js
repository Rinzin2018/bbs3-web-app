import React from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {Hidden} from '@material-ui/core';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: 260,
      height: 250,
      marginLeft: 50,
      marginTop: 80,
    };

    const mobileStyle = {
      width: 160,
      height: 200,
      marginTop: 10,
    };

    return (
      <div>
        <Hidden smDown={true}>
          <Map
            item
            xs={12}
            containerStyle={style}
            google={this.props.google}
            onClick={this.onMapClick}
            zoom={14}
            initialCenter={{lat: 27.4712, lng: 89.6339}}
          >
            <Marker
              onClick={this.onMarkerClick}
              title={'Changing Colors Garage'}
              position={{lat: 27.4712, lng: 89.6339}}
              name={'Changing Colors Garage'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
            </InfoWindow>
          </Map>
        </Hidden>
        <Hidden smUp={true}>
          <Map
            item
            xs={12}
            containerStyle={mobileStyle}
            google={this.props.google}
            onClick={this.onMapClick}
            zoom={14}
            initialCenter={{lat: 27.4712, lng: 89.6339}}
          >
            <Marker
              onClick={this.onMarkerClick}
              title={'Changing Colors Garage'}
              position={{lat: 27.4712, lng: 89.6339}}
              name={'Changing Colors Garage'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
            </InfoWindow>
          </Map>
        </Hidden>
      </div>
    );
  }
}

export default GoogleApiWrapper(
  {
    api: (process.env.GOOGLE_API_KEY_GOES_HERE)
  }
)(GoogleMapsContainer);