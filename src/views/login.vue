<template>
    <div class="login">
        <form class="login-wrap">
            <img class="avatar" src="../assets/images/default.png">
            <!-- 有错误信息时展示 -->
            <!-- <div class="alert alert-danger">
              <strong>错误！</strong> 用户名或密码错误！
            </div> -->
            <div class="form-group">
                <label for="email" class="sr-only">邮箱</label>
                <input id="email" type="email" class="form-control" placeholder="邮箱" autofocus>
            </div>
            <div class="form-group">
                <label for="password" class="sr-only">密码</label>
                <input id="password" type="password" class="form-control" placeholder="密码">
            </div>
            <a class="btn btn-primary btn-block" href="index.html">登 录</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    @import '../assets/css/admin.css'
</style>