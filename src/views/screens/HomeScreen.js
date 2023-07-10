import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import COLORS from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import categories from "../../constants/categories";
import foods from "../../constants/foods";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  style={{ height: 35, width: 35, resizeMode: "cover" }}
                  source={category.image}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ food }) => {
    return (
      <TouchableHighlight underlayColor={COLORS.white} activeOpacity={0.9} onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: -40 }}>
            <Image style={{ height: 120, width: 120 }} source={food.image} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: COLORS.dark }}
            >
              {food.name}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: COLORS.dark }}
            >
              ${food.price}
            </Text>
            <View style={styles.addToCardBtn}>
              <Icon name="add" color={COLORS.white} size={20} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28, color: COLORS.dark }}>Hello,</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                marginLeft: 10,
                color: COLORS.dark,
              }}
            >
              Ariz
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you want today
          </Text>
        </View>
        <Image
          style={{ height: 50, width: 50, borderRadius: 25 }}
          source={require("../../assets/person.png")}
        />
      </View>
      <View
        style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} color={COLORS.dark} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginLeft: 10,
  },
  categoryListContainer: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCardBtn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
