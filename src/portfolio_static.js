const portfolio = {
  // Resume : Contain Information Regarding Resume Page, all the static reside here, modification here will reflect on the website
  resume: {
    projects: {
      title: "PROJECTS",
      list: [
        {
          title: "Synthetic Data Generartion using GANs",
          description:
            "Collaborated with research team to explore an idea of a real world system for nuclear safety comprising of 150+nuclear facilities. Proposed and developed leading application increasing our scarce dataset of 350 satellite images to over 10,000 4k images. The system was designed to detect anomalies in the nuclear facilities and alert the authorities. The system was designed using a combination of GANs and CNNs. The project was done in Python and Pytorch.",
        },
        {
          title: "LevelUp",
          description:
            "Competed in a hackathon to develop a VR development tool and demo game in under 24 hours. Developed a face detection software that can convert the users 2D face to a 3D VR playable avatar.Implemented a Face-2-Mesh ML algorithm to approximate face dimensions, and used Facebook's PITUF-3D for body proportions. Collaborated with a group of 4 to win the contest, our efforts consisted in expertise for databases, through user's glb filestorage, cybersecurity, for handling data and authentication, frontend-website development, for final presentation. The project was done in Unity, C#, React JS, Firebase, Blender, MongoDB, and Python.",
        },
        {
          title: "Blockchain Currency Ecosystem",
          description:
            "Competed in a hackathon to develop an ERC-20 token ecosystem that supports ERC-721 Tokens, in under 24 hours. Deployed the ERC-20 Token into multiple faucets that comprise of over 300,000 mirror nodes. Implemented online resources to apply unique design models, for users to utilize the tokenomic properly. Collaborated with a third-party test DEX that mirrors the funding of its 1-billion-dollar liquidity Dapp, to deploy mytoken into their network of over 2.5 million users. The project was done in Solidity, React Js, React Native, Truffle, Ganache, and Firebase.",
        },
        {
          title: "WooShop",
          description:
            "Created open-source project e-commerce based project created with React-native, Graph-QL, and woo-commerce. It was developed as a showcase application so that I can show off my react native skills in my resume. The data source is woo-commerce by WordPress which is connected to the application my mean of graph-QL. It supports authentication utilizing JWT, Browses by filter, order creation, product listing, category listing, cart, and has over 100 stars on Github.",
        },
        {
          title: "Accounting Software",
          description:
            "At the start of my career I was tasked to create an accounting system over PHP, and I later made it open-source, and migrate it from a core-PHP to Laravel. The System contains mostly all kinds of features like accounts, ledgers, purchase orders, vouchers, and invoices. The database that is being used is MongoDB and is completely open-source for anyone to use.",
        },
        {
          title: "Easy Woo Cart",
          description:
            "A Simple plugin that lets you add products to your woo-commerce cart directly from the URL. It replicates the working flow of Shopify and it can be used in storefronts",
        },
        // {
        //   title: "Electron-Based Browser ",
        //   description:
        //     "Open-source project created with Electron + React, a browser with all the basic browser navigation and tabs like controls",
        // },
        {
          title: "Real-time Location tracking",
          description:
            "Another open-source flutter and java based project that is integrated with firebase to track-realtime location tracking. Initially, it was first created on java, it contains 2 apps, one is for the client and the other one is for the vendor that needed to be tracked, backed it used firebase to communicated and update real-time location in DB.",
        },
      ],
    },
    info: {
      title: "INFO",
      name: "Eduardo Trevino",
      age: ", 21, ♂",
      list: [
        ["Native -", "English, Spanish"],
        ["Email -", "realeddietrevino@gmail.com"],
        ["LinkedIn - ", "@eduardo-trevino"],
        ["Github - ", "@EduardoTrevino"],
        ["Medium - ", "@eduardotrevino"],
      ],
    },
    education: {
      title: "EDUCATION",
      list: [
        {
          company: "University of Texas, San Antonio",
          course: "Bachelor of Science - BS, Artifical Intelligence",
          range: "2019 : 2023 - ",
        },
        // Lets comment this out for now
        // {
        //   company: "APTECH Pakistan, @Karachi",
        //   course:
        //     "Advance Diploma In Software Engineering, Computer Software Engineering",
        //   range: "2017 : 2020 - ",
        // },
        // {
        //   company: "CMS Collage, @Karachi",
        //   course: "Higher Secondary - Pre-Engineering",
        //   range: "2017 : 2019 - ",
        // },
      ],
    },
    experience: {
      title: "EXPERIENCE",
      list: [
        {
          range: "2022 : Present -",
          company: "Idaho National Laboratory, Idaho Falls, ID",
          title: " Machine Learning Researcher - Intern",
          description: ` - Created a novel solution to generate synthetic data using 
            a generative adversarial network increasing ourdataset to 10,000+ high
            quality satellite images <br />- Presented a pipeline consisting
            of a convoluted neural network to incorporate the synthetic data
            solution to ourexisting computer vision nuclear facility detection
            model increasing our data by 2,859% <br />- Saved
            an enterprise by regaining control of the website by cloning the
            website in such a way that all the outside communication was
            forwarded. <br />- Collaborated on all stages of the software
            development lifecycle, from requirement gathering to production
            releases.`,
        },
        {
          range: "2017 : 2020 - ",
          company: "Machine Learning for Natrual Language Processing, University of Michigan, Ann Arbor, MI",
          title: "Deep Learning Researcher - Intern",
          description: ` - Leading group research for our 10,000+ node summaries
            for Natural Language processing <br />- Mapping out an algorithmic
            solution using graph neural networks to deduce efficient 1-10 nodes
            proposed weekly byour Natural Language processing researchers.`,
        },
      ],
    },
    bio: {
      title: "BIO",
      description: `
      Hey, I'm Eduardo Trevino, an AI programmer, Currently living in
          San Antonio~United States. If you are looking for a developer, I am currently
          exploring job opportunities, feel free to contact me.
          <br/><br/>I love programming, and i have been doing it since i was 10 years old,
          i have plenty websites that are dated back to 2011, when i used to use be a
          YouTuber and shared gaming contents. I am passionate about
          programing and in the past 5 years, i have worked with alot of
          projects, frameworks, and languages. In my spare time I usually
          explore new philosophical abstractions for metaphysics, and the 
          true nature of reality. I am also a big fan of creating Virtual Reality Games.
      `,
    },
    skills: {
      title: "SKILLS",
      list: [
        "Python",
        "R",
        "C++",
        "C",
        "C#",
        "Java",
        "Javascript",
        "Solidty (Ethereum)",
        "Pytorch",
        "Tensorflow",
        "Keras",
        "Scikit-Learn",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "tidyquant",
        "MongoDB",
        "Blender",
        "Unity",
        "UnrealEngine",
        "Vim",
        "Linux",
      ],
    },
    title: "Artifical Intelligence Programmer",
  },
  // Layout : Contain Information Regarding Layout of the Pages, all the static reside here, modification here will reflect on the website
  layout: {
    right: [
      {
        url: "/resume",
        label: "Resume",
        link: true,
      },
      {
        url: "mailto:realeddietrevino@gmail.com",
        label: "Email",
        link: false,
      },
      {
        url: "https://medium.com/@eduardotrevino",
        label: "Blogs",
      },
      {
        url: "https://github.com/EduardoTrevino",
        label: "GitHub",
      },
      {
        url: "https://www.linkedin.com/in/eduardo-trevino/",
        label: "LinkedIn",
      },
    ],
    left: [
      {
        url: "/about-me",
        label: "About",
      },
      {
        url: "/contact-me",
        label: "Contact",
      },
      {
        url: "/projects",
        label: "Projects",
      },
      {
        url: "/",
        label: "Home",
      },
    ],
  },
  // Contact : Contain Information Regarding Contact Page, all the static reside here, modification here will reflect on the website
  contact: {
    helmet: {
      title: "Eduardo Trevino - Contact Me",
    },
    title: "GET IN TOUCH 🏃",
    description:
      "I am currently living in San Antonio and exploring opportunities around me and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    btn: {
      url: "mailto:realerealeddietrevino@gmail.com",
      label: "Say Hi 👋 If you're in town!",
      link: false,
    },
    ending: "Or email me directly at realeddietrevino@gmail.com",
  },
  // About : Contain Information Regarding About Page, all the static reside here, modification here will reflect on the website
  About: {
    helmet: {
      title: "Eduardo Trevino - About Me",
    },
    title: "BIO",
    social: {
      label: "🏃 Follow me on ",
      links: [
        { label: "Twitter", url: "https://twitter.com/EddieTrevinoo" },
        { label: "Linkedin", url: "https://www.linkedin.com/in/eduardo-trevino/" },
        { label: "GitHub", url: "https://github.com/EduardoTrevino" },
        { label: "Medium", url: "https://eduardotrevino.medium.com/" },
      ],
    },
    description: [
      ` i am a Python enthusiast, with a specialty in Machine Learning and,
              Currently living in San Antonio, Texas, United States. I have worked hard for
              the past 5 years in the tech world, mostly for government and as a
              entrepreneur, created tons of landing pages, websites, mobile
              applications along the way, learned from my startup, and created principles for a new logical system to navigate my world.`,
      ` The Abundant energy I have fuels me in the pursuit of various
              interests, hobbies, areas of studies, and artistic endeavors. I am
              a fast learner who adapts quickly to change and eager to learn new
              methods and procedures, whether it is a cultural change or a
              work-related one`,
      `I am an adventurer! I want to create worlds, because I am fascinated by
              the beauty of the Earth. A primary goal of mine is to develop automated 
              systems for the creation of personalized worlds for people 
              to travel to, and learn from the environment and themselves.`,
      `   As a Programmer, my reputation precedes me as one who can adapt, learn and change
              according to the surrounding.`,
      `  I'm usually focused on : <br /> 
              🎛️ Designing Robust Desicion Making Systems <br />
              🌐 Developing full-stack self-actualzing applications that scale <br />
              ✨ Developing backend and structuring databases for the accessibility of AI and data scientists. <br />
              🧰 Building strong principles for long term social impact. <br />
              <br />
              In my work, I value: <br />
              ⏱️ Efficiency <br />
              🎯 Consistency <br />
              ♻️ Sustainability <br />
              ⚙️ Systems <br />
              📋 Standards <br />
              🤖 Automation <br />
              💠 Modular Design <br />
              👍 Emoji Lists`,
    ],
  },
  // Home : Contain Information Regarding Home Page, all the static reside here, modification here will reflect on the website
  home: {
    showModel: true,
    helmet: {
      title: "Eduardo Trevino - Welcome to Eddie's Dev-folio",
    },
    title: ["Eduardo", "Trevino"],
    subTitle: "Artificial Intelligence Engineer",
    description: `I Describe my self as a Catholic ~ Voracious Learner ~ INL researcher. I Specialize in developing Self-replicating
                    General-Purpose Learners.`,
  },
  // Projects : Contain Information Regarding Projects Page, all the static reside here, modification here will reflect on the website
  projects: [
    {
      technology: ["Python", "Pytorch", "Padas", "Sci-kit Learn"],
      slug: "projects/SDG-Using-GANs",
      title: "Syntetic Data Generation using GANs",
      description:
        "This AI model was created with Python, Pytorch, Pandas, and Sci-kit Learn. It is real-world application of Thermo-Nuclear Reactor civlian saftey system.",
      image: "https://i.imgur.com/26RulSB.jpeg",
      link: [
        {
          text: "Github",
          url: "https://github.com/EduardoTrevino/opencv",
        },
        // {
        //   text: "Read More on Medium",
        //   url: "https://eduardotrevino.medium.com/",
        // },
      ],
    },
    {
      technology: ["Python", "C#", "Unity", "Pytorch", "MongoDB", "Firebase"],
      slug: "projects/LevelUp",
      title: "Level Up",
      description:
        "This application was built using Unity, C#, Python, Pytorch, MongoDB, and Firebase. It takes a single 2D image (selfie of you) and generates a 3D model of yourself to use, modify, and play with in a 3D Virtual World.",
      image: "https://i.imgur.com/Qy0MjCA.png",
      link: [
        {
          text: "Github",
          url: "https://github.com/EduardoTrevino/pifuhd",
        },
        // {
        //   text: "Read More on Medium",
        //   url: "https://eduardotrevino.medium.com/",
        // },
      ],
    },
    {
      technology: ["Solidty", "Javascript", "React", "NodeJS", "MongoDB"],
      slug: "projects/BlockchainEcosystem",
      title: "Blockchain Ecosystem",
      description:
        "This application was built using Solidity, Javascript, React, NodeJS, and MongoDB. It is a creative solution that utilizes blockchain technology as a payment processor. The theme of the project revolved around allowing people sharing real estate to pay for eachothers trust in a decentralized manner.",
      image: "https://i.imgur.com/LQkFyJ6.jpeg",
      link: [
        {
          url: "https://github.com/EduardoTrevino/UTSAHack2021CodeQuantumERC-20",
          text: "Github",
        },
        // {
        //   url: "https://eduardotrevino.medium.com/",
        //   text: "Read More on Medium",
        // },
      ],
    },
    {
      technology: ["Laravel", "mySQL", "PHP"],
      slug: "projects/php-accounting-system",

      title: "Accounting-System",
      description:
        "An Accounting System designed with PHP and laravel, created with all the basic accounting concepts in the mind like Payment Vouchers, Receipts, Invoices, Adjustments, Ledgers and Accounts.",
      image: "https://i.imgur.com/zHeRJuN.png",
      link: [
        {
          url: "https://github.com/EduardoTrevino/pifuhd",
          text: "Github",
        },
      ],
    },
    // {
    //   technology: ["Electron", "React"],
    //   slug: "projects/super-simple-browser",

    //   title: "Super Simple browser",
    //   description:
    //     "Super Simple Browser is a electron and react based website browser with basic browsing functionality like tabs and navigation.A Gift for the open-source community.",
    //   image: "https://i.imgur.com/tEGPsIT.png",
    //   link: [
    //     {
    //       url: "https://github.com/EduardoTrevino/pifuhd",
    //       text: "Github",
    //     },
    //   ],
    // },
  ],
};
export default portfolio;
