
// *************************************************
// *************************************************
// AXIOS WITH HEADERS
// *************************************************
// *************************************************
const jokes = document.querySelector('#jokes');

const button = document.querySelector('button')

const addNewJoke = async () => {
    try {
        const jokeText = await fetchDadJoke()
        const newLi = document.createElement('li');
        newLi.append(jokeText)
        jokes.append(newLi);
    } catch (error) {

    }

}


const fetchDadJoke = async () => {
    try {
        // Or just do this 
        const config = { headers: { Accept: 'application/json' } }
        let res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    }
    catch (e) {
        return 'No jokes Available';
    }
}


button.addEventListener('click', addNewJoke);
