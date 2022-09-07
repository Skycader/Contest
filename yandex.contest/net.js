let errors = 0
module.exports = async function solution(urls, retryCount) {
    let response = await fetchData(url[0])
    .then(
        if (getHashByData(data.data) != data.hash) {
            error++
        }
    )
    .catch(
        errors++
        if (errors<3) {
            solution(urls,retryCount)
        }
    )
    return result;
}
