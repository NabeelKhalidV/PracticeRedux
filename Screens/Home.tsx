import {useState, useEffect} from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {addtocart, addtoquantity, removetocart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
// import { AddtoQuantity } from './redux/constants';

const Foods = [
  {
    id: 0,
    Name: 'Burger',
  },
  {
    id: 1,
    Name: 'Fries',
  },
  {
    id: 2,
    Name: 'Meals',
  },
  {
    id: 3,
    Name: 'Pizza',
  },
];

const Burgers = [
  {
    id: 0,
    Name: 'Chicken Burger',
    Images: require('./Images/Header.png'),
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    Star: require('./Images/Star.png'),
    Rank: 4.5,
    Price: 70,
    Total:70,
    Quantity: 1,
    // count: 0
  },
  {
    id: 1,
    Name: 'Potato Corn Burger',
    Images: require('./Images/Header.png'),
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    Star: require('./Images/Star.png'),
    Rank: 4,
    Price: 40,
    Total:40,
    Quantity: 1,
    // count: 0
  },
  {
    id: 2,
    Name: 'Supreme Burger',
    Images: require('./Images/Header.png'),
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    Star: require('./Images/Star.png'),
    Rank: 4.3,
    Price: 60,
    Total:60,
    Quantity: 1,
    // count: 0
  },
  {
    id: 3,
    Name: 'Pizza Burger',
    Images: require('./Images/Header.png'),
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    Star: require('./Images/Star.png'),
    Rank: 4.5,
    Price: 10,
    Total:10,
    Quantity: 1,
    // count: 0
  },
];

const Home = ({navigation: {navigate}}) => {
  const [selecteditem, setselecteditem] = useState(false);
  const [COUNT, SETCOUNT] = useState();
  // const [Subtotal, setSubtotal] = useState();

  // const [elementitems,setelementitems] =useState();

  const dispatch = useDispatch();
  // const[cartdata,setcartdata]=useState([])

  const cartitems = useSelector(state => state.reducer);
  // console.warn(cartitems)

  // const addtoc =(item)=>{ cartitems.map(element => {

  //   if (cartitems.length == 0) {
  //     dispatch(addtocart(item))
  //     navigate("ProductsCart")

  //   } else if (element.id === item.id) {
  //     // Alert.alert('if');
  //     console.warn("if")
  // navigate("ProductsCart")
  // dispatch(addtoquantity(item))
  //     // return {
  //     //   // ...state,
  //     //   ...element,
  //     //   // addtoquantity(element)
  //     //   // Quantity: element.Quantity + 1,
  //     //   // Price: element.Price + action.data.Price,
  //     // };
  //   } else if (element.id !== item.id){
  //     // Alert.alert('else');
  //     console.warn("else")
  // navigate("ProductsCart")
  // dispatch(addtocart(item))
  //     // return [...item]
  //   }
  // }





  // const cart = item => {

  //   if (cartitems.length == 0) {
  //     // console.warn('cartitems.length == 0');
  //     dispatch(addtocart(item));
  //     navigate('ProductsCart');
  //   } else if (cartitems.length > 0) {
  //     // console.warn('cartitems.length > 0');
  //     let addtoc = cartitems.findIndex(element => {
  //       if (element.id === item.id) {
  //         // console.warn('cartitems id and selected item id matched');
  //         console.warn("if")
  //         navigate('ProductsCart');
  //         dispatch(addtoquantity(item));
  //         // return {
  //         //   // ...state,
  //         //   ...element,
  //         //   // addtoquantity(element)
  //         //   // Quantity: element.Quantity + 1,
  //         //   // Price: element.Price + action.data.Price,
  //         // };
  //       } else if (element.id !== item.id) {
  //         // console.warn('cartitems id and selected item not matched');
  //         console.log(item)
  //         console.warn("else")
  //         navigate('ProductsCart');
  //         // cartitems;
  //         dispatch(addtocart(item));
          
  //         // return [...item]
  //       }
        
  //     });
  //     return {...addtoc}
  //     // navigate("ProductsCart")
  //     // console.warn("working")
  //     // return [...addtoc];
  //   }
  // };




  const [isadded, setisadded] = useState(false);

  // const handleaddtocart = item => {
  //   dispatch(addtocart(item))
  //   // console.warn(cartitems)
  // //   if(cartitems==null)
  // //   {
  // //     // console.warn(cartitems)
  // //   // dispatch(addtocart(item))
  // // }
  // // else
  // // {
  // //   // console.warn("jajajja")
  // //   dispatch(addtocart(item))
  // // }
  //   navigate("ProductsCart")

  // };

  const handleaddtocart=(item)=>{
    dispatch(addtocart(item))
    item.Subtotal += cartitems.Price * cartitems.Quantity
    // navigate("ProductsCart")
    // dispatch(addtocart(item))
    // if(cartitems.length==0)
    // {
    //   dispatch(addtocart(item))
    // }
    // if (cartitems.length>0)
    // {
    //   if (cartitems && cartitems.length)  {
    //       cartitems.forEach((element)=>{
    //         if(element.id===item.id)
    //         {
    //           dispatch(addtoquantity(item))
    //           // dispatch(addtoquantity(item))
    //           // dispatch(addtocart(item))
    //         //  setisadded(true)
    //         }
    //         else
    //         {
    //           element;
    //           // setisadded(true)
    //         }
    //       })
    //     }
    // }

    // else
    // {
    //  let addtoc = cartitems.map(item => {
    //     if (item.id == cartitems.id) {
    //       console.warn("equals working")
    //       return {
    //         ...cartitems,
    //         Quantity: item.Quantity + 1,
    //         price: item.price + cartitems.price,
    //       };
    //     }
    //   });
    //   console.log(
    //     '\n\n\n\n===============\nadd Cart item: ',
    //     addtoc,
    //     '\n=============\n\n\n\n',
    //   );
    //   return [...addtoc];
    // }

    // console.warn(cartitems)
    // if (cartitems && cartitems.length)  {
    //   cartitems.forEach((element)=>{
    //     if(element.id===item.id)
    //     {
    //       // dispatch(addtoquantity(item))
    //       // dispatch(addtocart(item))
    //     //  setisadded(true)
    //     }
    //     else
    //     {
    //       // setisadded(true)
    //     }
    //   })
    // }

      // if(cartitems && cartitems.length){
      //   cartitems.forEach((element)=>{
      //     if(element.id===item.id)
      //     {
      //      dispatch(removetocart(element))
      //     //  element.Quantity=element.Quantity+1;
      //     //  console.warn(element)
      //     //  setisadded(true)
      //     }
      //     else
      //     {
      //     }
      //   })
      // }

  }

  // useEffect((cartdata)=>{
  //   if(cartitems && cartitems.length){
  //     cartitems.forEach((element) => {
  //       if(element.Name===cartdata.Name){
  //         setisadded(true)
  //         // console.warn(Ca)
  //         // console.warn(element)
  //       // console.warn(element)
  //       }
  //     });
  //   }
  // },[cartitems])

  // useEffect((Items)=>{

  // },[cartitems])

  const renderitem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => setselecteditem(item.id)}
        style={
          item.id == selecteditem
            ? {
                height: 29,
                width: 81,
                backgroundColor: 'black',
                borderWidth: 2,
                marginRight: 11,
                justifyContent: 'center',
                borderRadius: 3,
              }
            : {
                justifyContent: 'center',
                height: 29,
                width: 81,
                backgroundColor: '#FFFFFF',
                borderWidth: 2,
                marginRight: 11,
                borderRadius: 3,
              }
        }>
        <Text
          style={
            item.id == selecteditem
              ? {color: 'white', alignSelf: 'center'}
              : {color: 'black', alignSelf: 'center'}
          }>
          {item.Name}
        </Text>
      </TouchableOpacity>
    );
  };

  const Burgersrender = ({item, index}) => {
    // const [counter,setcounter]=useState();
let Subtotal=0;
    // const Items= item;
    return (
      <View key={index}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            borderRadius: 20,
            elevation: 1,
            backgroundColor: 'white',
          }}>
          <View>
            <Image
              style={{height: 95, width: 95, borderRadius: 20}}
              source={item.Images}
            />
          </View>

          <View style={{flex: 1, paddingLeft: 10, paddingTop: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{flex: 1, fontSize: 13, color: '#000'}}>
                {item.Name}
              </Text>
              <Image
                style={{height: 13, width: 13, marginRight: 5}}
                source={item.Star}
              />
              <Text style={{marginRight: 10, fontSize: 12}}>{item.Rank}</Text>
              <Text></Text>
            </View>
            <Text style={{fontSize: 11, marginRight: '30%'}}>
              {item.subtitle}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{flex: 1, color: '#000', marginTop: 10}}>
                {'$'}
                {item.Price}
              </Text>

              {isadded == false ? (
                <TouchableOpacity
                  onPress={() => handleaddtocart(item)}
                  style={{
                    justifyContent: 'center',
                    marginTop: 8,
                    height: 20,
                    width: 72,
                    backgroundColor: 'black',
                    marginRight: 10,
                    borderRadius: 3,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#FFFFFF',
                      alignSelf: 'center',
                    }}>
                    ADD
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    marginTop: 8,
                    height: 20,
                    width: 72,
                    backgroundColor: 'black',
                    marginRight: 10,
                    borderRadius: 3,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#FFFFFF',
                      alignSelf: 'center',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{height: 600}}>
        <View>
          <Image
            style={{height: 228, width: '100%'}}
            source={require('./Images/Header.png')}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            marginTop: -20,
          }}>
            
            
            <View style={{marginTop:20, flexDirection:"row"}}>
          <Text
            style={{
              flex:1,
              fontSize: 19,
              color: '#000',
              marginLeft: '7%',
              alignSelf:"center"
            }}>
            Burger King
          </Text>
          <TouchableOpacity
          onPress={()=>navigate("ProductsCart")}
          style={{alignSelf:"center",marginRight:"10%"}}>
          <Image style={{height:30,width:30,alignSelf:"center",marginRight:"10%"}} source={require("./Images/Cart.png")}/>
          {
            cartitems.length!=0 ?
            <View style={{height:15,width:15,borderRadius:30,backgroundColor:"green",position:"absolute",alignSelf:"flex-end"}}><Text style={{alignSelf:"center",color:"#FFFFFF",fontSize:10}}>{cartitems.length}</Text></View>
          :
          null
          }
          </TouchableOpacity>
          </View>


          {/* // Flat list of Types Here  */}
          <View style={{marginLeft: '7%', marginTop: 20}}>
            <FlatList
              data={Foods}
              keyExtractor={item => item.id}
              extraData={selecteditem}
              renderItem={renderitem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {/* // Flat list of Types Here  */}

          {/* Flatlist of Burgers Here  */}

          <View
            style={{
              flex: 1,
              paddingTop: 20,
              paddingLeft: 28,
              paddingRight: 28,
            }}>
            <FlatList
              data={Burgers}
              nestedScrollEnabled={true}
              // keyExtractor={burgeritem=>burgeritem.id}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={Burgersrender}
            />
          </View>

          {/* Flatlist of Burgers Here  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
