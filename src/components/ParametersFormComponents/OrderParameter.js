import React from 'react';
import {ExplorerStore} from '../../stores/ExplorerStore';

export let OrderParameter = React.createClass({
  getInitialState: function() {
    return {value: null};
  },
  onChange: function(event) {
    let value = event.target.value;
    this.setState({value});
    ExplorerStore.setParam(this.props.param, value);
  },
  render: function() {
    return <div className="optionsTable__pair">
      <div className="optionsTable__pair__title">
        Order
      </div>
      <div className="optionsTable__pair__content">
        <div className="s-buttonGroup">
          <label className="s-buttonGroup__wrapper">
            <input type="radio" className="s-buttonGroup__radio" name={this.props.param} onChange={this.onChange} value="asc" />
            <span className="s-button s-button__light">asc</span>
          </label>
          <label className="s-buttonGroup__wrapper">
            <input type="radio" className="s-buttonGroup__radio" name={this.props.param} onChange={this.onChange} value="desc" />
            <span className="s-button s-button__light">desc</span>
          </label>
        </div>
      </div>
    </div>
  }
});