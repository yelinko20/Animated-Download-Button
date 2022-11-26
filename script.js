const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const text = document.querySelector('.text');
const iconClassList = document.querySelector('.icon i');
// const background = document.querySelector('.background')
const dot = document.querySelector('.dot');
const circularProgress = document.querySelector('.cricular-progress')

let progressStart = 0;
let progressEnd = 360;
let speed = 38;

btn.addEventListener('click', () => {
    btn.classList.add('downloading');
    setTimeout(() => {
        btn.classList.remove('downloading');
        icon.remove();
        btn.classList.add('done');
        // background.classList.remove('fill')
        btn.style.border = "2px solid #00ffb3"
        btn.style.boxShadow = "0px 0px 10px #00ffb3";
        circularProgress.classList.remove('progress');
        circularProgress.style.display = "none"
    }, 5500);
    setTimeout(() => {
        text.textContent = "done!"
        text.style.opacity = "1"
        
    }, 6500);
    setTimeout(() => {
        text.style.opacity = "0"
        
    }, 500);
    setTimeout(() => {
        btn.classList.add('changeBackground')
        // background.classList.add('fill')
        circularProgress.classList.add('progress')
    }, 800);
    setInterval(() => {
        iconClassList.classList.replace("fa-arrow-down","fa-pause")
    }, 300);
    setInterval(() => {
        dot.style.display = "block"
    }, 5500);
    const progress = () => {
    setInterval(() => {
        progressStart++;
    circularProgress.style.background = `conic-gradient(#fff ${progressStart * 1}deg, #4788c5 0deg)`
    }, speed);
   
};
setInterval(progress, 800)
})
