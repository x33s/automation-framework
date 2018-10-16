<template>
    <!-- 首页 Start -->
    <div class="mainContainer page01">
        <!-- dataCon01 Start -->
        <div class="dataCon01">
            <a class="sprite_btn01" id="showPop01Btn"></a>
        </div>
        <!-- dataCon01 End -->
        <!-- modal Start -->
        <modal v-bind:show="true">
            <div class="pop_con01">
                <div class="titleBox01">
            <span class="txt">
                选择你想加入彩蛋的<span>材料</span>，<br/>
                让好友们猜猜看~
            </span>
                </div>
                <div class="popBox01">
                    <div class="eggChoiceBox">
                        <div class="eggBox" id="eggBox">
                            <div class="item" v-for="(food,index) in foods"  v-bind:class="'pos0'+(index+1)" v-bind:style="{left:food.left+'px',top:food.top+'px'}" v-on:click="clickFood(index)">
                                <div class="foodBox">
                                <i v-bind:class="'sprite_food0'+(index+1)"></i>
                                </div>
                                <div class="txt">
                                    {{food.txt}}
                                </div>
                            </div>
                        </div>
                        <div class="coverBox" id="coverBox" v-if="foodsCover" v-on:click="closeCoverBox">
                            <i class="sprite_ele06"></i>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        <!-- modal End -->
        <!-- 弹框-选材料弹窗 Start -->
        <!-- 弹框-选材料弹窗 End -->
        <!-- 弹框-加料登记 Start -->
        <div class="pop_module" id="popBox02">
            <div class="com_pop_con pop_con01">
                <div class="closeBtn closeBtn01"></div>
                <div class="titleBox01">
            <span class="txt">
                <span>料已选好</span>，<br/>加料前请先登记哟~
            </span>
                </div>
                <div class="popBox01">
                    <div class="eggChoiceBox">
                        <div class="foodItem" id="foodItem"></div>
                        <div class="loginBox">
                            <div class="com_input02">
                                <input type="number" placeholder="输入广东移动号码" id="telephone">
                            </div>
                            <div class="com_input02">
                                <input type="number" placeholder="输入验证码" id="code">
                                <a href="#" class="searchBtn">获取验证码</a>
                            </div>
                        </div>
                        <div class="btnCon">
                            <a class="sprite_btn07" id="loginBtn"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 弹框-加料登记 End -->
        <!-- 弹框-奖励资格查询 Start -->
        <div class="pop_module" id="popBox03">
            <div class="com_pop_con pop_con01">
                <div class="closeBtn closeBtn01"></div>
                <div class="titleBox02">
            <span class="txt">
                奖励资格查询
            </span>
                </div>
                <div class="popBox01">
                    <div class="checkBox">
                        <div class="com_input01">
                            <input type="text" placeholder="请输入广东移动号码">
                            <a href="#" class="searchBtn">查询</a>
                        </div>
                        <div class="txtBox01">
                            <div class="txt01">
                                查询结果：
                            </div>
                            <div class="txt02">
                                该号码获得“充值送XXXX”
                            </div>
                            <div class="txt03">
                                奖励资格
                            </div>
                        </div>
                        <div class="txtBox02">
                            *请确保使用中奖号码在2017年<span>4月30日</span>前登录“广东移动手机营业厅”APP，并成功充值话费<span>30元及以上</span>可获得奖励。中奖结果以“奖励资格查询”页结果为准。
                        </div>
                        <div class="btnCon">
                            <a href="#" class="sprite_btn02 closeBtn"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 弹框-奖励资格查询 End -->
        <!-- 弹框-游戏规则 Start -->
        <div class="pop_module" id="popBox04">
            <div class="com_pop_con pop_con01">
                <div class="closeBtn closeBtn01"></div>
                <div class="titleBox02">
            <span class="txt">
                游戏规则
            </span>
                </div>
                <div class="popBox01">
                    <div class="ruleList">
                        <div class="list">
                            <div class="item">
                                （一）优惠内容<br/>
                                活动期间，目标客户参与互动猜蛋游戏，将有机会获得100M流量券，限量100万份。同1个手机号码同时参与加料和猜蛋仅可获奖1次，数量有限，先到先得，送完即止。
                            </div>
                            <div class="item">
                                （二）活动奖品<br/>
                                100M流量券（有效期20天）
                            </div>
                            <div class="item">
                                （三）活动规则<br/>
                                如何参与：<br/>
                                （1）进入游戏首页，客户参与彩蛋加料并让好友猜蛋，可有机会获得“充值送100M流量”资格；<br/>
                                （2）好友进入猜蛋页面，猜中彩蛋内容，可有机会获得“充值送100M流量”资格。
                            </div>
                        </div>
                        <div class="btnCon">
                            <a href="#" class="sprite_btn02 closeBtn"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 弹框-游戏规则 End -->
        <!-- 弹框-加料后loading Start -->
        <div class="pop_module" id="popBox05">
            <div class="com_pop_con pop_con04">
            </div>
        </div>
        <!-- 弹框-加料后loading End -->
        <!-- 弹框-该号码已领奖品 Start -->
        <div class="pop_module">
            <div class="com_pop_con pop_con03">
                <div class="closeBtn closeBtn01"></div>
                <div class="popBox02">
                    <table>
                        <tr>
                            <td>
                                <div class="txtBox01">
                                    该号码已领奖品，无需重复领取，可以继续加料哦 。
                                </div>
                                <div class="txtBox02">
                                    查看结果请点击<a href="#">“奖励资格查询”</a>。
                                </div>
                                <div class="txtBox03">
                                    *话费充值9.5折，更多优惠尽在<a href="#">“广东移动手机营业厅”>></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- 弹框-该号码已领奖品 End -->
        <!-- 弹框-该号码已领奖品 Start -->
        <div class="pop_module">
            <div class="com_pop_con pop_con03">
                <div class="closeBtn closeBtn01"></div>
                <div class="popBox02">
                    <table>
                        <tr>
                            <td>
                                <div class="txtBox01">
                                    该号码已领奖品，无需重复领取，可以继续猜猜猜。
                                </div>
                                <div class="txtBox02">
                                    查看结果请点击<a href="#">“奖励资格查询”</a>。
                                </div>
                                <div class="txtBox03">
                                    *话费充值9.5折，更多优惠尽在<a href="#">“广东移动手机营业厅”>></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- 弹框-该号码已领奖品 End -->
        <!-- 弹框-温馨提醒 Start -->
        <div class="pop_module">
            <div class="com_pop_con pop_con03">
                <div class="closeBtn closeBtn01"></div>
                <div class="popBox02">
                    <table>
                        <tr>
                            <td>
                                <div class="txtBox04">
                                    温馨提醒：
                                </div>
                                <div class="txtBox01">
                                    你已成功猜蛋，一个手机号码同时参与猜蛋和加料仅可获奖一次，但欢迎你继续玩下去哦~
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- 弹框-温馨提醒 End -->
        <!-- 弹框-登录提示01 Start -->
        <div class="pop_module">
            <div class="com_pop_con pop_con03">
                <div class="closeBtn closeBtn01"></div>
                <div class="popBox02">
                    <table>
                        <tr>
                            <td>
                                <div class="txtBox01">
                                    啊哦~你的号码有误，请重新输入！
                                </div>
                                <div class="txtBox03" style="margin-top:30px;">
                                    *话费充值9.5折，更多优惠尽在<a href="#">“广东移动手机营业厅”>></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- 弹框-登录提示01 End -->
        <!-- 弹框-登录提示02 Start -->
        <div class="pop_module">
            <div class="com_pop_con pop_con03">
                <div class="closeBtn closeBtn01"></div>
                <div class="popBox02">
                    <table>
                        <tr>
                            <td>
                                <div class="txtBox01">
                                    额~我们需要正确的验证码！
                                </div>
                                <div class="txtBox03" style="margin-top:30px;">
                                    *话费充值9.5折，更多优惠尽在<a href="#">“广东移动手机营业厅”>></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- 弹框-登录提示02 End -->
        <!-- 弹框-登录提示03 Start -->
        <div class="pop_module">
            <div class="com_pop_con pop_con03">
                <div class="closeBtn closeBtn01"></div>
                <div class="popBox02">
                    <table>
                        <tr>
                            <td>
                                <div class="txtBox01">
                                    Sorry~活动仅限受邀客户参加哦！
                                </div>
                                <div class="txtBox03" style="margin-top:30px;">
                                    *话费充值9.5折，更多优惠尽在<a href="#">“广东移动手机营业厅”>></a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- 弹框-登录提示03 End -->
    </div>
    <!-- 首页 Start -->

