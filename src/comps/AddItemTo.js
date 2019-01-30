import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'

class AddItemTo extends Component {
    state = {
        name: '',
        email: ''    
    }  
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit =(e)=>{
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            email: this.state.email
        }
        // Add item via addItem action
        this.props.addItem(newItem);
    }
    render() {
        return(
            
            <div className="container mt-6">
                <h4 className="mt-5 text-center"> Add New User</h4>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="item">Name</Label>
                        <Input type="text" name="name" id="item" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup >
                        <Label for="item">Email</Label>
                        <Input type="email" name="email" id="item" onChange={this.onChange} value={this.state.value}/>
                    </FormGroup>
                < Button className = "float-right btn btn-info mb-5"
                onClick = {
                    this.addItem
                } > Add New User </Button>
            </Form>
      </div>
        )
    }
}
const mapStateToProps= state => ({
    item: state.item
})


export default connect(mapStateToProps, {addItem})(AddItemTo);