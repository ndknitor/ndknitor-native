import React from 'react'
import { Keyboard, TextInput, TextInputProps } from 'react-native'

function NoKeyboardTextInput(props: TextInputProps) {
    return (
        <TextInput {...props} onFocus={() => Keyboard.dismiss()} />
    )
}

export default NoKeyboardTextInput