<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-start align-items-center mb-1">
        <!-- avatar -->
        <div class="avatar me-1">
          <img
            :src="require(`@/assets/images/portrait/small/avatar-s-18.jpg`)"
            alt="avatar img"
            height="50"
            width="50"
          />
        </div>
        <!--/ avatar -->
        <div class="profile-user-info">
          <h6 class="mb-0">Leeanna Alvord</h6>
          <small class="text-muted">12 Dec 2018 at 1:16 AM</small>
        </div>
      </div>
      <p class="card-text">
        Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the
        work. This can make the difference when presenting to clients who are looking for the perfect
        fit.
      </p>
      <img
        class="img-fluid rounded mb-75"
        :src="require(`@/assets/images/profile/post-media/2.jpg`)"
        alt="avatar img"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
