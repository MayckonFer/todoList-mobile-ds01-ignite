import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

import uuid from "react-native-uuid";

import { Task } from "../../components/Task";

import { Feather } from "@expo/vector-icons";

interface Task {
  id: string;
  title: string;
  isComplet: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [titleTask, setTitleTask] = useState("");
  const [taskIsFinish, setTaskIsFinish] = useState(true);

  const newTask = {
    id: uuid.v4(),
    title: titleTask,
    isComplet: taskIsFinish,
  };

  const totalTasksCompleted = tasks.filter(({ isComplet }) => isComplet).length;

  function handleNewTask() {
    if (!titleTask) return;

    setTasks((prevState) => [...prevState, newTask]);
    setTitleTask("");
  }

  function handleToggleTaskCompletion(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplet: !task.isComplet,
          }
        : task
    );

    setTasks(newTasks);
    setTaskIsFinish(false);
  }

  function handleParticipantRemove(id: string, name: string) {
    Alert.alert("Remover", `Remover tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.addTask}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setTitleTask}
          value={titleTask}
        />

        <TouchableOpacity style={styles.button} onPress={handleNewTask}>
          <Feather name="plus-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.wrapperCreateAndConcludedText}>
            <Text style={styles.textCreate}>Criadas</Text>
            <Text style={styles.numberCreateAndConcluded}>{tasks.length}</Text>
          </View>

          <View style={styles.wrapperCreateAndConcludedText}>
            <Text style={styles.textConcluded}>Concluídas</Text>
            <Text style={styles.numberCreateAndConcluded}>
              {totalTasksCompleted}
            </Text>
          </View>
        </View>

        <View style={styles.containerTasks}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                isComplet={item.isComplet}
                title={item.title}
                isChecked={() => handleToggleTaskCompletion(item.id)}
                onRemove={() => handleParticipantRemove(item.id, item.title)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.notTasksContainer}>
                <Image source={require("../../../assets/clipboard.png")} />
                <Text style={styles.textNotTasksStrong}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.textNotTasks}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
