import React, { useState } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

interface InputFields {
  nickname?: string;
  email?: string;
}

export function App() {
  const [fields, setFields] = useState<InputFields>({
    nickname: "",
    email: "",
  });

  function handleLoggin() {
    Alert.alert("Share This", JSON.stringify(fields));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          testID="input-nickname"
          placeholder="Yout nickname"
          value={fields.nickname}
          onChangeText={(value) =>
            setFields({ nickname: value, email: fields.email })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          testID="input-email"
          placeholder="Your email"
          value={fields.email}
          onChangeText={(value) =>
            setFields({ email: value, nickname: fields.nickname })
          }
        />
      </View>
      <TouchableOpacity
        testID="login-button"
        style={styles.buttonCotainer}
        onPress={handleLoggin}
      >
        <Text style={styles.buttonLabel}>Loggin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 7,
    backgroundColor: "#e3e3e3",
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 7,
    backgroundColor: "#fff",
    padding: 10,
    margin: 3,
  },
  input: { flex: 1 },
  buttonCotainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e45",
    height: 46,
    margin: 7,
    borderRadius: 3,
  },
  buttonLabel: {
    color: "#fff",
  },
});
