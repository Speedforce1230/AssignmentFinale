import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const webClientId =
    "184134956461-i32io746jvnququa9bo1oj40vibpm3b0.apps.googleusercontent.com";

export default function SignInScreen() {
    const [loggedIn, setLoggedIn] = useState(false);
    const androidClientId =
        "184134956461-qjau8vamv1p1i5vq9rlv1nftov945sae.apps.googleusercontent.com";
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId,
        selectAccount: true,
    });
    const handleToken = () => {
        if (response?.type === "success") {
            const { authentication } = response;
            setLoggedIn(true);
            fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: {
                    Authorization: `Bearer ${authentication?.accessToken}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setUserInfo(data));
        }
    };
    useEffect(() => {
        handleToken();
    }, [response]);
    if (loggedIn) {
        return (
            <View style={styles.container}>
                <Text> You are logged in: </Text>
                {userInfo && <Text>{JSON.stringify(userInfo, null, 2)}</Text>}
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Button
                // Disables the button if the OAuth request isn’t ready yet.
                disabled={!request}
                title="Sign Up with Google"
                onPress={() => promptAsync()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});
