import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../../utils/connectFirebase';
import { db } from '../../utils/connectFirebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { ref, getStorage, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
export const APIProduct = {
  data: () => ({
    statusLogin: false,
    progress: 0
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
    },
    uploadFiles(file) {
      if (!file) return;

      const storage = getStorage();

      const storageRef = ref(storage, `/files/${file[0].name}`);
      // const uploadTask = uploadBytesResumable(storageRef, file);
      const uploadTask = uploadBytesResumable(storageRef, file, 'data_url');

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          let prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          this.progress = prog;
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
        }
      );
    }
  },
  computed: {},
  mounted() {
    this.GetProject();
    this.checkLogin();
  }
};
