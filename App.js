import React from "react";
import { ImageBackground, StyleSheet, Text, Button, View, ScrollView } from "react-native";
import image from './src/images/portfolio-bg.png';
import myImage from './src/images/my-image-zoom.svg';
import FullImage from './src/images/my-image.svg'
import { Image } from "react-native-web";
import socialIcon01 from './src/images/f-removebg-preview.png';
import socialIcon02 from './src/images/twitter-removebg-preview.png';
import socialIcon03 from './src/images/discord-removebg-preview.png';
import socialIcon04 from './src/images/mail-removebg-preview.png';
import socialIcon05 from './src/images/linkedin-removebg-preview.png';



const App = () => (
  <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
        <Image
          source={myImage}
          style={{ width: 200, height: 200, marginTop: '100px', border: '8px solid rgba(0, 0, 0, .1)', borderRadius: 100 }}
        />
        <h1 style={{ fontSize: 45, fontWeight: 600, fontFamily: " sans-serif", color: '#fff' }}>SAYMA SULTANA</h1>
        <h2 style={{ fontSize: '27px', marginTop: '-10px', color: '#fff', fontFamily: 'sans-serif', fontWeight: 700 }}>I'm Web Developer</h2>
        <Text>
          <Image
            source={socialIcon01}
            style={{ width: 40, height: 40, marginTop: 50, marginRight: 10 }}
          />
          <Image
            source={socialIcon02}
            style={{ width: 43, height: 43, marginRight: 10 }}
          />
          <Image
            source={socialIcon03}
            style={{ width: 50, height: 50, marginRight: 15, marginBottom: -6 }}
          />
          <Image
            source={socialIcon04}
            style={{ width: 37, height: 37, marginRight: 15 }}
          />
          <Image
            source={socialIcon05}
            style={{ width: 40, height: 40 }}
          />
        </Text>


        <a href="#" style={{ border: "4px solid #fff", textDecoration: 'none', borderRadius: 50, color: '#fff', fontSize: 22, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, letterSpacing: 1.3, marginTop: 30 }}>Download Resume</a>

      </ImageBackground>
    </View>


    <View style={{ marginTop: 200, marginBottom: 80, marginLeft: 100, marginRight: 100 }}>
      <span style={{ fontFamily: 'sans-serif', fontSize: 14, color: '#888', fontWeight: 600, letterSpacing: 5 }}>INFORMATION</span>
      <h2 style={{ color: '#101010', fontFamily: 'sans-serif', marginBottom: 30, fontWeight: 600, fontSize: 30, letterSpacing: 3 }}>ABOUT ME</h2>

      <View style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 50 }}>
        <Image
          source={FullImage}
          style={{ width: 500, height: 500, borderRadius: 10 }}
        />
        <View style={{ marginLeft: -110 }}>
          <span style={{ fontFamily: 'sans-serif', fontSize: 14, color: '#888', fontWeight: 600, letterSpacing: 5 }}>HELLO</span>
          <h2 style={{ fontFamily: 'sans-serif' }}>I'm Sayma Sultana</h2>
          <p style={{
            fontFamily: 'sans-serif', fontSize: 19, fontWeight: 500, color: '#888', margin: '0 0 20px', lineHeight: 1.6
          }}>I am a web developer with a vast array of knowledge in many different front-end and back- end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology company all that I know and can do. I studied CSE, and I believe that my understanding of problem-solving and complex algorithms are also skills that have and will continue to contribute to my overall success as a developer.</p>

          <Text style={{ color: 'rgba(148, 148, 148, 0.5)' }}>
            ______________________________________________________________________________________________________________________________
          </Text>

          <h2 style={{ fontFamily: 'sans-serif', textTransform: 'uppercase' }}>Personal Info</h2>
          <View style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 50, fontFamily: 'sans-serif' }}>
            <View>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>Name : </span>Sayma Sultana</Text>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>Age : </span>22</Text>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>Nationality : </span>Bangladesh</Text>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>University : </span>Sonargaon University</Text>

            </View>
            <View>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>Phone : </span>+880 1944449999</Text>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>Address : </span>Narayanganj</Text>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>Email : </span>sayma@gmail.com</Text>
              <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}><span style={{ color: '#888' }}>linkedin : </span>/saymasultana</Text>
            </View>
          </View>

        </View>

      </View>

    </View>


  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',
    height: '100vh'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },

});

export default App;