<template>
    <div class="pop_module" v-bind:class="{show:show}">
        <div class="com_pop_con">
            <div class="closeBtn"></div>
            <div class="popBox">
                <slot>
                    弹框暂无内容
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props:["show"]
    }
</script>