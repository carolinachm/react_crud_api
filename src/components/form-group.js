import React, { Component } from 'react'

class FormGroup extends Component{
    render(){
        return(
            <div className="form-group">
              <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
              {this.props.children}
            </div>
        )
    }
}
export default FormGroup;