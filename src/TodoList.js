import React, { Component } from 'react';
// import store from "./store";
import { connect } from "react-redux"
class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = store.getState();
        // this.inputChange = this.inputChange.bind(this);
    }
    render() {
        let { inputValue, list, inputChange, addItem } = this.props;
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={inputChange}></input>
                    <button type="submit" onClick={addItem}>增加</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={item + index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
//映射
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: "change_value",
                value: e.target.value
            }
            dispatch(action)
        },
        addItem: payload => {
            dispatch({
                type: "add_item"
            })
        }
        // addItem() {
        //     let action = {
        //         type: "add_item"
        //     }
        //     dispatch(action)
        // }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);