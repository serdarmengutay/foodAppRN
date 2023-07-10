import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import { PrimaryButton } from "../components/Button";
const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400  }}>
        <Image
          style={{ width: "100%", resizeMode: "contain", top: -150 }}
          source={require("../../assets/onboardImage.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: COLORS.dark,
            }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: "center",
              color: COLORS.grey,
            }}
          >
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
              <View  style={styles.currentIndicator}/>
              <View  style={styles.indicator}/>
              <View  style={styles.indicator}/>
        </View>
        <PrimaryButton 
        title="Get Started"
        onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5
  }
})

export default OnBoardScreen;
