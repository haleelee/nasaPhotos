//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const urlKey = 'D4EQiOB0lQVRqiGV0fCoWdbBRGKBFTo0Lgf1GUvi'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${urlKey}`
  let newDate = "&date=" + choice + "&"

  fetch(url + newDate)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

class PhotoOfTheDay {
    constructor(photoData) { //I am passing in data.product
      this.date = photoData.date
      this.explanation = photoData.explanation
      this.title = photoData.title
      this.image = photoData.url
    }
}

    // showInfo() {
    //   document.getElementById('photo-img').src = this.image
    //   document.getElementById('photo-name').innerText = this.name
    // }