import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import styles from './style'
import Header from '../../Component/Header'
import Btn from '../../Component/Btn'
import Input from './component/Input'
import { useDispatch, useSelector } from 'react-redux'
import Err from './component/Error'
import { UPDATE_PROFILE } from '../Auth/constants'
import { useNavigation } from '@react-navigation/core'
import { HomeScreen } from '../../Navigation/Stack'
export default function UpdateProfile() {
    const data = useSelector(state => state.auth.user)
    const navigateStatus = useSelector(state => state.auth.navigate)
    const { name, email, age, id } = data
    const [userName, setUserName] = useState(name)
    const [userAge, setUserAge] = useState<any>(age !== '' ? age : '')
    const [checkAge, setCheckAge] = useState(false)
    const [checkName, setCheckName] = useState(false)
    const [checkSubmit, setCheckSubmit] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigation()

    useEffect(() => {
        if (userName?.length > 0 &&
            userAge?.length > 0 &&
            !checkAge &&
            !checkName) {
            setCheckSubmit(true)
        }
        else {
            setCheckSubmit(false)
        }
    }, [userName, userAge])

    const handleAge = (e: any) => {
        const reg = /\s/g
        setUserAge(e.replace(reg, ""))
        if (e.includes('.')) {
            setUserAge(e.replace(/\./g, ""))
        }
        else if (e > 150 || isNaN(e)) {
            setCheckAge(true)
        }
        else {
            setCheckAge(false)
        }
    }


    const handleName = (e: any) => {
        if (e.length > 20 || e.length < 1) {
            setCheckName(true)
        }
        else {
            setCheckName(false)
        }
        setUserName(e)
    }

    const handleSubmit = () => {
        dispatch({ type: UPDATE_PROFILE, payload: { id: id, name: userName, age: userAge } })
        navigate.canGoBack() && navigate.goBack()
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#101010', flex: 1 }}>
            <Header onPress={() => navigate.goBack()} title="Update profile" />
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1 }}>
                    <Input title="Email" placeholder="email" editable={false} value={email} />
                    <Input textChanged={(e) => handleName(e)} title="Name" placeholder="name" editable={true} value={userName} />
                    {checkName && <Err title="Your name must have at least 1 keyword and less than 20 keywords" />}
                    <Input textChanged={(e) => handleAge(e)} title="Age" placeholder="age" editable={true} value={userAge} />
                    {checkAge && <Err title="Your age is invalid" />}
                    <View style={{ flex: 1,marginVertical:5 }}></View>
                    <Btn onPress={() => checkSubmit && handleSubmit()} title="Update" optionalStyle={styles.btnSubmit} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
