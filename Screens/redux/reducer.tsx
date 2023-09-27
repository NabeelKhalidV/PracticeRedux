import {act} from 'react-test-renderer';
import {Alert} from 'react-native';
import {AddToCart, RemoveToCart, AddtoQuantity, RQ} from './constants';
const initialstate = [];

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case AddToCart:
      let Subtotal1 = 0;
const actiondata = action.data;
const {id} = action.data;
// {state.reduce((item)=>item + item.Quantity * item.Price).toFixed(2)}
const find =state.find(item=>item.id===id);
if(find){
 return state.map(item=>
  item.id===id 
 ?
 {
  ...item,
  Quantity: item.Quantity + 1,
  Total: item.Total + action.data.Price,
 }
 :
 item,
 );
  }
else {
  // state.push({...action})
  return [...state,actiondata]
}








      // const actiondata = action.data;
      // const newState = [...state]

      // if (state.length == 0) {
      //   return [...state, actiondata];
      // } else {
      //   const addtoc = newState.map(item => {
      //     if (item.id === actiondata.id) {
      //       console.log(newState);
      //       return {
      //         ...item,
      //         Quantity: item.Quantity + 1,
      //         Total: item.Total + action.data.Price,
      //       };
      //     }

      //     if (item.id !== actiondata.id) {
      //       console.log(newState);
      //       return {
      //         // ...item,
      //         ...actiondata,
      //       };
      //     }
      //   });
      //   return [...addtoc];
      // }
    // return [...state,action.data]

    //   let index = state.findIndex(el => el.data == action.data);
    // return [...state,action.data].filter(element=>{
    //   if(index == -1)
    //     return element;
    //   return state;

    // });

    // action.data
    // action.data.Quantity = action.data.Quantity+1
    // console.warn("why")
    // state=action.data
    // let addtoc = state.map((item) => {
    //   if(state==null)
    //   {
    //     // return [action.data]
    //     console.warn("hello")
    //   }
    //   else if (item.id==action.data.id)
    //   {
    //     // console.warn("jaja")
    //     // state=action.data
    //     return [action.data.Quantity= action.data.Quantity +1]
    //     // return action.data

    //     // item.Quantity += item.Quantity
    //     // return [
    //     //   ...state ,item.Quantity ,action.data
    //     // ]
    // //  return [item.Quantity=item.Quantity+1]
    // }
    //   else{
    //     // console.warn("HAHAHA")
    //     return [action.data]
    //     // console.warn(state)
    //     // state=action.data
    //     // item.Quantity=1
    //     // console.warn("haha")
    //     // return [
    //     //   ...state,
    //     //   action.data
    //     // ]
    //   }
    // });

    // if (state.length == 0) {
    //   return [action.data];
    // } else {
    //   let addtoc= state.map(item => {
    //     if (item.id === action.data.id) {
    //       Alert.alert('if');
    //       return {
    //         // ...state,
    //        ...item,
    //         Quantity: item.Quantity + 1,
    //         Price: item.Price + action.data.Price,
    //       };
    //     e} els {
    //       Alert.alert('else');
    //       return [action.data]
    //     }
    //   });
    //   return [state,...addtoc]
    // }

    //    // console.warn(state)
    //    let addtoc = state.map(item => {
    //     state.forEach(element => {
    //       return element.id === action.data.id ? {
    //         ...state,
    //         Quantity: element.Quantity+1,
    //         price: element.price + action.data.price
    //       }

    //       :
    //       {item};
    //     });
    // }
    // );
    //   return [...addtoc]
    // ...state,
    // action.data
    // addtoc
    // addtoc ? action.data : action.data.Quantity = action.data.Quantity + 1

    // console.warn("hello"),
    // addtoc ?
    // action.data
    // :
    // action.data.Quantity = action.data.Quantity + 1
    // {addtoc , action}
    // chosenIds
    // action.data,
    // ];

    case RemoveToCart:
      let result = state.filter(item => {
        return item != action.data;
      });
      return [...result];

    case AddtoQuantity:

      let add = state.map(item => {
        return item.id == action.data.id
          ? {
              ...item,
              Quantity: item.Quantity + 1,
              Total: item.Total + action.data.Price,
            }
          : item;
      });
      return [...add];

    case RQ:
      let remove = state.map(item => {
        return item.id == action.data.id
          ? {
              ...item,
              Quantity: item.Quantity - 1,
              Total: item.Total - action.data.Price,
            }
          : 
          item ;
      });
      return [...remove];


    default:
      return state;
  }
};
