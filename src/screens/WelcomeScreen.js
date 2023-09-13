import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2 ">
        <Text
          style={{fontSize: wp(10)}}
          className="text-center text-4xl font-bold text-gray-700">
          Watson
        </Text>
        <Text
          style={{fontSize: wp(4)}}
          className="text-center tracking-wider  font-semibold text-gray-600">
          The Future is here, Powered by AI
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          style={{width: wp(75), height: wp(75)}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text
          className="text-center font-bold text-white"
          style={{fontSize: wp(6)}}>
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
