const temparatureField = document.querySelector('.temp');
const locationField = document.querySelector('.timeLocation');
const locationDate = document.querySelector('.dateTime')
const weatherField = document.querySelector('.condition p')
const searchField = document.querySelector('.searchArea');
const form = document.querySelector('form')

form.addEventListener('submit', searchForLocation)

let target = 'nigeria'

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=75d8166a32d24d29bad101148231403&q=${targetLocation}&aqi=no`
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data);


    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let temp2 = data.current.temp_f;
    let condition = data.current.condition.text;
    updateDetails(temp, temp2, locationName, time, condition)

    // console.log(locationName);
    // console.log(time);
    // console.log(temp);
    // console.log(condition);
    // submitForm(form)


}
function updateDetails(temp, temp2, locationName, time, condition) {
    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]
    let currentDay = getDayName(new Date(splitDate).getDay());


    temparatureField.innerText = temp + '°C' + '/' + temp2 + '°F'
    locationField.innerText = locationName
    locationDate.innerText = `${splitDate} ${currentDay} ${splitTime}`
    weatherField.innerText = condition

}


function searchForLocation(e) {
    e.preventDefault()
    target = searchField.value
    fetchResults(target)
}

fetchResults(target)


const getDayName = (number) => {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }


}








