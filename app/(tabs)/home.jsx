import { View, Text, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { videos } from '../../constants/videos'
import VideoCard from '../../components/VideoCard'

const Home = () => {

    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ]
    return (
        <SafeAreaView className='bg-primary'>
            <FlatList
                data={videos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <VideoCard video={item} />
                )}
                ListHeaderComponent={() => (
                    <View className='my-6 px-4 space-y-6 flex'>
                        <View className='flex justify-between items-start flex-row mb-6'>
                            <View>
                                <Text className='font-pmedium text-sm text-gray-100'>
                                    Welcome Back
                                </Text>
                                <Text className='text-2xl text-white'>
                                    Zoro Senpai
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={images.logoSmall}
                                    className='w-9 h-10'
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        <SearchInput />

                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-lg font-pregular text-gray-100 mb-3">
                                Latest Videos
                            </Text>
                            <Trending />
                        </View>

                    </View>
                )}

                ListEmptyComponent={() => (
                    <EmptyState title="No Videos Found"
                        subtitle="No videos created yet"
                    />
                )}
            />
        </SafeAreaView>
    )
}
export default Home