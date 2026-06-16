// =========================================================================
// FEATURE 1: VINYL OF THE WEEK POP-UP NOTIFICATION
// =========================================================================
function showAlbumDetails(albumName, artistName) {
    alert("💿 Waxxed on Waxx Spotlight: '" + albumName + "' by " + artistName + ".\nAvailable in shop tracking stock profiles!");
}

document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================================
    // FEATURE 2: AUTOMATIC INFINITE MARQUEE GALLERY LOOP
    // =========================================================================
    const galleryContainer = document.getElementById("galleryContainer");
    
    if (galleryContainer) {
        let scrollPosition = 0;
        const innerContent = galleryContainer.innerHTML;
        galleryContainer.innerHTML += innerContent; // Double the items for seamless loop

        function scrollMarquee() {
            scrollPosition += 0.5; // Smooth incremental step speed
            if (scrollPosition >= galleryContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            galleryContainer.style.transform = `translateX(-${scrollPosition}px)`;
            requestAnimationFrame(scrollMarquee);
        }
        requestAnimationFrame(scrollMarquee);
    }

    // =========================================================================
    // FEATURE 3: INTERACTIVE SLIDING ACCORDION FAQ LOGIC
    // =========================================================================
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const currentAnswer = this.nextElementSibling;
            const isOpen = currentAnswer.style.maxHeight && currentAnswer.style.maxHeight !== "0px";

            // Collapse all answers first
            document.querySelectorAll(".faq-answer").forEach(answer => {
                answer.style.maxHeight = "0px";
            });

            // Expand clicked answer if it wasn't already open
            if (!isOpen) {
                currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
            }
        });
    });

    // =========================================================================
    // FEATURE 4: DYNAMIC LIVE MEMBER BOARD TRADE POSTING
    // =========================================================================
    const tradeForm = document.getElementById("tradeForm");
    const tradeBoard = document.getElementById("tradeBoard");

    if (tradeForm && tradeBoard) {
        tradeForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const albumName = document.getElementById("tradeAlbum").value;
            const artistName = document.getElementById("tradeArtist").value;
            const condition = document.getElementById("tradeCondition").value;

            const newCard = document.createElement("div");
            newCard.className = "trade-card";
            newCard.style.borderLeft = "4px solid var(--primary-green)";
            
            newCard.innerHTML = `
                <div class="vinyl-disc-icon">💿</div>
                <h4>${albumName}</h4>
                <p class="artist">${artistName}</p>
                <div class="trade-meta">
                    <span>Condition: <strong>${condition}</strong></span>
                    <span>User: <strong>@You (Active Member)</strong></span>
                </div>
                <button class="offer-btn" style="border-color: var(--primary-green); color: var(--primary-green);" onclick="alert('You cannot trade with your own listing!')">Manage Listing</button>
            `;

            tradeBoard.insertBefore(newCard, tradeBoard.firstChild);
            tradeForm.reset();
        });
    }

    // =========================================================================
    // FEATURE 5: SIGN-UP FORM FEEDBACK (About Page)
    // =========================================================================
    const clubForm = document.getElementById("clubForm");
    const feedbackArea = document.getElementById("formFeedback");

    if (clubForm) {
        clubForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const userName = document.getElementById("fullName").value;
            const chosenGenre = document.getElementById("musicGenre").value;

            feedbackArea.innerHTML = "✨ Welcome to Waxxed on Waxx, " + userName + "! Your information is locked in. We'll start assembling your first specialized " + chosenGenre + " track recommendations soon!";
            feedbackArea.style.display = "block";
            feedbackArea.style.backgroundColor = "#e8f5e9"; 
            feedbackArea.style.color = "#2e6f40";           
            clubForm.reset();
        });
    }

    // =========================================================================
    // FEATURE 6: GATEWAY MANAGEMENT (LOGIN, SIGNUP, AND PERSISTENCE)
    // =========================================================================
    const loginSection = document.getElementById("loginSection");
    const signupSection = document.getElementById("signupSection");
    const showSignupLink = document.getElementById("showSignup");
    const showLoginLink = document.getElementById("showLogin");
    
    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");
    const loginUserInput = document.getElementById("loginUser");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    // Check for preserved user name
    if (loginUserInput) {
        const savedName = localStorage.getItem("waxxedSavedUsername");
        if (savedName) {
            loginUserInput.value = savedName;
            rememberMeCheckbox.checked = true;
        }
    }

    // Toggle forms
    if (showSignupLink && showLoginLink) {
        showSignupLink.addEventListener("click", function(e) {
            e.preventDefault();
            loginSection.classList.add("hidden-auth");
            signupSection.classList.remove("hidden-auth");
        });

        showLoginLink.addEventListener("click", function(e) {
            e.preventDefault();
            signupSection.classList.add("hidden-auth");
            loginSection.classList.remove("hidden-auth");
        });
    }

    // Submit Login
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const username = loginUserInput.value;
            const accessSelection = document.querySelector('input[name="accessType"]:checked').value;

            if (rememberMeCheckbox.checked) {
                localStorage.setItem("waxxedSavedUsername", username);
            } else {
                localStorage.removeItem("waxxedSavedUsername");
            }

            alert(`Access Granted! Entering Waxxed on Waxx Hub as a registered ${accessSelection.toUpperCase()}.`);
            window.location.href = "index.html";
        });
    }

    // Submit Registration Form
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const registrantName = document.getElementById("regName").value;
            alert(`Account successfully provisioned for ${registrantName}! Returning to portal login.`);
            
            signupSection.classList.add("hidden-auth");
            loginSection.classList.remove("hidden-auth");
            
            if (loginUserInput) {
                loginUserInput.value = document.getElementById("regEmail").value;
            }
        });
    }
});