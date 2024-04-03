// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // -------------------------NAVBAR--------------------------
          "job": "Professional Web Developer",
          // -------------------------ABOUT---------------------
          "mywork": "My work",
          "myproject": "Projects.",
          "projecttext": "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
          // ------------------------WORK-------------------------
          "overview": "Overview.",
          "overviewtext": "I'm a skilled software developer with experience in Javascript, HTML, CSS and expertise in frameworks like React, React Native, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
          // -----------------------CONTACT-------------------------
          "getintouch": "Get in touch",
          "yourname": "Your Name",
          "yourname_ph": "What's your name?",
          "youremail": "Your Email",
          "youremail_ph": "What's your email?",
          "yourmessage": "Your message",
          "yourmessage_ph": "What do you want to say?",
          "contact_sent": "Thank you, I will get back to you as soon as possible.",
          // --------------------HERO--------------------
          "hi_i_am": "Hi, I am",
          "what_i_do": "I develop 3D visuals, user interfaces, websites (E-commerce,",
          "what_i_do_next": " One-Page, Blog, Forum...), mobile application (Android, iOS), SEO",
          // --------------------EXPERIENCE------------------
          "experience_subtext": "What I have done so far",
          "experience_headtext": "Experience.",
          // -------------------FEEDBACKS--------------------
          "feedbacks_subtext": "What others say",
          "feedbacks_headtext": "Testimonials.",

          // Add other translation keys and values here
        }
      },
      fr: {
        translation: {
          // -------------------------NAVBAR--------------------------
          "job": "Développeur Web Professionnel",
          // -------------------------ABOUT---------------------
          "mywork": "Mon travail",
          "myproject": "Projets.",
          "projecttext": "Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers des référentiels de code et des démos en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer des projets effectivement.",
          // ------------------------WORK-------------------------
          "overview": "Aperçu.",
          "overviewtext": "Je suis un développeur de logiciels qualifié avec une expérience en Javascript, HTML, CSS et une expertise dans des frameworks comme React, React Native, Node.js et Three.js. J'apprends vite et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent des problèmes du monde réel. Travaillons ensemble pour donner vie à vos idées !",
          "getintouch": "Entrons en contact",
          "yourname": "Votre Nom",
          "yourname_ph": "Quel est votre nom?",
          "youremail": "Votre Email",
          "youremail_ph": "Quel est votre email?",
          "yourmessage": "Votre Message",
          "yourmessage_ph": "Que voulez-vous dire?",
          // --------------------HERO--------------------
          "hi_i_am": "Je suis",
          "what_i_do": "Je développe des visuels 3D , des interfaces utilisateurs, sites web ",
          "what_i_do_next": " (E-commerce, One-Page, Blog, Forum), application mobile (iOS, Android), SEO",
          // --------------------EXPERIENCE------------------
          "experience_subtext": "Ce que j'ai fais jusqu'à présent",
          "experience_headtext": "Expérience.",
          // -------------------FEEDBACKS--------------------
          "feedbacks_subtext": "Ce que les gens disent",
          "feedbacks_headtext": "Témoignages.",

          // Corresponding keys in French
        }
      }
    },
    lng: "en", // initial language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
