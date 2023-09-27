// import { act } from 'react-test-renderer';
// import {AddToCart,RemovetoQuantity, AddtoQuantity, RemoveToCart} from './constants';
// const initialstate = {
//   item: [],
// };

// export const reducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case AddToCart: (state,action)
//       // action.data
//       // action.data.Quantity = action.data.Quantity+1
//       // console.warn("why")
//       // state=action.data
//       // let addtoc = state.map((item) => {   
//       //   if(state==null)
//       //   {
//       //     // return [action.data]
//       //     console.warn("hello")
//       //   }
//       //   else if (item.id==action.data.id)
//       //   {
//       //     // console.warn("jaja")
//       //     // state=action.data
//       //     return [action.data.Quantity= action.data.Quantity +1]
//       //     // return action.data
          
//       //     // item.Quantity += item.Quantity
//       //     // return [
//       //     //   ...state ,item.Quantity ,action.data
//       //     // ]
//       // //  return [item.Quantity=item.Quantity+1]
//       // }
//       //   else{
//       //     // console.warn("HAHAHA")
//       //     return [action.data]
//       //     // console.warn(state)
//       //     // state=action.data
//       //     // item.Quantity=1
//       //     // console.warn("haha")
//       //     // return [
//       //     //   ...state,
//       //     //   action.data
//       //     // ]
//       //   }
//       // });
//       let addtoc = state.map(item => {
//         return item.id == action.data.id ? [item.Quantity=item.Quantity+1] : [...state , action.data];
//       });
//       return [
//         ...state,
//         // addtoc
//         // ...state,
//         action.data
//         // addtoc
//         // addtoc ? action.data : action.data.Quantity = action.data.Quantity + 1
        
//         // console.warn("hello"),
//       // addtoc ?
//         // action.data
//         // :
//         // action.data.Quantity = action.data.Quantity + 1
//       // {addtoc , action}
//         // chosenIds
//         // action.data,
//       ];

//     case RemoveToCart:
//       let result = state.filter(item => {
//         return item != action.data;
//       });
//       return [...result];

//     case AddtoQuantity:
//       let add = state.map(item => {
//         return item.id == action.data.id ? item.Quantity = item.Quantity+1 : item;
//       });
//       return [...add];


//       case RemovetoQuantity:
//       let Remove = state.map(item => {
//         return item.id == action.data.id ? item.Quantity = item.Quantity-1 : item;
//       });
//       return [...Remove];

//     default:
//       return state;
//   }
// };
