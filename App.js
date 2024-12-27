import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Skor from './src/skor'; 

export default function App() {
  const [teamA, setTeamA] = useState("Tim A");
  const [teamB, setTeamB] = useState("Tim B");
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const increaseScoreA = () => {
    if (scoreA < 10) {
      setScoreA(scoreA + 1);
    }
  };

  const increaseScoreB = () => {
    if (scoreB < 10) {
      setScoreB(scoreB + 1);
    }
  };

  const decreaseScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  const decreaseScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetGame = () => {
    setScoreA(0);
    setScoreB(0);
    setTimer(0);
    setWinner(null);
    setIsTimerRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timer !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    if (scoreA === 10 && winner !== teamA) {
      setWinner(teamA);
    }
    if (scoreB === 10 && winner !== teamB) {
      setWinner(teamB);
    }
  }, [scoreA, scoreB, winner, teamA, teamB]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pengaturan Skor Pertandingan Futsal</Text>

      <Skor
        team={teamA}
        score={scoreA}
        increaseScore={increaseScoreA}
        decreaseScore={decreaseScoreA}
      />
      
      <Skor
        team={teamB}
        score={scoreB}
        increaseScore={increaseScoreB}
        decreaseScore={decreaseScoreB}
      />

      <Text style={styles.timer}>Timer: {timer}s</Text>

      <TouchableOpacity style={styles.timerButton} onPress={toggleTimer}>
        <Text style={styles.timerButtonText}>{isTimerRunning ? "Stop Timer" : "Start Timer"}</Text>
      </TouchableOpacity>

      {winner && <Text style={styles.winner}>Pemenang: {winner}</Text>}

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  timer: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  timerButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  timerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  winner: {
    fontSize: 22,
    color: 'red',
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 30,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
