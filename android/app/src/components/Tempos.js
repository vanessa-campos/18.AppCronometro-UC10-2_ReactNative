import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { entradas } from '../styles/index.js';

class Tempos extends Component {

    render() {
        return (
            <View style={entradas.backgroundEntradas}>
                <View style={entradas.texto}> 
                    <Text style={entradas.texto}>{this.props.id}</Text>
                </View>
                <View style={entradas.texto}> 
                    <Text style={entradas.texto}>{this.props.tempo}</Text>
                </View>
            </View>
        )
    }
}

export default Tempos;