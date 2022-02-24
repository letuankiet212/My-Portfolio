<template>
  <div
    class="modal modal-slide-in fade show"
    id="app-file-manager-info-sidebar"
    :style="toggleModal ? 'display: block' : ''"
    role="dialog"
  >
    <div class="modal-backdrop fade show zindex-1" @click="toggleModal = false"></div>
    <div class="modal-dialog sidebar-lg zindex-2" v-if="dataDetail != null">
      <div class="modal-content p-0">
        <div class="modal-header d-flex align-items-center justify-content-between mb-1 p-2">
          <h5 class="modal-title">{{ dataDetail.name }}</h5>
          <div @click="toggleModal = false">
            <icon-close :height="14" :width="14"></icon-close>
          </div>
        </div>
        <div class="modal-body flex-grow-1 pb-sm-0 pb-1">
          <ul class="nav nav-tabs tabs-line" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#details-tab"
                role="tab"
                aria-controls="details-tab"
                aria-selected="true"
              >
                <icon-file-text :height="14" :width="14"></icon-file-text>
                <span class="align-middle ms-25">Details</span>
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade active show"
              id="details-tab"
              role="tabpanel"
              aria-labelledby="details-tab"
            >
              <a
                :href="dataDetail.link"
                target="_blank"
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <img :src="dataDetail.link_img" alt="file-icon" height="100%" width="100%" />
              </a>
              <div class="d-flex justify-content-between align-items center mt-2">
                <p>{{ dataDetail.name }}</p>
                <a :href="dataDetail.link"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-airplay"
                  >
                    <path
                      d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                    ></path>
                    <polygon points="12 15 17 21 7 21 12 15"></polygon></svg
                ></a>
              </div>
              <hr class="mb-2" />
              <ul class="list-unstyled">
                <li class="">
                  <p class="">{{ dataDetail.desc }}</p>
                </li>
                <li class="">
                  <span
                    class="badge"
                    :class="classBadge(item)"
                    v-for="(item, index) in dataDetail.tag"
                    style="margin-right: 0.5rem"
                    :key="'tag' + index"
                    >{{ item }}</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from '../../components/Icon/IconClose.vue';
import IconFileText from '../../components/Icon/IconFileText.vue';
export default {
  components: { IconClose, IconFileText },
  name: 'detail_product',
  data: () => ({
    toggleModal: false,
    dataDetail: null,
    nameProduct: '',
    listBadge: [
      { name: 'html', class: ' bg-warning' },
      { name: 'css', class: ' bg-info' },
      { name: 'scss', class: ' bg-danger' },
      { name: 'tailwind', class: ' bg-info' },
      { name: 'vue', class: ' bg-success' }
    ]
  }),
  computed: {},
  methods: {
    // eslint-disable-next-line no-unused-vars
    classBadge(name) {
      // this.listBadge.filter((badge) => {
      //   if (badge.name == name) {
      //     console.log(name);
      //     return badge.class;
      //   }
      // });
      console.log('>> Name truyền vào', name);
      let result = '';
      this.listBadge.forEach((badge) => {
        if (badge.name == name) {
          console.log('>>> Name thoả mãn điều kiện', name.class);
          // return badge.class;
          result = badge.class;
        }
      });
      return result;
    }
  },
  mounted() {
    this.$eventBus.$on('DETAIL_POPUP', (res) => {
      this.toggleModal = true;
      this.dataDetail = res;
    });
  }
};
</script>

<style></style>
