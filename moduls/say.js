//교안 자바스크립트 10번-4 module에 모던자바스크립트 참고해서 공부
//사용법1.
// export function say(user){
//     alert(`안녕하세요,${user}`);
// }

//사용법2
const app = (user) => {
    return alert(`안녕하세요,${user}`);
}
//개체 한개만 있는경우
export default app;
