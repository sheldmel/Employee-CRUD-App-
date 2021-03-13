import React, { Component } from 'react'
import EmployeeService from '../routes/EmployeeService'
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div>
                    <h3 className = "text-center" style={{fontSize:50}}>Employee Details</h3>
                <div className = "card-body">
                        <div className = "row" style={{fontSize:30}}>
                            <label>First Name: </label>
                            <div style={{marginLeft: 10}}>  { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row" style={{fontSize:30}}>
                            <label> Last Name: </label>
                            <div style={{marginLeft: 10}}> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row" style={{fontSize:30}}>
                            <label> Email ID: </label>
                            <div style={{marginLeft: 10}}> { this.state.employee.emailId }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent