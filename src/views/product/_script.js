import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../../utils/connectFirebase';
import { db } from '../../utils/connectFirebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

export const APIProduct = {
  data: () => ({
    statusLogin: false
  }),
  methods: {
    async checkLogin() {
      await onAuthStateChanged(authentication, (user) => {
        if (user.email == 'letuankiet51@gmail.com') {
          this.statusLogin = true;
        } else this.statusLogin = false;
      });
    },
    async GetProject() {
      const data = collection(db, 'projects');
      const dataSnapshot = await getDocs(data);
      const dataList = dataSnapshot.docs.map((doc) => doc.data());
      console.log(dataList);
      //   return dataList;
    },
    async addProject(data) {
      if (this.checkLogin) {
        await addDoc(collection(db, 'projects'), data);
      } else return false;
    }
  },
  computed: {},
  mounted() {
    this.GetProject();
    this.checkLogin();
  }
};
