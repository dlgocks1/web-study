// dom 조작은 $붙임
const $commentList = document.querySelector("#commentsList");
const $commentForm = document.querySelector("#placeholder-area");
const $commentInput = document.querySelector("#commentInput");
const $recommendedVideoList = document.querySelector(".recommendedVideoList");
const comments = [];
const YOUR_API_KEY = "AIzaSyC5fc5p4UViSf7BV-LIgT_c-BgmZa7uTEU";
// const myId = "Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI"
const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=KR&key=${YOUR_API_KEY}`

// yotube에서 추천동영상 받아오기
function getvideoList(videoListUrl){
    axios.get(videoListUrl)
    .then(it=>it.data.items.map(item=>{

        addsideVedio(item);
        console.log(item);
    }))
    .catch(error=>console.log(error))
}
getvideoList(videoListUrl);

// 추천동영상 HTMl에 넣어주기
function addsideVedio(item){
    const sidevideoItem = `
    <li class="videoItemContainer">
                            <a href="https://www.youtube.com/watch?v=vFkni8P3K4U">
                                <div class="videoThumbnailContainer">
                                    <img width="168"
                                        src=${item.snippet.thumbnails.medium.url}>
                                </div>
                            </a>
                            <div class="vedioDetailConatiner">
                                <div class="videoMetaDetails">
                                    <p class="vedioTitle"
                                        aria-label="윤하 노래 모음 【플레이리스트】 게시자: 로가드 - Lowguard 2개월 전 1시간 29분 조회수 121,620회"
                                        title="윤하 노래 모음 【플레이리스트】">
                                        ${item.snippet.title}
                                    </p>
                                    <div class="videoMetaData">
                                        <p class="metaText">${item.snippet.channelTitle}</p>
                                        <p class="extraMeta">
                                            <span class="metaText viewCount">${vedioViewTextControle(item.statistics.viewCount)}</span>
                                            <span id="dot"></span>
                                            <span class="metaText">
                                                2개월 전</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
    `;
    $recommendedVideoList.insertAdjacentHTML('beforeend',sidevideoItem);    
}

// 조회수 String 변환함수
function vedioViewTextControle(view){
    if( Number(view) > 10000){
        return "조회수 : "+(Number(view)/10000).toFixed(0) + '만회';
    }else if(Number(view) > 100){
        return "조회수 : "+(Number(view)/100).toFixed(0) + '천회';
    }
    else{
        return "조회수 : "+(Number(view)).toFixed(0) + '회';
    }
    return view
}


// 댓글 이벤트 리스너 달기
$commentForm.addEventListener("submit",handleSubmit);

// 댓글이벤트가 일어날시에 내용
function handleSubmit(e){
    e.preventDefault();
    const newComment = $commentInput.value;
    if (!newComment){
        return;
    }
    const newCommentItem = commentItemTemplate("이해찬",newComment,"https://yt3.ggpht.com/yti/APfAmoFjoi5B8bE0j5805xHwq1nnfHaRErC54Tcwrre3=s88-c-k-c0x00ffffff-no-rj-mo");
    $commentList.insertAdjacentHTML("afterbegin",newCommentItem);
    $commentInput.value = "";

    comments.push(newComment);
    // 댓글 로컬스토리지에 저장
    saveItem();
}

function saveItem(){
    localStorage.setItem('comments',JSON.stringify(comments));
}

const commentItemTemplate = (newId, newComment,Imgurl) => {
	return `
    <li class="commentItem">
    <img src="${Imgurl}"
        class="profileImg" />
    <div>
        <p id="commentName">${newId} <span id="commentLasttime"> 29초전</span></p>
        <p class="comment">${newComment}</p>
        <div class="flex commentreview-holder">
            <button class="commentBtn">
                <span class="commentIcon">
                    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                        focusable="false" class="style-scope yt-icon"
                        style="pointer-events: none; display: block; width: 100%; height: 100%;">
                        <g class="style-scope yt-icon">
                            <path
                                d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"
                                class="style-scope yt-icon"></path>
                        </g>
                    </svg>
                </span>
            </button>
            <span class="reviewcnt"> 15</span>
            <button class="commentBtn">
                <span class="commentIcon">
                    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                        focusable="false" class="style-scope yt-icon"
                        style="pointer-events: none; display: block; width: 100%; height: 100%;">
                        <g class="style-scope yt-icon">
                            <path
                                d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"
                                class="style-scope yt-icon"></path>
                        </g>
                    </svg>
                </span>
            </button>
            <span class="reviewcnt"> 1</span>
            <button class="commentBtn" id="reviewBtn">
                답글
            </button>
        </div>
    </div>
</li>`
;
}

// 로컬 스토리지에 있는 댓글 불러오기
function displayHistory() {
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    savedComments.map(arrcomments => {
        const newCommentItem = commentItemTemplate("이해찬",arrcomments,"https://yt3.ggpht.com/yti/APfAmoFjoi5B8bE0j5805xHwq1nnfHaRErC54Tcwrre3=s88-c-k-c0x00ffffff-no-rj-mo");
        comments.push(arrcomments);
        $commentList.insertAdjacentHTML("afterbegin",newCommentItem);
    })
}
displayHistory();
