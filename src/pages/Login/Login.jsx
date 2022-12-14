import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const NextRegister = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        width: "90%",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 34,
            letterSpacing: 2,
            fontWeight: "bold",
            color: "#0e044d",
          }}
        >
          Login
        </Text>
        <Image
          source={require("../../../assets/eight-logo-2.png")}
          resizeMode="contain"
          style={{
            width: 100,
            height: 80,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 2,
            width: 150,
            backgroundColor: "rgba(255,255,252,0.45)",
            height: 60,
            alignItems: "center",
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../../../assets/google.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              margin: 2,
            }}
          />
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 2,
            width: 150,
            backgroundColor: "rgba(255,255,252,0.45)",
            height: 60,
            alignItems: "center",
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../../../assets/ios.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              margin: 2,
            }}
          />
          <Text style={{top: 2, right: 5}}>Apple</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "grey",
          }}
        >
          or
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            width: 340,
            height: 55,
            backgroundColor: "rgba(255,255,252,0.65)",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "lightGrey",
            padding: 15,
            margin: 10,
          }}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <TextInput
          style={{
            width: 340,
            height: 55,
            backgroundColor: "rgba(255,255,252,0.65)",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "lightGrey",
            padding: 15,
            margin: 10,
          }}
          keyboardType="visible-password"
          placeholder="Password"
          placeholderTextColor="grey"
        />
      </View>
      {/* *********** */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 2,
          width: 350,
          backgroundColor: "#0e044d",
          height: 50,
          alignItems: "center",
          borderRadius: 20,
          marginTop: 29,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      {/* *********** */}
      <View
        style={{
          margin: 20,
        }}
      >
        <Text
          style={{
            textAlign: "right",
            color: "#FA8072",
          }}
        >
          Forget password ?
        </Text>
      </View>
      <View>
        {/* ******** */}

        {/* ************ */}
        <View
          style={{
            marginTop: 220,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              // fontWeight:"bold"
            }}
          >
            Already have an account ?
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // justifyContent: "space-evenly",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#0e044d",
                fontWeight: "bold",
                margin: 5,
              }}
            >
              REGISTER
            </Text>
            <Image
              source={require("../../../assets/arrow.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#0e044d",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* *********** */}
    </SafeAreaView>
  );
};

export default NextRegister;

const styles = StyleSheet.create({});
