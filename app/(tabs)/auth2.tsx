import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
export default function Test() {
    return (
        <WebView
            source={{ uri: "http://192.168.1.2:3000/home" }}
            style={styles.container}
        ></WebView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
