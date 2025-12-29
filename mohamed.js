document.addEventListener("DOMContentLoaded", function () {
    renderProjects();

    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(container => {
        const swiperEl = container.querySelector('.project-wrapper');
        const nextBtn = container.querySelector('.swiper-button-next');
        const prevBtn = container.querySelector('.swiper-button-prev');
        const paginationEl = container.querySelector('.swiper-pagination');

        new Swiper(swiperEl, {
            loop: true,
            spaceBetween: 30,

            pagination: {
                el: paginationEl,
                clickable: true,
                dynamicBullets: true
            },

            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1441: { slidesPerView: 4 }
            }
        });
    });
});

function renderProjects() {
    const wordpressList = document.getElementById('wordpress-list');
    const backendList = document.getElementById('backend-list');

    // Clear lists just in case
    if (wordpressList) wordpressList.innerHTML = '';
    if (backendList) backendList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        li.className = 'project-item swiper-slide';
        li.innerHTML = `
            <div class="project-link" onclick="openModal('${project.id}')">
                <img src="${project.images[0]}" alt="${project.title}">
                <p class="badge ${project.badgeClass}">${project.badge}</p>
                <h2 class="project-title">${project.title}</h2>
            </div>
        `;

        if (project.category === 'wordpress' && wordpressList) {
            wordpressList.appendChild(li);
        } else if (project.category === 'backend' && backendList) {
            backendList.appendChild(li);
        }
    });
}

// Profile Modal
const profileImg = document.querySelector('.profile img');
const profileModal = document.getElementById('profileModal');
const profileImage = document.getElementById('profileImage');
const profileCaption = document.getElementById('profileCaption');
const closeProfileModal = document.getElementsByClassName('close')[0];
profileImg.onclick = function () {
    profileModal.style.display = "block";
    profileImage.src = this.src;
    profileCaption.innerHTML = this.alt;
}
closeProfileModal.onclick = function () {
    profileModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == profileModal) {
        profileModal.style.display = "none";
    }
}


// array of projects data
const projects = [
    // Project 1 Halwani Bros
    {
        'id': '1',
        'title': 'Halwani Bros',
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
        'description': 'Halwani Bros Company is one of the most famous Saudi companies in manufacture and distribution of food field. Founded in 1950 in the city of Jeddah as a sample family business.',
        'link': 'https://www.halwani.com',
        'images':
            [
                'images/projects/halwaniBros/1.png',
                'images/projects/halwaniBros/2.png',
                'images/projects/halwaniBros/3.png',
                'images/projects/halwaniBros/4.png',
                'images/projects/halwaniBros/5.png',
                'images/projects/halwaniBros/6.png'
            ],
    },
    // Project 2 Sanad Digital
    {
        'id': '2',
        'title': 'Sanad Digital',
        'category': 'backend',
        'badge': 'Laravel',
        'badgeClass': 'laravel',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'backend',
        'badge': 'PHP',
        'badgeClass': 'php',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
    // Project 12 Kian Fabrics
    {
        'id': '12',
        'title': 'Kian Fabrics',
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
        'description': 'Kayan Fabrics is a leading company in the textile industry, specializing in import of high-quality garment fabrics and advanced digital & sublimation printing services.',
        'link': 'https://kianfabrics.com',
        'images':
            [
                'images/projects/kianFabrics/1.png',
                'images/projects/kianFabrics/2.png',
                'images/projects/kianFabrics/3.png',
                'images/projects/kianFabrics/4.png',
                'images/projects/kianFabrics/5.png',
                'images/projects/kianFabrics/6.png'
            ],
    },
    // Project 13 Cadena Globe
    {
        'id': '13',
        'title': 'Cadena',
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
        'description': 'Cadena Global is a trusted international sourcing and supply company, connecting businesses with high quality products and reliable solutions. We focus on transparency, professionalism, and long-term partnerships.',
        'link': 'https://cadenaeg.com',
        'images':
            [
                'images/projects/cadena/1.png',
                'images/projects/cadena/2.png',
                'images/projects/cadena/3.png',
                'images/projects/cadena/4.png',
                'images/projects/cadena/5.png',
                'images/projects/cadena/6.png'
            ],
    },
    // Project 14 Gulf Arabian
    {
        'id': '14',
        'title': 'Gulf Arabian',
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
        'description': 'A modern WordPress website for Gulf Arabian that emphasizes corporate branding, services, and contact lead generation across devices.',
        'link': 'https://gulfarabian.net',
        'images':
            [
                'images/projects/gulfArabian/1.png',
                'images/projects/gulfArabian/2.png',
                'images/projects/gulfArabian/3.png',
                'images/projects/gulfArabian/4.png',
                'images/projects/gulfArabian/5.png',
                'images/projects/gulfArabian/6.png'
            ],
    },
    // Project 15 GeoEnergy
    {
        'id': '15',
        'title': 'GeoEnergy',
        'category': 'wordpress',
        'badge': 'WordPress',
        'badgeClass': 'wordpress',
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
];


let modalSwiper = null;

function openModal(id) {
    const modal = document.getElementById("projectModal");
    const modalImages = document.getElementById("modalImages");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    // Find project by ID (safe lookup)
    const project = projects.find(p => p.id === id);
    if (!project) return;

    modalTitle.innerText = project.title;
    modalDescription.innerHTML = project.description;

    const projectLink = document.querySelector('.view-website');
    projectLink.href = project.link;

    // Destroy old swiper instance if exists
    if (modalSwiper) {
        modalSwiper.destroy(true, true);
        modalSwiper = null;
    }

    // Build Swiper HTML
    let slidesHtml = '';
    project.images.forEach(img => {
        slidesHtml += `<div class="swiper-slide"><img src="${img}" alt="${project.title}"></div>`;
    });

    modalImages.innerHTML = `
        <div class="swiper modal-swiper">
            <div class="swiper-wrapper">${slidesHtml}</div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;

    modal.style.display = "block";

    // Initialize Swiper
    modalSwiper = new Swiper('.modal-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
// Close modal when clicking anywhere outside of it
window.onclick = function (event) {
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

function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabContents.forEach(content => content.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}
