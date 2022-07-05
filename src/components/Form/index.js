import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import ResultImc from './ResultImc';

export default function Form() {
    return(
        <View>
           <View>

                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    KeyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex. 75.365"
                    KeyboardType="numeric"
                />

                <Button 
                    title="Calcular IMC"
                />

           </View>

           <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
           />
        </View>
    );
}