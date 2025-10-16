import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Text,
  ScrollView,
} from 'react-native';
import { FONTS } from '../config/Constants';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ImagePath from '../assets/ImagePath';

const Settings = () => {
  const PrivacyPolicy = () => {
    Linking.openURL(
      'https://sites.google.com/view/stopsmokeairo/privacy-policy',
    );
  };

  const TermsOfService = () => {
    Linking.openURL(
      'https://sites.google.com/view/stopsmokeairo/terms-of-service',
    );
  };

  const contactUs = () => {
    Linking.openURL('mailto:kellosolutions@gmail.com');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 150 }}
    >
      <TouchableOpacity style={styles.premiumButton}>
        <Image source={ImagePath.PremiumIcon} />
      </TouchableOpacity>


      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.cardStyle} onPress={PrivacyPolicy}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardText}>Privacy Policy</Text>
            </View>
          </View>
          <Image source={ImagePath.arrowicon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardStyle} onPress={TermsOfService}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardText}>Terms of Service</Text>
            </View>
          </View>
          <Image source={ImagePath.arrowicon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardStyle} onPress={contactUs}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardText}>Contact Us</Text>
            </View>
          </View>
          <Image source={ImagePath.arrowicon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  premiumButton: {
    padding: 18,
    marginTop: wp(15),
    marginHorizontal: wp(5),
    alignItems: 'center',
  },
  menuContainer: {
    paddingHorizontal: wp(2),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(243, 244, 246, 1)',
    marginHorizontal: wp(5),
    borderRadius: 10,
  },
  cardStyle: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(243, 244, 246, 1)',
  },
  cardText: {
    color: 'rgba(17, 24, 39, 1)',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.Inter_18pt_Medium,
  },
  cardContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
});

export default Settings;
