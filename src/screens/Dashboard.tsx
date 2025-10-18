import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import ImagePath from '../assets/ImagePath';
import { FONTS } from '../config/Constants';
import { useNavigation } from '@react-navigation/native';

const DailyChallengeItem = ({
  title,
  time,
  completed,
}: {
  title: string;
  time?: string;
  completed: boolean;
}) => (
  <View
    style={[
      styles.challengeItem,
      completed ? styles.completed : styles.incomplete,
    ]}
  >
    <Image source={ completed ? ImagePath.radioBtn : ImagePath.unradioBtn}  />
    <View >

 
    <Text style={styles.challengeTitle}>{title}</Text>
    <Text style={styles.challengeTime}>{completed ? 'Completed at 9:15 AM' : 'Waiting for to be completed'}</Text>
    </View>
  </View>
);

const Dashboard: React.FC = () => {
  const navigation = useNavigation<any>();
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:100}}>
      {/* Header */}
      <Text style={styles.header}>Smoke-Free For</Text>
      <View style={styles.daysRow}>
        <Text style={styles.daysText}>47</Text>
        <Text style={styles.daysLabel}>DAYS </Text>
        <Image style={{ top: 10, left: 3 }} source={ImagePath.greentike} />
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom:20
            }}
          >
            <Image source={ImagePath.dollar} />
            <Image source={ImagePath.topArrow} />
          </View>
          <Text style={styles.statValue}>$235</Text>
          <Text style={styles.statLabel}>Money Saved</Text>
        </View>
        <View style={[styles.statBox,{backgroundColor:"rgba(239, 246, 255, 1)"}]}>
        <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom:20
            }}
          >
            <Image source={ImagePath.heart} />
            <Image source={ImagePath.topArrow} tintColor="rgba(29, 78, 216, 1)"/>
          </View>
          <Text style={[styles.statValue,{color:"rgba(29, 78, 216, 1)"}]}>92%</Text>
          <Text style={[styles.statLabel,{color:"rgba(29, 78, 216, 1)"}]}>Health Score</Text>
        </View>
      </View>

      {/* Daily Challenges */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionHeader}>Daily Challenges</Text>
        <Text style={styles.completeCount}>2/3 Complete</Text>
      </View>
      <DailyChallengeItem
        title="Drink 8 glasses of water"
        time="2:30 PM"
        completed={true}
      />
      <DailyChallengeItem
        title="15-minute meditation"
        time="9:15 AM"
        completed={true}
      />
      <DailyChallengeItem title="Take a 20-minute walk" completed={false} />

      {/* Insight Box */}
      <View style={styles.insightBox}>
        <View style={{flexDirection:'row',alignItems:'center',gap:10 , marginBottom:10}}>
          <Image source={ImagePath.AIRO} />
        <Text style={styles.insightTitle}>AIRO Insight</Text>
        </View>
        <Text style={styles.insightText}>
          "Great progress! Your hydration focus is helping reduce cravings.
          Consider adding deep breathing exercises when you feel the urge to
          smoke."
        </Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionHeader}>Quick Actions</Text>
      <TouchableOpacity onPress={() => navigation.navigate('FocusChallenge')} style={styles.cravingBtn}>
        <Image source={ImagePath.warning} />
        <Text style={styles.cravingText}>I'm Craving</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
    padding: 18,
  },
  header: {
    fontSize: 18,
    color: 'rgba(30, 58, 138, 1)',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 45,
    fontFamily: FONTS.Inter_18pt_Medium,
  },
  daysRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  daysText: {
    fontSize: 48,
    fontWeight: '700',
    color: 'rgba(30, 58, 138, 1)',
    marginRight: 10,
    fontFamily: FONTS.Inter_18pt_Black,
  },
  daysLabel: {
    fontSize: 14,
    color: 'rgba(107, 114, 128, 1)',
    fontWeight: '500',
    fontFamily: FONTS.Inter_18pt_Medium,
    top: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    backgroundColor: 'rgba(240, 253, 244, 1)',
    borderRadius: 12,
    width: '48%',
    paddingVertical: 18,
    elevation: 3,
    paddingHorizontal: 15,

  },
  statLabel: {
    color: 'rgba(22, 163, 74, 1)',
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '500',
    fontFamily: FONTS.Inter_18pt_Medium,
    marginTop:5
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(21, 128, 61, 1)',
    fontFamily: FONTS.Inter_18pt_Black,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(30, 58, 138, 1)',
    fontFamily: FONTS.Inter_18pt_Medium,
  },
  completeCount: {
    fontSize: 14,
    color: 'rgba(32, 178, 170, 1)',
    fontWeight: '500',
    fontFamily: FONTS.Inter_18pt_Medium,
  },
  challengeItem: {
    padding: 14,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center',
    gap:12
  },
  completed: {
    backgroundColor: 'rgba(32, 178, 170, 0.1)',
    borderColor: 'rgba(32, 178, 170, 1)',
    borderWidth: 1,
  },
  incomplete: {
    backgroundColor: 'rgba(249, 250, 251, 1)',
    borderColor: 'rgba(229, 231, 235, 1)',
    borderWidth: 1,
  },
  challengeTitle: {
    fontSize: 16,
    color: '#1E3956',
    fontWeight: '500',
  },
  challengeTime: {
    fontSize: 12,
    color: 'rgba(107, 114, 128, 1)',
    marginTop: 2,
    fontFamily: FONTS.Inter_18pt_Medium,
    fontWeight: '400',
  },
  insightBox: {
    backgroundColor: '#16B7A7',
    borderRadius: 13,
    padding: 18,
    marginVertical: 18,
    justifyContent:'center',
    alignItems:'center',
  },
  insightTitle: {
    color: '#F8FAFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  insightText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    lineHeight: 21,
    textAlign:'center',
    fontFamily: FONTS.Inter_18pt_Medium,
    fontWeight: '400',
  },
  cravingBtn: {
    backgroundColor: 'rgba(254, 242, 242, 1)',
    borderRadius: 13,
    padding: 17,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth:1,
    borderColor:'rgba(254, 226, 226, 1)',
    gap:10
  },
  cravingText: {
    color: 'rgba(185, 28, 28, 1)',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: FONTS.Inter_18pt_Medium,
  },
});

export default Dashboard;
