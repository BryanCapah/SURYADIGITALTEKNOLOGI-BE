const getDateByToday = () => {
    const dateClass = new Date()
    const date = dateClass.getDate()
    const month = dateClass.getMonth() + 1
    const year = dateClass.getFullYear()
    const addZero = month < 9 ? 0 : ''
    return `${year}-${addZero}${month}-${date}`
}

module.exports = {
    getDateByToday
}