import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Tempos from './Tempos.js';
import { contador, botoes, entradas } from '../styles/index.js';

class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            segundos: 0, minutos: 0,
            parado: true, zerado: true,
            button1Name: "VAI!", button2Name: "ZERAR",
            tempos: [{ id: 0, tempo: "-" }], i: 0,
        }
    }

    incrementar() {
        this.setState(
            (state) => {
                if (!this.state.parado) {
                    if (state.segundos >= 60) {
                        this.zerarSegundos()
                        this.incrementarMinutos()
                    }
                    return ({ segundos: state.segundos + 1 })
                }
            }
        )
    }

    incrementarMinutos() {
        this.setState({ minutos: this.state.minutos + 1 })
    }

    zerarSegundos() {
        this.setState({ segundos: 0 })
    }

    zerarCronometro() {
        if (!this.state.parado) {
            this.salvarTempo()
        }
        this.setState({ segundos: 0, minutos: 0, parado: true })
    }

    iniciarCronometro() {
        //Verifica se a contagem já foi iniciada e começa o acrescimo de tempo
        if (this.state.zerado) {
            this.timer = setInterval(() => this.incrementar(), 1000)
            this.setState({ zerado: false })
        }
        //Troca os textos dos botoes de acordo com o funcionamento da contagem
        if (!this.state.parado) {
            this.setState({
                button1Name: "VAI!", button2Name: "ZERAR",
                parado: true
            })
        } else {
            this.setState({
                button1Name: "PAUSAR", button2Name: "SALVAR E ZERAR",
                parado: false
            })
        }
    }
    componentDidMount() {
        const vTempos = [...this.state.tempos]
        vTempos.shift()
        this.setState({ tempos: vTempos })
    }

    salvarTempo() {
        let t = this.state.minutos + ":" + this.state.segundos + "s"
        let i = this.state.i + 1
        const vTempos = [...this.state.tempos]
        vTempos.push({
            id: i, tempo: t
        })
        this.setState({
            tempos: vTempos, i: i, button1Name: "VAI!", button2Name: "ZERAR",
        })

    }

    render() {
        return (
            <View>
                <View style={contador.container}>
                    <Text style={contador.title}>Cronômetro</Text>
                    <Text style={contador.timer}>{this.state.minutos}:{this.state.segundos}s</Text>
                </View>
                <View style={botoes.background}>
                    <View style={botoes.container}>
                        <Button onPress={() => { this.iniciarCronometro() }} title={this.state.button1Name} color={"#CD0000"} />
                    </View>
                    <View style={botoes.container}>
                        <Button onPress={() => { this.zerarCronometro() }} title={this.state.button2Name} color={"#CD0000"} />
                    </View>
                </View>
                <View style={entradas.backgroundTitulo}>
                    <View style={entradas.container}>
                        <Text style={entradas.titulo}>Nº REGISTRO</Text>
                    </View>
                    <View style={entradas.container}>
                        <Text style={entradas.titulo}>TEMPO</Text>
                    </View>
                </View>
                <FlatList data={this.state.tempos} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <Tempos {...item} />} />
            </View>
        )
    }
}

export default Contador;