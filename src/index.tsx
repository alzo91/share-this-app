import "react-native-gesture-handler";
import "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Navigations } from "./navigations";

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigations />
    </GestureHandlerRootView>
  );
}
