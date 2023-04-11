<template>
  <v-btn v-bind="$attrs">
    <slot></slot>
    <template v-for="(slot, index) of Object.keys($slots)" :key="index" v-slot:[slot]>
    <slot :name="slot"></slot>
  </template>
  </v-btn>
</template>


