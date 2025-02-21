document.addEventListener("DOMContentLoaded", function() {
    
    const linkedinURLs = {
        "pavina": "https://www.linkedin.com/in/pavinap-priyaa",
        "mezya": "https://www.linkedin.com/in/mezya-sezen",
        "priyadharshini":"https://www.linkedin.com/in/priyadharshini-pulavendran-4326002b6",
        "vaishnavi":"https://www.linkedin.com/in/vaishnavi2004",
        "kavin":"https://www.linkedin.com/in/kavin-arulselvan",
        "menaka":"https://www.linkedin.com/in/menakaraj128",
        "nisha":"https://www.linkedin.com/in/nisha-nandhini-stjoseph",
        "sweety":"https://www.linkedin.com/in/sweety-deena-r237",
        "dinesh":"https://www.linkedin.com/in/dinesh-m-g",
        "akila":"https://www.linkedin.com/in/sriagilandeswari-r-211a851a4",

    };

// Get all LinkedIn links and update their href
document.querySelectorAll(".linkedin-link").forEach(link => {
    const studentName = link.getAttribute("data-name"); // Get the identifier
    if (linkedinURLs[studentName]) {
        link.href = linkedinURLs[studentName]; // Set href dynamically
    } 
});
});