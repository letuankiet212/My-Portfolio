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
          <h4 class="modal-title">Inline Login Form</h4>
          <button type="button" class="btn-close" @click="statusModal = !statusModal"></button>
        </div>
        <div>
          <div class="modal-body">
            <label>Ảnh Sản Phẩm: </label>
            <div class="mb-1">
              <button
                id="select-files"
                class="btn btn-outline-primary mb-1 waves-effect dz-clickable"
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
                Click me to select files
              </button>
            </div>

            <label>Link sản phẩm: </label>
            <div class="mb-1">
              <input type="text" placeholder="Link Preview" class="form-control" />
            </div>

            <label>Giới thiệu: </label>
            <div class="mb-1">
              <textarea rows="6" class="w-100"> </textarea>
            </div>

            <label for="AddFrontend">Frontend</label>
            <div class="mb-1">
              <select class="form-select cursor-pointer" id="AddFrontend" size="3" multiple>
                <option selected="">Chọn tag liên quan</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="scss">SCSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="vue">VueJS</option>
              </select>
            </div>

            <label for="AddFrontend">Backend</label>
            <div class="mb-1">
              <select class="form-select cursor-pointer" id="AddFrontend" size="3" multiple>
                <option selected="">Chọn tag liên quan</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="scss">SCSS</option>
                <option value="tailwind">Tailwind</option>
                <option value="vue">VueJS</option>
              </select>
            </div>

            <label>Thời gian làm: </label>
            <div class="mb-1">
              <input type="datetime-local" placeholder="Link Preview" class="form-control" />
            </div>

            <label>Thời gian bắt đầu: </label>
            <div class="mb-1">
              <input type="datetime-local" placeholder="Link Preview" class="form-control" />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary waves-effect waves-float waves-light"
              data-bs-dismiss="modal"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal_add',
  data: () => ({
    statusModal: true
  })
};
</script>

<style>
</style>