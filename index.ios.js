/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  ListView,
  Button,
  Navigator
} from 'react-native';

// 烧饼文字处理翻译
class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text : ''};
  }

  render() {
    return (
      <View style={{padding : 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="type here to translate!"
          onChangeText={(text) => this.setState({text})}></TextInput>
        <Text style={{padding: 10, fontSize: 42}}>
          { this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>
      </View>
    );
  }
}

// 滚动视图示例
class ScorllViewDemo extends Component {
  render () {
    return (
      <ScrollView>
        <Text style={{fontSize:40}}>Scroll me plz</Text>
        <Image source={require('./resources/tab_task.png')}>
          <Text style={{backgroundColor : 'clear'}}>Inside</Text>
        </Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Text style={{fontSize:40}}>Scroll me plz</Text>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Text style={{fontSize:40}}>Scroll me plz</Text>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Text style={{fontSize:40}}>What's the best</Text>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Text style={{fontSize:30}}>Framework around?</Text>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Image source={require('./resources/tab_task.png')}></Image>
        <Text style={{fontSize:40}}>React Native</Text>
        {/* 混编app代码调用imageasset里的图片资源 */}
        {/* <Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} /> */}
        {/* 手动指定网络图片的尺寸 */}
        {/* <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} /> */}
      </ScrollView>
    );
  }
}

class ListViewDemo extends Component {
  constructor (props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        title: '',
        dataSource: ds.cloneWithRows([
          'vivian','Joel','James','Jimmy','Jackson','Julia','Devin'
        ])
      };
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}>
        </ListView>
        <Text>
          {this.state.title}
        </Text>
        <Button onPress={this.fetchDataWithJson} title="登录测试"></Button>
      </View>
    );
  }



  fetchDataWithJson = (enableCallBack) => {
    fetch('https://testapi.happyzj.com/auth/token/app_user/get/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'jwt '+'Token',
      },
      body: JSON.stringify({
        username: '18628112232',
        password: '11111111',
      })
    }).then((response) => response.json())
    .then((jsondata) => {
      // console.log(jsondata);
      this.setState({
        title : jsondata.token,
      })
    })
    .catch((error) => {
      console.warn(error);
    })
  }
}



export default class Demo extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        {/* 尝试把`flexDirection`改为`column`看看 */}
        {/* <View style={{flex:3, flexDirection: 'row'}}> */}
        <View style={styles.flexView}>
          <View style={{width:50 ,height:50, backgroundColor: 'powderblue'}}></View>
          <View style={{width:50 ,height:50, backgroundColor: 'skyblue'}}></View>
          <View style={{width:50 ,height:50, backgroundColor: 'steelblue'}}></View>
          <View style={{width:50 ,height:50, backgroundColor: 'powderblue'}}></View>
          <View style={{width:50 ,height:50, backgroundColor: 'skyblue'}}></View>
          <View style={{width:50 ,height:50, backgroundColor: 'steelblue'}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'yellow'}} />
        <View style={{flex: 1, backgroundColor: 'blue'}} />
        <Greetings name="Rexxar"></Greetings>
        <Greetings name="Janina"></Greetings>
        <Greetings name="Valeera"></Greetings>
        <Blink text="1"></Blink>
        <Blink text="2"></Blink>
        <Blink text="3"></Blink>
        <Blink text="4"></Blink>
        <Image source={pic} style={styles.image}/>
        <Text style={styles.bigBlue}>Hello world!</Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class Greetings extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText : true };
    // 1000ms取反一次
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  image : {
    width: 193,
    height: 110,
  },
  container: {
    flex: 1,
    // width: 400,
    // height: 300,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'green',
  },
  flexView: {
    flex : 3,
    flexDirection : 'row',
    justifyContent : 'space-between',
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
  bigBlue : {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

// AppRegistry.registerComponent('Demo', () => ListViewDemo);

import MyScene from './SceneController/MyScene';
class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

class SimpleNavigationApp extends Component {
  render() {
    return <Navigator initialRoute={{title : 'My Initial Scene', index : 0}}
      renderScene={(route, navigator) =>
        <MyScene
          title={route.title}

          onForward={() => {
            const nextIndex = route.index + 1;
            navigator.push({
              title: 'Scene ' + nextIndex,
              index: nextIndex,
            });
          }}

          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
          >
        </MyScene>
      }>
      </Navigator>
  }
}

AppRegistry.registerComponent('Demo', () => ListViewDemo);
