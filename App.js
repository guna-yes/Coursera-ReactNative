// import React from 'react';
// import { StyleSheet, Text, View ,Button} from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to</Text>
//       <Button title="Change text"/>
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
import React from 'react';
import Main from './components/MainComponent';

export default class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}