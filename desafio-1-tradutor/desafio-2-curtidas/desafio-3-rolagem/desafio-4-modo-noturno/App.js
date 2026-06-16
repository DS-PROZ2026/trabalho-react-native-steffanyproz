import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default function AppTema() {
const [escuro,setEscuro]=useState(false)
return (
<View style={[styles.tela,escuro ? styles.telaEscura : styles.telaClara]}>
<View style={styles.iconeContainer}>
<Text style={styles.iconeSolLua}>
{escuro ? '🌙' : '☀️'}
</Text>
</View>
<Text style={[styles.titulo,escuro ? styles.textoClaro : styles.textoEscuro]}>
Ajuste de Tema
</Text>

<TouchableOpacity
style={[styles.botao,escuro ? styles.botaoEscuro : styles.botaoClaro]}
onPress={() => setEscuro(!escuro)}
activeOpacity={0.8}
>
<Text style={[
styles.textoBotao,
escuro ? styles.textoBotaoEscuro : styles.textoBotaoClaro
]}>

{escuro ? 'Voltar para Modo Claro' : 'Ativar Modo Noturno'}

</Text>
</TouchableOpacity>

</View>
);
}

const styles = StyleSheet.create({

tela:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:20
},

telaClara:{
backgroundColor:'#f3f4f6'
},

telaEscura:{
backgroundColor:'#1e293b'
},

iconeContainer:{
marginBottom:30
},

iconeSolLua:{
fontSize:80
},

titulo:{
fontSize:28,
fontWeight:'800',
marginBottom:40
},

textoClaro:{
color:'#fff'
},

textoEscuro:{
color:'#111827'
},

botao:{
paddingVertical:18,
paddingHorizontal:40,
borderRadius:30,
borderWidth:2
},

botaoClaro:{
backgroundColor:'#6366f1',
borderColor:'#4f46e5'
},

botaoEscuro:{
backgroundColor:'transparent',
borderColor:'#93c5fd'
},

textoBotao:{
fontWeight:'800',
fontSize:16,
textAlign:'center'
},

textoBotaoClaro:{
color:'white'
},

textoBotaoEscuro:{
color:'#93c5fd'
}

});
