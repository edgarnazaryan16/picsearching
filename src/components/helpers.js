export const dataAPI = "https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=";
export const sleepProject = (time = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}