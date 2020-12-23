<template>
    <div class="main-container">
        <div class="main-content">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="login-container">
                        <div class="center">
                            <h1>
                                <i class="icon-leaf green"></i>
                                <span class="red">Ace</span>
                                <span class="white">Application</span>
                            </h1>
                            <h4 class="blue">&copy; Company Name</h4>
                        </div>

                        <div class="space-6"></div>

                        <div class="position-relative">
                            <div id="login-box" class="login-box visible widget-box no-border">
                                <div class="widget-body">
                                    <div class="widget-main">
                                        <h4 class="header blue lighter bigger">
                                            <i class="icon-coffee green"></i>
                                            Please Enter Your Information
                                        </h4>

                                        <div class="space-6"></div>

                                        <form>
                                            <fieldset>
                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control"
                                                                   placeholder="Username"/>
															<i class="icon-user"></i>
														</span>
                                                </label>

                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control"
                                                                   placeholder="Password"/>
															<i class="icon-lock"></i>
														</span>
                                                </label>

                                                <div class="space"></div>

                                                <div class="clearfix">
                                                    <label class="inline">
                                                        <input type="checkbox" class="ace"/>
                                                        <span class="lbl"> Remember Me</span>
                                                    </label>

                                                    <button type="button"
                                                            class="width-35 pull-right btn btn-sm btn-primary">
                                                        <i class="icon-key"></i>
                                                        Login
                                                    </button>
                                                </div>

                                                <div class="space-4"></div>
                                            </fieldset>
                                        </form>

                                        <div class="social-or-login center">
                                            <span class="bigger-110">Or Login Using</span>
                                        </div>

                                        <div class="social-login center">
                                            <a class="btn btn-primary">
                                                <i class="icon-facebook"></i>
                                            </a>

                                            <a class="btn btn-info">
                                                <i class="icon-twitter"></i>
                                            </a>

                                            <a class="btn btn-danger">
                                                <i class="icon-google-plus"></i>
                                            </a>
                                        </div>
                                    </div><!-- /widget-main -->

                                    <div class="toolbar clearfix">
                                        <div>
                                            <a href="#" onclick="show_box('forgot-box'); return false;"
                                               class="forgot-password-link">
                                                <i class="icon-arrow-left"></i>
                                                I forgot my password
                                            </a>
                                        </div>

                                        <div>
                                            <a href="#" onclick="show_box('signup-box'); return false;"
                                               class="user-signup-link">
                                                I want to register
                                                <i class="icon-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div><!-- /widget-body -->
                            </div><!-- /login-box -->

                            <div id="forgot-box" class="forgot-box widget-box no-border">
                                <div class="widget-body">
                                    <div class="widget-main">
                                        <h4 class="header red lighter bigger">
                                            <i class="icon-key"></i>
                                            Retrieve Password
                                        </h4>

                                        <div class="space-6"></div>
                                        <p>
                                            Enter your email and to receive instructions
                                        </p>

                                        <form>
                                            <fieldset>
                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="email" class="form-control"
                                                                   placeholder="Email"/>
															<i class="icon-envelope"></i>
														</span>
                                                </label>

                                                <div class="clearfix">
                                                    <button type="button"
                                                            class="width-35 pull-right btn btn-sm btn-danger">
                                                        <i class="icon-lightbulb"></i>
                                                        Send Me!
                                                    </button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div><!-- /widget-main -->

                                    <div class="toolbar center">
                                        <a href="#" onclick="show_box('login-box'); return false;"
                                           class="back-to-login-link">
                                            Back to login
                                            <i class="icon-arrow-right"></i>
                                        </a>
                                    </div>
                                </div><!-- /widget-body -->
                            </div><!-- /forgot-box -->

                            <div id="signup-box" class="signup-box widget-box no-border">
                                <div class="widget-body">
                                    <div class="widget-main">
                                        <h4 class="header green lighter bigger">
                                            <i class="icon-group blue"></i>
                                            New User Registration
                                        </h4>

                                        <div class="space-6"></div>
                                        <p> Enter your details to begin: </p>

                                        <form>
                                            <fieldset>
                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="email" class="form-control"
                                                                   placeholder="Email"/>
															<i class="icon-envelope"></i>
														</span>
                                                </label>

                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control"
                                                                   placeholder="Username"/>
															<i class="icon-user"></i>
														</span>
                                                </label>

                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control"
                                                                   placeholder="Password"/>
															<i class="icon-lock"></i>
														</span>
                                                </label>

                                                <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control"
                                                                   placeholder="Repeat password"/>
															<i class="icon-retweet"></i>
														</span>
                                                </label>

                                                <label class="block">
                                                    <input type="checkbox" class="ace"/>
                                                    <span class="lbl">
															I accept the
															<a href="#">User Agreement</a>
														</span>
                                                </label>

                                                <div class="space-24"></div>

                                                <div class="clearfix">
                                                    <button type="reset" class="width-30 pull-left btn btn-sm">
                                                        <i class="icon-refresh"></i>
                                                        Reset
                                                    </button>

                                                    <button type="button"
                                                            class="width-65 pull-right btn btn-sm btn-success">
                                                        Register
                                                        <i class="icon-arrow-right icon-on-right"></i>
                                                    </button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>

                                    <div class="toolbar center">
                                        <a href="#" onclick="show_box('login-box'); return false;"
                                           class="back-to-login-link">
                                            <i class="icon-arrow-left"></i>
                                            Back to login
                                        </a>
                                    </div>
                                </div><!-- /widget-body -->
                            </div><!-- /signup-box -->
                        </div><!-- /position-relative -->
                    </div>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div>
    </div>
