import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import * as Clipboard from "expo-clipboard";
import { BinarySearchTree } from "./src/BinarySearchTree";

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
    <View style={{ padding: 16, flex: 1 }}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          T390-88 Estrutura de dados
        </Text>
        <Text style={{ fontSize: 16 }}>Professor Paulo Cirillo</Text>
      </View>
      <View style={{ justifyContent: "center", marginTop: 60 }}>
        <TextInput
          style={{
            height: 120,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
            borderRadius: 8,
          }}
          multiline
          placeholder="Digite uma frase"
          onChangeText={(text) => setInputSentence(text)}
          value={inputSentence}
        />
        <Button title="Processar Frase" onPress={processSentence} />
        <Button title="Limpar" onPress={clearInputField} />
        <View style={{ marginTop: 20 }}>
          {result !== "" && (
            <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>
              Resultado:
            </Text>
          )}
          <Text style={{ fontSize: 16 }}>{result}</Text>
          <Button title="Copiar Resultado" onPress={copyToClipboard} />
          {copiedText !== "" && (
            <Text style={{ color: "green", marginTop: 10 }}>{copiedText}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
