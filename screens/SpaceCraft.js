import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela das Naves Espaciais!</Text>
            </View>
        )
    }
}