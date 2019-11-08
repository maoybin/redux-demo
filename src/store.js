//创建 store createStore 是 redux 提供的一个拥有创建store的方法
import { createStore, applyMiddleware } from 'redux'
 
// 引入合并后的reducer
import rootReducers from './reducers';

import thunk from 'redux-thunk'



// createStore的第一个参数必须是reducer 如果有多个reducer，请在reducer目录下先使用combineReducer合并之后再导出
export default createStore(
    rootReducers,
    applyMiddleware(thunk)
)