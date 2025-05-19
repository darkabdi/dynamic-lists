import { View } from "react-native";
import BPLists from "./components/BPlists";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView style = {{flex:1}}>
      <BPLists/>
    </SafeAreaView>
  );
}
