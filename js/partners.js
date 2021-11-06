const renderItems1 = (data) => {
    console.log('*********renderItems1*********')
    data.forEach(element => {
        console.log(element)
    })
}

fetch('https://test-982da-default-rtdb.firebaseio.com/db/partners.json')
    .then((resopnse) => resopnse.json())
    .then((data) => {
        renderItems1(data)
    })
    .catch((error) => {
        console.log(error)
    })