let translations = {};
let currentLanguage = localStorage.getItem('language') || 'es';

// Traducciones incrustadas directamente
const translationsData = {
  "es": {
    "common": {
      "backToHome": "← Volver al inicio",
      "footer": "© 2025 Mi currículum Alex Freire Barriga"
    },
    "index": {
      "title": "Alex Freire — Currículum Vitae",
      "heading": "Alex Freire — Currículum Vitae",
      "subtitle": "Desarrollador de aplicaciones",
      "description": "Descubre mi experiencia, formación y más",
      "experience": "💼 Experiencia",
      "experienceDesc": "Consulta mi trayectoria laboral y proyectos destacados.",
      "studies": "🎓 Estudios",
      "studiesDesc": "Descubre mi formación académica y certificaciones.",
      "aboutMe": "🙋 Sobre mí",
      "aboutMeDesc": "Conóceme un poco más: mis intereses, valores, metas y habilidades.",
      "contact": "📞 Contacto",
      "contactDesc": "Ponte en contacto conmigo para colaboraciones o consultas."
    },
    "contacto": {
      "title": "Contacto — Alex Freire",
      "heading": "📞 Contacto",
      "personalData": "Datos personales",
      "name": "Nombre:",
      "profession": "Profesión:",
      "phone": "Teléfono:",
      "address": "Dirección:",
      "github": "GitHub:",
      "email": "Correo electrónico:",
      "sendEmail": "Enviar correo",
      "note": "Nota: Haz clic en \"Enviar correo\" para abrir Gmail en una nueva pestaña con tu dirección ya rellenada. Si usas otro cliente de correo, también puedes copiar la dirección y usar tu aplicación preferida."
    },
    "experiencia": {
      "title": "Experiencia — Alex Freire",
      "heading": "💼 Experiencia",
      "viewGitHub": "Ver mi perfil en GitHub",
      "role1": "Community Manager y Desarrollador Web - Depility Leganés",
      "year1": "2022",
      "desc1": "Empresa de prácticas de grado medio. Mantenimiento de su página web y community manager de sus redes sociales.",
      "role2": "Reponedor Carrefour - Parla",
      "year2": "Verano 2025",
      "desc2": "Reposición de PGC en Parla.",
      "role3": "Proyecto final de curso - ParkingHole",
      "year3": "2025 - 2026",
      "desc3": "Creación de la aplicación de principio a fin en Android Studio y web para el trabajo final de CFGS (en progreso).",
      "clickHere": "Haz clic aquí."
    },
    "estudios": {
      "title": "Estudios — Alex Freire",
      "heading": "🎓 Estudios",
      "certified": "Certificado",
      "english": "B2 Inglés",
      "englishYear": "2024",
      "englishCertificate": "Cambridge",
      "englishDesc": "Nivel B2 en inglés certificado por Cambridge.",
      "cfgs": "CFGS Desarrollo de Aplicaciones Multiplataforma",
      "cfgsYear": "2024 - 2026",
      "cfgsSchool": "CampusFP",
      "cfgsDesc": "Formación en programación, bases de datos, aplicaciones web y móviles, y aprendizaje en Unity.",
      "cfgm": "CFGM Sistemas Microinformáticos y Redes",
      "cfgmYear": "2022 - 2024",
      "cfgmSchool": "IES Tierno Galván",
      "cfgmDesc": "Formación en programación, sistemas informáticos, redes y seguridad.",
      "additional": "Formación adicional",
      "additionalCourses": "Formación adicional ▾",
      "course1": "Google Cloud — Introduction to Generative AI",
      "course2": "Educación Secundaria Obligatoria (ESO)"
    },
    "sobremi": {
      "title": "Sobre mí — Alex Freire",
      "heading": "🙋 Sobre mí",
      "jobTitle": "Desarrollador web | Apasionado por la tecnología",
      "aboutTitle": "🙋 Sobre mí",
      "aboutText": "Soy un joven desarrollador apasionado por la tecnología, la programación y la creatividad. Me gusta enfrentar nuevos retos y aprender constantemente cosas nuevas. Disfruto trabajar en proyectos donde pueda aportar ideas, mejorar procesos y crear soluciones útiles. Me considero una persona comprometida, responsable y con muchas ganas de crecer profesionalmente.",
      "skillsTitle": "💻 Habilidades",
      "category": "Categoría",
      "skills": "Habilidades",
      "level": "Nivel",
      "programming": "Programación",
      "programmingSkills": "Python, PHP, Java, HTML, CSS, JavaScript, SQL, .NET",
      "programmingLevel": "Intermedio",
      "databases": "Bases de datos",
      "databasesSkills": "MySQL, PostgreSQL, Oracle y MongoDB",
      "databasesLevel": "Intermedio",
      "tools": "Herramientas",
      "toolsSkills": "Git, Visual Studio Code, Eclipse, IntelliJ IDEA, Android Studio",
      "toolsLevel": "Avanzado",
      "design": "Diseño",
      "designSkills": "Tailwind CSS, Figma (básico), Bootstrap, CSS (intermedio)",
      "designLevel": "Básico",
      "hobbiesTitle": "🎮 Hobbies",
      "hobby1": "🎧 Escuchar música",
      "hobby2": "🎮 Jugar videojuegos",
      "hobby3": "💪 Hacer deporte",
      "hobby4": "🎬 Ver series y películas",
      "hobby5": "💻 Aprender nuevas tecnologías",
      "teamworkTitle": "🤝 Trabajo en equipo",
      "teamworkText": "Me considero una persona colaborativa y empática, que valora la comunicación y el respeto dentro de un equipo. Disfruto trabajar con otros compañeros, compartir ideas y aportar soluciones conjuntas. Creo firmemente que un buen ambiente y la cooperación son la base para lograr grandes resultados."
    }
  },
  "en": {
    "common": {
      "backToHome": "← Back to Home",
      "footer": "© 2025 My Curriculum Alex Freire Barriga"
    },
    "index": {
      "title": "Alex Freire — Curriculum Vitae",
      "heading": "Alex Freire — Curriculum Vitae",
      "subtitle": "Application Developer",
      "description": "Discover my experience, education and more",
      "experience": "💼 Experience",
      "experienceDesc": "Check out my work history and featured projects.",
      "studies": "🎓 Studies",
      "studiesDesc": "Discover my academic training and certifications.",
      "aboutMe": "🙋 About Me",
      "aboutMeDesc": "Get to know me a little better: my interests, values, goals and skills.",
      "contact": "📞 Contact",
      "contactDesc": "Get in touch with me for collaborations or inquiries."
    },
    "contacto": {
      "title": "Contact — Alex Freire",
      "heading": "📞 Contact",
      "personalData": "Personal Information",
      "name": "Name:",
      "profession": "Profession:",
      "phone": "Phone:",
      "address": "Address:",
      "github": "GitHub:",
      "email": "Email:",
      "sendEmail": "Send Email",
      "note": "Note: Click \"Send Email\" to open Gmail in a new tab with your address already filled in. If you use another email client, you can also copy the address and use your preferred application."
    },
    "experiencia": {
      "title": "Experience — Alex Freire",
      "heading": "💼 Experience",
      "viewGitHub": "View my GitHub profile",
      "role1": "Community Manager and Web Developer - Depility Leganés",
      "year1": "2022",
      "desc1": "Work placement in a mid-level company. Website maintenance and community manager for social networks.",
      "role2": "Carrefour Stocker - Parla",
      "year2": "Summer 2025",
      "desc2": "Restocking of consumer goods in Parla.",
      "role3": "Final course project - ParkingHole",
      "year3": "2025 - 2026",
      "desc3": "Building the application from scratch in Android Studio and web for the final project of Higher Technical Studies (in progress).",
      "clickHere": "Click here."
    },
    "estudios": {
      "title": "Studies — Alex Freire",
      "heading": "🎓 Studies",
      "certified": "Certified",
      "english": "B2 English",
      "englishYear": "2024",
      "englishCertificate": "Cambridge",
      "englishDesc": "B2 level English certified by Cambridge.",
      "cfgs": "HTS Development of Multiplatform Applications",
      "cfgsYear": "2024 - 2026",
      "cfgsSchool": "CampusFP",
      "cfgsDesc": "Training in programming, databases, web and mobile applications, and Unity learning.",
      "cfgm": "HTS Microcomputer Systems and Networks",
      "cfgmYear": "2022 - 2024",
      "cfgmSchool": "IES Tierno Galván",
      "cfgmDesc": "Training in programming, computer systems, networking and security.",
      "additional": "Additional Training",
      "additionalCourses": "Additional Training ▾",
      "course1": "Google Cloud — Introduction to Generative AI",
      "course2": "Compulsory Secondary Education (ESO)"
    },
    "sobremi": {
      "title": "About Me — Alex Freire",
      "heading": "🙋 About Me",
      "jobTitle": "Web Developer | Passionate about Technology",
      "aboutTitle": "🙋 About Me",
      "aboutText": "I'm a young developer passionate about technology, programming and creativity. I enjoy facing new challenges and constantly learning new things. I enjoy working on projects where I can contribute ideas, improve processes and create useful solutions. I consider myself a committed, responsible person with a strong desire to grow professionally.",
      "skillsTitle": "💻 Skills",
      "category": "Category",
      "skills": "Skills",
      "level": "Level",
      "programming": "Programming",
      "programmingSkills": "Python, PHP, Java, HTML, CSS, JavaScript, SQL, .NET",
      "programmingLevel": "Intermediate",
      "databases": "Databases",
      "databasesSkills": "MySQL, PostgreSQL, Oracle and MongoDB",
      "databasesLevel": "Intermediate",
      "tools": "Tools",
      "toolsSkills": "Git, Visual Studio Code, Eclipse, IntelliJ IDEA, Android Studio",
      "toolsLevel": "Advanced",
      "design": "Design",
      "designSkills": "Tailwind CSS, Figma (basic), Bootstrap, CSS (intermediate)",
      "designLevel": "Basic",
      "hobbiesTitle": "🎮 Hobbies",
      "hobby1": "🎧 Listening to music",
      "hobby2": "🎮 Playing video games",
      "hobby3": "💪 Doing sports",
      "hobby4": "🎬 Watching series and movies",
      "hobby5": "💻 Learning new technologies",
      "teamworkTitle": "🤝 Teamwork",
      "teamworkText": "I consider myself a collaborative and empathetic person who values communication and respect within a team. I enjoy working with colleagues, sharing ideas and providing joint solutions. I firmly believe that a good environment and cooperation are the foundation for achieving great results."
    }
  }
};

translations = translationsData;

// Aplicar idioma a la página
function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Actualizar atributo lang en el html
  document.documentElement.lang = lang;
  
  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let text = translations[lang];
    
    for (let k of keys) {
      if (text && typeof text === 'object') {
        text = text[k];
      }
    }
    
    if (text) {
      element.textContent = text;
    }
  });
  
  // Actualizar botón de idioma
  const langBtn = document.getElementById('language-toggle');
  if (langBtn) {
    if (lang === 'es') {
      langBtn.innerHTML = '<img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ec-1f1e7.svg" alt="English" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;"> English';
    } else {
      langBtn.innerHTML = '<img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ea-1f1f8.svg" alt="Español" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;"> Español';
    }
  }
}

// Cambiar idioma
function toggleLanguage() {
  const newLang = currentLanguage === 'es' ? 'en' : 'es';
  applyLanguage(newLang);
}

// Inicializar cuando el documento está listo
document.addEventListener('DOMContentLoaded', function() {
  applyLanguage(currentLanguage);
});
