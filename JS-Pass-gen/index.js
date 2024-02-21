document.body.style.backgroundColor = 'gray'
len =8
let numAllowed = true
let charAllowed = false

let numberInput = document.getElementById('numberInput')
let chaInput = document.getElementById('charInput')
let slider = document.getElementById('slider')
let lenlabel = document.getElementById('len-label')
lenlabel.innerHTML = `Length: ${len}`
let copy = document.getElementById('cpy-btn')
// let password
let display = document.getElementById("pwd-display")

//QtZgX7nz7TedkE16lxL9PQ0MQBseI88Emlbcwdgav9X6KIHbNoZ72lODjuUcLkh0veLLQykmxrdmqUuPuMwctMFcikbr28RXqKp

const passwordGenerator = function(){
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+=[]{}~`"

    for (let i =  1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
      
    }
    // console.log(pass);/
    display.value = `${pass}`
    // password = `${pass}`
  }
  passwordGenerator()

  numberInput.addEventListener('change',function(){
    numAllowed = !numAllowed
    passwordGenerator()
  })
  chaInput.addEventListener('change', function(){
    charAllowed = !charAllowed
    passwordGenerator()
  })
  slider.addEventListener('click',function(){
    len = slider.value
    lenlabel.innerHTML = `Length: ${len}`
    passwordGenerator()
  })

  copy.addEventListener('click',function(){
    display.select()
    window.navigator.clipboard.writeText(display.value)
  })