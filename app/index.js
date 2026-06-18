import { useState } from "react";
import { TextInput, Text, View, Image, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.titreandlogo}>
        <Text style={styles.titre}>Sign Up</Text>
        <View>
          <Image
            source={require("../assets/logo.png")}
            style={styles.cover}
            resizeMode="contain"
          ></Image>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          placeholder="Email"
        />

        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => Alert.alert("Bouton pressé !")}
      >
        <Text style={styles.text}>Cliquez ici</Text>
      </Pressable>
<<<<<<< HEAD
      <Text>Message branch master</Text>
=======
      <Text>Message</Text>
>>>>>>> asma-branch
    </KeyboardAwareScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  titreandlogo: {
    flex: 1,
    alignItems: "center",
  },
  titre: {
    color: "#F75050",
    fontSize: 40,
    marginTop: 100,
  },
  cover: {
    width: 200,
    height: 200,
  },
  inputs: {
    height: 44,
    borderBottomWidth: 1,
    borderColor: "#F75050",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.6,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
