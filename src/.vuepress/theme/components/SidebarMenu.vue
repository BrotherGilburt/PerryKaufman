<template>
  <aside class="sidebar">
    <navigation-menu :type="'sidebar'" />
    <div class="sidebar-list-wrapper">
      <h2 v-if="sidebar.title" class="sidebar-header">{{ sidebar.title }}</h2>
      <ul class="sidebar-list">
        <template v-for="item in sidebar.items">
          <sidebar-group v-if="item.children" :key="item.title" :group="item" />
          <sidebar-item v-else :key="item.title" :item="item" />
        </template>
      </ul>
    </div>
  </aside>
</template>

<script>
import NavigationMenu from "./NavigationMenu.vue";
import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";

export default {
  components: {
    NavigationMenu,
    SidebarItem,
    SidebarGroup
  },
  props: {
    sidebar: {
      required: true,
      type: Object,
      validator(sidebar) {
        return sidebar.items && sidebar.items instanceof Array;
      }
    }
  }
};
</script>

<style src="../styles/sidebar.styl" />
