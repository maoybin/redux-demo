import React from 'react';
import {render} from 'react-dom';

import App from './App';
// Provider  是react-redux 提供的一个组件
import {Provider} from "react-redux"

import store from './store'

render(
    // 一般就直接把这个组件放在程序的最顶层，这个组件必须有一个store属性，这个store属性的值就是store
    // 只要在最外层包裹了Providerm,那么所有后代组件就可以使用redux.connect做链接
    <Provider store={store}>
     <App />
    </Provider>,
    document.querySelector('#root')
)

