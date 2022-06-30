import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0X_XmjQL2ajHtqAnrlxo8iLwctyd5Fps",
    authDomain: "react-native-app-b4fbc.firebaseapp.com",
    projectId: "react-native-app-b4fbc",
    storageBucket: "react-native-app-b4fbc.appspot.com",
    messagingSenderId: "164215625913",
    appId: "1:164215625913:android:faae2305c23c1b94212368",
};

// const firebaseConfig = {
//     "type": "service_account",
//     "project_id": "react-native-app-b4fbc",
//     "private_key_id": "515f5ea6b3dbde0391883778e94d3bb585d6e782",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCznBJS9CvS/PvS\njUdboUCAjyMSXwEWEjISEACPiuWe29ZEgfIn6m4z0WCeNA0Fq5+95bT1GWmiKBkw\nX7DWCj6mVw05xKOLLkFxzCVYY3UsfDZrB/gfK8KkF0ELgQzKZiQQqr8KTj7EhWz0\nFEbBrYOHn7wRAh1E1vq46c2hYjdqUKhdZnDX13kJAav87AYF73mezi8hNlqQAQde\nSkiIYvqBF9w90475sxw/63OPWwzR+yyEt7YKBG3keQsUTi0oKQ5TlHIjICbLcefK\n3fNY1EdXol19GZswX8HqKwUQI5Nzb16YdlprnSlqkihixAvBYWhhLClrOFg1OF58\nR3rB0hiDAgMBAAECggEAMPyPyN08uKp0Olx7CmREFew0OhX8U1s6GdAQfxX4g6fc\n3El+1OEtFmf0TKHQrWu+QUpN3Q2F0IrUN+vZbL9VkAOtIUTfAB5pDhMKWn2h3zSv\nmOiPBV1nlF6dSHh1lxxdmMghG7v0haAIc9e15qwe9BYecpsbhYOG1Xk7Mtl5WL7a\nb7Xgh5B1MsWYksYIHRCC3VV/fLIX43Sy240ma43JIMKJto4c+1pQJklgq2aziy80\nbprkVeoMIKErN0T/GEwt16a0dW3hyvbG49rMoyBim4jMF2jfyvnW/vNYvU9XgRx6\nihJusxQyZR/R0xkO4nL/HG4ibEZ//K4ZSv2iOnLalQKBgQDsSHlVeUthqCrtGF0e\nStRmsV1hnG3Fn6YmpppxzpnvhgTebwM6b4/Y2j6/QPlNjTUUX9IEYgqhfPuJltQj\nIBaqWBtllRyZ++kwxo8CiE0htQSPfA3Nhac0o87xN7B75Yplakc0PuLQjEBmiqfY\neOp3MPi2ooyZAry36ddAy1u8/QKBgQDCmO2l0IXDrUAFt6SGp4o+MIb4Am/nypnK\nSvBwXOdYhumfXA2vfDvj2mgF/s2UMIEnP95E0XubJBRDIfhMI1ZPnmZvmN9OCgnq\nng2cUpCeIptnaX2IOKTGAfIDPJ/LO4rvefoeI86G/sjRP66UUnwPuVh+mdMQesXA\n5QyXfBfjfwJ/CicTD5kmpAuVzJo/Zg3REpiMaqVOEi/J8980w68c7i3UB7q9aMVi\naO73w0AHdk2a+kUjwQx1aHr2U/MnKls2nhsrEjJWCEfKvU3K11ED/27Hw2KRNUOI\n67oeKj86VhiG2dS3Ood5N3zPR5itnZ+Uc4qnJTHW2LxFX6Gsnhwe1QKBgAQFONO2\nLS1PxQTZOHL3vyltwzwYgMtfKjI9vh30LWtsziLWugmoHWyltIR7MTAgmGqBLUxq\nr40S/8ArUX/xMvVOJnujwulP18ibH1jdc9Nwj5lhWpCX6v+URrW+aObAAizUblB1\nGO09ElUQZcD2u01v3N4wu2WZw8Aqe0od7DhtAoGASVYLvzpznG5ipYuZdFdo0vgV\nfGq+gMYfCgM0FZGFAK5st+sEnMv2gBfAG9u1cjlBywvSXhu6GTpkUpV5foIznSzg\n6UQRqxtK32NQ1elbeUUM3t5MwriIpJ6MRVPgtJ+XcOBxz4/COy4mqdrXTgon3+qi\njzbqMFY1x1JpmI5iXks=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-ksmgg@react-native-app-b4fbc.iam.gserviceaccount.com",
//     "client_id": "110128077801168657044",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ksmgg%40react-native-app-b4fbc.iam.gserviceaccount.com"
// }

firebase.initializeApp(firebaseConfig)
export default firebase;