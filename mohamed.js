// Profile Modal
const profileImg = document.querySelector('.profile img'); // حدد صورة البروفايل
const profileModal = document.getElementById('profileModal');
const profileImage = document.getElementById('profileImage');
const profileCaption = document.getElementById('profileCaption');
const closeProfileModal = document.getElementsByClassName('close')[0];
profileImg.onclick = function() {
    profileModal.style.display = "block";
    profileImage.src = this.src; // تعيين صورة البروفايل في المودال
    profileCaption.innerHTML = this.alt; // تعيين النص البديل كتعليق
}
closeProfileModal.onclick = function() {
    profileModal.style.display = "none"; // إغلاق المودال
}
window.onclick = function(event) {
    if (event.target == profileModal) {
        profileModal.style.display = "none"; // إغلاق المودال عند النقر خارجه
    }
}

// Projects Modal
function openModal(project) {
    const modal = document.getElementById("projectModal");
    const modalImages = document.getElementById("modalImages");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    if (project === 'project1') {
        modalTitle.innerText = "GeoEnergy";
        modalImages.innerHTML = `
            <img src="images/projects/geoenergy/1.png" alt="Image 1">
            <img src="images/projects/geoenergy/2.png" alt="Image 2">
            <img src="images/projects/geoenergy/3.png" alt="Image 3">
            <img src="images/projects/geoenergy/4.png" alt="Image 4">
            <img src="images/projects/geoenergy/5.png" alt="Image 5">
            <img src="images/projects/geoenergy/6.png" alt="Image 6">
        `;
        modalDescription.innerHTML = `
            The project was developed by me while working at e-motion Agency. The website for GeoEnergy comprehensively showcases the company's services, products, and courses. GeoEnergy specializes in offering innovative solutions for exploration and production data management and provides advanced consultancy and software solutions for the geoscience and engineering fields. The platform also highlights their proprietary system 'Eco7,' which helps companies efficiently manage and organize their data, whether it's geophysical data, well logs, or production data.
            <br><br>
            <a href="https://geoenergy-eg.com" target="_blank" class="view-website">View Website</a>
        `;
    } else if (project === 'project2') {
        modalTitle.innerText = "Mabani Aljazeera";
        modalImages.innerHTML = `
            <img src="images/projects/mabani/1.png" alt="Image 1">
            <img src="images/projects/mabani/2.png" alt="Image 2">
            <img src="images/projects/mabani/3.png" alt="Image 3">
            <img src="images/projects/mabani/4.png" alt="Image 4">
            <img src="images/projects/mabani/5.png" alt="Image 5">
            <img src="images/projects/mabani/6.png" alt="Image 6">
        `;
        modalDescription.innerHTML = `
            The project was developed by me while working at e-motion Agency. The website for Mabani D&B serves as a showcase for the company's projects, machinery, and equipment, as well as providing comprehensive information about the company.

Mabani D&B aims to provide a range of integrated solutions in the construction field, showcasing its outstanding projects that vary from infrastructure to commercial buildings. The website seeks to demonstrate quality and innovation in all aspects of the projects, from engineering design to actual execution.

It also highlights the advanced machinery and equipment used by the company, reflecting its commitment to applying the latest technologies in the construction industry. These machines contribute to achieving efficiency and effectiveness in project execution, helping to achieve the desired results on time.

Additionally, the site contains detailed information about Mabani D&B, its innovative vision in the construction field, and its mission focused on meeting client needs and exceeding expectations. Through this digital showcase, Mabani D&B aims to enhance its transparency and professionalism in the market, contributing to building lasting relationships with its clients and business partners.
            <br><br>
            <a href="https://mabani.com.sa" target="_blank" class="view-website">View Website</a>
        `;
    } else if (project === 'project3') {
        modalTitle.innerText = "Maxim";
        modalImages.innerHTML = `
            <img src="images/projects/maxim/1.png" alt="Image 1">
            <img src="images/projects/maxim/2.png" alt="Image 2">
            <img src="images/projects/maxim/3.png" alt="Image 3">
            <img src="images/projects/maxim/4.png" alt="Image 4">
            <img src="images/projects/maxim/5.png" alt="Image 5">
            <img src="images/projects/maxim/6.png" alt="Image 6">
        `;
        modalDescription.innerHTML = `
            The project was developed by me while working at e-motion Agency. The website for MAXIM serves as a portfolio showcasing the company’s projects, leaders, and history. The site provides a comprehensive overview of MAXIM’s achievements since its establishment in 1980, highlighting key projects such as Maxim Country Club, Maxim Residences, and Maxim Mall. MAXIM aims to offer comprehensive solutions to meet the evolving needs of its clients and partners, contributing to its strong reputation in the Egyptian market.

Through this website, MAXIM emphasizes its commitment to sustainable growth and long-term enterprise value, relying on a deep understanding of industry fundamentals, demographic trends, and consumer behavior.
            <br><br>
            <a href="https://maximig.com" target="_blank" class="view-website">View Website</a>
        `;
    }
    modal.style.display = "block";
}
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
// Close modal when clicking anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeModal();
    }
}




function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuButton = document.querySelector('.menu-button');

    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        navMenu.style.display = 'block';
        menuButton.setAttribute('aria-expanded', 'true');
    }
}
