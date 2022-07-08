export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_TOKEN,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}


export const FetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}