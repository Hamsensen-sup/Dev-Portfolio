const getRandomQuotes = async () => {
    try{
        const response = await fetch ('https://zenquotes.io/api/random')
        const json = await response.json()
        const myQuote = json[0]

        console.log(myQuote.q + " -" + myQuote.a);
    }
    catch(error){
        console.log(error);
    }
}

getRandomQuotes()