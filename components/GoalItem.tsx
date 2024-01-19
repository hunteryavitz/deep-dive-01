import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(this: any, props: { id: string, goalText: string, onDelete: (goalId: string) => void }) {
    return (
        <View style={ styles.goalItem }>
            <Pressable
                android_ripple={ { color: '#dddddd' } }
                onPress={ props.onDelete.bind(this, props.id) }
                style={(pressData) => pressData.pressed && styles.pressed }
            >
                <Text style={ styles.goalText }>{ props.goalText }</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5E0ACC'
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressed: {
        backgroundColor: 'red',
        opacity: 0.5
    }
})
