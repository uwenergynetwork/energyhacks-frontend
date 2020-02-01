<template>
    <a :href="href" @click.prevent="scroll">
        <slot></slot>
    </a>
</template>

<script>
import Vue from "vue";
    export default  Vue.extend({
        props: ['href'],
        methods: {
            scroll() {
                // For older browsers, consider pulling in a polyfill.
                // https://www.npmjs.com/package/smoothscroll-polyfill
                document.querySelector(this.href)
                        .scrollIntoView({ behavior: 'smooth' });
            }
        }
    })
</script>