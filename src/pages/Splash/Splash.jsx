import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Splash = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={["#0e044d", "#0e044d"]}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View>
          <Image
            source={require("../../../assets/eight-logo.png")}
            resizeMode="contain"
            style={{
              width: 220,
              height: 250,
              position: "absolute",
              top: 30,
              left: 90,
            }}
          />
        </View>

        {/* ************* */}
        <View
          style={{
            top: 470,
            width: 350,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              letterSpacing: 2,

              color: "white",
              textAlign: "center",
              zIndex: 5,
            }}
          >
            Seamlessly Handle
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 26,
                margin: 4,

                // fontWeight: "bold",
                color: "gold",
                textAlign: "center",
                zIndex: 5,
              }}
            >
              GOLD
            </Text>
            <Text
              style={{
                fontSize: 26,
                // fontWeight: "bold",
                color: "white",
                textAlign: "center",
                margin: 4,
                zIndex: 5,
              }}
            >
              Crypto Currency
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "85%",
            backgroundColor: "rgba(255,255,255,0.85)",
            height: 65,
            borderRadius: 50,
            top: 600,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("OnBoarding")}
        >
          <View>
            <Text
              style={{
                color: "#0e044d",
                fontSize: 20,
                textAlign: "center",
                padding: 12,
              }}
            >
              Let's Discover
            </Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../../assets/logo-0.png")}
          resizeMode="contain"
          style={{
            width: 550,
            height: 550,
            position: "absolute",
            top: 150,
            left: 150,
            zIndex: 1,
            tintColor: "gold",
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
