document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.project-wrapper', {
        loop: true,
        spaceBetween:30,

    // Pagination Bullets
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
            dynamicBullets:true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
            1441: {
                slidesPerView: 4
            }

        }
    });
});

// const track = document.querySelector('.grid-projects');
// const allProjects = Array.from(document.querySelectorAll('.project-card'));
// const visibleCount = 3;
// let currentIndex = 0;

// function updateSlider() {
//     track.innerHTML = ''; // نفضي المحتوى

//     for (let i = 0; i < visibleCount; i++) {
//         const index = (currentIndex + i) % allProjects.length;

//         const clone = allProjects[index].cloneNode(true); // انسخ بدل ما تنقل
//         track.appendChild(clone);
//     }
// }

// function nextProject() {
//     currentIndex = (currentIndex + 1) % allProjects.length;
//     updateSlider();
// }

// function prevProject() {
//     currentIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
//     updateSlider();
// }

// document.addEventListener('DOMContentLoaded', updateSlider);






// Profile Modal
const profileImg = document.querySelector('.profile img');
const profileModal = document.getElementById('profileModal');
const profileImage = document.getElementById('profileImage');
const profileCaption = document.getElementById('profileCaption');
const closeProfileModal = document.getElementsByClassName('close')[0];
profileImg.onclick = function() {
    profileModal.style.display = "block";
    profileImage.src = this.src;
    profileCaption.innerHTML = this.alt;
}
closeProfileModal.onclick = function() {
    profileModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == profileModal) {
        profileModal.style.display = "none";
    }
}


