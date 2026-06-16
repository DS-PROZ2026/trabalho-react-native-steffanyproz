import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Image } from 'react-native';

const QUIZ = [

{
id:1,
pergunta:'Qual comando usamos para mostrar mensagem no Java?',
imagem:'https://cdn-icons-png.flaticon.com/512/6062/6062646.png',
opcoes:['print()','System.out.println()','show()','console.write()'],
respostaCerta:1
},

{
id:2,
pergunta:'Qual tipo usamos para guardar números inteiros?',
imagem:'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
opcoes:['String','boolean','double','int'],
respostaCerta:3
},

{
id:3,
pergunta:'Para que serve o if?',
imagem:'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
opcoes:[
'Repetir várias vezes',
'Guardar texto',
'Tomar decisão no código',
'Criar tela'
],
respostaCerta:2
},

{
id:4,
pergunta:'Qual classe usamos para ler dados do teclado no Java?',
imagem:'https://cdn-icons-png.flaticon.com/512/2881/2881142.png',
opcoes:['Reader','Scanner','Keyboard','Input'],
respostaCerta:1
},

{
id:5,
pergunta:'Qual símbolo usamos para finalizar uma linha no Java?',
imagem:'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
opcoes:[':','.',',',';'],
respostaCerta:3
},

{
id:6,
pergunta:'Qual linguagem usamos no React Native?',
imagem:'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
opcoes:['Python','JavaScript','PHP','C++'],
respostaCerta:1
},

{
id:7,
pergunta:'O que significa HTML?',
imagem:'https://cdn-icons-png.flaticon.com/512/919/919827.png',
opcoes:[
'Hyper Text Markup Language',
'Home Tool Markup Language',
'Hyper Tool Main Language',
'Hyper Text Modern Language'
],
respostaCerta:0
},

{
id:8,
pergunta:'Qual comando usamos para criar repetição?',
imagem:'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
opcoes:['if','while','text','view'],
respostaCerta:1
},

{
id:9,
pergunta:'O que é uma variável?',
imagem:'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
opcoes:[
'Um erro do sistema',
'Um lugar para guardar informação',
'Uma imagem',
'Um botão'
],
respostaCerta:1
},

{
id:10,
pergunta:'Qual linguagem estamos estudando nas aulas?',
imagem:'https://cdn-icons-png.flaticon.com/512/226/226777.png',
opcoes:['Java','Python','PHP','Swift'],
respostaCerta:0
}

];
export default function AppQuiz(){

const [telaAtual,setTelaAtual]=useState('inicio')
const [perguntaAtual,setPerguntaAtual]=useState(0)
const [pontuacao,setPontuacao]=useState(0)
const [carregando,setCarregando]=useState(false)

const [respostaSelecionada,setRespostaSelecionada]=useState(null)
const [bloqueado,setBloqueado]=useState(false)

function iniciarJogo(){
setPerguntaAtual(0)
setPontuacao(0)
setTelaAtual('quiz')
setRespostaSelecionada(null)
setBloqueado(false)
}

function voltarInicio(){
setTelaAtual('inicio')
}

function responder(indiceClicado){

if(bloqueado) return

setBloqueado(true)
setRespostaSelecionada(indiceClicado)

const pergunta=QUIZ[perguntaAtual]

if(indiceClicado===pergunta.respostaCerta){
setPontuacao(pontuacao+1)
}

setTimeout(()=>{

setCarregando(true)

setTimeout(()=>{

if(perguntaAtual + 1 < QUIZ.length){
setPerguntaAtual(perguntaAtual+1)
setRespostaSelecionada(null)
setBloqueado(false)
}else{
setTelaAtual('resultado')
}

setCarregando(false)

},1000)

},1000)

}
if(telaAtual === 'inicio'){
return(
<View style={styles.telaCentrada}>

<Image
source={{uri:'https://cdn-icons-png.flaticon.com/512/2721/2721297.png'}}
style={styles.logoInicial}
/>

<Text style={styles.tituloPrincipal}>
Quiz do Programador 💻
</Text>

<Text style={styles.subtituloInicio}>
Teste seus conhecimentos de lógica e programação
</Text>

<TouchableOpacity
style={styles.botaoIniciar}
onPress={iniciarJogo}
>

<Text style={styles.textoBotaoIniciar}>
COMEÇAR
</Text>

</TouchableOpacity>

</View>
)
}

if(telaAtual === 'resultado'){
return(
<View style={styles.telaCentrada}>

<Text style={styles.iconeGrande}>🏆</Text>

<Text style={styles.titulo}>
Fim do Quiz!
</Text>

<Text style={styles.subtitulo}>
Você acertou {pontuacao} de {QUIZ.length}
</Text>

<TouchableOpacity
style={styles.botaoAcao}
onPress={voltarInicio}
>

<Text style={styles.textoBotaoAcao}>
Jogar Novamente
</Text>

</TouchableOpacity>

</View>
)
}

if(carregando){
return(
<View style={styles.telaCentrada}>
<ActivityIndicator size="large" color="#6366f1"/>
<Text style={styles.textoCarregando}>
Validando resposta...
</Text>
</View>
)
}

const pergunta = QUIZ[perguntaAtual]

return(
<View style={styles.tela}>

<Text style={styles.progresso}>
Pergunta {perguntaAtual + 1} de {QUIZ.length}
</Text>

<Image
source={{uri: pergunta.imagem}}
style={styles.imagemPergunta}
/>

<View style={styles.cartaoPergunta}>
<Text style={styles.textoPergunta}>
{pergunta.pergunta}
</Text>
</View>

<View>

{pergunta.opcoes.map((opcao,index)=>{

let corBotao='#fff'

if(respostaSelecionada !== null){

if(index === pergunta.respostaCerta){
corBotao='#22c55e'
}
else if(index === respostaSelecionada){
corBotao='#ef4444'
}

}

return(
<TouchableOpacity
key={index}
style={[styles.botaoOpcao,{backgroundColor:corBotao}]}
onPress={()=>responder(index)}
disabled={bloqueado}
>

<Text style={styles.textoOpcao}>
{opcao}
</Text>

</TouchableOpacity>
)

})}

</View>

</View>
)
}

