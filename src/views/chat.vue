<style>
    .cov-view-left-btn {
        font-size: 1rem;
        color: #fff;
        height: 2rem;
        margin: .5rem 0 0 0;
        background: none;
        border: none;
    }
    .cov-chat .cov-view-header-right,
    .cov-chat .cov-view-header-left {
        width: 7rem;
    }
    .cov-chat .cov-view-header-right {
        text-align: right;
    }
    .cov-chat-flow {
        margin: 0 0 3.5rem 0;
        padding: .01rem 0 0 0;
    }
    .cov-chat-title {
        line-height: 3rem;
    }
    .cov-chat-item {
        display: flex;
        margin: 1rem .5rem;
    }
    .cov-chat-item.right {
        flex-direction: row-reverse;
    }
    .cov-chat-item-avatar {
        width: 2rem;
        height: 2rem;
        background-size: cover;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .cov-chat-item-content {
        background: #26b8f2;
        color: #fff;
        padding: .5rem;
        border-radius: .5rem;
        font-size: 1rem;
        margin: 0 1rem;
        word-wrap: break-word;
        max-width: 10rem;
    }
    .cov-chat-input-container {
        display: flex;
        background: #efefef;
        height: 3rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
    }
    .cov-chat-send {
        width: 5rem;
        text-align: center;
        flex-shrink: 0;
    }
    .cov-chat-send-btn {
        color: #fff;
        background: #26b8f2;
        border: none;
        height: 2rem;
        width: 4rem;
        margin-top: .5rem;
        border-radius: .4rem;
    }
    .cov-chat-input {
        width: 100%;
        padding: 0 0 0 .5rem;
    }
    .cov-chat-inputing {
        width: 100%;
        height: 2rem;
        border: none;
        border-radius: .5rem;
        margin-top: .5rem;
        outline: none;
        font-size: 1rem;
        line-height: 2rem;
        padding: 0 .5rem;
        box-sizing: border-box;
    }
    .cov-view-left-btn-icon {
        height: 1rem;
        vertical-align: text-bottom;
        margin-right: .2rem;
    }
</style>

<template>
    <div class="cov-view cov-chat">
        <header class="cov-view-header">
            <div class="cov-view-header-left">
                <button class="cov-view-left-btn" v-link="{ name: 'message' }"> <img src="../assets/arrow.svg" class="cov-view-left-btn-icon">消息(99+)</button>
            </div>
            <div class="cov-view-header-center">
                <span class="cov-chat-title">长者</span>
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
            <div class="cov-chat-flow">
                <div class="cov-chat-item" :class="{ 'right': chat.right }" v-for="chat in chats">
                    <div class="cov-chat-item-avatar" :style="{ 'background-image': 'url(' + chat.avatar +')'}"></div>
                    <div class="cov-chat-item-content-container">
                        <div class="cov-chat-item-content">
                            <span>{{chat.content}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cov-chat-input-container">
                <div class="cov-chat-input">
                    <input type="text" class="cov-chat-inputing">
                </div>
                <div class="cov-chat-send">
                    <button class="cov-chat-send-btn">发送</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        route: {
            data () {
                this.$Cov.hideGlobalNav()
            }
        },
        data () {
            return {
                chats: [{
                    right: true,
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333233333233333233333233333233333233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333233333233333233333233333233333233333233333233333233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    right: true,
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    right: true,
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233233333233333233333233333233333233333233333233333233333233333333233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }, {
                    avatar: 'http://tp1.sinaimg.cn/1765813240/180/40054316852/1',
                    content: '233333'
                }]
            }
        }
    }
</script>