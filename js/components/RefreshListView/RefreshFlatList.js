import React, {PureComponent} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

class RefreshFlatList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };

    this.dataList = [
      {key: 'Devin'},
      {key: 'Dan'},
      {key: 'Dominic'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.dataList}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={styles.item}>fdsakjfasfjkaf</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 60,
  },
});

export default RefreshFlatList;
