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
  ListView,
  Image
} from 'react-native';

import PizzaData from '../data.json';

module.exports = class ListPizza extends Component {  
  constructor(props){
    super(props); 
    
    var ds, pizzadata = [];
    pizzadata = PizzaData.pizza;
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(pizzadata),
    };
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return <View>
      <Image 
        source={{uri: 'http://lorempizza.com/100/80/'+rowID}}
        style={{width: 100, height: 80, backgroundColor: 'transparent',marginRight: 10}}
      />
      <Text>{rowData.name}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

