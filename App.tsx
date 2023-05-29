import { StatusBar } from "react-native";
import { Home } from "./src/screen/Home";
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Header />
      <Home />
    </>
  );
}
