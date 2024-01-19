import { FlatList, StyleSheet, View, Button } from 'react-native'
import { useState } from 'react'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { StatusBar } from "expo-status-bar"

export default function App() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [courseGoals, setCourseGoals] = useState<{text: string, id: string}[]>([])

    const addGoalHandler = (enteredGoalText: string) => {
        setCourseGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}])
        endGoalHandler()
    }

    const deleteGoalHandler = (goalId: string) => {
        setCourseGoals((currentGoals) => {
          console.log('goalId', goalId)
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }

    const startAddGoalHandler = (isModalVisible: boolean) => {
        setIsModalVisible(isModalVisible)
    }

    const endGoalHandler = () => {
        setIsModalVisible(false)
    }

  return (
      <>
          <StatusBar style="light" />
          <View style={ styles.container }>
              <Button
                  title={ 'Add New Goal' }
                  color={ '#5E0ACC' }
                  onPress={ () => startAddGoalHandler(true) } />

              { isModalVisible && <GoalInput
                  showModal={ isModalVisible }
                  onAddGoal={ addGoalHandler }
                  onCancel={ endGoalHandler }
              /> }

              <View style={ styles.goalsContainer }>
                  <FlatList
                      keyExtractor={ (item) => item.id }
                      data={ courseGoals }
                      renderItem={ itemData => (
                          <GoalItem
                              id={ itemData.item.id }
                              goalText={ itemData.item.text }
                              onDelete={ deleteGoalHandler }
                          />
                      )}
                  />
              </View>
          </View>
        </>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1E085A',
      paddingTop: 50
  },
  goalsContainer: {
    flex: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
