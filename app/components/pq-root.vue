<script lang="ts" setup>
import type { AsTag } from 'reka-ui'
import type { Component } from 'vue'

interface Props {
  as?: AsTag | Component
  class?: string
}

const props = defineProps<Props>()

const variants = tv({
  base: 'absolute inset-0 isolate h-dvh overflow-y-auto',
})

const rootTag = computed(() => props.as || 'div')
const locale = 'ko-KR' // TODO: 현지화
const dir = 'ltr' // TODO: 현지화
</script>

<template>
  <reka-config-provider :dir="dir" :lang="locale" :scroll-body="false">
    <reka-primitive :as="rootTag" :class="variants(props)" v-bind="$attrs">
      <slot />
    </reka-primitive>
  </reka-config-provider>
</template>