</template>
<script>
    import Tween from "../../lib/Tween.min.js"
    import modal from "../components/modal.vue"
    export default {
        data () {
            return {
                foods: [
                    {
                        left: 43,
                        top: 0,
                        txt:"火腿"
                    },
                    {
                        left: 180,
                        top: 0,
                        txt:"兔子"
                    },
                    {
                        left: 319,
                        top: 0,
                        txt:"石像"
                    },
                    {
                        left: 43,
                        top: 149,
                        txt:"十字架"
                    },
                    {
                        left: 180,
                        top: 149,
                        txt:"羊肉"
                    },
                    {
                        left: 319,
                        top: 149,
                        txt:"百合花"
                    }
                ],
                foodsCover:true
            }
        },
        methods:{
            closeCoverBox:function (){
                this.foodsCover = false;
            },
            clickFood:function (index) {
                this.foods[index].left = 180;
                this.foods[index].top = -258;
            }
        },
        watch:{
            foods:function (newValue, oldValue) {
                var vm = this;
                function animate (time) {
                    requestAnimationFrame(animate)
                    TWEEN.update(time)
                }
                new TWEEN.Tween({ tweeningNumber: oldValue })
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .to({ tweeningNumber: newValue }, 500)
                        .onUpdate(function () {
                            vm.foods = this.tweeningNumber;
                        })
                        .start();
                animate()
            }
        },
        components: {
            'modal': modal
        }
    }
</script>