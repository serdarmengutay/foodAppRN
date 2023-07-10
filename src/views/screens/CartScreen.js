import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import COLORS from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import foods from "../../constants/foods";
import { PrimaryButton } from "../components/Button";

const CartScreen = ({ navigation }) => {
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 16, color: COLORS.dark }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {item.ingredients}
          </Text>
          <Text
            style={{ fontSize: 17, fontWeight: "bold", color: COLORS.dark }}
          >
            ${item.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLORS.dark }}
          >
            {item.quantity}
          </Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} color={COLORS.dark} onPress={() => navigation.goBack()} />
        <Text style={{ fontWeight: "bold", fontSize: 20, color: COLORS.dark }}>
          Cart
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: COLORS.dark }}
              >
                Total Price
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: COLORS.dark }}
              >
                $50
              </Text>
            </View>
            <View style={{marginHorizontal: 30, marginTop: 30}}>
                <PrimaryButton title="CHECKOUT"/>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
  actionBtn: {
    width: 80,
    height: 30,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default CartScreen;
