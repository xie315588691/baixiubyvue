<template>
    <div class="aside">
        <div class="profile">
            <img class="avatar" src="../assets/images/avatar.jpg">
            <h3 class="name">布头儿</h3>
        </div>
        <ul class="nav">
            <router-link tag="li" to="/index" @click.native="handleAsideClick">
                <a href="javascript:void(0);"><i class="fa fa-dashboard"></i>仪表盘</a>
            </router-link>
            <li @click="handelMenuLiClick" :class="{active:menuLi}">
                <a href="#menu-posts" :class="{collapsed:!menuLi}" data-toggle="collapse">
                    <i class="fa fa-thumb-tack"></i>文章<i class="fa fa-angle-right"></i>
                </a>
                <ul id="menu-posts" :class="{collapse:'true',in:menuLi}">
                    <router-link to="/posts" tag="li"><a href="javascript:void(0);">所有文章</a></router-link>
                    <router-link to="/postAdd" tag="li"><a href="javascript:void(0);">写文章</a></router-link>
                    <router-link to="/categories" tag="li"><a href="javascript:void(0);">分类目录</a></router-link>
                </ul>
            </li>
            <router-link @click.native="handleAsideClick" tag="li" to="/comments">
                <a href="javascript:void(0);"><i class="fa fa-comments"></i>评论</a>
            </router-link>
            <router-link @click.native="handleAsideClick" tag="li" to="/users">
                <a href="javascript:void(0);"><i class="fa fa-users"></i>用户</a>
            </router-link>
            <li @click="handleMenuSettingClick" :class="{active:menuSetting}">
                <a href="#menu-settings" :class="{collapsed:!menuSetting}" data-toggle="collapse">
                    <i class="fa fa-cogs"></i>设置<i class="fa fa-angle-right"></i>
                </a>
                <ul id="menu-settings" :class="{collapse:'true',in:menuSetting}">
                    <router-link tag="li" to="/navMenus"><a href="javascript:void(0);">导航菜单</a></router-link>
                    <router-link tag="li" to="/slides"><a href="javascript:void(0);">图片轮播</a></router-link>
                    <router-link tag="li" to="/setting"><a href="javascript:void(0);">网站设置</a></router-link>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "aside",
        data() {
            return {
                menuLi: false,
                menuSetting: false
            }
        },
        methods: {
            handleAsideClick() {
                this.menuSetting = this.menuLi = false
            },
            handelMenuLiClick() {
                this.menuLi = true
                this.menuSetting = false
            },
            handleMenuSettingClick() {
                this.menuSetting = true
                this.menuLi = false
            }
        }
    }
</script>

<style scoped>

</style>