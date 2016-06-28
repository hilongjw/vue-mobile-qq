<style>
    .cov-view-header {
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 3rem;
        background-color: rgb(38,184,242);
        color: #fff;
        padding: 0 .5rem;
        box-sizing: border-box;
    }
    .view-container {
        height: calc(100vh - 7rem);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .cov-view-header-right {
        flex-shrink: 0;
    }
    .cov-view-header-left {
        flex-shrink: 0;
    }
    .cov-view-header-center {
        width: 100%;
        text-align: center;
    }
    .cov-header-avatar {
        background-image: url(../assets/cov.jpeg);
        height: 2rem;
        width: 2rem;
        background-size: cover;
        border-radius: 50%;
        margin: .5rem 0;
    
    }
    .cov-message-sub-nav-item {
        border: 1px solid #fff;
        height: 1.80rem;
        margin: .6rem;
        width: 4rem;
        line-height: 1.8rem;
        text-align: center;
        display: inline-block;
    }
    .cov-message-sub-nav-item.left {
        margin-right: 0;
        border-radius: .4rem 0 0 .4rem;
    }
    .cov-message-sub-nav-item.right{
        margin-left: 0;
        border-left: 0;
        border-radius: 0 .4rem .4rem 0;
    }
    .cov-message-sub-nav-item.active {
        background-color: #fff;
        color: #26b8f2;
    }
    .cov-message-sub-nav-plus-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-top: .875rem;
    }
    .cov-message-search-box {
        padding: .3rem .5rem;
        background: #fff;
        margin-bottom: -1px;
    }
    .cov-message-search {
        display: flex;
        justify-content: center;
        background-color: #eaeaea;
        height: 2rem;
        border-radius: .4rem;
        width: 100%;
        line-height: 2rem;
        color: #a7a7a7;
        text-align: center;
    }
    .cov-message-search-icon {
        height: 1rem;
        width: 1rem;
        margin: .45rem .2rem 0 0;
    }
    .cov-loading {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: #4a4a4a;
        color: #fff;
        text-align: center;
        line-height: 3rem;
    }
</style>

<template>
    <div class="cov-view cov-message">
        <header class="cov-view-header">
            <div class="cov-view-header-left">
                <div class="cov-header-avatar"></div>
            </div>
            <div class="cov-view-header-center">
                <div class="cov-message-sub-nav-item left active">消息</div><div class="cov-message-sub-nav-item right">电话</div>
            </div>
            <div class="cov-view-header-right">
                <svg class="cov-message-sub-nav-plus-icon" viewBox="0 0 169 169" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
                    <title>msg-plus</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                        <path d="M90,72 L90,6.00237186 C90,2.68870899 87.3137085,0 84,0 C80.6930342,0 78,2.68735342 78,6.00237186 L78,72 L6.00237186,72 C2.68870899,72 0,74.6862915 0,78 C0,81.3069658 2.68735342,84 6.00237186,84 L78,84 L78,162.997628 C78,166.311291 80.6862915,169 84,169 C87.3069658,169 90,166.312647 90,162.997628 L90,84 L162.997628,84 C166.311291,84 169,81.3137085 169,78 C169,74.6930342 166.312647,72 162.997628,72 L90,72 Z" id="msg-plus-1"></path>
                        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="169" height="169" fill="white">
                            <use xlink:href="#msg-plus-1"></use>
                        </mask>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <use id="msg-plus" stroke="#FFFFFF" mask="url(#mask-2)" stroke-width="2" fill="#FFFFFF" xlink:href="#msg-plus-1"></use>
                    </g>
                </svg>
            </div>
        </header>
        <div class="view-container">
            <div class="cov-loading" >释放立即刷新</div>
            <div class="cov-message-search-box" :style="{ 'transform': 'translate3d(0,'+ top + 'px,0)' }">
                <div class="cov-message-search">
                    <img class="cov-message-search-icon" src="../assets/search-icon.svg">
                    <span>搜索</span>
                </div>
            </div>
            <div class="cov-message-chat-box" :style="{ 'transform': 'translate3d(0,'+ top + 'px,0)' }">
                <message v-link="{ name: 'chat' }" v-for="item in messages" :message="item"></message>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '../components/message.vue'

    export default {
        route: {
            data () {
                this.$Cov.showGlobalNav()
                this.$swipe.listen('swipe-right', null, () => {
                    this.$root.state.slideNavShow = true
                    this.$swipe.setGlobal()
                })
                this.$swipe.listen('swipe-left', null, () => {
                    this.$swipe.cancelGlobal()
                    this.$root.state.slideNavShow = false
                })
                this.$swipe.listen('swipe-up', null, () => {
                    console.log('up')
                })
                this.$swipe.listen('swipe-down', null, () => {
                    this.refresh()
                    console.log('down')
                })
                this.$swipe.listen('swiping', null, (start, end) => {
                    if (end.y - start.y > 20) {
                        if (this.swipingTimer) {
                            clearTimeout(this.swipingTimer)
                        }
                        this.swipingTimer = setTimeout(() => {
                            this.moving(0)
                            this.swipingTimer = null
                        }, 200)
                        this.refresh()
                        this.moving(end.y - start.y - 20)
                    }
                })
                this.$el.getElementsByClassName('view-container')[0].addEventListener('scroll', () => {
                    this.$swipe.update()
                }, false)
            },
            deactivate () {
                this.$swipe.clear()
            }
        },
        data () {
            return {
                swipingTimer: null,
                refreshTimer: null,
                top: 0,
                loading: false,
                messages: [{
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: 'JavaScript performance updates in Microsoft Edge and',
                    time: '上午 12:20',
                    count: 99
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: '卧槽',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: 'JavaScript performance updates in Microsoft Edge and',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: '卧槽',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: 'JavaScript performance updates in Microsoft Edge and',
                    time: '上午 12:20',
                    count: 99
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: '卧槽',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: 'JavaScript performance updates in Microsoft Edge and',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: '卧槽',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: 'JavaScript performance updates in Microsoft Edge and',
                    time: '上午 12:20',
                    count: 99
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: '卧槽',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: 'JavaScript performance updates in Microsoft Edge and',
                    time: '上午 12:20',
                    count: 10
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    title: 'Awe',
                    preview: '卧槽',
                    time: '上午 12:20',
                    count: 10
                }]
            }
        },
        components: {
            Message
        },
        methods: {
            moving (len) {
                this.top = len
            },
            refresh () {
                if (this.refreshTimer) {
                    clearTimeout(this.refreshTimer)
                }
                this.refreshTimer = setTimeout(() => {
                    this.loading = false
                    this.refreshTimer = false
                }, 2000)
                this.loading = true
            }
        }
    }
</script>