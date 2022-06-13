// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then(resp => resp.json())
.then(data => {
    let pictures = data.message
    pictures.forEach(picture => {
        let img = document.createElement('img')
        img.src = picture
        let div = document.querySelector('div')
        div.append(img)
    })
})
.catch(e => console.log('You moron'))

fetch(breedUrl)
.then(res => res.json())
.then(data => {
    let message = data.message
    console.log(data.message)
    for(const key in message)
    console.log(key)
})