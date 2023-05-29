import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface TaskProps {
  isComplet: boolean;
  title: string;
  isChecked: () => void;
  onRemove: () => void;
}

export function Task({ isComplet, isChecked, title, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.checkBox, isComplet && styles.checkBoxAtived]}
        onPress={() => isChecked()}
      >
        {isComplet ? <Feather name="check" size={14} color="#fff" /> : ""}
      </Pressable>

      <Text style={[styles.textTask, isComplet && styles.finished]}>
        {title}
      </Text>

      <TouchableOpacity onPress={() => onRemove()}>
        <MaterialIcons name="delete" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
