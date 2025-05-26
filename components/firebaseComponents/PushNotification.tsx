import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";
const PROJECT_ID = process.env;
const ACCESS_TOKEN = "";
export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log("Authorization status:", authStatus);
    }
}
export async function getToken() {
    const token = await messaging().getToken();
    console.log("FCM Token: ", token);
}
export async function sendPushNotifications(token) {
    const message = {
        message: {
            token: token,
            notification: {
                title: "This is a test Notification!!!",
                body: "This is using the new HTTP v1 API!",
            },
            data: {
                extraData: "Some extra info",
            },
        },
    };
    try {
        const response = await fetch(
            `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer" + ACCESS_TOKEN,
                },
                body: JSON.stringify(message),
            }
        );
        const result = await response.json();
        console.log("Push notif response: ", result);
        Alert.alert("Notif sent! ", JSON.stringify(result));
    } catch (error) {
        console.error("Error sending push notification ", error);
        Alert.alert("Error", "Failed to send push notification");
    }
}
