import React from "react";
import { Image, Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <View className=" p-5 mt-8">
      <View className=" flex items-center justify-between  flex-row  ">
        <View>
          <Text className=" text-2xl ">
            Hello, <Text className="font-bold">Maruf</Text>
          </Text>
          <Text className=" text-lg text-neutral-400">
            What do you want today
          </Text>
        </View>

        <View>
          <Image
            className=" w-[60px] h-[60px] rounded-full"
            source={require("../assets/person.png")}
          />
        </View>
      </View>
      <View className=" mt-10">
        <View className=" flex items-center gap-4 flex-row">
          <View className=" bg-slate-200 p-2 rounded-md w-[280px]">
            <TextInput placeholder="Search For Food" />
          </View>
          <View className=" bg-orange-400 "></View>
        </View>
      </View>
    </View>
  );
}
