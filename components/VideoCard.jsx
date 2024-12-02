import { View, Text, Image, TouchableOpacity } from 'react-native'
import avtar from '../assets/images/avtar.png'
import { icons } from '../constants'
import { useState } from 'react'



const VideoCard = ({ video }) => {
    const [play, setplay] = useState(false)

    return (
        <View className="flex flex-col items-center px-4 mb-14">
            <View className="flex flex-row gap-3 items-start">
                <View className="flex justify-center items-center flex-row flex-1">
                    <View className="w-[46px] h-[46px] rounded-full border border-secondary flex justify-center items-center p-0.5">
                        <Image
                            source={avtar}
                            className="w-full h-full rounded-full"
                            resizeMode="cover"
                        />
                    </View>
                    <View className="flex justify-center flex-1 ml-3 gap-y-1">
                        <Text
                            className="font-psemibold text-sm text-white"
                            numberOfLines={1}
                        >
                            {video.title}
                        </Text>
                        <Text
                            className="text-xs text-gray-100 font-pregular"
                            numberOfLines={1}
                        >
                            zoro
                        </Text>
                    </View>
                </View>

                <View>
                    <Image
                        source={icons.menu}
                        className='w-h h-5'
                        resizeMode='contain'
                    />
                </View>
            </View>

            {
                play ? <Text>playing...</Text> :
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setplay(true)}
                        className='w-full h-60 rounded-xl mt-3 
                    relative justify-center items-center'>
                        <Image
                            source={{ uri: video.thumbnail }}
                            className='h-full w-full rounded-xl mt-3'
                        />
                        <Image
                            source={icons.play}
                            className='w-12 h-12 absolute'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
            }
        </View>
    )
}
export default VideoCard