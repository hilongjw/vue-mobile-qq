<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app {
    overflow: hidden;
}
.cov-nav-bar {
    bottom: 0;
    width: 100%;
    display: flex;
    height: 4rem;
    border-top: 1px solid #eaeaea;
    background: #fff;
    transform: translate3d(0, 0, 0);
    transition: transform .5s;
}
.cov-nav-bar-item {
    flex: 1;
    text-align: center;
    line-height: 4rem;
    font-size: 1rem;
    color: #777676;
}
.cov-nav-bar-item.active {
    color: blue;
}
.slide-nav {
    background-image: url(http://covteam.u.qiniudn.com/slidenav.png);
    background-size: cover;
    height: 100%;
    width: 18rem;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate3d(-18rem, 0, 0);
    transition: transform .5s;
}
.cov-slide-user {
    position: absolute;
    top: 2rem;
    left: 1rem;
    display: flex;
}
.cov-slide-avatar {
    background-image: url(http://covteam.u.qiniudn.com/cov.jpeg);
    width: 3rem;
    height: 3rem;
    border: .2rem solid #fff;
    background-size: cover;
    border-radius: 50%;
}
.cov-slide-user-info {
    margin-left: 1rem;
}
.cov-slide-user-name {
    font-size: 1.2rem;
    height: 2rem;
    line-height: 2rem;
}
.cov-slide-user-level-icon {
    display: inline-block;
    background-image: url(http://covteam.u.qiniudn.com/start.png);
    height: 1rem;
    width: 1rem;
    background-size: 2rem 1rem;
    background-position: 1rem 0;
}
.cov-slide-user-level-icon.sun {
    height: 1rem;
    width: 1rem;
    background-size: 2rem 1rem;
    background-position: 0;
}
.cov-view {
    transform: translate3d(0, 0, 0);
    transition: transform .5s; 
}

#app.slide-active .slide-nav{
    transform: translate3d(0, 0, 0);
}
#app.slide-active .cov-view {
    transform: translate3d(18rem, 0, 0);
}
#app.slide-active .cov-nav-bar {
    transform: translate3d(18rem, 0, 0);
}
#app.without-bottom-nav .view-container {
    height: calc(100vh - 3rem);
}
</style>

<template>
  <div id="app" 
    :class="{ 
        'slide-active': state.slideNavShow,
        'without-bottom-nav': !state.globalNavShow
        }"
>
    <router-view></router-view>
    <div class="slide-nav">
        <div class="cov-slide-user">
            <div class="cov-slide-avatar"></div>
            <div class="cov-slide-user-info">
                <div class="cov-slide-user-name">Awe</div>
                <div class="cov-slide-user-level">
                    <div class="cov-slide-user-level-icon sun"></div>
                    <div class="cov-slide-user-level-icon"></div>
                </div>
            </div>
        </div>
    </div>
    <nav class="cov-nav-bar" v-show="state.globalNavShow">
      <div class="cov-nav-bar-item" v-link="{ name: 'message', activeClass: 'active'}">
          <span>消息</span>
      </div>
      <div class="cov-nav-bar-item" v-link="{ name: 'contact', activeClass: 'active'}">
          <span>联系人</span>
      </div>
      <div class="cov-nav-bar-item" v-link="{ name: 'infocenter', activeClass: 'active'}">
          <span>动态</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data () {
        return {
            state: {
                slideNavShow: false,
                globalNavShow: true
            }
        }
    },
    created () {
        this.$Cov.setRoot(this)
    }
}
</script>
