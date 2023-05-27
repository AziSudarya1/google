function search(){
    let {value} = document.getElementById("searchInput")
    
    const baseUrl = "https://google.com/search?q="
    if(!value) value = "Youtube MA Sudaryaa"
    location.replace(baseUrl + value)
}