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

  const completeOnboarding = async () => {
    if (currentIndex < list.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      dispatch(setOnBoarding(true));
      navigation.navigate('Home');
    }
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
        <Image source={ImagePath.watermark} />

        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.imageContainer}>
          <Image source={item.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:wp(10)
          }}
        >
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={styles.dotContainer}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      currentIndex === index
                        ? 'rgba(32, 178, 170, 1)'
                        : 'white',
                    borderColor:
                      currentIndex === index
                        ? 'rgba(32, 178, 170, 1)'
                        : 'rgba(209, 213, 219, 1)',
                  },
                ]}
              />
            </View>
          ))}
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
            onPress={() => completeOnboarding()}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>NEXT</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
  },
  slideWrapper: {
    marginTop: wp(25),
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: wp(3),
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
    fontFamily: FONTS.Inter_18pt_Black,
    marginHorizontal: 45,
    marginBottom: 5,
    paddingVertical: 30,
  },
  subtitle: {
    color: 'rgba(26, 54, 93, 1)',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: FONTS.Inter_18pt_Regular,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  bottomContainer: {
    marginBottom: wp(10),
    gap: 10,
    marginTop: wp(10),
  },
  startButton: {
    backgroundColor: 'rgba(32, 178, 170, 1)',
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
    fontFamily: FONTS.Inter_18pt_Medium,
  },
  dotContainer: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(209, 213, 219, 1)',
  },
});

export default OnBoarding;
