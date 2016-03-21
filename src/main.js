/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  // Navigator,
  NavigatorIOS,
  View,
  Text
} from 'react-native';

import ListPizza from './scene/listpizza';

var ROUTES = {
  listpizza: ListPizza
}

module.exports = class StaticPizza extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    // return (
    //   <Navigator
    //     initialRoute={{id: 'listpizza', title: 'List of Pizza', index: 0}}
    //     renderScene={this.renderScene}
    //   />
    // );
    return (
      <NavigatorIOS
        initialRoute={{
          component: ROUTES.listpizza,
          title: 'My View Title',
          passProps: { myProp: 'foo' },
        }}
      />
    );
  }

  renderScene(route, navigator) {
    var SceneComponent = ROUTES[route.id];
    return <SceneComponent route={route} navigator={navigator} />
  }
}

