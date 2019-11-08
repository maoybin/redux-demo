// 为了避免actionType 重复所以一般会把actionType放在一个文件里统一进行管理，也可以避免写错actionType
import actionType from '../actions/actionType'

// 初始状态
const initState = [{
    id:1,
    title:'Apple',
    price:54.9,
    amount:12
},
{
    id:2,
    title:'orange',
    price:88.9,
    amount:10
}]


// 创建reducer ，ruducer的固定写法是两参数，第一个是state并有 一个初始值，第二个是action
export default (state=initState,action)=>{

    // console.log(action)
// 根据不同的action.type处理做不同的处理每次返回一个新的sate，返回的类型要一样
    switch(action.type){

        case actionType.CART_AMOUNT_INCREMENT:
            return state.map( item => {

                if(item.id === action.payLoad.id){
                    
                    item.amount +=1;
                }

                return item;
            })

        case actionType.CART_AMOUNT_DECREMENT:
            // console.log("--");
                return state.map( item => {
    
                    if(item.id === action.payLoad.id){
                        
                        item.amount -=1;
                    }
    
                    return item;
                })
//一定要有default 
        default:
            return state
    }

}