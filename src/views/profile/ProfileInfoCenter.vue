<template>
  <div class="col-lg-6 col-12 order-1 order-lg-2">
    <Card v-for="(post, index) in formData" :key="'post' + index"></Card>
  </div>
</template>

<script>
import '@/utils/connectFirebase';

// eslint-disable-next-line no-undef
const db = firebase.database();
import Card from '@/components/Card';
export default {
  name: 'Profile_Info_Center',
  components: { Card },
  data: () => ({
    formData: [
      {
        date: '12 Dec 2018 at 1:16 AM',
        comment: 'le tuan kiet dep trai vo dich sieu cap.',
        img: ''
      },
      {
        date: '12 Dec 2018 at 1:16 AM',
        comment: 'le tuan kiet dep trai vo dich sieu cap.',
        img: ''
      },
      {
        date: '12 Dec 2018 at 1:16 AM',
        comment: 'le tuan kiet dep trai vo dich sieu cap.',
        img: ''
      }
    ]
  }),
  methods: {
    async getPost() {
      await db.ref('3').on('value', (snapshot) => {
        console.log('>>> Data Load', snapshot.val());
      });
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style></style>
