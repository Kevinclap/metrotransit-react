import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

import getRoutes from '../services/route';

class RoutesInput extends Component {

    constructor() {
        super();
        this.state = {
            filteredRoutes: null
        };
        this.filterRoutes = this.filterRoutes.bind(this);
    }

    async componentDidMount() {
        this.routes = await getRoutes();
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
    
  render() {
    return (
      <div>
        <AutoComplete value={this.state.route} suggestions={this.state.filteredRoutes} completeMethod={this.filterRoutes}
         size={50} placeholder="Routes" dropdown={true} minLength={1} onChange={(e) => this.setState({route: e.value})} />
      </div>
    )
  }
}

export default RoutesInput
