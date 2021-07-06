import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser} from '../store/actions';
import {Header, Button} from '../components';
import Footer from '../components/Footer';
class Home extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} title="Home" showBellIcon />
        <View style={styles.main}>
          <Text>This my home</Text>
          <Button title="Logout" onPress={() => this.props.logoutUser()} />
          <Button
            title="Go to profile"
            onPress={() => this.props.navigation.navigate('Profile')}
          />
        </View>
        <Footer />
      </>
    );
  }
}

// export default Home;

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, {
  logoutUser,
})(Home);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
