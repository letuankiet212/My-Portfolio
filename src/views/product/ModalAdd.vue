<template>
  <div
    class="modal fade text-start show"
    id="inlineForm"
    tabindex="-1"
    :style="statusModal ? 'display: block' : ''"
  >
    <div class="modal-backdrop fade show zindex-0" @click="statusModal = !statusModal"></div>
    <div class="modal-dialog modal-dialog-centered zindex-2">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Form Add Project</h4>
          <button type="button" class="btn-close" @click="statusModal = !statusModal"></button>
        </div>
        <form @submit.prevent="handleSubmit()">
          <div class="modal-body">
            <label>Ảnh Sản Phẩm: </label>
            <div class="mb-1">
              <input class="form-control" type="file" id="formFile" @change="previewFiles" />
            </div>
            <div class="mb-1">
              <input class="form-control" type="text" id="link_url" readonly value="" />
            </div>
            <div class="mb-1">
              <div
                id="select-files"
                class="btn btn-outline-primary mb-1 waves-effect dz-clickable"
                @click="UploadImg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                Click me to select files {{ progress }}%
              </div>
            </div>
            <div class="input-group input-group-merge mb-1">
              <span class="input-group-text" id="basic-addon-search2"
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
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line></svg
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Link demo..."
                v-model="formModal.link"
                required
              />
            </div>

            <div class="input-group input-group-merge mb-1">
              <span class="input-group-text" id="basic-addon-search2"
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
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line></svg
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Tên dự án"
                v-model="formModal.name"
                required
              />
            </div>

            <div class="mb-1">
              <div class="input-group input-group-merge">
                <span class="input-group-text">Giới thiệu</span>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  v-model="formModal.desc"
                  required
                >
                </textarea>
              </div>
            </div>

            <label for="AddFrontend">Tag</label>
            <div class="mb-1">
              <select
                class="form-select cursor-pointer"
                id="AddFrontend"
                size="3"
                multiple
                v-model="formModal.tag"
                required
              >
                <option selected="">Chọn tag liên quan</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="scss">SCSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="vue">VueJS</option>
              </select>
            </div>

            <label>Thời gian làm: </label>
            <div class="input-group input-group-merge mb-1">
              <span class="input-group-text" id="basic-addon-search2"
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
                  class="feather feather-clock"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline></svg
              ></span>
              <input
                type="date"
                placeholder="YYYY-MM-DD"
                class="form-control"
                v-model="formModal.time_start"
                required
              />
            </div>

            <label>Thời gian bắt đầu: </label>
            <div class="input-group input-group-merge mb-1">
              <span class="input-group-text" id="basic-addon-search2"
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
                  class="feather feather-clock"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline></svg
              ></span>
              <input
                type="date"
                placeholder="YYYY-MM-DD"
                class="form-control"
                v-model="formModal.time_finish"
                required
              />
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-primary waves-effect waves-float waves-light">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { APIProduct } from './_script';
export default {
  name: 'modal_add',
  mixins: [APIProduct],
  data: () => ({
    statusModal: true,
    imgChoose: null,
    formModal: {
      link: '',
      desc: '',
      tag: [],
      name: '',
      time_start: null,
      time_finish: null
    }
  }),
  methods: {
    handleSubmit() {
      this.addProject(this.formModal);
    },
    previewFiles(event) {
      console.log('>>> Function iss Working', event.target.files);
      this.imgChoose = event.target.files;
    },
    UploadImg() {
      console.log(this.imgChoose);
      this.uploadFiles(this.imgChoose);
    }
  }
};
</script>

<style></style>
