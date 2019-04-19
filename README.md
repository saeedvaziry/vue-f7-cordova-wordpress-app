# wpapp

## Demo

https://saeedvaziry.github.io/vue-f7-cordova-wordpress-app/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Cordova
```
cd src-cordova

cordova prepare
```

### Generate key
```
keytool -genkeypair -v -keystore release.jks -alias release -keyalg RSA -keysize 2048 -validity 10000
```

### Build Android
```
npm run cordova-build-android
```

### Serve Android
```
npm run cordova-serve-android
```
