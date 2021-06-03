const getData = (user) => {
    console.log("2 Getting the data", user)
    return new Promise((resolve, reject) => {
            resolve([
                {name: "james"},
                {name: "randal"}
            ])
        }
    )
}
export {
    getData
}
