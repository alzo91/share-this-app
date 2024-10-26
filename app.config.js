module.exports = {
  "expo": {
    "name": "Share This",
    "slug": "share-this",
    "version": "2.0.0",
    "assetBundlePatterns": [
      "**/*"
    ],
    "icon": "./assets/app/icon.png",
    "splash": {
      "image": "./assets/app/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#FFFFFF"
    },
    "android": {
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON, // "./resources/firebase/google-services.json",
      "package": "com.sharethis",
      "adaptiveIcon": {
        "foregroundImage": "./assets/app/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "ios": {
      "googleServicesFile": "./resources/firebase/GoogleService-Info.plist",
      "bundleIdentifier": "com.sharethis",
      "privacyManifests": {
        "NSPrivacyAccessedAPITypes": [
          {
            "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryUserDefaults",
            "NSPrivacyAccessedAPITypeReasons": [
              "CA92.1"
            ]
          },
          {
            "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategorySystemBootTime",
            "NSPrivacyAccessedAPITypeReasons": [
              "3D61.1"
            ]
          },
          {
            "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryDiskSpace",
            "NSPrivacyAccessedAPITypeReasons": [
              "7D9E.1"
            ]
          },
          {
            "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryFileTimestamp",
            "NSPrivacyAccessedAPITypeReasons": [
              "0A2A.1"
            ]
          }
        ]
      }
    },
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ],
      "expo-font"
    ],
    "extra": {
      "eas": {
        "projectId": "c21cd90f-fc70-43c7-8b02-726c11ab25c5"
      }
    },
    "owner": "alzo.zotarelli"
  }
}
