<template>
  <div class="sidebar-left">
    <div class="sidebar">
      <div class="sidebar-file-manager">
        <div class="sidebar-inner">
          <div class="sidebar-list">
            <div class="list-group">
              <div class="my-drive jstree jstree-1 jstree-default" role="tree" tabindex="0">
                <ul class="jstree-container-ul jstree-children jstree-no-dots" role="group">
                  <li role="none" id="j1_1" class="jstree-node jstree-closed jstree-last">
                    <i class="jstree-icon jstree-ocl" role="presentation"></i
                    ><a class="jstree-anchor" href="#" tabindex="-1" role="treeitem" id="j1_1_anchor"
                      ><i
                        class="jstree-icon jstree-themeicon far fa-folder font-medium-1 jstree-themeicon-custom"
                        role="presentation"
                      ></i
                      >My Drive</a
                    >
                  </li>
                </ul>
              </div>
              <a href="#" class="list-group-item list-group-item-action active">
                <icon-star :width="14" :height="14" />
                <span class="align-middle">Important</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <icon-clock :width="14" :height="14"></icon-clock>
                <span class="align-middle">Recents</span>
              </a>
            </div>
            <div class="list-group list-group-labels">
              <h6 class="section-label px-2 mb-1">Frontend</h6>
              <div
                class="list-group-item list-group-item-action cursor-pointer"
                @click="handleClick(index)"
                :class="type_focus == category.typeCategory ? 'active' : ''"
                v-for="(category, index) in listCategory"
                :key="'category' + index"
              >
                <span class="align-middle">{{ category.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClock from '../../components/Icon/IconClock.vue';
import IconStar from '../../components/Icon/IconStar.vue';
export default {
  name: 'sidebar_left',
  components: {
    IconStar,
    IconClock
  },
  data: () => ({
    listCategory: [
      { name: 'All', typeCategory: 0 },
      { name: 'HTML', typeCategory: 1 },
      { name: 'VueJS', typeCategory: 2 },
      { name: 'ReactJS', typeCategory: 3 }
    ],
    type_focus: 0
  }),
  methods: {
    handleClick(type) {
      this.type_focus = type;
      this.$eventBus.$emit('UPDATE_CATEGORY', type);
    }
  }
};
</script>

<style></style>
