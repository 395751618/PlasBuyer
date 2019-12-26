import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ViewPropTypes,
  RefreshControl,
} from 'react-native';

const RefreshState = {
  Idle: 0,
  HeaderRefreshing: 1,
  FooterRefreshing: 2,
  NoMoreData: 3,
  Failure: 4,
  EmptyData: 5,
};

class RefreshListView extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    ListHeaderComponent: PropTypes.node,
    refreshState: PropTypes.number.isRequired,

    listRef: PropTypes.node,
    onHeaderRefresh: PropTypes.func,
    footerContainerStyle: ViewPropTypes.style,
    footerTextStyle: ViewPropTypes.style,

    disabledSeparator: PropTypes.bool,
    disabledHeaderRefresh: PropTypes.bool,
    footerRefreshingText: PropTypes.string,
    footerFailureText: PropTypes.string,
    footerNoMoreDataText: PropTypes.string,
    footerEmptyDataText: PropTypes.string,

    ListEmptyComponent: PropTypes.node,
    footerRefreshingComponent: PropTypes.node,
    footerFailureComponent: PropTypes.node,
    footerNoMoreDataComponent: PropTypes.node,
    footerEmptyDataComponent: PropTypes.node,
  };

  static defaultProps = {
    disabledHeaderRefresh: false,
    footerRefreshingText: '数据加载中…',
    footerFailureText: '点击重新加载',
    footerNoMoreDataText: '已加载全部数据',
    footerEmptyDataText: '暂时没有相关数据',
  };

  componentWillReceiveProps(nextProps) {}

  componentDidUpdate(prevProps, prevState) {}

  // FlatList 下拉刷新回调函数
  onHeaderRefresh = () => {
    const {onHeaderRefresh} = this.props;
    if (this.shouldStartHeaderRefreshing()) {
      onHeaderRefresh(RefreshState.HeaderRefreshing);
    }
  };

  // FlatList 触底回调函数
  onEndReached = () => {
    const {onFooterRefresh} = this.props;
    if (this.shouldStartFooterRefreshing()) {
      onFooterRefresh && onFooterRefresh(RefreshState.FooterRefreshing);
    }
  };

  // 当 refreshState 为 HeaderRefreshing 或者为 FooterRefreshing 时不执行HeaderRefreshing
  shouldStartHeaderRefreshing = () => {
    const {refreshState} = this.props;
    if (
      refreshState == RefreshState.HeaderRefreshing ||
      refreshState == RefreshState.FooterRefreshing
    ) {
      return false;
    }
    return true;
  };

  // 当数据为空时不执行尾部刷新
  shouldStartFooterRefreshing = () => {
    const {refreshState, data} = this.props;
    if (data.length == 0) {
      return false;
    }
    return refreshState == RefreshState.Idle;
  };

  // 渲染 FlatList 分割线
  ItemSeparatorComponent = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}} />
  );

  // 渲染 FlatList 尾部组件
  ListFooterComponent = () => {
    let footer = null;
    const {
      data,
      onHeaderRefresh,
      onFooterRefresh,
      refreshState,

      footerRefreshingText,
      footerFailureText,
      footerNoMoreDataText,
      footerEmptyDataText,

      footerRefreshingComponent,
      footerFailureComponent,
      footerNoMoreDataComponent,
      footerEmptyDataComponent,
    } = this.props;

    switch (refreshState) {
      case RefreshState.Idle: {
        footer = <View style={styles.footerContainer} />;
        break;
      }
      case RefreshState.Failure: {
        footer = (
          <TouchableOpacity
            onPress={() => {
              if (data.length == 0) {
                onHeaderRefresh &&
                  onHeaderRefresh(RefreshState.HeaderRefreshing);
              } else {
                onFooterRefresh &&
                  onFooterRefresh(RefreshState.FooterRefreshing);
              }
            }}>
            {footerFailureComponent || (
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{footerFailureText}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
        break;
      }
      case RefreshState.EmptyData: {
        footer = (
          <TouchableOpacity
            onPress={() => {
              onHeaderRefresh && onHeaderRefresh(RefreshState.HeaderRefreshing);
            }}>
            {footerEmptyDataComponent || (
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{footerEmptyDataText}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
        break;
      }
      case RefreshState.FooterRefreshing: {
        footer = footerRefreshingComponent || (
          <View style={styles.footerContainer}>
            <ActivityIndicator size="small" color="#888888" />
            <Text style={[styles.footerText, {marginLeft: 7}]}>
              {footerRefreshingText}
            </Text>
          </View>
        );
        break;
      }
      case RefreshState.NoMoreData: {
        footer = footerNoMoreDataComponent || (
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>{footerNoMoreDataText}</Text>
          </View>
        );
        break;
      }
    }
    return footer;
  };

  shouldComppnentUpdate(nextProps, nextState) {}

  render() {
    const {
      renderItem,
      ListHeaderComponent,
      disabledHeaderRefresh,
      listRef,
      disabledSeparator,
      ListEmptyComponent,
      refreshState,
      ...restProps
    } = this.props;

    return (
      <FlatList
        {...restProps}
        ref={listRef}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={this.ListFooterComponent}
        ItemSeparatorComponent={
          disabledSeparator ? null : this.ItemSeparatorComponent
        }
        refreshControl={
          disabledHeaderRefresh ? null : (
            <RefreshControl
              colors={['#00ff00', '#9Bd35A', '#689F38']}
              refreshing={refreshState == RefreshState.HeaderRefreshing}
              onRefresh={this.onHeaderRefresh}
            />
          )
        }
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.1}
      />
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 44,
  },
  footerText: {
    fontSize: 14,
    color: '#4a4a4a',
  },
});

export {RefreshState};

export default RefreshListView;
