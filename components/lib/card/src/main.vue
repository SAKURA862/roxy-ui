<template>
    <div class="r-card" :style="width ? { width: width + 'px'} : { } ">
        <div class="r-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
            <img :src="imgSrc" alt="img">
        </div>
        <div v-if="summary" class="r-card-summary">
            {{summary}}
        </div>
        <div v-else class="r-card-summary">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'r-card',
    props: {
        width: { // 卡片宽度
            type: Number,
            default: 0
        },
        imgSrc: { // 卡片图片链接
            type: String,
            default: ''
        },
        imgHeight: { // 卡片图片高度
            type: Number,
            default: 0
        },
        summary: { // 卡片描述
            type: String,
            default: ''
        }
    }
}
</script>