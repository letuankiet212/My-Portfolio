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
                    @show-detail="callPopup"
                  ></project>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <detail-product></detail-product>
    </div>
  </default-layout>
</template>

<script>
import defaultLayout from '../../layouts/defaultLayout.vue';
import DetailProduct from './DetailProduct.vue';
import Project from './project.vue';
import SidebarLeft from './SidebarLeft.vue';
export default {
  components: {
    defaultLayout,
    Project,
    SidebarLeft,
    DetailProduct
  },
  data: () => ({
    listProject: [
      { name: 'Hello 1', tag: 'VueJS', image: '', time: '12:00:00' },
      { name: 'Hello 2', tag: 'ReactJS', image: '', time: '12:00:00' },
      { name: 'Hello 3', tag: 'VueJS', image: '', time: '12:00:00' },
      { name: 'Hello 4', tag: 'VueJS', image: '', time: '12:00:00' },
      { name: 'Hello 5', tag: 'VueJS', image: '', time: '12:00:00' },
      { name: 'Hello 6', tag: 'VueJS', image: '', time: '12:00:00' }
    ],
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
    },
    callPopup(nameProject) {
      console.log('>>> Function callPopup is working');
      this.$eventBus.$emit('CALL_MODAL', nameProject);
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
      console.log(res);
      this.setCategory(res);
    });
  }
};
</script>

<style></style>
