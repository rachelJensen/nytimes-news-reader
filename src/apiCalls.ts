export const getStories = (topic: string) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(rawData => rawData.json())
}