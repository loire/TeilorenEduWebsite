// Translation data
const translations = {
    en: {
        'hero-title': 'Dr. Etienne Loire',
        'hero-subtitle': 'Life Science Educator & Researcher',
        'hero-contact': 'Hanoi, Vietnam | etienne.loire@gmail.com',
        'approach-title': 'My Approach to Education of Science',
        'interdisciplinary-title': 'Interdisciplinary Learning',
        'interdisciplinary-description': 'I build bridges between disciplines — linking biology with mathematics, computer science, and environmental studies — creating dynamic learning environments where students see the big picture.',
        'inspiration-title': 'Critical Thinking & Curiosity',
        'inspiration-description': 'My teaching fosters curiosity and critical thinking, ensuring students grasp core concepts with clarity while developing autonomous skills for independent scientific discovery.',
        'professional-title': 'Professional Experiences',
        'university-teaching-title': 'University Teaching & Training',
        'university-teaching-description': 'Teaching Assistant (2006-2009, Sorbonne) delivering tutorials in mathematics and computer science. Guest Lecturer in Epidemiology at Kasetsart University (2019-2022, Bangkok) for international students. Trainer in genetic data analysis for international partners.',
        'research-title': 'Research Scientist (2009-2025)',
        'research-description': 'Research Scientist at CIRAD (2015-2025) leading projects on microbial genomics, evolutionary biology, and antimicrobial resistance. Postdoctoral Researcher at CNRS and Max Planck Institute (2009-2015). Author of 60 publications, cited 2500+ times.',
        'tutoring-title': 'Secondary Education & Tutoring',
        'tutoring-description': 'Private tutor for AP Biology at British International School of Hanoi (2025). School outreach presenter (2013-2019) conducting engaging science sessions at French high schools and middle schools.',
        'education-title': 'Education',
        'phd-title': 'Ph.D. in Evolutionary Genetics (2006-2010)',
        'phd-description': 'University of Paris – Sorbonne, France',
        'phd-details': 'Specialized research in evolutionary biology with focus on computational analysis and genetic data interpretation.',
        'master-title': 'Master\'s in Cellular and Molecular Biology (2004-2006)',
        'master-description': 'University of Paris – Sorbonne, France · Specialization in Bioinformatics · Ranked 2nd',
        'master-details': 'Advanced studies in cellular mechanisms, molecular processes, and bioinformatics methodologies.',
        'bachelor-title': 'B.Sc. in Life Sciences (2001-2004)',
        'bachelor-description': 'University of Paris – Sorbonne, France',
        'international-title': 'International Experience',
        'asia-title': 'Southeast Asia Experience (2019-Present)',
        'asia-description': 'Based in Vietnam and Thailand since 2019, managing partnerships with 20+ institutions across Thailand, Vietnam, Cambodia, Laos, and Indonesia. Extensive experience in multicultural educational environments.',
        'publications-title': 'Academic Publications & Profiles',
        'publications-description': '60 publications and conference proceedings.',
        'contact-title': 'Contact Information',
        'contact-description': 'Interested in science tutoring or educational consulting? Contact me to discuss personalized support for your child\'s academic journey.',
        'email-label': 'Email:',
        'phone-label': 'Phone:',
        'cv-link': 'Download Full CV',
        'footer-text': '© 2025 Dr. Etienne Loire. Professional tutoring and educational consulting services.'
    },
    fr: {
        'hero-title': 'Dr. Etienne Loire',
        'hero-subtitle': 'Éducateur et Chercheur en Sciences de la Vie',
        'hero-contact': 'Hanoi, Vietnam | etienne.loire@gmail.com',
        'approach-title': 'Mon Approche de l\'Enseignement des Sciences',
        'interdisciplinary-title': 'Apprentissage Interdisciplinaire',
        'interdisciplinary-description': 'Je crée des ponts entre les disciplines — reliant biologie, mathématiques, informatique et études environnementales — créant des environnements d\'apprentissage dynamiques où les étudiants voient la vue d\'ensemble.',
        'inspiration-title': 'Pensée Critique & Curiosité',
        'inspiration-description': 'Mon enseignement favorise la curiosité et la pensée critique, assurant que les étudiants comprennent les concepts fondamentaux avec clarté tout en développant des compétences autonomes pour la découverte scientifique indépendante.',
        'professional-title': 'Expériences Professionnelles',
        'university-teaching-title': 'Enseignement et Formation Universitaires',
        'university-teaching-description': 'Chargé de TD (2006-2009, Sorbonne) en mathématiques et informatique. Professeur invité en Épidémiologie à l\'Université Kasetsart (2019-2022, Bangkok) pour étudiants internationaux. Formateur en analyse de données génétiques pour partenaires internationaux.',
        'research-title': 'Chercheur Scientifique (2009-2025)',
        'research-description': 'Chercheur au CIRAD (2015-2025) dirigeant des projets sur la génomique microbienne, biologie évolutive et résistance antimicrobienne. Chercheur postdoctoral au CNRS et Institut Max Planck (2009-2015). Auteur de 60 publications, citées 2500+ fois.',
        'tutoring-title': 'Enseignement Secondaire & Tutorat',
        'tutoring-description': 'Tuteur privé en AP Biology à la British International School of Hanoi (2025). Présentateur d\'actions éducatives (2013-2019) dans des lycées et collèges français.',
        'education-title': 'Formation',
        'phd-title': 'Doctorat en Génétique Évolutive (2006-2010)',
        'phd-description': 'Université Paris – Sorbonne, France',
        'phd-details': 'Recherche spécialisée en biologie évolutive avec focus sur l\'analyse computationnelle et l\'interprétation des données génétiques.',
        'master-title': 'Master en Biologie Cellulaire et Moléculaire (2004-2006)',
        'master-description': 'Université Paris – Sorbonne, France · Spécialisation Bioinformatique · Classé 2ème',
        'master-details': 'Études avancées des mécanismes cellulaires, processus moléculaires et méthodologies en bioinformatique.',
        'bachelor-title': 'Licence Sciences de la Vie (2001-2004)',
        'bachelor-description': 'Université Paris – Sorbonne, France',
        'international-title': 'Expérience Internationale',
        'asia-title': 'Expérience en Asie du Sud-Est (2019-Présent)',
        'asia-description': 'Basé au Vietnam et en Thaïlande depuis 2019, gérant des partenariats avec plus de 20 institutions en Thaïlande, Vietnam, Cambodge, Laos et Indonésie. Vaste expérience dans des environnements éducatifs multiculturels.',
        'publications-title': 'Publications Académiques & Profils',
        'publications-description': '60 publications et actes de conférence.',
        'contact-title': 'Informations de Contact',
        'contact-description': 'Intéressé par du tutorat scientifique ou du conseil éducatif ? Contactez-moi pour discuter d\'un accompagnement personnalisé pour le parcours académique de votre enfant.',
        'email-label': 'Email :',
        'phone-label': 'Téléphone :',
        'cv-link': 'Télécharger le CV Complet',
        'footer-text': '© 2025 Dr. Etienne Loire. Services de tutorat professionnel et conseil éducatif.'
    },
    vi: {
        'hero-title': 'TS. Etienne Loire',
        'hero-subtitle': 'Nhà Giáo dục và Nhà Nghiên cứu Khoa học Sinh học',
        'hero-contact': 'Hà Nội, Việt Nam | etienne.loire@gmail.com',
        'approach-title': 'Phương Pháp Giáo Dục Khoa Học của Tôi',
        'interdisciplinary-title': 'Học Tập Liên Ngành',
        'interdisciplinary-description': 'Tôi xây dựng cầu nối giữa các ngành học — liên kết sinh học với toán học, khoa học máy tính và nghiên cứu môi trường — tạo môi trường học tập năng động nơi học sinh nhìn thấy bức tranh toàn cảnh.',
        'inspiration-title': 'Tư Duy Phản Biện & Tò Mò',
        'inspiration-description': 'Phương pháp giảng dạy của tôi nuôi dưỡng tò mò và tư duy phản biện, đảm bảo học sinh nắm vững các khái niệm cốt lõi với sự rõ ràng đồng thời phát triển các kỹ năng tự chủ cho khám phá khoa học độc lập.',
        'professional-title': 'Kinh Nghiệm Chuyên Môn',
        'university-teaching-title': 'Giảng Dạy & Đào Tạo Đại Học',
        'university-teaching-description': 'Trợ giảng (2006-2009, Sorbonne) giảng dạy toán học và khoa học máy tính. Giảng viên khách mời về Dịch tễ học tại Đại học Kasetsart (2019-2022, Bangkok) cho sinh viên quốc tế. Huấn luyện viên phân tích dữ liệu di truyền cho các đối tác quốc tế.',
        'research-title': 'Nhà Nghiên Cứu Khoa Học (2009-2025)',
        'research-description': 'Nhà nghiên cứu tại CIRAD (2015-2025) dẫn dắt các dự án về gen vi sinh vật, sinh học tiến hóa và kháng kháng sinh. Nghiên cứu sau tiến sĩ tại CNRS và Viện Max Planck (2009-2015). Tác giả của 60 công bố, được trích dẫn hơn 2500 lần.',
        'tutoring-title': 'Giáo Dục Trung Học & Dạy Kèm',
        'tutoring-description': 'Gia sư riêng môn AP Biology tại Trường Quốc tế Anh Hà Nội (2025). Diễn giả tiếp cận trường học (2013-2019) thực hiện các buổi khoa học hấp dẫn tại các trường trung học Pháp.',
        'education-title': 'Học Vấn',
        'phd-title': 'Tiến Sĩ Di Truyền Học Tiến Hóa (2006-2010)',
        'phd-description': 'Đại học Paris – Sorbonne, Pháp',
        'phd-details': 'Nghiên cứu chuyên sâu về sinh học tiến hóa với trọng tâm phân tích tính toán và giải thích dữ liệu di truyền.',
        'master-title': 'Thạc Sĩ Sinh Học Tế Bào và Phân Tử (2004-2006)',
        'master-description': 'Đại học Paris – Sorbonne, Pháp · Chuyên ngành Tin Sinh học · Xếp hạng 2',
        'master-details': 'Nghiên cứu nâng cao về cơ chế tế bào, quá trình phân tử và phương pháp tin sinh học.',
        'bachelor-title': 'Cử Nhân Khoa Học Sinh Học (2001-2004)',
        'bachelor-description': 'Đại học Paris – Sorbonne, Pháp',
        'international-title': 'Kinh Nghiệm Quốc Tế',
        'asia-title': 'Kinh Nghiệm Đông Nam Á (2019-Hiện tại)',
        'asia-description': 'Làm việc tại Việt Nam và Thái Lan từ năm 2019, quản lý quan hệ đối tác với hơn 20 tổ chức trên khắp Thái Lan, Việt Nam, Campuchia, Lào và Indonesia. Kinh nghiệm rộng rãi trong môi trường giáo dục đa văn hóa.',
        'publications-title': 'Công Bố Học Thuật & Hồ Sơ',
        'publications-description': '60 công bố và kỷ yếu hội nghị.',
        'contact-title': 'Thông Tin Liên Hệ',
        'contact-description': 'Quan tâm đến dạy kèm khoa học hoặc tư vấn giáo dục? Liên hệ với tôi để thảo luận về hỗ trợ cá nhân hóa cho hành trình học tập của con em.',
        'email-label': 'Email:',
        'phone-label': 'Điện thoại:',
        'cv-link': 'Tải CV Đầy Đủ',
        'footer-text': '© 2025 TS. Etienne Loire. Dịch vụ dạy kèm chuyên nghiệp và tư vấn giáo dục.'
    }
};

