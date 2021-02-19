let cnter = document.getElementById('cnter');
//로컬 스토리지에 저장된 값이 없다면 초기화
if (localStorage.cnt == undefined) {
    localStorage.cnt = 0;
}
num.innerHTML = `${localStorage.cnt}`;
//클릭한 횟수를 변경하는 함수
function plus() {
    //로컬 스토리지와 본문의 횟수를 변경
    localStorage.cnt++;
    num.innerHTML = `${localStorage.cnt}`;
    //애니메이션 재시작
    cnter.classList.remove('motion');
    void cnter.offsetWidth,
    cnter.classList.add('motion');
}