let cnter = document.querySelector('#cnter'), time, before = new Date(), after, best;
//로컬 스토리지에 저장된 값이 없다면 초기화
if (localStorage.cnt == undefined) {
    localStorage.cnt = 0;
}
num.innerHTML = localStorage.cnt;
//클릭했을 때 동작하는 함수
function check() {
    //로컬 스토리지와 본문의 횟수를 변경
    localStorage.cnt++;
    num.innerHTML = localStorage.cnt;
    //애니메이션 재시작
    cnter.classList.remove('motion');
    void cnter.offsetWidth;
    cnter.classList.add('motion');
    //클릭하는데 걸린 시간 표시
    after = new Date();
    time = (after - before) / 1000;
    document.querySelector('#watch').innerHTML = time + 's';
    //최고기록 갱신
    if (best == undefined || best > time) {
        best = time;
    }
    document.querySelector('#rec').innerHTML = `최고 기록: ${best}s`;
    before = new Date();
}
function init() {
    //잘못 클릭할 경우를 대비하여 한번 더 묻기
    if (confirm('정말로 클릭 횟수를 초기화할까요?')) {
        localStorage.cnt = 0;
        num.innerHTML = 0;
    }
}