// Current language
let currentLanguage = 'en';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    initializeLanguageSystem();
    
    // Initialize slideshow
    initializeSlideshow();
});

// ========== LANGUAGE SYSTEM ==========
function initializeLanguageSystem() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newLanguage = this.getAttribute('data-lang');
            setLanguage(newLanguage);
        });
    });
}

// Set language function
function setLanguage(language) {
    currentLanguage = language;
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update button states
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === language) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', language);
}

// ========== SLIDESHOW SYSTEM ==========
function initializeSlideshow() {
    const slideshow = {
        photos: [],
        currentIndex: 0,
        photoElement: document.getElementById('profile-photo-slideshow'),
        prevButton: document.getElementById('prev-photo'),
        nextButton: document.getElementById('next-photo'),
        isTransitioning: false
    };
    
    // Validate DOM elements exist
    if (!slideshow.photoElement || !slideshow.prevButton || !slideshow.nextButton) {
        console.error('Slideshow: Required DOM elements not found');
        return;
    }
    
    // Show photo at given index with fade animation
    function showPhoto(index) {
        if (slideshow.isTransitioning || slideshow.photos.length === 0) return;
        
        slideshow.isTransitioning = true;
        slideshow.photoElement.style.opacity = '0.3';
        
        setTimeout(() => {
            slideshow.photoElement.src = slideshow.photos[index];
            slideshow.currentIndex = index;
            slideshow.photoElement.style.opacity = '1';
            slideshow.isTransitioning = false;
        }, 200);
    }
    
    // Navigate to previous photo
    function previousPhoto() {
        if (slideshow.photos.length === 0) return;
        const newIndex = (slideshow.currentIndex - 1 + slideshow.photos.length) % slideshow.photos.length;
        showPhoto(newIndex);
    }
    
    // Navigate to next photo
    function nextPhoto() {
        if (slideshow.photos.length === 0) return;
        const newIndex = (slideshow.currentIndex + 1) % slideshow.photos.length;
        showPhoto(newIndex);
    }
    
    // Attach event listeners to navigation buttons
    slideshow.prevButton.addEventListener('click', previousPhoto);
    slideshow.nextButton.addEventListener('click', nextPhoto);
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousPhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        }
    });
    
    // Load photos from JSON file
    fetch('images/profile-photos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data.photos || !Array.isArray(data.photos) || data.photos.length === 0) {
                throw new Error('Invalid photos data in JSON');
            }
            
            slideshow.photos = data.photos;
            slideshow.photoElement.src = slideshow.photos[0];
            console.log(`Slideshow: Loaded ${slideshow.photos.length} photos`);
            
            // Show/hide navigation buttons based on photo count
            if (slideshow.photos.length <= 1) {
                slideshow.prevButton.style.display = 'none';
                slideshow.nextButton.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Slideshow: Error loading photos:', error);
            // Fallback to default image if JSON loading fails
            slideshow.photos = ['images/profile/20231026_124915.jpg'];
            slideshow.photoElement.src = slideshow.photos[0];
            slideshow.prevButton.style.display = 'none';
            slideshow.nextButton.style.display = 'none';
        });
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
