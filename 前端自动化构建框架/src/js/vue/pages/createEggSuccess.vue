<template>
    <!-- 首页 Start -->
    <div class="mainContainer page02">
        <!-- dataCon03 Start -->
        <div class="dataCon03"></div>
        <!-- dataCon03 End -->
        <!-- innerPageBox Start -->
        <div class="innerPageBox">
            <!-- dataCon04 Start -->
            <div class="dataCon04">
                <div class="txt01">
                    哇，棒棒哒！加料完成！
                </div>
                <div class="txt02">
                    你已获得“<b>充值送100M流量</b>”资格，<br/>
                    喊好友们来猜蛋，TA也可获得奖励哦~
                </div>
            </div>
            <!-- dataCon04 Start -->
            <!-- dataCon05 Start -->
            <div class="dataCon05">
                <i class="sprite_ele02"></i>
                <a class="sprite_btn03" id="shareBtn"></a>
            </div>
            <!-- dataCon05 Start -->
            <!-- dataCon06 Start -->
            <div class="dataCon06">
                如何领取奖品：<br/>
                （1）获得“充值送100M流量”资格的客户请于2017年4月30日前用参与活动的手机号码登录“<span>广东移动手机营业厅</span>”<span>APP</span>充值30元及以上。<br/>
                （2）完成充值后请于2017年5月10日-31日用参与活动的手机号码登录“广东移动手机营业厅”APP（5.0.1及以上版本）-优惠券兑换领取，逾期不兑换将自动失效。最多限获赠一次。
            </div>
            <!-- dataCon06 Start -->
            <!-- dataCon07 Start -->
            <div class="dataCon07">
                <div class="dataCon07_title">
                    <i class="sprite_ele03"></i>
                </div>
                <div class="dataCon07_txt">
                    都~没~有~，快让好友们来猜吧~
                </div>
                <div class="dataCon07_box">
                    <div class="item">
                        <img v-bind:src="src" alt="">
                    </div>
                    <div class="item">
                        <img v-bind:src="src" alt="">
                    </div>
                    <div class="item">
                        <img v-bind:src="src" alt="">
                    </div>
                    <div class="item">
                        <img v-bind:src="src" alt="">
                    </div>
                    <div class="item">
                        <img v-bind:src="src" alt="">
                    </div>
                    <div class="item">
                        <img v-bind:src="src" alt="">
                    </div>
                </div>
            </div>
            <!-- dataCon07 Start -->
        </div>
        <!-- innerPageBox End -->
        <!-- dataCon02 Start -->
        <div class="dataCon02">
            <a href="#" class="item">
                <i class="sprite_icon01"></i>
                <span class="txt">游戏规则</span>
            </a>
            <a href="#" class="item">
                <i class="sprite_icon02"></i>
                <span class="txt">奖励资格查询</span>
            </a>
            <i class="sprite_ele01"></i>
        </div>
        <!-- dataCon01 End -->
    </div>
    <!-- 首页 Start -->
</template>
<script>
    export default {
        data () {
            return {
                src: '../images/page_ele06.png'
            }
        }
    }
</script>