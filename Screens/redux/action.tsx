import {AddToCart,AddtoQuantity,RemoveToCart,RQ} from "./constants"

export function addtocart(item){
    return{
        type:AddToCart,
        data:item

    }
}

export function removetocart(item){
    return{
        type:RemoveToCart,
        data:item
    }
}

export function addtoquantity(item){
    return{
        type:AddtoQuantity,
        data:item
    }
}

export function rq(item){
    return{
        type:RQ,
        data:item
    }
}