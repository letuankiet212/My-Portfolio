import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../../utils/connectFirebase';
import { db } from '../../utils/connectFirebase';
// eslint-disable-next-line no-unused-vars
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
export const APIProduct = {
  data: () => ({
    statusLogin: false,
    progress: 0,
    linkImg: ''
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
      this.$eventBus.$emit('GET_PROJECT', dataList);
    },
    async addProject(data) {
      if (this.checkLogin) {
        if (this.linkImg == '') {
          alert('Bạn chưa nhập link hình ảnh');
          return false;
        }
        data.link_img = this.linkImg;
        await addDoc(collection(db, 'projects'), data);
      } else return false;
    },
    uploadFiles(file) {
      const storage = getStorage();
      const metadata = {
        contentType: file[0].type
      };

      const storageRef = ref(storage, 'images/' + file[0].name);
      const uploadTask = uploadBytesResumable(storageRef, file[0], metadata);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          let prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          this.progress = prog;
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => (this.linkImg = url));
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
