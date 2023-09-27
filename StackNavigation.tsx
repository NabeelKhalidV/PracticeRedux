import {createNativeStackNavigator} from "@react-navigation/native-stack"
// import Screen1 from "./Screens/Screen1";
// import Screen2 from "./Screens/Screen2";
import Home from "./Screens/Home";
import ProductsCart from "./Screens/ProductsCart";

const Stack = createNativeStackNavigator();

const StackNavigation =()=>{

    return(
<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Group>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ProductsCart} name="ProductsCart" />

    </Stack.Group>
</Stack.Navigator>
    )
}

export default StackNavigation;