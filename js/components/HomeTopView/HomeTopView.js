import React, {PureComponent} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

// 取得屏幕的宽高Dimensions
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: (width * 40) / 75,
  },

  wrpaper: {
    width: width,
    height: (width * 40) / 75,
  },

  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  bannerImg: {
    height: (width * 40) / 75,
  },
});

class HomeTopView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true,
      });
    }, 1);
  }

  renderBanner() {
    if (this.state.swiperShow) {
      return (
        <Swiper
          style={styles.wrpaper}
          height={(width * 40) / 75}
          horizontal={true}
          showsButtons={true}
          removeClippedSubviews={false}
          autoplay={true}
          loop={true}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          autoplayTimeout={3}
          autoplayDirection={true}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }>
          <Image
            source={require('../../assets/images/1.jpg')}
            style={styles.bannerImg}
          />
          <Image
            source={require('../../assets/images/2.jpg')}
            style={styles.bannerImg}
          />
          <Image
            source={require('../../assets/images/3.jpg')}
            style={styles.bannerImg}
          />
          <Image
            source={require('../../assets/images/4.jpg')}
            style={styles.bannerImg}
          />
        </Swiper>
      );
    } else {
      return (
        <View style={styles.wrpaper}>
          <Image
            source={require('../../assets/images/5.jpg')}
            style={styles.bannerImg}
          />
        </View>
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderBanner()}</View>;
  }
}

export default HomeTopView;
