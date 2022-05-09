const YOUR_API_KEY = "AIzaSyC5fc5p4UViSf7BV-LIgT_c-BgmZa7uTEU";
const $contentBox = document.querySelector('.contentBox')

function fetchVedio(){
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=1000&regionCode=KR&key=${YOUR_API_KEY}`)
    .then(res => {
         res.data.items.map(item=>
            vedioCardTemplate(item))
        // res.items.map(vedio=>
        // vedioCardTemplate(vedio)
        // )}
    })
    .catch(error => console.log(error))
}

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
                    ${data.snippet.channelTitle}    
                    </p>
                    <p>
                        <span> ${vedioViewTextControle(data.statistics.viewCount)}
                            </span><span id="dot"></span>
                            <span>${luxon.DateTime.fromISO(data.snippet.publishedAt).toRelative()}</span>
                    </p>
                </div>
            </div>
        </a>
    </div>
</div>`
    $contentBox.insertAdjacentHTML('beforeend',vedioItem);
}

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