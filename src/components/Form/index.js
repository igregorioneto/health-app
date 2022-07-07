import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {

    const [height, setHeight] = useState(null);
    const [wight, setWight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() {
        return setImc((wight/(height * height)).toFixed(2));
    }

    function validationImc() {
        if (wight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWight(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular Novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }

    return(
        <View style={styles.formContext}>
           <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWight}
                    value={wight}
                    placeholder="Ex. 75.365"
                    keyboardType='numeric'
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text
                        style={styles.textButtonCalculator}
                    >
                        {textButton}
                    </Text>
                </TouchableOpacity>

           </View>

           <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
           />
        </View>
    );
}