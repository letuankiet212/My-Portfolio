<template>
  <div
    class="modal modal-slide-in fade show"
    id="app-file-manager-info-sidebar"
    :style="toggleModal ? 'display: block' : ''"
    role="dialog"
  >
    <div class="modal-backdrop fade show zindex-1" @click="toggleModal = false"></div>
    <div class="modal-dialog sidebar-lg zindex-2" v-if="nameProduct != ''">
      <div class="modal-content p-0">
        <div class="modal-header d-flex align-items-center justify-content-between mb-1 p-2">
          <h5 class="modal-title">{{ detailProduct.name }}</h5>
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
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img :src="detailProduct.image" alt="file-icon" height="100%" width="100%" />
              </div>
              <hr class="my-2" />
              <ul class="list-unstyled">
                <li class="d-flex justify-content-between align-items-center">
                  <p>Link Demo :</p>
                  <p class="fw-bold">01 Oct, 2019</p>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <p>Giới thiệu :</p>
                  <p class="fw-bold">JS</p>
                </li>

                <li class="d-flex justify-content-between align-items-center">
                  <p>Frontend :</p>
                  <p class="fw-bold"></p>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <p>Backend :</p>
                  <p class="fw-bold"></p>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <p>Thời gian dựng :</p>
                  <p class="fw-bold">12th Aug, 2020</p>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <p>Thời gian bắt đầu :</p>
                  <p class="fw-bold">01 Oct, 2019</p>
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
    dataDetail: [
      {
        name: 'Hello 1',
        desc: 'Đây là chi tiết',
        frontend: ['HTML', 'CSS', 'VUEJS'],
        backend: ['PHP'],
        localtion: 'Frontend',
        dateFinish: '',
        created: '',
        linkDemo: '',
        image: require('../../assets/images/pexels-alexander-suhorucov-6457586.jpg')
      }
    ],
    nameProduct: ''
  }),
  computed: {
    detailProduct() {
      if (this.nameProduct == '') {
        return false;
      }
      let result = '';
      result = this.dataDetail.find((product) => product.name == this.nameProduct);
      return result;
    }
  },
  mounted() {
    this.$eventBus.$on('CALL_MODAL', (res) => {
      this.toggleModal = true;
      this.nameProduct = res;
      console.log(res);
    });
  }
};
</script>

<style></style>
