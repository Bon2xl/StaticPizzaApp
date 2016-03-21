/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  NavigatorIOS,
  View,
  Text
} from 'react-native';

import ListPizza from './scene/listpizza';
import DetailPage from './scene/detailpage';

var ROUTES = {
  listpizza: ListPizza,
  detailpage: DetailPage
}

module.exports = class StaticPizza extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ROUTES.detailpage,
          title: 'Test',
          passProps: { myProp: 'foo' },
        }}
        style={styles.container}
      />
    );
  }

  renderScene(route, navigator) {
    var SceneComponent = ROUTES[route.id];
    return <SceneComponent route={route} navigator={navigator} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});