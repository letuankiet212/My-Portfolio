<template>
  <div class="card file-manager-item folder" @click="handleClick(project.name)">
    <div class="card-img-top file-logo-wrapper p-0">
      <img :src="project.link_img" alt="" width="100%" height="100%" style="object-fit: cover" />
      <!-- <div class="d-flex align-items-center justify-content-center w-100"></div> -->
    </div>
    <div class="card-body">
      <div class="content-wrapper">
        <p class="card-text file-name mb-0">{{ project.name }}</p>
      </div>
      <small class="file-accessed text-muted">Last accessed: {{ project.time_finish }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: ['project'],
  methods: {
    handleClick(name) {
      this.$emit('show-detail', name);
    }
  }
};
</script>

<style></style>
