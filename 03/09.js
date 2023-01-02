//break;
//반복문의 실행을 멈출때 사용한다. (빠져나올때)

for(let i=0; true; i++){ //무한반복상태
 alert(i+"번째 반복입니다")
 const isContinue=confirm("계속하시겠습니까?");
 if(!isContinue) //false 면 true
 //{break;}
 continue;//확인, 취소 둘다 계속 반복함 -그냥 통과함 (결과값이 true 이던 false 이던)
}
document.write("반복문 종료")