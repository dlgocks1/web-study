const $commentForm = document.querySelector("#commentInputContainer");
const $commentInput = document.querySelector("#commentInput");
const $commentList = document.querySelector('#commentsList');

const commentItemTemplate = (newComment) => { 
	return `
	<li class="commentItem">
		<img src="https://yt3.ggpht.com/BhRuCYoa__qKZOhGVw8vUBvvLeke22-Qbn009oAair72CS0CErc-NfbRciSNYQXe_lh1QXby=s88-c-k-c0x00ffffff-no-rj"  class="profileImg" />
		<div>
			<p id="commentName">Mary Shen</p>
			<p>${newComment}</p>
			<div class="flex">
				<button class="commentBtn">
					<span class="commentIcon">
						<svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z" class="style-scope yt-icon"></path></g></svg>
					</span>
				</button>
				<button class="commentBtn">
					<span class="commentIcon">
						<svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z" class="style-scope yt-icon"></path></g></svg>
					</span>
				</button>
				<button class="commentBtn">
					댓글
				</button>
			</div>
		</div>
	</li>
	`;
}

// const newComment = commentItemTemplate('안녕하세요.반갑습니다');
// $commentList.insertAdjacentHTML('afterbegin', newComment);


$commentForm.addEventListener('submit', handleSumbit);

function handleSumbit(event){
	event.preventDefault();
	const newComment = $commentInput.value;
// 새로고침 막아주기

	if (!newComment) {return}; // 입력한 것이 빈입력창인 경우 아래 있는 코드는 실행되지 않음 -> 이걸 하지 않는 경우에는 입력하지 않은것도 댓글창에 입력이 됨
	const newCommentItem = commentItemTemplate(newComment); // 개발자도구에 입력
	$commentList.insertAdjacentHTML('afterbegin', newCommentItem); // 댓글창에 추가되어짐
  $commentInput.value = ""; // 댓글창에 등록된 상태에서 입력한 것이 초기화됨
}