import React, { Component } from 'react'

// 
import {increment , decrement,decrementAsyn} from '../../actions/cart'

// connect 是一个高阶组件
import {connect} from 'react-redux'

class CartList extends Component {

    constructor(){
        super()
        this.state = {
            cartList:[]
        }
    }

    getState  = ()=>{
        // this.setState({
        //     cartList:this.props.store.getState().cart
        // })
        // this.props.store.subscribe(this.getState)
    }

    componentDidMount(){
        this.getState()
    }

    render() {
        console.log(this.props)

        return (
           <table>
               <thead>
                   <tr>
                       <th>id</th>
                       <th>商品名称</th>
                       <th>价格</th>
                       <th>数量</th>
                       <th>操作</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       this.props.cartList.map(item=>{
                           return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={this.props.decrementAsyn.bind(this,item.id)}>等一会再减</button>
                                    <button onClick={this.props.decrement.bind(this,item.id)}>-</button>
                                    <span>{item.amount}</span> 
                                    <button onClick={this.props.decrement.bind(this,item.id)}>+</button>
                                </td>
                            </tr>
                           )
                       })
                   }
               </tbody>
           </table>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        cartList:state.cart
    }
}

// const mapdispatchToProps = dispatch => {
//     return{
//         add: (id)=>dispatch(increment(id)),
//         reduce:(id)=> dispatch(decrement(id))
//     }
// }

// connect 四个参数
export default connect(mapStateToProps,{decrement,increment,decrementAsyn})(CartList)
