// import React, { useState ,useEffect} from "react";
// import {View,Text,TextInput,Button} from "react-native"
// import { addtocart,removetocart } from "./redux/action";

// import {useDispatch,useSelector} from "react-redux"
// import Header from "./Header";


// const Screen1 = ({navigation:{navigate}})=>{

//     const [value2,setvalue2] = useState("")
//     const [storevalue,setstorevalue]=useState("")
//     const dispatch = useDispatch();


//     const cartitems= useSelector((state)=>state.reducer)
// const [isadded,setadded]=useState(false)

//     const handleaddtocart=()=>{
//         // dispatch(addtocart(storevalue))
//         setstorevalue(value2);
//         dispatch(addtocart(storevalue))
//         navigate("Screen2")
//     }

// const handleremovetocart=()=>{
// dispatch(removetocart(storevalue))
// }


// useEffect(()=>{
// let result =cartitems.filter((element)=>{
//     return element ===storevalue
// });
// if(result){
//     setadded(true)
//     // console.warn("fucked up")
// }
// else{
//     setadded(false)
//     // console.warn("ywae gae")
// }
// },[cartitems])



//     let m;
//     m=storevalue;
    
//         return(
            
//             <View >
//                 <TextInput style={{borderWidth:2,width:200}}  onChangeText={(text)=>setvalue2(text)} />
//     <Text>{m}</Text>
// {
//     isadded==true ?
//     <Button onPress={()=>handleaddtocart()} title="press Me"/>
// :
// <Button onPress={()=>handleremovetocart()} title="remove me"/>
// }

//             </View>
//         )

// }

// export default Screen1;