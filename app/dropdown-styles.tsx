import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backdrop: {
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    optionItem: {
      height: 40,
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    separator: {
      height: 1,
      backgroundColor: "#ddd", 
    },
    options: {
      position: "absolute",
      top: 55, 
      backgroundColor: "white",
      width: "100%",
      paddingVertical: 5,
      borderRadius: 6,
      maxHeight: 250,
      elevation: 5, 
      zIndex: 10,
    },
    text: {
      fontSize: 15,
      opacity: 0.8,
      color: "#333", 
    },
    button: {
      height: 50,
      justifyContent: "center",
      backgroundColor: "#fff",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ddd", 
    },
    buttonText: {
      fontSize: 16,
      color: "#333", 
    },
  });
  