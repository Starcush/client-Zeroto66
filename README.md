# ZeroTo66-client

필요한 extension : prettier, eslint  
prettier 설정 : Tab Width - 2, Single Quote - true

node version : 13.11.0 ( cli : nvm install 13.11.0 )  
branch name : feature\_"name of feature"

커밋 메시지 가이드라인 : 'git commit' 활용, 맨 윗줄에는 영어로 body는 한글로 변경사항 설명하기.  
참고 접두사 : ADD, FIX, DELETE

5/19 - 경은 : 리액트 설치 및 라우터 기본 세팅 완료
npm install -> client -> npm install(2번 필요)

5/19 - 현영 : Signup 폼 구성 완료, Signup 동작코드 작성 ,Modal창 추가
Signup버튼 클릭시 login화면으로 돌아가야하는데 err발생함
Modal창은 특정 버튼 클릭후 떠야하는데 그냥 보여짐

5/20 - 현영 : 수정이 필요한부분 수정, 모달창 기능추가
Signup버튼 클릭시 loging화면으로 돌아가기 수정
회원가입 작성창이 빈칸이거나, db에 있는 정보의 경우 모달창이 보여짐.
