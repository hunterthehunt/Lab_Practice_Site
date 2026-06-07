// =========================================================================
// FEATURE 1: VINYL OF THE WEEK POP-UP NOTIFICATION
// =========================================================================
function showAlbumDetails(albumName, artistName) {
    alert("自动 Waxxed on Waxx Spotlight: '" + albumName + "' by " + artistName + ".\nAvailable in shop tracking stock profiles!");
}

// =========================================================================
// NEW FEATURE 2: AUTOMATIC INFINITE MARQUEE GALLERY LOOP
// =========================================================================
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("galleryContainer");
    
    if (galleryContainer) {
        let scrollSpeed = 1; // Pixels skipped per frame update block
        
        // Clone the content immediately to ensure a seamless wrap-around loop effect
        const innerContent = galleryContainer.innerHTML;
        galleryContainer.innerHTML += innerContent;

        function scrollMarquee() {
            galleryContainer.style.transform = `translateX(-${scrollSpeed}px)`;
            scrollSpeed += 0.5; // Controls tracking slide velocity

            // Reset loop position if it scrolls past the original width threshold
            if (scrollSpeed >= galleryContainer.scrollWidth / 2) {
                scrollSpeed = 0;
            }
            requestAnimationFrame(scrollMarquee);
        }
        // Start infinite animation logic loop execution
        requestAnimationFrame(scrollMarquee);
    }

    // =========================================================================
    // NEW FEATURE 3: INTERACTIVE SLIDING ACCORDION FAQ LOGIC
    // =========================================================================
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const currentAnswer = this.nextElementSibling;
            const isOpen = currentAnswer.style.maxHeight && currentAnswer.style.maxHeight !== "0px";

            // STEP A: Force collapse on ALL active questions across the wrapper
            document.querySelectorAll(".faq-answer").forEach(answer => {
                answer.style.maxHeight = "0px";
            });

            // STEP B: If the item clicked wasn't already open, expand it using scrollHeight boundaries
            if (!isOpen) {
                currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
            }
        });
    });

    // =========================================================================
    // NEW FEATURE 4: DYNAMIC LIVE MEMBER BOARD TRADE POSTING
    // =========================================================================
    const tradeForm = document.getElementById("tradeForm");
    const tradeBoard = document.getElementById("tradeBoard");

    if (tradeForm && tradeBoard) {
        tradeForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const albumName = document.getElementById("tradeAlbum").value;
            const artistName = document.getElementById("tradeArtist").value;
            const condition = document.getElementById("tradeCondition").value;

            // Build fresh card markup block natively
            const newCard = document.createElement("div");
            newCard.className = "trade-card";
            newCard.style.borderLeft = "4px solid #2e6f40"; // Use theme green for newly injected user listings
            
            newCard.innerHTML = `
                <div class="vinyl-disc-icon">💿</div>
                <h4>${albumName}</h4>
                <p class="artist">${artistName}</p>
                <div class="trade-meta">
                    <span>Condition: <strong>${condition}</strong></span>
                    <span>User: <strong>@You (Active Member)</strong></span>
                </div>
                <button class="offer-btn" style="border-color: #2e6f40; color: #2e6f40;" onclick="alert('You cannot trade with your own listing!')">Manage Listing</button>
            `;

            // Insert new listing card right at the top of the feed
            tradeBoard.insertBefore(newCard, tradeBoard.firstChild);
            tradeForm.reset();
        });
    }

    // =========================================================================
    // FEATURE 5: SIGN-UP FORM FEEDBACK
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
});