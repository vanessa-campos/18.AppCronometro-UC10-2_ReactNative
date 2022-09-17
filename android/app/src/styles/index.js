import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

const contador = StyleSheet.create(
    {        
        container: {    
            marginTop: 10, marginBottom: 30,
        },        
        title: {            
            textAlign: 'center',
            fontSize: 40, color: "#6847b3", fontWeight: "500",
        },
        timer: {      
            textAlign: 'center',
            fontSize: 70, color: "gray", fontWeight: "500",
        }
    }
)

const botoes = StyleSheet.create(
    {
        background: {
            height: 50, flexWrap: "wrap", alignContent: "center",
        },
        container: {  
            marginHorizontal: 5, width: 157,  borderRadius: 3,             
            borderBottomWidth: 3, borderBottomColor: "gray", 
            borderLeftWidth: 1.5, borderLeftColor: "gray",
        }
    }
)       

const entradas = StyleSheet.create(
    {
        backgroundTitulo: {
            flexDirection: 'row', marginHorizontal: 30,
            backgroundColor: "white", borderTopLeftRadius: 5,
            borderTopRightRadius: 5, borderBottomWidth: 2,        
            borderBottomColor: "#CD0000", borderLeftWidth: 1, 
            borderLeftColor: "#CD0000", 
        },
        container: {          
            width: 150, margin: 10,
        },
        titulo: {
            fontSize: 15, color: "#CD0000", fontWeight: "500", 
            textAlign: 'center'
        },
        backgroundEntradas: {
            width: 323, marginHorizontal: 10, flexDirection: 'row', 
            alignContent: 'center', alignItems: 'center', alignSelf: 'center',
            backgroundColor: "white", borderBottomEndRadius: 0,
            borderBottomLeftRadius: 0, borderLeftWidth: 1, 
            borderLeftColor: "#CD0000",   
        },
        texto: {            
            width: 30, paddingVertical: 5, marginHorizontal: 70, alignContent: 'center', alignItems: 'center', 
            alignSelf: 'center', textAlign: 'center',
            fontSize: 15, color: "#CD0000", fontWeight: "400",
            
        }
    }
) 

export { contador, botoes, entradas };
