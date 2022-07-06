import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import ResultImc from './ResultImc';

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
            setMessageImc("Seu imc é igual: " + imc);
            setTextButton("Calcular Novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }

    return(
        <View>
           <View>

                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    KeyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWight}
                    value={wight}
                    placeholder="Ex. 75.365"
                    KeyboardType="numeric"
                />

                <Button 
                    onPress={() => validationImc()}
                    title={textButton}
                />

           </View>

           <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
           />
        </View>
    );
}