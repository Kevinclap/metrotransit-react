import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import {ListBox} from 'primereact/listbox';
import {Button} from 'primereact/button';

import getRoutes from '../services/route';
import getDirections from '../services/direction';
import getStops from '../services/stop';
import busTime from '../services/busTime'

class RoutesInput extends Component {

    constructor() {
        super();
        this.state = {
            filteredRoutes: null,
            direction: null,
            filteredStops: null,
            nextBus: null,
            disabledButton: 'disabled'
        };
        this.filterRoutes = this.filterRoutes.bind(this);
        this.onDirectionChange = this.onDirectionChange.bind(this);
        this.filterStops = this.filterStops.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        this.routes = await getRoutes();
        console.log(this.state.route);
    }

    async getDirectionsFromState(route) {
        console.log('This is route before await: ', route);
        this.directions = await getDirections(route);
        this.setState({direction: this.directions});
        console.log("This is route inside getDirectionformState: ", route);
        console.log('This is directions: ', this.directions);
        console.log('This is value: ', this.state.route);
        console.log('This is state!!!!!!!!', this.state);
    }
    
    filterRoutes(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.routes];
            }
            else {
                results = this.routes.filter((route) => {
                    return route.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            this.setState({ filteredRoutes: results });
        }, 250);
    }

    async onDirectionChange(e) {
        console.log('This is e.value direction: ', e.value);
        this.setState({direction: e.value});
        if(e.value) {
            this.stops = await getStops(this.state.route, e.value.Text);
        }
        
        console.log("This is stops!!!!!!!: ", this.stops);

    }

    filterStops(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.stops];
            }
            else {
                results = this.stops.filter((stop) => {
                    return stop.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            this.setState({ filteredStops: results });
        }, 250);
    }

    async handleClick() {
        console.log('This is state: ', this.state);
        this.nextBus = await busTime(this.state.route, this.state.direction.Text, this.state.stop);
        console.log("This is time till bus: ", this.nextBus);
        this.setState({ nextBus: this.nextBus });
    }
    
  render() {
    return (
      <div style={{paddingLeft: '10px', paddingTop: '10px'}}>
          <div>
        <h3>Choose a Route</h3>    
        <AutoComplete value={this.state.route} suggestions={this.state.filteredRoutes} completeMethod={this.filterRoutes}
         size={50} placeholder="Routes" dropdown={true} minLength={1} onChange={(e) => this.setState({route: e.value})}
         onSelect={(e) => this.getDirectionsFromState(e.value)}/>
        </div>
        <div>
        {(this.directions && this.directions.length !== 0) && 
            <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <h3>Choose a Direction</h3>    
            <ListBox value={this.state.direction} options={this.directions} onChange={this.onDirectionChange} 
            optionLabel="Text" style={{justifyContent: 'center'}}/>
            </div>
        }
        </div>
        <div>
        </div>
        {(this.stops && this.stops.length !== 0) &&
           <div>
           <h3>Choose a Stop</h3>    
           <AutoComplete value={this.state.stop} suggestions={this.state.filteredStops} completeMethod={this.filterStops}
           size={50} placeholder="Stops" dropdown={true} minLength={1} onChange={(e) => this.setState({stop: e.value, disabledButton: ''})}/>
           </div> 
        }
        <div style={{paddingTop: '10px'}}>
        <Button label="Submit" onClick={this.handleClick} disabled={this.state.disabledButton}/>
        </div>

        { this.nextBus ? <h4>{this.nextBus}</h4> : null }

      </div>
    )
  }
}

export default RoutesInput
