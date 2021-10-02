# Detox

## Detox RC

```json
{
  "testRunner": "jest",
  "runnerConfig": "e2e/config.json",
  "skipLegacyWorkersInjection": true,
  "apps": {
    "ios.debug": {
      "type": "ios.app",
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/helloworld.app",
      "build": "set -o pipefail && xcodebuild -workspace ios/HelloWorld.xcworkspace -UseNewBuildSystem=YES -scheme HelloWorld -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -quiet"
    },
    "ios.release": {
      "type": "ios.app",
      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/helloworld.app",
      "build": "set -o pipefail && export CODE_SIGNING_REQUIRED=NO && export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/HelloWorld.xcworkspace -UseNewBuildSystem=YES -scheme HelloWorld -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet"
    },
    "android.debug": {
      "type": "android.apk",
      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd .."
    },
    "android.release": {
      "type": "android.apk",
      "binaryPath": "android/app/build/outputs/apk/releaseE2E/app-releaseE2E.apk",
      "build": "cd android && ./gradlew assembleReleaseE2E assembleAndroidTest -DtestBuildType=releaseE2E && cd .."
    }
  },
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 12 Pro"
      }
    },
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_5_API_30"
      }
    }
  },
  "configurations": {
    "ios.emu.debug": {
      "device": "simulator",
      "app": "ios.debug"
    },
    "ios.emu.release": {
      "device": "simulator",
      "app": "ios.release"
    },
    "android.emu.debug": {
      "device": "emulator",
      "app": "android.debug"
    },
    "android.emu.release": {
      "device": "emulator",
      "app": "android.release"
    }
  }
}
```

## Detox config

```json
{
    "maxWorkers": 1,
    "testEnvironment": "./environment",
    "testRunner": "jest-circus/runner",
    "testTimeout": 120000,
    "testRegex": "\\.e2e\\.ts$",
    "transform": {
        "\\.tsx?$": "ts-jest"
    },
    "reporters": ["detox/runners/jest/streamlineReporter"],
    "verbose": true
}
```
