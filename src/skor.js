// Skor.js
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Skor = ({ team, score, increaseScore, decreaseScore }) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.team}>{team}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={increaseScore}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseScore}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  team: {
    fontSize: 22,
    marginRight: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  score: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginRight: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Skor;
