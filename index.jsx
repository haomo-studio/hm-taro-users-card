'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import usersDetailImage from './images/img_24405_0_0.png'

class HmUsersCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      count: '14.059',
      users: '用户数量',
      usersDetailImage
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmUsersCard}>
        <View style={styles.container}>
          <View style={styles.usersDetail}>
            <View style={styles.usersDetailWrap}>
              <Text style={styles.count}>{this.state.count}</Text>
              <Text style={styles.users}>{this.state.users}</Text>
            </View>
          </View>
          <Image style={styles.usersDetailImage} src={this.state.usersDetailImage} />
        </View>
      </View>
    );
  }
}
export default HmUsersCard;
