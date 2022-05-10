<template>
  <view class="home-unit">
    <swiper class="swiper" :circular="circular" :vertical="true" @change="onSwiperChange">
      <swiper-item v-for="item in videoList" :key="item.id">
        <video
          class="video"
          :id="item.id"
          :ref="item.id"
          :src="item.src"
          :controls="true"
          :loop="true"
          :show-center-play-btn="false"
          :autoplay="true"
        ></video>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
    data() {
        return {
            circular: true,
            videoList: [
                {
                    id: 'video0',
                    src:
                        'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4',
                    img: '',
                },
                {
                    id: 'video1',
                    src:
                        'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4',
                    img: '',
                },
                {
                    id: 'video2',
                    src:
                        'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4',
                    img: '',
                },
            ]
        };
    },
    onLoad(value) {
		console.log("--page初始化--", value)
	},
    onReady() {
        this.init();
    },
    methods: {
        init() {
            this._videoIndex = 0;
            this._videoContextList = [];
            for (var i = 0; i < this.videoList.length; i++) {
				// API---媒体---视频组件控制
                this._videoContextList.push(uni.createVideoContext('video' + i, this));
            }
			this._videoDataIndex = 0;
        },
        onSwiperChange(value) {
			console.log('--改变分页--', value);
			this._videoIndex = value.detail.current;
			this.toPlay();
		},
		// 播放
		toPlay() {
			this._videoContextList[this._videoIndex].play();
		}
    },
};
</script>

<style lang="scss" scoped>
uni-page-body {
    height: 100%;
}
.home-unit {
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex: 1;
    .swiper {
        height: 100%;
        flex: 1;
        background-color: #007aff;
    }
    .swiper-item {
        flex: 1;
        height: 100%;
    }
    .video {
        width: 100%;
        height: 100%;
    }
}
</style>