const styles = StyleSheet.create({

tela:{
flex:1,
padding:20,
paddingTop:60,
backgroundColor:'#eef2ff'
},

telaCentrada:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:20,
backgroundColor:'#eef2ff'
},

logoInicial:{
width:120,
height:120,
marginBottom:20
},

tituloPrincipal:{
fontSize:30,
fontWeight:'800',
marginBottom:10,
color:'#312e81'
},

subtituloInicio:{
fontSize:16,
textAlign:'center',
marginBottom:40,
color:'#475569'
},

botaoIniciar:{
backgroundColor:'#6366f1',
padding:20,
borderRadius:15,
width:'100%',
alignItems:'center'
},

textoBotaoIniciar:{
color:'white',
fontSize:18,
fontWeight:'800'
},

progresso:{
fontSize:16,
fontWeight:'700',
marginBottom:20,
color:'#4338ca'
},

imagemPergunta:{
width:'100%',
height:180,
borderRadius:20,
marginBottom:20
},

cartaoPergunta:{
backgroundColor:'white',
padding:25,
borderRadius:20,
marginBottom:20
},

textoPergunta:{
fontSize:22,
fontWeight:'700',
textAlign:'center'
},

botaoOpcao:{
padding:18,
borderRadius:15,
marginBottom:12,
borderWidth:1,
borderColor:'#cbd5e1'
},

textoOpcao:{
textAlign:'center',
fontWeight:'600',
fontSize:16
},

iconeGrande:{
fontSize:80
},

titulo:{
fontSize:30,
fontWeight:'800',
marginBottom:10
},

subtitulo:{
fontSize:18,
marginBottom:30
},

botaoAcao:{
backgroundColor:'#6366f1',
padding:18,
borderRadius:15,
width:'100%',
alignItems:'center'
},

textoBotaoAcao:{
color:'white',
fontWeight:'800'
},

textoCarregando:{
marginTop:20,
fontSize:18,
fontWeight:'600'
}

});
