const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass1-el")
let pass2 = document.getElementById("pass2-el")
let test = document.getElementById("test")

// This function will help us generate the password

function generatePass(){
    //From our array let's select each indiviual element
    // and makek a random selection of element
    pass1.textContent = " "
    pass2.textContent = ""
    let sequence_length = 8
    
    // now that we are able to call each individual element in our array
    // let make a random generator with our sequence_lenght
    let random_generator = Math.floor(Math.random() * characters.length)
    for(let i = 0; i < sequence_length; i++){

        pass2.textContent += characters[(Math.floor(Math.random() * characters.length))]
        pass1.textContent += characters[(Math.floor(Math.random() * characters.length))]

    }
}

// Function to copy text to clipboard
function copyToClipboard(element) {
    navigator.clipboard.writeText(element.textContent)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        });
}

// Add event listeners for copying passwords
pass1.addEventListener("click", () => copyToClipboard(pass1));
pass2.addEventListener("click", () => copyToClipboard(pass2));

// Attach generatePass to the button's click event
document.getElementById("gen-pass-btn").addEventListener("click", generatePass);