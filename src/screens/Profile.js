import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {Header, Button} from '../components';
import {getUserInfo} from '../store/actions';
import STYLES from '../style';
import SplashScreen from './SplashScreen';

class Profile extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    const {user, loading} = this.props;

    if (loading)
      return (
        <View style={STYLES.loadingMain}>
          <SplashScreen />
        </View>
      );

    if (!user || !(user && user.data)) {
      return null;
    }

    const {id, first_name, last_name, avatar, email} = user.data;
    console.log('user, loading => ', user, loading);
    return (
      <>
        <Header navigation={this.props.navigation} title="My Profile" />
        <View style={styles.main}>
          <Image style={styles.user} source={{uri: avatar}} />
          <Text style={styles.text}>id : {id}</Text>
          <Text style={styles.text}>
            Name : {first_name} {last_name}
          </Text>
          <Text style={styles.text}>id : {email}</Text>
          <Button
            title="Update Profile"
            onPress={() => {
              //update profile page
            }}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, {
  getUserInfo,
})(Profile);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    padding: 20,
  },
  text: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
