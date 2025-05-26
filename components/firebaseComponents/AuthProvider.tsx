import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from "@react-native-firebase/auth";
import {
    GoogleSignin,
    isErrorWithCode,
    statusCodes,
} from "@react-native-google-signin/google-signin";
import React, { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
// Web Client Id, from google-services.json. Client Type 3.
GoogleSignin.configure({
    webClientId:
        "184134956461-i32io746jvnququa9bo1oj40vibpm3b0.apps.googleusercontent.com",
});
interface AuthProviderProps {
    children: React.ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
    const authState = getAuth();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });
            console.log("Signing In");
            // Get the users ID token
            const GoogleUser = await GoogleSignin.signIn();
            const idToken = GoogleUser.data?.idToken;
            console.log(
                "All associated data, PLEASE DON'T USE IN PRODUCTION! ",
                GoogleUser
            );
            const credential = GoogleAuthProvider.credential(idToken);

            await signInWithCredential(authState, credential);
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        break;
                    default:
                }
            } else {
            }
        }
    };
    const signOutUser = async () => {
        try {
            //Sign out of Firebase Auth
            await signOut(authState);
            // Clearing Google Sign-in Cache
            await GoogleSignin.signOut();
            console.log("Signing Out");
        } catch (error) {
            console.error("Error signing out user: ", error);
        }
    };
    function onAuthSetUser(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = onAuthStateChanged(authState, onAuthSetUser);
        return subscriber;
    }, []);
    if (initializing) return null;
    return (
        <AuthContext.Provider value={{ user, signIn, signOutUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("Context is undefined");
    }
    return context;
};
