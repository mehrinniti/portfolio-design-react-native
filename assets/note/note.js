//  Performance test-1


// Name: Sayma Sultana
// ID: CSE1801013127
// Section: 14A

// Qus-01

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import { Button, TextInput } from 'react-native-web';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <h3>Name: </h3>
//         <TextInput
//           placeholder="Your name"
//           style={{
//             backgroundColor: "rgb(200, 232, 243)",
//             width: 300,
//             height: 35,
//             fontSize: 18,
//             padding: 10,
//             borderRadius: 5,
//             marginTop: -10,
//             outline: "none"
//           }}
//         />
//       </View>
//       <View>
//         <h3>Roll: </h3>
//         <TextInput
//           placeholder="Your roll"
//           style={{
//             backgroundColor: "rgb(200, 232, 243)",
//             width: 300,
//             height: 35,
//             fontSize: 18,
//             padding: 10,
//             borderRadius: 5,
//             marginTop: -10,
//             marginBottom: 30,
//             outline: "none"
//           }}
//         />
//       </View>
//       <Button
//         title="Submit"
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// Qus-02

// import { StyleSheet, View } from 'react-native';
// import { FlatList, Text } from 'react-native-web';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           { id: '1', key: 'Shochco' },
//           { id: '2', key: 'Tandra' },
//           { id: '3', key: 'Rojoni' },
//           { id: '4', key: 'Maliha' },
//           { id: '5', key: 'Niha' },
//         ]}

//         renderItem={({ item }) => <Text style={styles.item}>{item.id}. {item.key}</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 100
//   },
//   item: {
//     color: 'rgb(46, 46, 46)',
//     fontSize: 23,
//     padding: 7,
//   }
// });



//  Performance test-2


// Qus-01

// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View } from 'react-native';
// import { Image } from 'react-native-web';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log("Data" + data);

//   useEffect(() => {
//     fetch('https://reqres.in/api/users')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (

//     <View style={{ flex: 1, padding: 24, backgroundColor: "rgb(218, 218, 218)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       {isLoading ? <Image
//         source={{ uri: "https://i.stack.imgur.com/i7PC3.gif" }}
//         style={{ width: '200px', height: '200px' }}
//       /> :
//         (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
//           <Text style={{ fontSize: 35, fontWeight: 700, color: 'green', textAlign: 'center', paddingBottom: 10, marginBottom: 10 }}>User List</Text>
//           <FlatList
//             data={data.data}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <View>
//                 <View>
//                   <Image
//                     source={{ uri: item.avatar }}
//                     style={{ width: 50, height: 50, borderRadius: 50 }}

//                   />
//                   <Text style={{ fontWeight: 700 }}>{item.id + '. Full Name: ' + item.first_name + ' ' + item.last_name}</Text>
//                   <Text style={{ paddingBottom: 20 }}><span style={{ fontWeight: 700 }}>Email: </span>{item.email}</Text>
//                 </View>
//               </View>
//             )}
//           />
//         </View>
//         )}

//     </View>
//   );
// };

// export default App;




//  Performance test-2

