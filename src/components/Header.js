import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export class Header extends Component {
  render() {
    const {title, navigation, showBellIcon = false} = this.props;
    return (
      <SafeAreaView style={styles.main}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.iconImage}
            source={require('../imgs/menu.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>

        {showBellIcon ? (
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Image
              style={styles.iconImage}
              source={require('../imgs/bell.png')}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.defaultView} />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  icon: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  iconRight: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  defaultView: {
    width: 40,
  },
});
