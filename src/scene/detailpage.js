/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image
} from 'react-native';

module.exports = class DetailPage extends Component {  
  constructor(props){
    super(props); 
    
    // var ds, pizzadata = [];
    // pizzadata = PizzaData.pizza;
    // ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(pizzadata),
    // };
  }

  render() {
    // return (
    //   <View>
    //     <ListView
    //       dataSource={this.state.dataSource}
    //       renderRow={this.renderRow}
    //     />
    //   </View>
    // );

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat id felis eget hendrerit. Donec lectus nisl, posuere at purus vitae, rhoncus vestibulum leo. Vivamus dictum ac odio non elementum. Vestibulum velit tellus, tristique sit amet ullamcorper ac, bibendum sed risus. Vivamus ultrices iaculis ex non euismod. Fusce sit amet ipsum et ipsum viverra vehicula. Quisque hendrerit tincidunt leo vel congue. Praesent iaculis, lacus nec pharetra vulputate, quam lorem feugiat felis, sit amet vulputate tellus ex ut augue. Nunc tempor aliquet mauris, sed pulvinar lectus placerat non. Aliquam et libero risus.</Text>

        <Text style={styles.instructions}>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras luctus at nulla in pharetra. In ex lectus, pellentesque a dignissim ut, bibendum non velit. Ut nisl ante, egestas et euismod et, malesuada sed urna. Donec malesuada sapien quis ante auctor, id tempor neque finibus. Nulla tincidunt purus dui. Nulla facilisi. Fusce tempor justo sit amet risus ullamcorper, eu molestie justo elementum.</Text>

        <Text style={styles.instructions}>Vivamus eleifend lorem rhoncus eros volutpat, sed accumsan libero luctus. Integer quis nulla aliquam, sodales nibh vel, facilisis purus. Sed porta facilisis nisi, in sagittis ante malesuada vel. Phasellus mollis suscipit lectus, sit amet consectetur felis ultrices vel. Integer nec est nisi. Nunc finibus imperdiet blandit. Donec suscipit erat auctor, tempor lorem nec, sollicitudin dolor.</Text>

        <Text style={styles.instructions}>Vivamus eleifend lorem rhoncus eros volutpat, sed accumsan libero luctus. Integer quis nulla aliquam, sodales nibh vel, facilisis purus. Sed porta facilisis nisi, in sagittis ante malesuada vel. Phasellus mollis suscipit lectus, sit amet consectetur felis ultrices vel. Integer nec est nisi. Nunc finibus imperdiet blandit. Donec suscipit erat auctor, tempor lorem nec, sollicitudin dolor.</Text>

        <Text style={styles.instructions}>Vivamus eleifend lorem rhoncus eros volutpat, sed accumsan libero luctus. Integer quis nulla aliquam, sodales nibh vel, facilisis purus. Sed porta facilisis nisi, in sagittis ante malesuada vel. Phasellus mollis suscipit lectus, sit amet consectetur felis ultrices vel. Integer nec est nisi. Nunc finibus imperdiet blandit. Donec suscipit erat auctor, tempor lorem nec, sollicitudin dolor.</Text> 
      </ScrollView>
    );
  }

  // renderRow(rowData, sectionID, rowID) {
  //   return <View>
  //     <Image 
  //       source={{uri: 'http://lorempizza.com/100/80/'+rowID}}
  //       style={{width:  100, height: 80, backgroundColor: 'transparent',marginRight: 10}}
  //     />
  //     <Text>{rowData.name}</Text>
  //   </View>
  // }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 80,
    margin: 20
  },
  welcome: {
    fontSize: 16,
    margin: 5,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});

