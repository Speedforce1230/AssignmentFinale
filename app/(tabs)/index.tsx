import {
    getToken,
    requestUserPermission,
} from "@/components/firebaseComponents/PushNotification";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../components/firebaseComponents/AuthProvider";
interface SignInScreenProps {
    navigation: React.FC<{ navigation: any }>;
}
export default function SignInScreen({ navigation }: SignInScreenProps) {
    const { user, signIn, signOutUser } = useAuth();
    useEffect(() => {
        getToken();
        requestUserPermission();
    }, []);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                rowGap: 10,
            }}
        >
            {user ? (
                <>
                    <Text style={{ color: "white" }}>
                        Congrats you are logged in: {user.email}
                    </Text>
                    <Button
                        onPress={() => signOutUser()}
                        title="Sign Out"
                    ></Button>
                </>
            ) : (
                <GoogleSigninButton
                    onPress={() => signIn()}
                ></GoogleSigninButton>
            )}
        </View>
    );
}
