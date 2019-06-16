# React-Native-Study
## 스터디 목표
이번 스터디에서 우리는 React-Native 개발 환경을 세팅하고, [React Native Elements](https://react-native-training.github.io/react-native-elements/) 를 사용하여 UI 요소들의 사용법을 익히게 됩니다

## 프로젝트 설정
먼저 npm 을 사용하여 expo-cli 를 설지한 뒤,
expo 를 통해 첫번째 앱을 생성합니다

터미널을 열어서 다음 명령어를 한줄씩 입력합니다
```sh
$ npm install -g expo-cli
$ expo init my-app
$ cd my-app/
$ npm start
```

npm start 를 싱행하면 Expo CLI server 가 각자의 로컬 컴퓨터 안에서 시작됩니다.
서버가 시작되면 각자의 인터넷 브라우저 에서 해당 서버페이지가 열립니다.
우리는 먼저 IOS 앱을 시뮬레이터로 실행해 보겠습니다

Expo CLI 서버 페이지에서 - 브라우저에서 주소 http://localhost:19002/ 으로 열려있음
왼쪽 탭중 Run on iOS simulator 를 클릭합니다
처음 실행하면 아마도 xcode 시뮬레이터를 찾을수 없다는 에러가 발생합니다
터미널로 돌아가서 다음 명령어를 입력해줍니다
``` sh
$ sudo xcode-select -s /Applications/Xcode.app
``` 

다시 Run on iOS simulator 를 클릭하여 iOS simulator 를 실행합니다
시뮬레이터가 실행 완료되면 다시한번 Run on iOS simulator 를 클릭하면 시뮬레이터에서 우리의 첫번째 앱을 설치하고 실행됩니다

<img src="https://github.com/yjsplay2002/React-Native-Study/blob/master/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202019-05-19%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.00.45.png">
이제 테스트를 위한 프로젝트 설정이 완료되었습니다
