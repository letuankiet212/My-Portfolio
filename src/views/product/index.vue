<template>
  <default-layout>
    <div class="content-area-wrapper container-xxl p-0">
      <sidebar-left></sidebar-left>
      <div class="content-right">
        <div class="content-wrapper container-xxl p-0">
          <div class="content-header row"></div>
          <div class="content-body">
            <div class="body-content-overlay"></div>
            <div class="file-manager-main-content">
              <div class="file-manager-content-body" style="overflow: scroll">
                <div class="view-container">
                  <h6 class="files-section-title mt-25 mb-75">Products</h6>
                  <project
                    v-for="(project, index) in listProjectWithCategory"
                    :key="'project' + index"
                    :project="project"
                  ></project>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <detail-product></detail-product>
    </div>
    <modal-add></modal-add>
  </default-layout>
</template>

<script>
import defaultLayout from '../../layouts/defaultLayout.vue';
import DetailProduct from './DetailProduct.vue';
import Project from './project.vue';
import SidebarLeft from './SidebarLeft.vue';
import ModalAdd from './ModalAdd.vue';
export default {
  components: {
    defaultLayout,
    Project,
    SidebarLeft,
    DetailProduct,
    ModalAdd
  },
  data: () => ({
    listProject: [],
    keyCategory: ''
  }),

  methods: {
    setCategory(type) {
      switch (type) {
        case 1:
          this.keyCategory = 'HTML';
          break;
        case 2:
          this.keyCategory = 'VueJS';
          break;
        case 3:
          this.keyCategory = 'ReactJS';
          break;
        default:
          this.keyCategory = '';
          break;
      }
    }
  },
  computed: {
    listProjectWithCategory() {
      return this.listProject.filter((project) => {
        if (this.keyCategory == '') {
          return project;
        } else {
          return project.tag.includes(this.keyCategory);
        }
      });
    }
  },
  mounted() {
    this.$eventBus.$on('UPDATE_CATEGORY', (res) => {
      this.setCategory(res);
    });
    this.$eventBus.$on('GET_PROJECT', (res) => {
      this.listProject = res;
    });
  }
};
</script>

<style></style>
