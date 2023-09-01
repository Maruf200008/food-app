import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Welcome() {
    const navigate = useNavigation()

    const handlePress = () => {
        navigate.navigate("Home")
    }
  return (
    <View className=" flex items-center justify-center" >
      <View className=" mt-[130px] flex items-center justify-center space-y-10  ">
        <Image className="w-[320px] h-[320px] " source={require("../assets/cheesePizza.png")}/>

        <View className=" flex items-center justify-center space-y-3">
            <Text className=" text-[40px] font-semibold">
            Delicious Food 
            </Text>
            <Text className=" text-center text-neutral-400 text-lg w-[250px]">
            We help you to find best and delicious food 
            </Text>
        </View>
        <View className="  flex-row gap-x-3 flex items-center justify-center">
            <View className=" bg-orange-400 w-[40px] h-[15px] rounded-full"/>
            <View className=" bg-neutral-400 w-[15px] h-[15px] rounded-full"/>
            <View className=" bg-neutral-400 w-[15px] h-[15px] rounded-full"/>
        </View>
        
            <TouchableOpacity onPress={handlePress} className="bg-orange-400 px-16  py-3 rounded-full ">
               <Text className=" text-lg text-white font-semibold">Get Started</Text> 
            </TouchableOpacity>
        <View>

        </View>
      </View>
    </View>
  )
}