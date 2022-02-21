<template>
  <div class="card file-manager-item folder" @click="handleClick(project.name)">
    <div class="card-img-top file-logo-wrapper p-0">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vue-porfolio.appspot.com/o/files%2Fhelo.jpg?alt=media&token=a6a14f82-5fb0-4c4f-a6dc-2df108ddb7cd"
        alt=""
        width="100%"
        height="100%"
      />
      <!-- <div class="d-flex align-items-center justify-content-center w-100"></div> -->
    </div>
    <div class="card-body">
      <div class="content-wrapper">
        <p class="card-text file-name mb-0">{{ project.name }}</p>
      </div>
      <small class="file-accessed text-muted">Last accessed: {{ project.time }}</small>
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
