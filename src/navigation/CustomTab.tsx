import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { FONTS } from '../config/Constants';
import ImagePath from '../assets/ImagePath';

interface CustomTabProps extends BottomTabBarProps {}

const CustomTab: React.FC<CustomTabProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const tabBarStyle = focusedOptions?.tabBarStyle as any;
  if (tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <View style={styles.tabWrapper}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const icon =
              route.name === 'Dashboard'
                ? ImagePath.Home
                : route.name === 'Progress'
                ? ImagePath.Progress
                : route.name === 'Settings'
                ? ImagePath.Settings
                : ImagePath.Home;

            const onPress = () => {
              if (!isFocused) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                key={route.name}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={icon}
                    tintColor={
                      isFocused
                        ? 'rgba(16, 185, 129, 1)'
                        : 'rgba(156, 163, 175, 1)'
                    }
                  />

                  <Text
                    style={[
                      styles.tabText,
                      {
                        color: isFocused
                          ? 'rgba(16, 185, 129, 1)'
                          : 'rgba(156, 163, 175, 1)',
                      },
                    ]}
                  >
                    {route.name === 'Dashboard'
                      ? 'Home'
                      : route.name === 'Progress'
                      ? 'Progress'
                      : route.name === 'Settings'
                      ? 'Settings'
                      : 'NewTask'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tabWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {},
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    paddingHorizontal: wp(8),
    height: wp(25),
  },
  iconContainer: {
    alignItems: 'center',
    gap: wp(1),
    justifyContent: 'center',
    bottom: 3,
  },
  icon: {
    opacity: 1,
  },
  activeIcon: {
    tintColor: 'rgba(255, 255, 255, 1)',
  },
  inactiveIcon: {
    tintColor: 'rgba(255, 255, 255, 1)',
    opacity: 0.5,
  },
  tabText: {
    fontWeight: '500',
    fontSize: 12,
    fontFamily: FONTS.Inter_18pt_Medium,
    color: 'rgba(156, 163, 175, 1)',
  },
  activeText: {
    color: 'rgba(255, 255, 255, 1)',
  },
});
