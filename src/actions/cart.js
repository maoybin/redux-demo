import actionType from './actionType'

// action 有两种写法 

// 第一种写成一个对象，这是标准的action ，但是，问题是不方便传递动参数
// export const increment = {
//     type:actionType.CART_AMOUNT_INCREMENT,
    //    payLoad:{
    //        id:123
    //    }
// }

// 在工作中，常用的一种方式是使用actionCreator 它是一个方法，返回一个对象，这个对象才是真正的action
export const increment = (id)=>{

  return {
    type:actionType.CART_AMOUNT_INCREMENT,
    payLoad:{
        id
    }
  }
}

export const decrement = (id)=>{
    return {
      type:actionType.CART_AMOUNT_DECREMENT,
      payLoad:{
          id
      }
    }
  }

  // 异步action ，使用redux-thunk之后，就可以在actionType里return一个方法这个方法的参数就是dispatch
  // export const decrementAsyn = (id)=>{

  //   return (dispatch)=>{

  //     setTimeout(()=>{

  //       dispatch(decrement(id))
  //     },2000)

  //   }
   
  // }
  
export const decrementAsyn = id => dispatch=>{

      setTimeout(()=>{

        dispatch(decrement(id))

      },2000)

  }
