import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider } from "../../components/firebaseComponents/AuthProvider";
export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <AuthProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                    headerShown: false,
                    tabBarStyle: Platform.select({
                        ios: {
                            // Use a transparent background on iOS to show the blur effect
                            position: "absolute",
                        },
                        default: {},
                    }),
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Sign in",
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                size={28}
                                name="log-in-outline"
                                color={color}
                            />
                        ),
                    }}
                ></Tabs.Screen>
                <Tabs.Screen
                    name="Next"
                    options={{
                        title: "Next App",
                        tabBarIcon: ({ color }) => (
                            <IconSymbol
                                size={28}
                                name="house.fill"
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </AuthProvider>
    );
}
