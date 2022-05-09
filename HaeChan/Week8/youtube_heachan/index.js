const YOUR_API_KEY = "AIzaSyC5fc5p4UViSf7BV-LIgT_c-BgmZa7uTEU";
const $contentBox = document.querySelector('.contentBox')

function fetchVedio(){
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=1000&regionCode=KR&key=${YOUR_API_KEY}`)
    .then(res => res.json())
    .then(res => res.items.map(vedio=>
        vedioCardTemplate(vedio)
    ))
    .catch(error => console.log(error))
}

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&m

fetchVedio();



function vedioCardTemplate(data){
    console.log(data);
    const vedioItem = `
    <div class="vedioItemContainer">
    <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
        <img class="thumbnailImg" src=${data.snippet.thumbnails.medium.url}>
    </a>
    <div class="vedioDetailContainer">
        <a class ="videoChannelImgContainer" href=${`https://www.youtube.com/channel/${data.snippet.channelId}`}>
            <img class="channelImg" src="https://yt3.ggpht.com/ytc/AKedOLSbkohOdcipSnw_pznXOl0se0rLnTdYKSVcz9BnKQ=s68-c-k-c0x00ffffff-no-rj">
        </a> 
        <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
            <div class="vedioMetaDetail">
                <div class="vedioTitle">
                    ${data.snippet.title}                                   
                </div>
                <div class="vedioMetaData">
                    <p>
                        SUPER SOUND Bugs!
                    </p>
                    <p>
                        <span> 조회수 74만회
                            </span><span id="dot"></span>
                            <span>${data.snippet.publishedAt}</span>
                    </p>
                </div>
            </div>
        </a>
    </div>
</div>`
    $contentBox.insertAdjacentHTML('beforeend',vedioItem);
}