</template>

<script>
    import {login} from '@/api/user'

    export default {
        name: 'LoginIndex',
        components: {},
        props: {},
        data() {
            return {
                user: {
                    username: 'wangle', // 用户名
                    password: '123456', // 密码
                    agree: false // 是否同意协议
                },
                // checked: false, // 是否同意协议的选中状态
                loginLoading: false, // 登录的 loading 状态
                formRules: { // 表单验证规则配置
                    // 要验证的数据名称：规则列表[]
                    username: [
                        // trigger 用来配置触发校验的时机，有两个选项，change 是当输入的内容发送变化的时候，blur 当失去焦点的时候
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                    ],
                    agree: [
                        {
                            // 自定义校验规则：https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze
                            // 验证通过：callback()
                            // 验证失败：callback(new Error('错误消息'))
                            // validator 验证函数不是你来调用的，而是当 element 表单触发验证的时候它会自己内部调用
                            // 所以你只需要提供校验函数处理逻辑就可以了
                            //   通过：callback()
                            validator: (rule, value, callback) => {
                                if (value) {
                                    // 验证通过
                                    callback()
                                } else {
                                    // 验证失败
                                    callback(new Error('请同意用户协议'))
                                }
                            },
                            // message: '请勾选同意用户协议',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {
            onLogin() {
                // 获取表单数据（根据接口要求绑定数据）
                // const user = this.user

                // 表单验证
                // validate 方法是异步的
                this.$refs['login-form'].validate(valid => {
                    // 如果表单验证失败，停止请求提交
                    if (!valid) {
                        return
                    }

                    // 验证通过，请求登录
                    this.login()
                })
            },

            login() {
                // 开启登陆中 loading...
                this.loginLoading = true

                // 对于代码中的请求操作
                // 1、接口请求可能需要重用
                // 2、实际工作中，接口非常容易变动，改起来麻烦
                // 我们建议的做法是把所有的请求都封装成函数然后统一的组织到模块中进行管理
                // 这样做的好处就是：管理维护更方便，也好重用
                login(this.user).then(res => {
                    console.log(res)

                    // 登录成功
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    })

                    // 关闭 loading
                    this.loginLoading = false

                    // 将接口返回的用户相关数据放到本地存储，方便应用数据共享
                    // 本地存储只能存储字符串
                    // 如果需要存储对象、数组类型的数据，则把他们转为 JSON 格式字符串进行存储
                    window.localStorage.setItem('user', JSON.stringify(res.data.data))

                    // 跳转到首页
                    // this.$router.push('/')

                    this.$router.push({
                        name: 'home'
                    })
                }).catch(err => { // 登录失败
                    console.log('登录失败', err)
                    this.$message.error('登录失败，用户名或密码错误')

                    // 关闭 loading
                    this.loginLoading = false
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .login-container {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url("./login_bg.jpg") no-repeat;
        background-size: cover;

        .login-form-wrap {
            min-width: 300px;
            padding: 30px 50px 10px;
            background-color: #fff;

            .login-head {
                display: flex;
                justify-content: center;

                .logo {
                    width: 200px;
                    height: 57px;
                    background: url("./logo_index.png") no-repeat;
                    background-size: contain;
                }
            }

            .login-form {
                .login-btn {
                    width: 100%;
                }
            }
        }
    }
</style>
