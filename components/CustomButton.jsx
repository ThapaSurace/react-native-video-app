import { Text, TouchableOpacity } from 'react-native'
const CustomButton = ({ title, handlePress, containerStyles, isLoading, textStyles }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`bg-secondary rounded-xl py-4 
                ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
            activeOpacity={0.7}
        >
            <Text className={`text-white font-psemibold text-lg text-center ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default CustomButton