// import startApp from './app.mjs';

// document.addEventListener('DOMContentLoaded', startApp); 


function processContent() {
  // retrieve all form values and elements
  const content = document.getElementById('content').value
  const scramble = document.getElementById('scramble').value
  const repl = document.getElementById('repl').value
  const statsElement = document.getElementById('stats')
  const scannedElement = document.getElementById('scanned')
  const timeElement = document.getElementById('time')
  const resultElement = document.getElementById('result')
  const resultDiv = document.getElementById('resultDiv')

  // default replacement
  let replacement = "****"

  // if the user specify a replacement value: use it
  if (repl) {
    replacement = repl.repeat(4)
  }

  // parse scramble and content into a list
  const scramble_list = scramble.split(' ')
  const content_list = content.split(' ')

  let new_content = content

  const start_time = performance.now() //set the timer
  // iteratively replace words to scramble in content
  for (let i = 0; i < scramble_list.length; i++) {
    const word = scramble_list[i];

    new_content = new_content.replaceAll(word, replacement)
  }
  const end_time = performance.now() //end the timer


  let total_scanned_words = content_list.length
  let total_words_scrambled = 0
  let total_characters_scrambled = 0
  let total_time_taken = end_time - start_time

  // display result
  resultElement.value = new_content
  resultDiv.classList.remove('hide')
  resultDiv.className = 'display'

  // display stats
  statsElement.style.display = "block"
  scannedElement.innerHTML = `Total scanned words: ${total_scanned_words}`
  timeElement.innerHTML = `Total time taken: ${total_time_taken.toPrecision(3)}s`


  // prevent form from submitting
  return false
}