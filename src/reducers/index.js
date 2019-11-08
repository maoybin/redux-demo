// 在实际的项目中，由于只有单一的store ，但是状态会有很多分类，所以我们要划分reducer，combineReducer 用于合并多个reducer
import { combineReducers } from 'redux'

// 引入多个cart reducer 如果有多个继续引入
import cart from './cart'

// 导出合并后的reducer
export default combineReducers({
    // 在外部就可以通过store.getState().cart来获取cartReducer里面的state
    cart
})