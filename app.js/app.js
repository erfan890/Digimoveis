const btn = document.querySelector('.btn-change-mode')
const ball = document.querySelector('.ball')
let moon = document.querySelector('.bxs-moon')
let sun = document.querySelector('.bx-sun')
let moveis = document.querySelector('.movies')
let right = true;
let left = false;
btn.addEventListener('click', change_position)
function change_position() {

    if (right) {
        console.log("h")
        ball.style.left = `100%`
        ball.style.transform = `translate(-105%,-50%)`
        moon.style.display = `none`
        sun.style.display = `block`
        ball.style.transition = `1s`

        right = false;
    } else if (right == left) {
        console.log("hi")
        ball.style.left = `0`
        ball.style.transform = `translate(25%,-50%)`
        moon.style.display = `block`
        sun.style.display = `none`
        ball.style.transition = `1s`
        right = true
    }

}
fetch('https://moviesapi.ir/api/v1/movies?')
    .then(res => res.json()).then(res => {
        
        (res.data).map(item => {
console.log(item)
            moveis.innerHTML += `        <div class="moveis_child">   
            <div class="imag_moveis">
  <img src="${item.poster}" alt="">
  <div class="triler">
  
  <a href="#" class="link-trailer">
 
  <i class='bx bx-tv'></i>
  <span>مشاهده تریلر</span>
  </a>
  </div>
          </div>
          <div class="inform_moveis">
            <div class="title-meta">
                <div class="right-side"></div>
                <div class="left-side">
                    <h2>
                        <a href="">
                            دانلود فیلم ${item.title}
                        </a>
                    </h2>
                </div>
            </div>
            <div class="meta_item">
                <ul>
                    <li> <i class='bx bx-tv'></i>
                     <span>   کیفیت
                    </span>
                    </li>
                    <li>
                        <i class='bx bx-time-five' ></i>
<span>زمان
</span>

                    </li>
                    <li><i class='bx bx-folder' ></i>
                    <span>ژانر:${(item.genres).map(item=>item)}</span></li>
                    <li>
                        <i class='bx bxs-face'></i>
                        <span>کارگردان</span>
                    </li>
                    <li><i class='bx bxs-face'></i>
                    <span>ستارگان</span></li>
                    <li><i class='bx bx-planet' ></i>
                    <span>محصول:${item.country}</span></li>
                </ul>
            </div>
          </div>
</div>`
        })
    })
    let nam=[{
    nam:"dfgfrg",
    email:'grthbgrthb',
    password:'rgthbgrt',
    }]
  let xhr=new XMLHttpRequest();
  xhr.onload=res=>{
    console.log(res)
  }
  xhr.open()

  xhr.send('POST',`https://moviesapi.ir/api/v1/register/${JSON.stringify(nam)}`)