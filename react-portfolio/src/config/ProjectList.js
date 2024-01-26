import event_search from '../assets/ProjectImage/event_search.png';
import inventory_management from '../assets/ProjectImage/inventory_management.png';
import color_shifter from '../assets/ProjectImage/color_shifter.png';
import mahavirtechnocast from '../assets/ProjectImage/mahavirtechnocast.png';
import ait from '../assets/ProjectImage/ait.png';
import ait_admin from '../assets/ProjectImage/ait_admin.png';
import flsak_ytd from '../assets/ProjectImage/flask_ytd.png';
import custom_object_detector from '../assets/ProjectImage/object_detection.png';
import embrill_web from '../assets/ProjectImage/embrill_web.png';
const projects = [
    {
      id: 1,
      name: 'Event Search',
      description:
        'A platform that enables the user to search for events based on location and category. The user can also save events to their favorites list and view them later. The user can also view the event details and purchase tickets for the event.',
      image: event_search,
      tags: ['node', 'angular', 'express', 'bootstrap', 'python', 'android app: Java', 'gcp'],
      source_code: 'https://github.com/mitesh2205/EventFinder',
      demo: 'https://assignment-8-378900.wl.r.appspot.com/search',
      video: '',
    },
  
    {
      id: 2,
      name: 'Inventory Management CMS',
      description:
        'A platform that enables the user to manage the inventory of a store. The user can add, edit, and delete products from the inventory. The user can also view the inventory and search for products based on their name, category and generate invoices.',
      image: inventory_management,
      tags: ['html', 'css', 'javascript', 'bootstrap', 'php', 'mysql'],
      source_code: 'https://github.com/mitesh2205/inventory-cm',
      demo: '',
      video: 'https://drive.google.com/file/d/1uoqJfYsF8-2bAzup287qGJPmKMU-2JB5/view?usp=sharing',
    },
  
    {
      id: 3,
      name: 'Color Shifter',
      description:
        'Constructed a unity 2D platformer game that is based on color shifting platforms along with AI bots and NPCs for player engagement. It collects complex player metrics and provides policy distillation for making game more engaging.',
      image: color_shifter,
      tags: ['C#', 'unity', 'game development'],
      source_code: 'https://github.com/mitesh2205/theelitegamer',
      demo: 'https://shrey82.github.io/game-finals/',
      video: '',
    },
  
    {
      id: 4,
      name: 'Custom Object Detector',
      description:
        'Developed a custom object detector using YOLOv3 and OpenCV. The model was trained on a custom dataset of google OIDV6. The model was able to detect the objects with an accuracy of 86.93%.',
      image: custom_object_detector,
      tags: ['python', 'opencv', 'yolov3', 'flask'],
      source_code: '',
      demo: '',
      video: '',
    },
    {
        id: 5,
        name: 'Mahavir Technocast, Website',
        description:
            'Developed a website for MahavirTechnocast, a company based in Rajkot, India. This helps the company to showcase their products and services to the world.',
        image: mahavirtechnocast,
        tags: ['html', 'css', 'javascript', 'bootstrap', 'php', 'mysql'],
        source_code: '',
        demo: 'https://mahavirtechnocast.com/',
        video: '',
    },
    {
        id: 6,
        name: 'Embrill Website',
        description:
            'Developed a website for Embrill, a company based in Ahmedabad, India. This helps the company to showcase their services to the world.',
        image: embrill_web,
        tags: ['html', 'css', 'javascript', 'bootstrap', 'php', 'mysql'],
        demo: 'https://embrill.com/',
        source_code: ''
        
    },
    {
        id: 7,
        name: 'College Website',
        description:
            'Developed a website for my college, Ahmedabad Institute of Technology, Ahmedabad, India. fully dynamic website with admin panel.',
        image: ait,
        tags: ['html', 'css', 'javascript', 'bootstrap', 'php', 'mysql'],
        source_code: '',
        demo: 'http://www.aitindia.in/aitnew/'
        
    },
    {
        id: 8,
        name: 'College Website Admin Panel',
        description:
            'Developed a admin panel for managing the website content with 4 different login roles for different users with different permissions.',
        image: ait_admin,
        tags: ['html', 'css', 'javascript', 'bootstrap', 'php', 'mysql'],
        demo: 'http://www.aitindia.in/aitnew/admin/login/finallogin1.php',
        source_code: ''
    },
    {
        id: 9,
        name: 'Youtube Downloader',
        description:
            'Developed a youtube downloader using flask and youtube-dl. The user can download the youtube video in different formats and resolutions.',
        image: flsak_ytd,
        tags: ['python', 'flask', 'youtube-dl'],
        demo: '',
        source_code: 'https://github.com/mitesh2205/flask-youtube-downloader',
        video: ''
    }
  ];
  export default projects;
