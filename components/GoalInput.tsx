import { Button, TextInput, View, StyleSheet, Modal, Image } from 'react-native'
import { useState } from 'react'

function GoalInput(props: { showModal: boolean, onAddGoal: (enteredGoalText: string) => void, onCancel: () => void }) {
    const [enteredGoalText, setEnteredGoalText] = useState<string>('')

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={ props.showModal } animationType={ 'slide' }>
            <View style={ styles.inputContainer }>
                <Image
                    style={ styles.image }
                    source={ require('../assets/images/splash.png') } />
                <TextInput
                    placeholder='Course Goal'
                    style={ styles.textInput }
                    onChangeText={ goalInputHandler }
                    value={ enteredGoalText }
                />
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button
                            title={ 'CANCEL' }
                            onPress={ props.onCancel }
                            color={ '#F31282' } />
                    </View>
                    <View style={ styles.button }>
                        <Button
                            title={ 'ADD' }
                            onPress={ addGoalHandler }
                            color={ '#5E0ACC' } />
                    </View>
                </View>
            </View>
        </Modal>
        )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311B6B',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E4D0FF',
        backgroundColor: '#E4D0FF',
        color: '#120438',
        width: '90%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '60%',
        marginTop: 16,
    },
    button: {
        width: '30%',
        margin: 8,
    },
    image: {
        width: 320,
        height: 320,
        margin: 8,
    }
})
