<template>
    <div>
        <a :href="href" @click="wave($event)" 
        class="r-wave-btn" 
        :style="btnStyle()">
            <div v-if="text">{{text}}</div>
            <div v-else><slot></slot></div>
            <span v-for="id of ripples" 
            :key="id" 
            :style="waveStyle()">
            </span>
        </a>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name: 'r-wave-btn',
    props: {
        color: {
            type: String,
            default: ''
        },
        btnColor: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: '#'
        }
    },
    data() {
        return {
            ripples: [],
            mousePos: {
                x: 0,
                y: 0
            }
        };
    },
    methods:{
        wave: function (e) {
            this.ripples.push(nanoid());
            this.mousePos.x = e.clientX - e.target.offsetLeft;
            this.mousePos.y = e.clientY - e.target.offsetTop;;
            setTimeout(() => {
                this.ripples.shift();
            }, 1000);
        },

        waveStyle: function () {
            let res = {};
            if (this.mousePos) {
                res.left = this.mousePos.x + 'px';
                res.right = this.mousePos.y + 'px';
            }
            return res;
        },
        btnStyle: function () {
            let res = {};
            if (this.btnColor) {
                res.background = this.btnColor;
            }
            if (this.color) {
                res.color = this.color;
            }
            return res;
        }
    }
    
}
</script>