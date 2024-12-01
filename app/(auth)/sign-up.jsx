import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from "../../components/CustomButton"
import { Link } from 'expo-router';

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = () => { }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full flex justify-center h-full px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[34px]"
                    />
                    <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
                        Log in to Aora
                    </Text>
                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={e => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                    />
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={e => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={e => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        title="Sign Up"
                        handlePress={handleSubmit}
                        containerStyles='mt-10'
                        isLoading={isSubmitting}
                    />

                    <View className="flex justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Already have an account?
                        </Text>
                        <Link
                            href="/sign-in"
                            className="text-lg font-psemibold text-secondary"
                        >
                            Signin
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp