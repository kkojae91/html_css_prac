const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("click", (event) => {
    // 만약 active가 true 이면 클릭하게 되면 active attribute를 제거
    if (this.active){
        // dropdownMenu의 class="active" 를 추가하고 제거하는 방식으로
        // 클릭했을때! 보여지고 사라지게 만듬.
        dropdownMenu.classList.remove("active")
        // active가 false이면 클릭하게 될때 active attribute를 추가
    } else{
        dropdownMenu.classList.add("active")
    }
    // 아래와 같이 초기화 시켜주지 않으면 두번 클릭했을때 이밴트가 발생하지 않습니다.
    this.active = !this.active
})
// 초기 active 설정은 false dropdownMenu를 안보이게 설정
dropdownButton.active = false