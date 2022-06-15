// callback function init
const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', (event) => {
        e.preventDefault()// stop page from  refreshing

        const input = document.querySelector('input#searchByID');
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
    })
}
// ensuring the JavaScript we write executes when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', init);