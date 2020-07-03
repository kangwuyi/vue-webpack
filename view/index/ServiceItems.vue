<template>
    <div id="ServiceItems">
        <div class="bgw">
            <div class="clearfix box h3-box">
                <div class="t-icon"></div>
                <h3 class="t-title">出国看病服务项目</h3>
                <span class="t-info">Service Items</span>
            </div>
            <div class="box clearfix hospital">
                <!-- 服务项目list -->
                <div class="box-about mr20">
                    <img src="/noimgs/american-hospital@2x.png" width="44" height="44"/>
                    <strong>美国看病</strong>
                    <p>提供美国看病相关的医院，医生，案例前沿资讯信息。</p>
                    <a>查看详情>></a>
                </div>
                <div class="box-about mr20">
                    <img src="noimgs/japanese-hospital@2x.png" width="44" height="44"/>
                    <strong>日本医院</strong>
                    <p>日本看病，底部描述文字修改为提供日本看病相关的医院，医生，案例前沿资讯信息。</p>
                    <a>查看详情>></a>
                </div>
                <div class="box-about">
                    <img src="noimgs/born@2x.png" width="44" height="44"/>
                    <strong>美国生子</strong>
                    <p>提供美国生子相关的知名医院。</p>
                    <a>查看详情>></a>
                </div>
                <!-- 服务项目list -->
            </div>
            <div class="clearfix box h3-box">
                <div class="t-icon"></div>
                <h3 class="t-title">出国看病快速咨询</h3>
                <span class="t-info">Quick consultation</span>
            </div>
            <div class="box clearfix consult">
                <!-- 快速咨询list -->
                <div class="box-about mr20">
                    <img src="noimgs/consult-phone@2x.png" width="100" height="100"/>
                    <span>联系电话</span>
                    <p>400-100-1111</p>
                </div>
                <div class="box-about mr20">
                    <template>
                        <el-button type="text" @click="open">
                            <img src="noimgs/consult-cost@2x.png" width="100" height="100" alt="出国看病费用评估"/>
                            <span>费用评估</span>
                            <p>安全、公正、准确</p></el-button>
                    </template>
                </div>
                <div class="box-about">
                    <img src="noimgs/consult-consult@2x.png" width="100" height="100"/>
                    <span>在线咨询</span>
                    <p>快速、专业、有效</p>
                </div>
                <!-- 快速咨询list -->
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ly-service-items",
        data: function () {
            return {}
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {

        },
        methods: {
            open() {
                const h = this.$createElement;
                this.$msgbox({
                    title: '出国看病费用评估',
                    message: h('div', null, [
                        h('h3', null, '出国看病费用评估 '),
                        h('div', {style: 'color: teal'}, [
                            h('h5', null, '我想咨询的类型 '),
                        ])
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '执行中...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .box-about {
        .el-button {
            & > span {
                margin-top: 0;
                display: inline;
            }
        }
    }
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
    div#ServiceItems {
        .box-about {
            .el-button {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;

                & > span {
                    margin-top: 0;
                }
            }
        }

        .h3-box {
            padding: 40px 0 20px 0;

        }

        h3 {
            padding: 0;
            margin-right: 8px;
        }
    }
</style>