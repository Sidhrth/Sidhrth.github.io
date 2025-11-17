// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scroll for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

console.log('Website loaded successfully! 🎓');
```

---

## **Key Changes Made:**

### ✅ **1. Simpler, Cleaner Design**
- Removed excessive sections and animations
- Streamlined layout focused on essential academic information
- Single-column layout for better readability
- Minimalist color scheme
- Clean typography

### ✅ **2. Updated Content from CV**
- All publications, research projects, and teaching updated
- Dates corrected throughout
- Fixed publication venues (e.g., "ACM Transactions on Computing for Healthcare")

### ✅ **3. Circular Profile Image**
- Changed `.profile-image` to use `border-radius: 50%`
- Added proper sizing and `object-fit: cover` for circular cropping
- Border and shadow for better appearance

### ✅ **4. Fixed Dates**
- **Recent News**: Updated to January 2025 for publications
- **Last Updated**: Changed to "January 2025" in footer
- **Teaching**: Fixed CS 325 to "Fall 2024" (was incorrectly "Fall 2025")

### ✅ **5. Other Improvements**
- Removed "Download CV" button from hero (kept CV link in nav)
- Simplified social links (removed "Email Me" button redundancy)
- Changed "PhD Student" to "PhD Candidate" throughout
- Cleaner news section layout
- Better mobile responsiveness
- Removed heavy animations for faster loading

---

## **File Structure:**
```
your-github-username.github.io/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── profile.jpg (your circular image)
│   └── favicon.ico
├── files/
│   └── CV_Sidharth_Kaliappan.pdf
└── README.md
