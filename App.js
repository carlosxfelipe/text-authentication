import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { BinarySearchTree } from "./src/BinarySearchTree";
import { CustomButton } from "./src/CustomButton";
import { styles } from "./src/styles";

export default function App() {
  const [inputSentence, setInputSentence] = useState("");
  const [result, setResult] = useState("");
  const [clearInput, setClearInput] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const processSentence = () => {
    const wordStack = [];
    const treeStack = [new BinarySearchTree()];

    inputSentence.split(/\s+/).forEach((word) => {
      wordStack.push(word);
    });

    while (wordStack.length > 0) {
      treeStack[treeStack.length - 1].insert(wordStack.pop());
    }

    let processedResult = "";
    while (treeStack.length > 0) {
      const tree = treeStack.pop();
      processedResult += tree.hashTree() + "\n";
    }

    setResult(processedResult.trim());
  };

  const clearInputField = () => {
    setInputSentence("");
    setClearInput(true);
  };

  const copyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(result);
      setCopiedText("Resultado copiado para a área de transferência.");
    } catch (error) {
      console.error("Erro ao copiar para a área de transferência", error);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#612F74" barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#612F74" }} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.userContainer}>
            <Image
              source={require("./assets/user-photo.jpeg")}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.headerText}>T390-88 Estrutura de dados</Text>
              <Text style={styles.subHeaderText}>Professor Paulo Cirillo</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.aboutText}>
            Este aplicativo React Native foi desenvolvido como parte do projeto
            acadêmico da disciplina "Estrutura de Dados" (T390-88) da
            Universidade de Fortaleza (UNIFOR), ministrada pelo Professor Paulo
            Cirillo.
          </Text>
          <TextInput
            style={styles.inputField}
            multiline
            placeholder="Digite uma frase"
            onChangeText={(text) => setInputSentence(text)}
            value={inputSentence}
          />
          <CustomButton title="Processar Frase" onPress={processSentence} />
          <CustomButton title="Limpar" onPress={clearInputField} />
        </View>

        <View style={styles.resultContainer}>
          <View style={styles.resultTextContainer}>
            {result !== "" && <Text style={styles.resultText}>Resultado:</Text>}
            <Text style={styles.normalText}>{result}</Text>
            <CustomButton title="Copiar Resultado" onPress={copyToClipboard} />
            {copiedText !== "" && (
              <Text style={styles.successText}>{copiedText}</Text>
            )}
          </View>
        </View>
      </View>
    </>
  );
}
