import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
//被provider包裹 都可以获取 store里面的值
import { Provider } from "react-redux"
import store from "./store"
const App = (
    //提供器 提供了store属性
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
