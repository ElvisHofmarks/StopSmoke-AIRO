// FocusChallengeScreen.tsx

import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ImagePath from '../assets/ImagePath';
import { FONTS } from '../config/Constants';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const RANDOM_INTERVALS = [5, 10, 15, 18]; 
const TOTAL_TIME = 300;

const FocusChallenge: React.FC<Props> = ({ navigation }: any) => {
  const [elapsed, setElapsed] = useState(0);
  const [waitTime, setWaitTime] = useState(getRandomInterval());
  const [buttonRed, setButtonRed] = useState(false);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const redTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function getRandomInterval() {
    return RANDOM_INTERVALS[
      Math.floor(Math.random() * RANDOM_INTERVALS.length)
    ];
  }

  // Timer for total duration
  useEffect(() => {
    timer.current = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // When activity finishes
  useEffect(() => {
    if (elapsed >= TOTAL_TIME) {
      navigation.goBack();
    }
  }, [elapsed, navigation]);

  // Green-to-red timing effect
  useEffect(() => {
    if (buttonRed) return;
    if (redTimer.current) clearTimeout(redTimer.current);
    redTimer.current = setTimeout(() => setButtonRed(true), waitTime * 1000);
    return () => {
      if (redTimer.current) clearTimeout(redTimer.current);
    };
  }, [waitTime, buttonRed]); 

  // Button tap handler
  const handleButtonTap = () => {
    if (buttonRed) {
      setButtonRed(false);
      setWaitTime(getRandomInterval());
    } else {
      navigation.goBack();
    }
  };

  // "End Activity Early" handler
  const handleEndEarly = () => {
    navigation.goBack();
  };

  // Format MM:SS
  const formatTime = (sec: number) => {
    const m = String(Math.floor((TOTAL_TIME - sec) / 60)).padStart(2, '0');
    const s = String((TOTAL_TIME - sec) % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.warningCircle}>
        <Image source={ImagePath.warning1} />
      </View>
      <Text style={styles.title}>The 5-Minute Focus Challenge</Text>
      <Text style={styles.subtitle}>
        Cravings are temporary. You are in control.
      </Text>
      <Text style={styles.instruction}>Tap on button when it gets red.</Text>
      <TouchableOpacity
        style={[
          styles.circleButton,
          { backgroundColor: buttonRed ? 'rgba(220, 38, 38, 1)' : '#23C16B' },
          {
            borderWidth: 4,
            borderColor: buttonRed
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(255, 255, 255, 0.3)',
          },
        ]}
        onPress={handleButtonTap}
      />
      <Text style={styles.timer}>{formatTime(elapsed)}</Text>
      <Text style={styles.endEarly} onPress={handleEndEarly}>
        End Activity Early
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 242, 242, 1)',
  },
  warningCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(254, 226, 226, 1)',
    padding: 40,
    borderRadius: 100,
  },
  warningIcon: { fontSize: 54, color: '#E54D4E' },
  title: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(31, 41, 55, 1)',
    textAlign: 'center',
    fontFamily: FONTS.Inter_18pt_Medium,
    marginHorizontal: 50,
  },
  subtitle: {
    marginTop: 15,
    fontSize: 18,
    color: 'rgba(75, 85, 99, 1)',
    textAlign: 'center',
    fontFamily: FONTS.Inter_18pt_Regular,
    fontWeight: '500',
    marginHorizontal: 50,
  },
  instruction: {
    marginTop: 20,
    fontSize: 18,
    color: 'rgba(16, 185, 129, 1)',
    fontWeight: '500',
    fontFamily: FONTS.Inter_18pt_Medium,
  },
  circleButton: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginTop: 32,
    marginBottom: 18,
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 6,
  },
  timer: {
    fontSize: 50,
    fontWeight: '600',
    fontFamily: FONTS.Inter_18pt_Black,
    color: 'rgba(31, 41, 55, 1)',
  },
  endEarly: {
    marginTop: 14,
    fontSize: 14,
    color: 'rgba(107, 114, 128, 1)',
    fontFamily: FONTS.Inter_18pt_Medium,
    fontWeight: '500',
  },
});

export default FocusChallenge;
