import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview"; // or "expo-web-view" if you switched

export default function SignIn() {
    return (
        <View style={styles.container}>
            <WebView
                style={styles.webview}
                source={{ uri: "http://192.168.1.11:3000/home" }}
                onError={(e) => console.log("WebView Error", e.nativeEvent)}
                startInLoadingState={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        alignItems: "center",
        justifyContent: "center",
        rowGap: "1%",
    },
});
