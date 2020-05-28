import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={StyleSheet.container}
      >
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome to Dinesh's App</Text>
          <Text style={[styles.innerText, styles.swipe]}>Swip Left</Text>
        </View>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.innerText}>Thank's for Swipping</Text>
          <Text style={[styles.innerText, styles.swipe]}>Swipe again</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}>Once again Thank's for Swipping</Text>
          <Text style={[styles.innerText, styles.swipe]}>
            Please Swipe again
          </Text>
        </View>
        <View style={[styles.outer, styles.gray]}>
          <Text style={styles.innerText}>Again Thank You</Text>
          <Text style={[styles.innerText, styles.swipe]}>
            This will be the last..SWIPE plz
          </Text>
        </View>
        <View style={[styles.outer, styles.violet]}>
          <Text style={styles.innerText}>Moral:</Text>
          <Text style={[styles.innerText, styles.swipe]}>
            Don't trust anyone blindly
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#007bb6",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  innerText: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
  },
  red: {
    backgroundColor: "#dd4b39",
  },
  green: {
    backgroundColor: "#27ae60",
  },
  swipe: {
    marginTop: 50,
  },
  gray: {
    backgroundColor: "#171516",
  },
  violet: {
    backgroundColor: "#8e44ad",
  },
});
