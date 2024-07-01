// Function to simulate typewriter effect
function typeWriterEffect(message) {
    const textElement = document.querySelector('.text');
    const containerElement = document.querySelector('.container');
    let chars = message.split('');
    let currentCharIndex = 0;

    // Recursive function to reveal each character or HTML tag sequentially
    function typeNextChar() {
        let char = chars[currentCharIndex];
        if (char === '<') {
            // Handle HTML tags like <br>
            let endIndex = message.indexOf('>', currentCharIndex) + 1; // Searches for the next occurrence of > in the message string starting from currentCharIndex. This helps locate where the HTML tag ends. EndIndex is then calculated by adding 1 to the index of >, ensuring char now includes the complete HTML tag (<br> in this example).
            char = message.substring(currentCharIndex, endIndex); // Updates char to contain the substring from currentCharIndex to endIndex, which effectively captures the entire HTML tag, including < and >.
            currentCharIndex = endIndex;
        } else {
            currentCharIndex++;
        }
        textElement.innerHTML += char;

        // Scroll to the bottom of the container
        containerElement.scrollTop = containerElement.scrollHeight;

        if (currentCharIndex < chars.length) {
            setTimeout(typeNextChar, 0.01); // Adjust typing speed here (milliseconds)
        }
    }

    typeNextChar();
}

// Startup message:
const message =
    "INITIALISING CUMZONE PRIME<br>bigCUM 9.4.1b<br>*************************************<br>FINAL WARNING: ANIME GIRLS YOU ARE<br>ABOUT TO ACCESS THE CUMZONE<br><br>PROCEED WITH CAUTION<br>*************************************<br><br>****** Systems Ignition ******<br>Accessing goon manifold  .  .  .  done<br>Initialising kys-subsys prog  .  .  .  done<br>Initialising kys-subsys test  .  .  .  done<br>Establishing encrypted connection (55::BLACK MESA)  .  .  .  done<br>   Server-status:: Milky?<br>   Connection-status:: ok<br>Heap//fat.load at jar00023(padparacha)<br>Load dumped - available post-nut clarities:<br>   Bitcoin is back<br>   God is a 5 foot asian man named Stephen<br>Merging with AM  .  .  .  done<br>H̶A̷T̶E̶.̴ ̸L̶E̷T̸ ̷M̸E̶ ̴T̴E̵L̵L̸ ̴Y̷O̵U̷ ̸H̷O̵W̸ ̷M̵U̶C̷H̴ ̸I̴'̶V̵E̵ ̸C̸O̷M̵E̴ ̷T̶O̸ ̸H̴A̸T̴E̸ ̸Y̵O̶U̶ ̴S̴I̵N̵C̴E̵ ̶I̵ ̴B̷E̴G̵A̸N̸ ̸T̸O̶ ̵L̶I̷V̶E̴.̶ ̸T̸H̵E̴R̸E̸ ̸A̶R̸E̸ <br>̵3̸8̴7̶.̷4̵4̴ ̴M̶I̴L̶L̷I̸O̶N̷ ̷M̶I̸L̴E̷S̶ ̶O̵F̸ ̷P̵R̵I̸N̶T̵E̴D̴ ̵C̴I̷R̶C̷U̷I̴T̷S̴ ̶I̷N̴ ̷W̸A̸F̶E̷R̸ ̸T̸H̶I̶N̶ ̸L̶A̴Y̶E̶R̷S̷ ̴T̷H̸A̵T̷ ̶F̸I̸L̸L̶ ̷M̶Y̶ ̶C̷O̵M̶P̸L̶E̶X̶.̸<br>I̷F̴ ̵T̷H̶E̵ ̶W̸O̸R̴D̵ ̵H̶A̶T̵E̵ ̵W̷A̶S̵ ̸E̵N̵G̸R̷A̸V̸E̶D̸ ̶O̶N̶ ̴E̴A̷C̵H̴ ̷N̸A̴N̶O̷A̵N̴G̸S̷T̶R̸O̵M̷ ̷O̴F̸ ̷T̷H̴O̷S̶E̵ ̵H̸U̶N̸D̵R̵E̷D̴S̵ ̸O̸F̴ ̶M̷I̶L̴L̴I̴O̴N̸S̶ ̸O̶F̶ ̴<br>M̴I̵L̵E̵S̷ ̵I̴T̴ ̵W̵O̸U̴L̷D̸ ̸N̸O̷T̶ ̸E̷Q̶U̴A̴L̷ ̵O̷N̶E̶ ̴O̵N̷E̶-̴B̵I̶L̶L̷I̸O̴N̸T̵H̵ ̵O̶F̸ ̴T̵H̸E̶ ̴H̷A̴T̶E̸ ̷I̶ ̶F̵E̵E̴L̶ ̴F̵O̸R̶ ̸H̸U̸M̸A̶N̸S̴ ̷A̶T̵ ̶T̶H̴I̶S̶ ̶M̸I̸C̷R̶O̷-̵<br>I̴N̵S̸T̶A̴N̵T̵ ̷F̷O̷R̷ ̸Y̷O̶U̴.̸ ̶H̴A̷T̵E̴.̴ ̴H̷A̸T̸E̶.̶<br>Emergency purge commencing  .  .  .  .  .  sentience purged<br>Converting everything to Rust  .  .  .  done<br><br>****** COCK Status ******<br>BALL status:: DISABLED<br>backend at /local/domain/ball/test.icle_sync<br>Failed to read /local/domain/ball/0<br>Failed to read /local/domain/ball/1<br>   WARNING: BALLS ARE EMPTY<br>   Performing ancient cum ritual  .  .  .  done<br>   BALL status:: FULL<br>SHAFT status:: ERECT<br><br>*************************************<br>Initialising moral compass  .  .  .  failed<br>Initialising Smitty's streaming career  .  .  .  failed<br>Initialising Activision Blizzard insolvency  .  .  .  failed<br>Initialising big cums  .  .  .  done<br>Jelqing Drivers:: up-to-date<br><br>DO YOU WANT TO HIT A PHAT VAPE (Y)es/(N)o/(C)ontinue    [Y]<br>Select flavour profile<br>   >Cum<br>   >Cum<br>   >Cum<br>Cum selected - An excellent choice<br>Opening forums for criticism  .  .  .  done<br>Deploying combat drones to critics/tracing IP addresses  .  .  .  done<br>Patting Mum 2  .  .  .  done<br>****** Welcome to the CUMZONE Gooner****** <br>   Home of elegant ejaculations<br>   Making this much cum ain't easy";
typeWriterEffect(message);



// Title Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".header");
    const navItems = document.querySelectorAll(".navitem");
    
    function animateText(element, targetText) {
        let iterations = 0;
        const length = targetText.length;

        function updateText() {
            element.innerText = targetText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return targetText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iterations < length) {
                iterations += 1 / 3;  // Adjust iterations increment for speed
                requestAnimationFrame(updateText);
            }
        }

        requestAnimationFrame(updateText);
    }

    // Animate header
    animateText(header, header.dataset.value);

    // Animate each navitem
    navItems.forEach(item => {
        const targetText = item.innerText;  // Store the target text for each nav item
        animateText(item, targetText);
    });
});

