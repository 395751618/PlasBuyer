import React, {PureComponent} from 'react';
import {
  RefreshControl,
  Text,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  SectionList,
} from 'react-native';
import HomeTopView from '../../components/HomeTopView/HomeTopView';
import {fetchRequest} from '../../api/fetch';
// import {
//   RefreshState,
//   RefreshListView,
// } from '../../components/RefreshListView/RefreshListView';
// import {RefreshFlatList} from '../../components/RefreshListView/RefreshFlatList';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // refreshState: RefreshState.Idle,
      dataList: [{key: 'Devin1'}, {key: 'Devin2'}, {key: 'Devin3'}],
      refreshing: false,
      loadMore: false,
    };

    this.dataList = [
      {key: 'Devin'},
      {key: 'Dan'},
      {key: 'Dominic'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
      {key: 'eeeDevin'},
      {key: '1Dan'},
      {key: '1Dan1'},
      {key: '1Dan2'},
      {key: '1Dan3'},
      {key: '1Dan4'},
    ];

    fetchRequest('server/api', 'GET', {}).then(res => {
      console.log(res);
    });
    // this.createView1 = (
    //   <View style={styles.container}>
    //     <FlatList
    //       data={this.dataList}
    //       renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    //       ListEmptyComponent={this.createListEmpty}
    //       ListHeaderComponent={this.createListHeader1}
    //       ListFooterComponent={this.createListFooter}
    //       ItemSeparatorComponent={this.createItemSeparatorComponent}
    //       // refreshControl={this.createRefreshControl}
    //       refreshing={this.state.refreshing}
    //       onRefresh={this.onRefresh}
    //       onEndReached={this.onLoadMore()}
    //       onEndReachedThreshold={1}
    //     />
    //   </View>
    // );
  }

  render() {
    return (
      <View style={styles2.container}>
        <SectionList
          renderItem={({item, index, section}) => (
            <Text style={styles2.section} key={index}>
              {item}
            </Text>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
          )}
          sections={[
            {title: 'Title1', data: ['item1', 'item2']},
            {title: 'Title2', data: ['item3', 'item4']},
            {title: 'Title3', data: ['item5', 'item6']},
            {title: 'Title1', data: ['item1', 'item2']},
            {title: 'Title2', data: ['item3', 'item4']},
            {title: 'Title3', data: ['item5', 'item6']},
          ]}
          keyExtractor={(item, index) => item + index}
          SectionSeparatorComponent={this.renderSectionSeparator.bind(this)}
        />
      </View>
    );
  }

  renderSectionSeparator() {
    return <View style={{height: 1, backgroundColor: 'red'}} />;
  }

  createListEmpty() {
    return (
      <View>
        <Text style={{fontSize: 16, height: 50}}>暂无列表数据</Text>
      </View>
    );
  }

  createListHeader() {
    return (
      <View style={styles.item1}>
        <Text style={{color: 'black', height: 50}}>头部布局</Text>
      </View>
    );
  }

  createListHeader1() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal={true}>
        <Image
          source={require('../../assets/images/1.jpg')}
          style={styles.contentItemContainer1}
        />
        <Image
          source={require('../../assets/images/2.jpg')}
          style={styles.contentItemContainer2}
        />
      </ScrollView>
    );
  }

  createListFooter() {
    return (
      <View style={styles.item2}>
        <Text style={{color: 'black', height: 50}}>底部布局</Text>
      </View>
    );
  }

  // 渲染 FlatList 分割线
  createItemSeparatorComponent = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}} />
  );

  createRefreshControl = () => {
    <RefreshControl
      title={'Loading'}
      refreshing={this.state.refreshing}
      onRefresh={this.onRefresh}
    />;
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(
      () => {
        console.log('把一个定时器的引用挂在this上');
        this.setState({refreshing: false});
      }, //延时操作
      1000,
    );
  };

  onLoadMore = () => {
    // this.setState({loadMore: true});
    console.log('fsad');
  };
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    height: 160,
    color: 'red',
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 160,
  },
  item1: {
    backgroundColor: 'red',
  },
  item2: {
    backgroundColor: 'blue',
  },
  contentContainer: {
    paddingHorizontal: 0,
    height: 200,
  },
  contentItemContainer1: {
    backgroundColor: 'red',
    width: width,
    height: 500,
  },
  contentItemContainer2: {
    backgroundColor: 'blue',
    width: width,
    height: 500,
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    height: 100,
    backgroundColor: 'red',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    height: 300,
    backgroundColor: '#ffffff',
  },
  section: {
    height: 100,
  },
});

export default HomePage;
