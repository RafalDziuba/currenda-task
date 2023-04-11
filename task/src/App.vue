<template>
  <div>
    <my-button :color="'primary'" :size="'small'">
      Nieaktywny przycisk
      <template #append>dodatkowa treść</template>
    </my-button>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>
