# Firebase 환경설정 가이드

1. 최상위 폴더에 .env 파일을 생성한다
2. .env 폴더에 Firebase 관련된 환경설정 변수를 작성한다.(변수목록은 luckydoyun 문의)

# Firebase 유틸리티

Firebase 서비스 API를 보다 쉽게 사용할 수 있도록 도와주는 커스텀 훅입니다.

## 인증

사용자 인증 관리

- [useAuthState](./auth/README.md#useauthstate)
- [useSignUp](./auth/README.md#usesignup)
- [useSignIn](./auth/README.md#usesignin)
- [useSignOut](./auth/README.md#usesignout)

## 파이어스토어

데이터 관리

- [useCreateAuthUser](./firestore/README.md#usecreateauthuser)
- [useWriteBatchData](./firestore/README.md#usewritebatchdata)
- [useDataState](./firestore/README.md#usedatastate)
- [useCreateData](./firestore/README.md#usecreatedata)
- [useReadData](./firestore/README.md#usereaddata)
- [useUpdateData](./firestore/README.md#useupdatedata)
- [useDeleteData](./firestore/README.md#usedeletedata)

## 스토리지

에셋 관리

- [useUploadFiles](./storage/README.md#useuploadfiles)
- [useAllDownloadURL](./storage/README.md#usealldownloadurl)
- [useDownloadURL](./storage/README.md#usedownloadurl)
- [useDeleteFile](./storage/README.md#usedeletefile)