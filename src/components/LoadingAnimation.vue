<template>
  <span>
    <v-progress-circular
    :size="70"
    :width="7"
    color="primary"
    class="text-center"
    indeterminate />
    <div class="pa-6 text-center"> {{ message }} </div>
  </span>
</template>

<script>
export default {
  name: 'LoadingAnimation',

  props: {
    message: {
      type: String,
      default() {
        return 'Carregando...';
      },
    },
  },
};
</script>
