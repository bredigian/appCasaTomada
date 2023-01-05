import "dotenv/config"
export default {
  expo: {
    name: "appCasatomada",
    slug: "appCasatomada",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      mapsApiKey: process.env.API_KEY_MAPS,
      firebaseApiKey: process.env.API_KEY_FIREBASE,
      firebaseAuthDomain: process.env.AUTH_DOMAIN_FIREBASE,
      firebaseDatabaseURL: process.env.DATABASE_URL_FIREBASE,
      firebaseProjectId: process.env.PROJECT_ID_FIREBASE,
      firebaseStorageBucket: process.env.STORAGE_BUCKET_FIREBASE,
      firebaseMessagingSenderId: process.env.MESSAGING_SENDER_ID_FIREBASE,
      firebaseAppId: process.env.APP_ID_FIREBASE,
    },
  },
}
