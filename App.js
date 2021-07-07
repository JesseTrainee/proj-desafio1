import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () =>{
    return(
        <View style={styles.container}>
    
            <View style={styles.statusbar}></View>

            <View style={styles.viewQuadrados}>
                <View style={styles.quadrado}></View>
            </View>
            
            <View style={styles.viewRetanguloLaranja}>
                <View style={styles.retanguloLaranja}></View>
            </View>

            <View>
                <View style={styles.viewRetanguloAzulRoxo}>
                    <View style={styles.retanguloRoxo}></View>
                    <View style={styles.retanguloAzul}></View>
                </View>        
                    <View style={styles.separadorVerde}></View>
            </View> 

            <View style={styles.viewQuadrados}>
                <View style={styles.quadrado}></View>
                <View style={styles.quadrado}></View>
                <View style={styles.quadrado}></View>
            </View>

            <View style={styles.viewQuadrados}>
                <View style={styles.quadrado}></View>
                <View style={styles.quadrado}></View>
                <View style={styles.quadrado}></View>
            </View>           

            <View>
                <View style={styles.retanguloInferior}></View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'space-between'
    },

    statusbar:{ 
        height: 25,
        backgroundColor:'#50E3C2',
    },
    
    quadrado:{
        width:100,
        height: 100,
        backgroundColor:'#F5A623',
        
    },

    retanguloLaranja:{
        height: 30,
        width: 150,
        backgroundColor:'#F5A623'
    },

    retanguloInferior:{
        height: 60,
        backgroundColor:'#4A90E2'
    },

    separadorVerde:{
        height: 13,
        backgroundColor:'#50E3C2',
    },

    retanguloAzul:{
        height:78,
        width: '50%',
        backgroundColor:'#4A90E2'
    },

    retanguloRoxo:{
        height:78,
        width: '50%',
        backgroundColor:'#9013FE'
    },

    viewRetanguloAzulRoxo:{
        flexDirection:'row',
    },

    viewQuadrados:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },

    viewRetanguloLaranja:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
})

export default App;
