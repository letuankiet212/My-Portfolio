import { authentication } from './../../utils/connectFirebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
} from 'firebase/auth';

export const APIAuth = {
  methods: {
    async signInSocial() {
      console.log('>>> Hello');
      const provider = new GoogleAuthProvider();
      await signInWithPopup(authentication, provider)
        .then((res) => {
          const dataUser = res.user.reloadUserInfo;
          if (dataUser.email == 'letuankiet51@gmail.com') {
            console.log('>>> Đăng Nhập Thành Công');
          } else {
            console.log('>>> Email không trùng khớp');
          }
        })
        .catch((err) => {
          console.log('Error Log:', err);
        });
    },
    signUp(email, password) {
      return createUserWithEmailAndPassword(authentication, email, password);
    },
    async getInfo() {
      await onAuthStateChanged(authentication, (user) => {
        if (user !== null) {
          this.$router.push({ path: '/project' });
        } else {
          return false;
        }
      });
    },
    Logout() {
      return signOut(authentication);
    }
  }
};
