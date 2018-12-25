import { StackNavigator } from "react-navigation";
 
import ScrollViewExample from "./ScrollView";

export const SignedOut = StackNavigator({
    SignUp: {
        screen: ScrollViewExample,
        navigationOptions: {
            title: "Sign Up"
        }
    }
})