// array of projects data
const projects = [
    // Project 1 GeoEnergy
    {
        'id': '1',
        'title': 'GeoEnergy',
        'description': 'The project was developed by me while working at e-motion Agency. The website for GeoEnergy comprehensively showcases the company services, products, and courses. GeoEnergy specializes in offering innovative solutions for exploration and production data management and provides advanced consultancy and software solutions for the geoscience and engineering fields. The platform also highlights their proprietary system Eco7, which helps companies efficiently manage and organize their data, whether its geophysical data, well logs, or production data.',
        'link': 'https://geoenergy-eg.com',
        'images': 
        [
            'images/projects/geoenergy/1.png',
            'images/projects/geoenergy/2.png',
            'images/projects/geoenergy/3.png',
            'images/projects/geoenergy/4.png',
            'images/projects/geoenergy/5.png',
            'images/projects/geoenergy/6.png'
        ],
    },
    // Project 2 Sanad Digital
    {
        'id': '2',
        'title': 'Sanad Digital',
        'description': 'Sanad Digital is a pioneering platform that redefines financial sharing through a fully digital system. As a major step in digital transformation, Sanad Digital enables true financial cooperation, allowing every member to positively impact the lives of others. The project is built on the foundation of collaboration and community, offering a unique opportunity for users to join and benefit from a new era of digital finance. Opportunity comes once, take it and register your membership now and be a member of our Sanad Digital world. I developed the backend for this project, ensuring robust, efficient, and scalable operations for all users.',
        'link': 'https://sanaddigital.com',
        'images': 
        [
            'images/projects/sanadDigital/1.jpg',
            'images/projects/sanadDigital/2.jpg',
            'images/projects/sanadDigital/3.jpg',
            'images/projects/sanadDigital/4.jpg',
            'images/projects/sanadDigital/5.jpg',
            'images/projects/sanadDigital/6.jpg'
        ],
    },
    // Project 3 Wellria
    {
        'id': '3',
        'title': 'Wellria',
        'description': 'Wellria is a modern wellness and lifestyle platform dedicated to promoting healthy living. The website offers a variety of resources, including articles, tips, and product recommendations focused on physical and mental well-being. Wellria aims to inspire users to achieve a balanced lifestyle through expert advice and a supportive online community.',
        'link': 'https://wellria.com',
        'images': 
        [
            'images/projects/wellria/1.jpg',
            'images/projects/wellria/2.jpg',
            'images/projects/wellria/3.jpg',
            'images/projects/wellria/4.jpg',
            'images/projects/wellria/5.jpg',
            'images/projects/wellria/6.jpg'
        ],
    },
    // Project 4 Peaky
    {
        'id': '4',
        'title': 'Peaky',
        'description': 'Peaky is an online store specializing in high-quality, stylish T-shirts crafted with premium fabrics. I developed this project entirely from scratch, handling both the front-end and back-end to ensure a seamless and robust user experience. The website showcases a wide variety of unique designs, with a focus on exceptional comfort and durability, delivering products that not only look great but also feel amazing to wear.',
        'link': 'http://peaky24.free.nf',
        'images': 
        [
            'images/projects/peaky/1.jpg',
            'images/projects/peaky/2.jpg',
            'images/projects/peaky/3.jpg',
            'images/projects/peaky/4.jpg',
            'images/projects/peaky/5.jpg',
            'images/projects/peaky/6.jpg'
        ],
    },
    // Project 5 Coup
    {
        'id': '5',
        'title': 'Coup',
        'description': 'Coup is an e-commerce platform designed to offer users a seamless online shopping experience. The website features a modern and intuitive interface, allowing customers to browse a wide range of products, discover exclusive deals, and make secure purchases with ease. Coup aims to provide high-quality products and exceptional customer service, making online shopping convenient and enjoyable for everyone.',
        'link': 'https://coupeg.com',
        'images': 
        [
            'images/projects/coup/1.jpg',
            'images/projects/coup/2.jpg',
            'images/projects/coup/3.jpg',
            'images/projects/coup/4.jpg',
            'images/projects/coup/5.jpg',
            'images/projects/coup/6.jpg'
        ],
    },
    // Project 6 Travel Boutique
    {
        'id': '6',
        'title': 'Travel Boutique',
        'description': 'The project was developed by me while working at e-motion Agency. The website for Travel Boutique is a WordPress-based platform that showcases the company’s travel services, including tours, packages, and travel tips. It features a user-friendly interface with vibrant images and detailed descriptions of various travel destinations. The site aims to provide an engaging experience for users looking to explore travel options and book their next adventure.',
        'link': 'https://gotravelboutique.com',
        'images': 
        [
            'images/projects/travelBoutique/1.jpg',
            'images/projects/travelBoutique/2.jpg',
            'images/projects/travelBoutique/3.jpg',
            'images/projects/travelBoutique/4.jpg',
            'images/projects/travelBoutique/5.jpg',
            'images/projects/travelBoutique/6.jpg'
        ],
    },
    // Project 7 GNetworx
    {
        'id': '7',
        'title': 'GNetworx',
        'description': 'Gnetworx is a WordPress-based website that serves as a platform for the company to showcase its services, projects, and expertise in the field of network solutions. The site features a modern design with easy navigation, allowing users to explore various sections including service offerings, case studies, and company information. Gnetworx aims to provide comprehensive network solutions tailored to meet the needs of its clients.',
        'link': 'https://gnetworx.net',
        'images': 
        [
            'images/projects/gnetworx/1.jpg',
            'images/projects/gnetworx/2.jpg',
            'images/projects/gnetworx/3.jpg',
            'images/projects/gnetworx/4.jpg',
            'images/projects/gnetworx/5.jpg',
            'images/projects/gnetworx/6.jpg'
        ],
    },
    // Project 8 Mosalamy
    {
        'id': '8',
        'title': 'Mosalamy',
        'description': 'Mosalamy Architectural Consultancy is a pioneering architectural firm established in 2014. The website presents a comprehensive shopping concept for clients, covering every stage from conceptual design to construction management. Mosalamy is dedicated to delivering innovative architectural solutions and exceptional project management, ensuring a seamless experience from vision to realization.',
        'link': 'https://mosalamy.com',
        'images': 
        [
            'images/projects/mosalamy/1.jpg',
            'images/projects/mosalamy/2.jpg',
            'images/projects/mosalamy/3.jpg',
            'images/projects/mosalamy/4.jpg',
            'images/projects/mosalamy/5.jpg',
            'images/projects/mosalamy/6.jpg'
        ],
    },
    // Project 9 Pyramids Secret
    {
        'id': '9',
        'title': 'Pyramids Secret',
        'description': 'Pyramids Secret is a wellness and health retreat dedicated to optimizing immune health through a comprehensive and holistic approach. The website showcases specialized preventive and therapeutic programs that blend traditional and alternative methods, offering guests a harmonious synergy for their well-being. By integrating therapeutic nutrition, kinetic activities, and environmental treatments, Pyramids Secret provides a multidimensional experience designed to enhance and support immune function.',
        'link': 'https://pyramidssecret.com',
        'images': 
        [
            'images/projects/pyramidSecret/1.jpg',
            'images/projects/pyramidSecret/2.jpg',
            'images/projects/pyramidSecret/3.jpg',
            'images/projects/pyramidSecret/4.jpg',
            'images/projects/pyramidSecret/5.jpg',
            'images/projects/pyramidSecret/6.jpg'
        ],
    },
    // Project 10 Maxim
    {
        'id': '10',
        'title': 'Maxim',
        'description': 'The project was developed by me while working at e-motion Agency. The website for MAXIM serves as a portfolio showcasing the company’s projects, leaders, and history. The site provides a comprehensive overview of MAXIM’s achievements since its establishment in 1980, highlighting key projects such as Maxim Country Club, Maxim Residences, and Maxim Mall. MAXIM aims to offer comprehensive solutions to meet the evolving needs of its clients and partners, contributing to its strong reputation in the Egyptian market.',
        'link': 'https://maximig.com',
        'images': 
        [
            'images/projects/maxim/1.png',
            'images/projects/maxim/2.png',
            'images/projects/maxim/3.png',
            'images/projects/maxim/4.png',
            'images/projects/maxim/5.png',
            'images/projects/maxim/6.png'
        ],
    },
    // Project 11 Mabani Aljazeera
    {
        'id': '11',
        'title': 'Mabani Aljazeera',
        'description': 'The project was developed by me while working at e-motion Agency. The website for Mabani D&B serves as a showcase for the company projects, machinery, and equipment, as well as providing comprehensive information about the company. Mabani D&B aims to provide a range of integrated solutions in the construction field, showcasing its outstanding projects that vary from infrastructure to commercial buildings. The website seeks to demonstrate quality and innovation in all aspects of the projects, from engineering design to actual execution.',
        'link': 'https://mabani.com.sa',
        'images': 
        [
            'images/projects/mabani/1.png',
            'images/projects/mabani/2.png',
            'images/projects/mabani/3.png',
            'images/projects/mabani/4.png',
            'images/projects/mabani/5.png',
            'images/projects/mabani/6.png'
        ],
    },
];


function openModal(id) {
    // console.log(id);
    const modal = document.getElementById("projectModal");
    const modalImages = document.getElementById("modalImages");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const projectImagesCount = projects[id - 1].images.length;
    const projectLink = document.querySelector('.view-website');

    modalTitle.innerText = projects[id - 1].title;
    
    modalDescription.innerHTML = projects[id - 1].description;
    modalImages.innerHTML = '';
    if(projectImagesCount > 0) {
        projects[id - 1].images.forEach(function(image, index) {
            modalImages.innerHTML += `<img src="${projects[id - 1].images[index]}">`;
        });
    }
    projectLink.href = projects[id - 1].link;
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
