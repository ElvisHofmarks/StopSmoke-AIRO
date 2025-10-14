import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImagePath from '../assets/ImagePath';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { COLORS, FONTS } from '../config/Constants';
import { useDispatch } from 'react-redux';
import { setOnBoarding } from '../redux/userSlice';

const OnBoarding = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const handleCompleteOnboarding = async () => {
    dispatch(setOnBoarding(true));
    navigation.navigate('Home');
  };

  const handleAddToMyDay = () => {
    dispatch(setOnBoarding(true));
    navigation.navigate('Home');
  };

  const list = [
    {
      image: ImagePath.OnboardingBg,
      title: 'Take a Breath of Fresh Air',
      subtitle:
        'Start your journey to a smoke-free life with personalized AI support.',
    },
    {
      image: ImagePath.OnboardingBg1,
      title: 'Your Personalized Quit Plan',
      subtitle:
        'Set goals, track triggers, and celebrate milestones every step of the way.',
    },
    {
      image: ImagePath.OnboardingBg2,
      title: 'Unlock a Healthier You',
      subtitle: 'Experience increased energy, better taste, and a longer life.',
    },
  ];

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.slideWrapper}>
          {renderItem({ item: list[currentIndex], index: currentIndex })}
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => setCurrentIndex(currentIndex + 1)}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>Start Mindful Journey</Text>
          </TouchableOpacity>

          <Text
            onPress={() => handleCompleteOnboarding()}
            style={styles.skipText}
          >
            Skip
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContent: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    width: wp(100),
  },
  slideWrapper: {
    marginTop: wp(20),
    flex: 1,
  },
  taskContainer: {
    flex: 1,
    marginTop: wp(20),
  },
  taskTitle: {
    color: 'rgba(31, 41, 55, 1)',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FONTS.medium,
    marginHorizontal: 50,
    marginBottom: 5,
  },
  taskDescription: {
    color: 'rgba(75, 85, 99, 1)',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: FONTS.regular,
    marginHorizontal: 30,
  },
  taskImageContainer: {
    alignItems: 'center',
    marginTop: wp(5),
  },
  helpSection: {
    marginHorizontal: 35,
  },
  helpTitle: {
    color: 'rgba(17, 24, 39, 1)',
    fontSize: 18,
    fontFamily: FONTS.medium,
    fontWeight: '600',
  },
  benefitsContainer: {
    gap: 20,
    marginTop: 20,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  benefitText: {
    color: 'rgba(55, 65, 81, 1)',
    fontSize: 14,
    fontFamily: FONTS.regular,
    fontWeight: '400',
  },
  imageContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: wp(15),
    alignItems: 'center',
  },
  title: {
    color: 'rgba(31, 41, 55, 1)',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FONTS.medium,
    marginHorizontal: 50,
    marginBottom: 5,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: FONTS.medium,
    marginHorizontal: 50,
    marginBottom: 40,
  },
  description: {
    color: 'rgba(75, 85, 99, 1)',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: FONTS.regular,
    marginHorizontal: 30,
  },
  bottomContainer: {
    marginBottom: wp(10),
    gap: 10,
    marginTop: wp(10),
  },
  startButton: {
    backgroundColor: 'rgba(79, 70, 229, 1)',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  startButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: FONTS.medium,
  },
  skipText: {
    color: 'rgba(107, 114, 128, 1)',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    marginTop: 15,
    padding: 12,
  },
  addToDayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default OnBoarding;
