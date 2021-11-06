const restaurant = 'food-band'

const renderItems2 = (data) => {
    console.log('*********renderItems2*********')
    data.forEach(element => {
        console.log(element)
    })
}

fetch(`https://test-982da-default-rtdb.firebaseio.com/db/${restaurant}.json`)
    .then((resopnse) => resopnse.json())
    .then((data) => {
        renderItems2(data)
    })
    .catch((error) => {
        console.log(error)
    })