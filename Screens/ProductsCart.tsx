import {useState,useEffect} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TextInputBase,
  ScrollView,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux"
import { addtoquantity, removetocart, rq } from './redux/action';


const ProductsCart = ({navigation: {goBack, navigate}}) => {

    // const [number,setnumber] = useState(0)
    // const [number2,setnumber2] = useState(0)
    const [Total,setTotal] = useState(0)
    const [temparr, settemparr] = useState([]);
    const [disable,setdisable]=useState(false)


    const cartdata = useSelector((state)=>state.reducer)
        

    // calculating total here 
    const calculateTotal = () => {
      let total = 0;
      cartdata.map((item) => (total = total + item.Total));
      return total;
    };

    // calculating total here 





const dispatch = useDispatch();

// const handleremovefromcart=({item})=>{
  
  
//   // if(adddata && adddata.length){
//   //   adddata.forEach((element)=>{
//   //     if(element)
//   //     {
//   //       console.warn(element)
//   //     //  dispatch(removetocart(element))
//   //     }
//   //   })
//   // }
// }'

// useEffect(()=>{
//   if (cartdata && cartdata.length)  {
//     cartdata.forEach((element)=>{
//       if(element.id===item.id)
//       {
//         console.warn("hello")
//         // null;
//         // dispatch(addtocart(item))
//       //  setisadded(true)
//       }
//       else 
//       {
//         setnumber(cartdata.length)
//       }
//     })
//   }
//     // console.warn(adddata)
// },[cartdata])


const renderitem=({item})=>{

  return(
  
    <SafeAreaView>
  
    <View>
    <View style={{flexDirection:"row"}}>
        <Image style={{alignSelf:"center",height:12,width:12}} source={require("./Images/Red.png")}/>
        <Text style={{flex:1,marginLeft:5,fontSize:13,color:"#000",alignSelf:"center"}}>{item.Name}</Text>
        <View style={{borderWidth:2,flexDirection:"row",width:81,backgroundColor:"#D9D9D9"}}>
<TouchableOpacity
disabled={true ? item.Quantity <=1 : false}
onPress={()=>handleremovetoquantity(item)}
style={{flex:1}}> 
    <Text style={{alignSelf:"center",fontSize:13,color:"#000"}}>-</Text>
    </TouchableOpacity>
    <View style={{flex:1}}>
    <Text style={{alignSelf:"center",color:"#000"}}>{item.Quantity}</Text>
    </View>
    
    <TouchableOpacity onPress={()=>handleaddtoquantity(item)}
   style={{flex:1}}> 
    <Text style={{alignSelf:"center",color:"#000"}}>{"+"}</Text>
    </TouchableOpacity>
        </View>
        <TouchableOpacity  onPress={()=>{dispatch(removetocart(item))}} 
  style={{marginLeft:10}}>
      <Image style={{height:20,width:20}} source={require("./Images/Bin.png")} />
    </TouchableOpacity>
    </View>
    <View style={{flexDirection:"row"}}>
        <Text style={{flex:1,alignSelf:"center",color:"#000",marginTop:5}}>{"$"}{item.Price}</Text>
        <View >
        <Text style={{alignSelf:"center",color:"#000",marginTop:5,marginRight:37}}>{"$"}{item.Total}</Text>
        </View>
    </View>
    
    </View>
   

    <View style={{height:2,marginTop:18,marginBottom:21,width:"97%",backgroundColor:"#ECECEC",alignSelf:"center"}} />


  </SafeAreaView>
  )
}


const handleaddtoquantity=(item)=>{
  dispatch(addtoquantity(item))
}

const handleremovetoquantity=(item)=>{
  dispatch(rq(item))
}

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#FFFFFF"}}>
     
     <ScrollView contentContainerStyle={{flexGrow:1}}>
      {/* Header Here  */}
      <View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <TouchableOpacity
          onPress={()=>goBack()}
          >
            <Image
              style={{height: 35.87, width: 35.87}}
              source={require('./Images/Barrow.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              marginLeft: 20,
              alignSelf: 'center',
            }}>
            Burger King
          </Text>
        </View>
      </View>
    {/* Header Here upside */}


{/* // Delivery Box here  */}
    <View style={{marginLeft:20,backgroundColor:"#ECECEC",marginTop:20,borderRadius:8,paddingTop:8,paddingBottom:8,marginRight:20}}>
     <Text style={{fontSize:15,marginLeft:20}}>Delivery in <Text style={{color:"#333333"}}>25-30 mins</Text></Text>
    </View>
{/* // Delivery Box here  */}

{/* items added text here Starts */}

<Text style={{alignSelf:"center",marginTop:25,fontSize:15,color:"#000",fontFamily:"Inter"}}>{"Item(s) added"}</Text>

{/* items added text here ends */}

{/* Added Items Box Here  */}
<View  style={cartdata.length !=0 ? {marginLeft:30,marginTop:15,marginRight:30,paddingLeft:30,paddingRight:30,elevation:3,borderRadius:19,paddingTop:20,paddingBottom:20,backgroundColor:"#FFFFFF"} : {backgroundColor:"#FFFFFF"}}>
   
   <FlatList 
   data={cartdata}
   renderItem={renderitem}
   nestedScrollEnabled={true}
   showsHorizontalScrollIndicator={false}
   showsVerticalScrollIndicator={false}
  //  keyExtractor = {item => item.id}
  //  contentContainerStyle={{height:200}}
   />
   

</View>
{/* Added Items Box Here  */}

<Text style={{alignSelf:"center",marginTop:20,fontSize:16,color:"#000"}}>Bill Summary</Text>


{/* SubTotal Box Here  */}
<View style={{marginLeft:30,marginRight:30,paddingLeft:30,paddingRight:30,marginTop:20,elevation:2,backgroundColor:"#FFFFFF",paddingBottom:27,paddingTop:16}}>

<View style={{flexDirection:"row"}}>
<Text style={{flex:1,color:"#000"}}>Subtotal</Text>
<Text style={{color:"#000",marginRight:37}}>{"$"}{calculateTotal()}</Text>
</View>

<View style={{marginTop:20,flexDirection:"row"}}>
<Text style={{flex:1,color:"#333333"}}>Delivery partner fee</Text>
<Text style={{color:"#04A652",marginRight:30}}>Free</Text>
</View>

</View>
{/* SubTotal Box Here  */}

<Text style={{alignSelf:"center",marginTop:30,fontSize:16,color:"#000"}}>Before you place the Order</Text>

{/* Emojis Here  */}
<View style={{marginBottom:50,elevation:2,backgroundColor:"#FFFFFF",marginLeft:27,marginRight:27,paddingTop:11,paddingBottom:15,borderRadius:19,marginTop:20}}>
 <View  >
  <View style={{flexDirection:"row"}}>
 <TouchableOpacity style={{marginRight:20,marginLeft:20}} >
 <Image style={{height:34,width: 34}} source={require("./Images/Cute.png")}/>
 </TouchableOpacity >
 <TouchableOpacity style={{marginRight:20}}>
 <Image style={{height:34,width: 34}} source={require("./Images/Laugh.png")}/>
 </TouchableOpacity >
 <TouchableOpacity style={{marginRight:20}}>
 <Image style={{height:34,width: 34}} source={require("./Images/Smile.png")}/>
 </TouchableOpacity>
 <TouchableOpacity style={{marginRight:20}}>
 <Image style={{height:34,width: 34}} source={require("./Images/Normal.png")}/>
 </TouchableOpacity>
 <TouchableOpacity >
 <Image style={{height:34,width: 34}} source={require("./Images/Angry.png")}/>
 </TouchableOpacity>
 </View>
 </View>

</View>

{/* Emojis Here  */}

</ScrollView>
    </SafeAreaView>
  );
};

export default ProductsCart;
