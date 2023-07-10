import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.8} 
    onPress={onPress}>
        <View style={styles.btnContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ title, onPress = () => {} }) => {
    return (
      <TouchableOpacity 
      activeOpacity={0.8} 
      onPress={onPress}>
          <View style={{...styles.btnContainer, backgroundColor: COLORS.white}}>
              <Text style={{...styles.title, color: COLORS.primary}}>{title}</Text>
          </View>
      </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export { PrimaryButton, SecondaryButton };
