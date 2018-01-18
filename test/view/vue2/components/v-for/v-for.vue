<template>
  <div>
    <ul>
      <li v-for="item in itemsObj" :key="item.index">{{item}}, {{item.label}}</li>
    </ul>
  </div>
</template>
<script>
//  v-for可以用于遍历对象
export default {
  data() {
    return {
      itemsObj: { // v-for可以遍历对象
        a: {
          label: "A",
          index: 0
        },
        b: {
          label: "B",
          index: 1
        },
        c: {
          label: "C",
          index: 1
        }
      }
    };
  }
};
</script>
<style lang="scss">

</style>
