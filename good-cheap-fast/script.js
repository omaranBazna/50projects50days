const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
const describtion=document.getElementById("describtion")
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
            describtion.innerHTML="You can not have cheap and good project yet fast!!!"
        }

        if(cheap === theClickedOne) {
            good.checked = false
            describtion.innerHTML="You can not have cheap and fast project yet good!!!"
        }

        if(fast === theClickedOne) {
            cheap.checked = false
            describtion.innerHTML="You can not have good and fast project yet cheap!!!"
        }
    }
}