// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdBzrnX2GOXmUz6gb4AAcSlbT2WeZATSU",
  authDomain: "chelas-36065.firebaseapp.com",
  projectId: "chelas-36065",
  storageBucket: "chelas-36065.appspot.com",
  messagingSenderId: "301568367556",
  appId: "1:301568367556:web:8f15c23fa2b1208d532291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    //traer solo lo de la categoria
    q = query(collection(db, "products"), where('category', '==', parseInt(idCategory)));
  } else {
    //traer todo
    q = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  return dataFromFirestore
}

export const firestoreDoc = async (idProduct) => {
  const docRef = doc(db, "products", idProduct);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data()
  const dataFinal = {...data, id: idProduct}
  return dataFinal;
}