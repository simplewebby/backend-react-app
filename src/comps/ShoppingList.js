import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from  '../actions/itemActions';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }

    
    onDeleteClick =(id) => {
            this.props.deleteItem(id);
    }

    render(){
        const { items } = this.props.item;
        return(
            <div className="container mt-6">
                <h3 className="text-center"> User Info</h3>
                        <div className="container mt-5">
                            {items.map(({ _id, name, email }) => (
                                <ul className="list-group"  key={_id}>
                                    <li className="list-group-item mt-2" >{name} <br></br>{email}
                                     <button type = "button"
                                                className="btn btn-danger float-right "
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                     >X</button>
                                     </li>
                                </ul>
                            ))}
                        </div>
                   
            </div>
        );
    }
}
ShoppingList.propsTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps =(state)=> ({
    item: state.item
})
export default connect(mapStateToProps,{ getItems, deleteItem })(ShoppingList);