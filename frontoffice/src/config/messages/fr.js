// Model https://github.com/marmelab/react-admin/blob/master/packages/ra-language-french/src/index.ts

module.exports = {
  app: {
    action: {
      create: "Ajouter",
      search: "Rechercher",
      newSearch: "Commencez votre recherche",
      contactPlace: "Contacter le lieu",
      successAddBookmark: "Ajouté à vos favoris",
      successRemoveBookmark: "Supprimé de vos favoris",
      successMessageSent: "Votre message a bien été envoyé",
      publish: "publier",
      unpublish: "dépublier",
      published: "La ressource a été publiée",
      unpublished: "La ressource a été dépubliée",
      userCreation: "Utilisateur en cours de création...",
      userCreated: "Utilisateur créé",
      close: "Fermer",
      send: "Envoyer",
      listView: "vue liste",
      mapView: "vue carte",
      calendarView: "vue calendrier",
      filters: "filtres",
      removeFilters: "Enlever tous les filtres",
      showFilters: "Afficher les filtres",
      help: "Aide",
      contactPathOrganizer: "Contacter les instigateurs de ce chemin",
      organization: {
        contact: "Contacter l'organisation",
        create: "Ajouter une organisation",
        myOrganizations: "Mes organisations"
      },
      person: {
        contact: "Contact",
      },
      event: {
        event: "Événements",
        contact: "Contacter les organisateurs·ices",
        create: "Ajouter un événement",
        myEvents: "Liste",
        register: "Je m'inscris",
      },
      place: {
        myPlaces: "Mes lieux",
        create: "Ajouter un lieu",
      },
      offerAndNeed: {
        contact: "Contacter le rédacteur",
        mine: "Mes annonces",
        create: "Ajouter une annonce",
      },
      alert: {
        mine: "Mes alerts",
        create: "Ajouter une alerte",
      }
    },
    page: {
      home: "Bienvenue sur les Chemins de la Transition !",
    },
    card: {
      organization: {
        description: "Description",
        hasRegion: "Région",
        organizationHostedIn: "Où sommes nous",
        affiliates: "A pour contributeur.trice",
        supports: "Contributeur de",
        organizes: "Prochaines activités",
        onlyFutureEvents: "N'afficher que les activités à venir",
        partnerOf: "Partenaire de",
      },
      person: {
        hasRegion: "Région",
        hasType: "Type de personne",
        proposes: "Hôte de",
        affiliatedBy: "Membre de",
        supports: "Contributeur de",
        organizes: "Organisateur de",
        mentorOn: "Intervenant sur",
      },
      event: {
        duration: "Durée",
        onlyFutureEvents: "N'afficher que les événements à venir",
        localisation: "Localisation",
      },
      course: {
        onlyFutureCourse: "N'afficher que les voyages à venir",
      },
      registration: {
        bookingPeriod: "Date de la réservation : du ",
        from: "du",
        to: " au ",
        bookedOn: " Réservé le : "
      },
      place: "Lieu",
      location: "Localisation",
      similar: "similaires",
      duration: {
        months: "mois",
        days: "jours",
        hours: "heures",
        minutes: "minutes",
        minute: "minute",
      }
    },
    block: {
      search: "Partez sur les chemins de la transition"
    },
    input: {
      courseType: "Mode de voyage",
      sector: "Secteur d'activité",
      topic: "Mot clé",
      region: "Région(s)",
      TargetAudience: "Public cible",
      listView: 'Vue liste',
      dates: "Dates",
      organizer: "Qui organise",
      facilitator: "Qui intervient",
      linkedPath: "Fait partie de",
      placeType: "Type de lieu",
      offerAndNeedType: "Type d'annonce",
      skills: "Compétences",
      capacityFrom: "De",
      capacityTo: "à",
      miminumPerson: "personnes minimum",
      maximumPerson: "personnes maximum",
      chooseDefaultForm: "Utiliser un formulaire par défaut",
      defaultForm: "Formulaire par défaut",
      externalForm: "Lien du système d'inscription externe",
      chooseRegistrationType: "Choisissez une option d'inscription",
      chooseJotform: "Choisissez un formulaire JotForm",
      organization: {
        label: "Nom de l'organisation",
        hasType: "Quel type d'organisation ?",
        comment: "Pourriez-vous le décrire en une phrase",
        description: "N'hésitez pas à le décrire plus longuement ici",
        depictedBy: "Mettez un logo !",
        hasSector: "Dans quels secteurs d'activités s'inscrit-elle ?",
        hasTopic: "Quels mots-clés utiliseriez-vous pour la caractériser ?",
        hasFinality: "Quelles sont les finalités que vous poursuivez",
        intentions: "Quelles sont vos intentions en venant sur les chemins de la transition",
        practicalConditions: "Pouvez-vous accueillir des voyageurs ? Si oui, dans quelles conditions ?",
        maximumCapacity: "Combien de voyageurs au maximum ?",
        hasCourseType: "Selon quels modes de voyages pouvez-vous accueillir des voyageurs ?",
        produces: "Quelles sont les compétences que vous pouvez offrir",
        partnerOf: "Avez-vous des partenaires sur les Chemins de la Transition ?",
        inspiredBy: "Des organisations qui vous inspirent ?",
        affiliates: "Des membres de votre organisation sur les Chemins de la Transition ?",
        supports: "Vous inscrivez-vous sur un chemin ?",
        organizationHostedIn: "Dans quel(s) lieu(x) êtes vous présent ?",
        capacityUnit: "personnes",
      },
      event: {
        type: "Type d'événement",
        hasTargetAudience: "Public cible",
        listView: 'Vue liste',
        duplicate: "Dupliquer un événement existant ?"
      },
      person: {
        firstName: "Ton prénom",
        lastName: "Ton nom de famille",
        email: "Ton email",
        message: "Message",
        alternativeLabel: "Ton nom d'utilisateur",
        comment: "Qui es-tu en une phrase ?",
        homePage: "Un lien à propos de toi ?",
        description: "N'hésite pas à te décrire plus longuement !",
        intentions: "Tes intentions en venant sur les chemins de la transition ?",
        depictedBy: "Ta photo ! (C'est important pour la convivialité de la plateforme)",
        hasSector: "Tu t'intéresses à des secteurs d'activité en particulier ?",
        hasTopic: "C'est quoi tes centres d'intérêts ?",
        offers: "C'est quoi tes compétences actuelles ?",
        aims: "Quelles sont les compétences que tu recherches ?",
        hasFinality: "Quelles sont les finalités que tu poursuis ?",
        phone: "Ton numéro de téléphone ?",
        website: "Site web:",
        hasLocation: "Tu vis où ?",
        affiliatedBy: "Membre d'une (ou plusieurs) organisations ?",
        inspiredBy: "Des personnes t'inspirent ?"
      }
    },
    helper: {
      choose: "Choisir...",
      organization: {
        email: "Non visible sur la plateforme",
        phone: "Non visible sur la plateforme",
        publicPhone: "Numéro public affiché sur la page",
      },
      person: {
        email: "Non visible sur la plateforme",
        phone: "Non visible sur la plateforme",
        publicPhone: "Numéro public affiché sur la page",
      },
      nonVisible: "Non visible sur la plateforme",
      publicPhone: "Numéro public affiché sur la page",
      publicLink: "Lien affiché sur la page",
      directRegistration: "Si non, les voyageurs devront vous écrire via un formulaire de contact au préalable",
      practicalConditions: "Précisez si besoin équipements, modalités d'inscription, hébergement, repas...",
      accessibility: "Précisez l'accessibilité de l'événement aux personnes en situation de handicap",
      full: "Cochez cette case si l'événement est complet",
      financialSupport: "Si éligible, précisez les types de financements (CPF, Qualiopi...)",
      connectToAddBookmark: "Connectez-vous pour ajouter une page à vos favoris",
      userCreation: "Si vous créer un utilisateur de type Acteur, il recevra automatiquement une invitation à son adresse mail",
    },
    message: {
      welcome: "Une université ouverte, nomade et pair à pair autour des enjeux et des métiers de la transition. Pour apprendre en voyageant et partager des connaissances, expériences et savoir-faire liés aux enjeux écologiques, énergétiques, culturels, sociaux, économiques, technologiques et sociétaux de notre temps.",
      login: "Bienvenue sur les Chemins de la Transition ! Créer un compte sur la plateforme te permettra de renseigner ton profil : qui tu es, dans quoi tu t'impliques, ce que tu recherches et ce que tu as à offrir. Cela te permettra également d'enregistrer tes coups de cœur en favoris (acteurs, lieux, événements, voyages) et de rejoindre la communauté des Chemins de la Transition ! En te connectant, tu confirmes adhérer à la Charte des Chemins de la Transition.", //TODO @Tonfa add <Link to='/Page/charte-des-chemins-de-la-transition/show' target='_blank'> to the text as hyperlink cc @srosset81
      organization: {
        involvedActivities: "Cette organisation est impliquée dans plusieurs activités. Cliquez dessus pour en savoir plus et/ou participer.",
      },
      errorAuth: "Veuillez vous connecter pour accéder au formulaire de contact",
      errorRegistration: "Vous devez vous connecter pour pouvoir vous inscrire",
      moreEvents: "Ce lieu propose plusieurs événements. Cliquez dessus pour en savoir plus et/ou participer.",
      results: "resultat(s)",
      noResult: "Aucun résultat trouvé",
      topBarMessage: "Le lieu pour partager et apprendre en voyageant",
      topBarButton: "Soutenez la plateforme avec un don",
      betaVersion: "Version bêta",
      reminderToFill: "N'oubliez pas de renseigner le",
      reminderSecondTab: "deuxième onglet",
      reminderEndText: "du formulaire, c'est là qu'on pose les questions les plus intéressantes !",
      noSavedBookmarks: "Aucun favori enregistré",
      error: "Un problème est survenu",
      welcomeContent: {
        title: "Voyager, Découvrir, Apprendre,",
        subtitle: "Partager, Essaimer...",
        text: "Voyager c'est avant tout faire une pause dans nos vies, une parenthèse qui nous permet de voir ce qu'il se passe ailleurs, de partir à l'aventure pour découvrir de nouvelles pratiques. Les Chemins de la Transition propose de voyager de lieux en lieux en sortant des sentiers battus pour aller à la rencontre des acteurs de la transition (énergétique, sociale, solidaire...). Et pourquoi pas à votre tour, partager vos connaissances.",
      },
      home: {
        places: "Les lieux",
        toVisit: "A visiter",
        discoverPlaces: "Découvrez des lieux impliqués dans les transitions, les activités qui s'y pratiquent, partez à la rencontre des acteurs et actrices qui font le monde de demain !",
        seeAllPlaces: "Voir tous les lieux",
        agenda: "L'agenda",
        events: "des événements",
        discoverEvents: "Découvrez les événements autour de la transmission de savoirs, ouvrez votre champ des possibles, apprenez, formez-vous aux enjeux et métiers de la transition !",
        seeAllEvents: "Voir tous les événements",
        paths: "Les chemins",
        toDiscover: "A découvrir",
        dicoverPaths: "Quelques inspirations que nous vous proposons, découvrez une thématique précise, constituez-vous votre programme à la carte !",
        seeAllPaths: "Voir tous les chemins",
        courses: "Nos voyages",
        themesAndLocation: "Thématiques & géographiques",
        discoverCourses: "Découvrez des voyages préconçus, à la rencontre de plusieurs initiatives de transition, sur une thématique et/ou un secteur géographique donné !",
        seeAllCourses: "Voir tous les voyages",
        followUs:"Suivez nous",
      },
      coursesTypes: {
        title: "Une aventure unique",
        subTitle: "adaptée à votre niveau de connaissance",
        learnByTravelling: "Apprendre en voyageant",
        mode: "en mode",
        discovery: "Découverte",
        discoverySubtext: "En solo, en famille ou avec vos amis, baladez-vous, à pied, à cheval ou à vélo, de lieux en lieux sur les Chemins de la Transition",
        discoverySubtextAbout: "Je suis curieux, j'ouvre les yeux sur des métiers liés à la transition qui existent en visitant des lieux inspirants pendant mon voyage", learning: "Apprenant",
        learningSubtext: "Rencontrez le temps de quelques heures ou d'une journée des acteurs de la transition afin de vous enrichir de leurs pratiques",
        learningSubtextAbout: "Une pratique m'intéresse, j'ai envie d'en savoir plus. Profitez de ces parcours sur quelques jours pour visiter différents lieux et rencontrer les porteurs de projets",
        immersion: "Immersif",
        immersionSubtext: "Contribuez et apprenez en contribuant, contre le gîte et le couvert, en immersion auprès d'acteurs de la transition.",
        immersionSubtextAbout: "J'ai envie d'apprendre en participant. Ces parcours sur quelques semaines vous permettront d'experimenter par le faire et de participer à un projet de votre choix",
        mentoring: "Compagnonnage",
        mentoringSubtext: "Inscrivez-vous à des formations itinérantes, certifiées et qualifiantes en immersion auprès d'acteurs experts dans leur domaine.",
        mentoringSubtextAbout: "Je décide de me lancer pour me former à une pratique. Vous serez en immersion longue au sein d'un lieu et suivrez des modules théoriques pour une validation d'acquis.",
        courseDiscovery: "Voyage découverte",
        courseLearning: "Voyage apprenant",
        courseImmersion: "Voyage immersif",
        courseMentoring: "Compagnonnage",
      },
      partners: {
        withTheSupport: "Avec le soutien de",
        financialPartners: "nos partenaires financiers",
        businessPartners: "nos partenaires métiers",
      },
      traveler: {
        joinCommunityText: "Vous souhaitez proposer un lieu, un événement ou des idées de voyage ?",
        joinCommunityButton: "Rejoignez la communauté",
      },
      goals: {
        title: "Notre objectif",
        subTitle: "Vous permettre d'apprendre en voyageant",
        subText: "Les Chemins de la Transition c'est avant tout une envie de relier et connecter les acteurs de la transition, mais aussi de transmettre pour voir se multiplier les initiatives. Agissons ensemble pour participer à la découverte, la formation et la mise en réseau des personnes souhaitant s'engager dans la Transition afin que le rêve de voir éclore, mûrir et s'entrelacer des mondes solidaires et écologiques s'enracine dans notre réalité.",
        goal1: "Mailler les territoires & Valoriser les initiatives existantes",
        text1goal1: "Référencer les lieux inspirationnels et les initiatives ouvertes à la transmission qui contribuent à la transition (écologique, énergétique, sociale, culturelle, économique...).",
        text2goal1: "Promouvoir et dynamiser l'attractivité des zones rurales grâce à une nouvelle dynamique de flux axés sur la découverte des acteurs de transition locaux.",
        text3goal1: "Interconnecter les acteurs de la transition et leur donner de la visibilité. Créer des synergies inter-projets / inter-territoires.",
        text4goal1: "Accélérer des projets grâce à l'aide apportée par les voyageurs.",
        goal2: "Voyager en apprenant, se former aux enjeux et métiers de la transition",
        text1goal2: "Des voyages immersifs par secteurs d'activité pour accéder facilement aux pratiques émergentes dans tous les domaines de la transition.",
        text2goal2: "Des voyages avec plusieurs niveaux de découverte et d'apprentissage en faisant.",
        text3goal2: "La liberté de créer ses propres chemins selon ses centres d'intérêts, ses disponibilités, le degré recherché d'apprentissage (découvrir, apprendre par le faire, se former aux métiers).",
        text4goal2: "Permettre la découverte, l'apprentissage des métiers de la transition au contact d'acteurs passionnés et engagés.",
        goal3: "Le voyageur comme pollinisateur de nouvelles pratiques",
        text1goal3: "Contribuer à l'essaimage de projets à fort impact local et faire grandir l'écosystème de la transition.",
        text2goal3: "Stimuler l'émergence de nouvelles initiatives.",
        text3goal3: "Créer du lien grâce à un espace d'échange et de partage d'informations, d'idées, de projets.",
        text4goal3: "Amplifier la transition socio-écologique, par l'implication des citoyens dans la mise en œuvre des actions de transition.",
        text5goal3: "Accroître la résilience du territoire grâce au développement de solutions locales.",
      },
      categories: {
        title: "Des thématiques",
        subTitle: "variées à explorer",
      },
      footer: {
        codeOfConduct: "Charte des chemins de la transition",
        legalNotice: "Mentions légales",
        dataPolicy: "Politique de gestion des données",
        join: "Rejoindre la communauté",
        joinSubText1: "Vous avez envie de partager vos connaissances en matière de transition et pourquoi pas accueillir des voyageurs le temps d'une visite ou plus pour les former?",
        joinSubText2: "Vous avez envie d'inscrire votre lieu ou un évènement sur notre plateforme afin de lui donner de la visibilité?",
        joinButton: "Je me lance",
        usefulLinks: "Liens utiles",
        about: "A propos",
        forum: "Notre forum",
        website: "Notre site web",
      },
    },
    tab: {
      path: {
        about: "A propos de ce chemin",
        links: "Liens",
        place: "Lieux",
        event: "Evénements",
        course: "Voyages",
      },
      organization: {
        about: "A propos de cette organisation",
        links: "En lien avec l'organisation",
        contact: "Contact",
        visibility: "Visibilité",
        skills: "Compétences",
        accommodation: "Modalités d'accueil",
        activities: "Activités",
        inspiredBy: "Inspiré par",
      },
      person: {
        about: "A propos de la personne",
        affiliates: "En lien avec toi",
        links: "En lien avec l'organisation",
        contact: "Contact",
        visibility: "Visibilité",
        skills: "Compétences",
        inspiredBy: "Inspiré par",
      },
      course: {
        about: "A propos du voyage",
        pathway: "Programme du voyage",
        location: "Localisation",
        title: "Nos voyages",
        subtitle: "Similaires",
        linkText: "Voir tous les voyages",
      },
      event: {
        about: "A propos de ",
        pathway: "Programme du voyage",
        location: "Localisation",
        title: "Nos voyages",
        subtitle: "Similaires",
        linkText: "Voir tous les voyages",
        learningObjectives: "Objectifs pédagogiques",
        practicalConditions: "Infos pratiques",
      },
      place: {
        about: "A propos du lieu",
        link: "En lien avec le lieu",
        contact: "Contact",
        title: "Les lieux",
        subtitle: "Similaires",
        linkText: "Voir tous les lieux"
      },
      offerAndNeed: {
        description: "Description",
        contact: "Contact",
        visibility: "Visibilité"
      },
      economicalConditions: "Conditions financières",
      accommodation: "Modalités d'accueil",
      contact: "Contact",
      visibility: "Visibilité",
      skills: "Compétences",
      inspiredBy: "Inspiré par",
      links: "Liens",
      description: "Description",
      dates: "Dates",
      organizer: "Qui organise",
      facilitator: "Qui intervient",
      linkedPath: "Fait partie de",
    },
    notification: {
      full: "Cet événement est complet",
      partOf: "Cet événement fait partie du voyage ",
      financialSupport: "Découvrir les différents dispositifs de financement",
    },
    validation: {},
    menu: {
      bookmarks: "Mes favoris",
      places: "Mes lieux",
      events: "Mes événements",
      organizations: "Mes organisations",
      reservations: "Mes réservations",
      login: "Se connecter",
      signup: "Créer un compte",
      profile: "Mon profil",
      offerAndNeed: "Annonces"
    },
    nav: {
      home: "Home",
      path: "Chemins",
      place: "Lieux",
      event: "Evénements",
      course: "Voyages",
      offerAndNeed: "Needs & Offers",
      codeOfConduct: "Code of Conduct"
    },
    bookmark: {
      title: "Mes favoris",
      path: "Les chemins",
      place: "Les lieux",
      event: "Les événements",
      course: "Les voyages",
      offerAndNeed: "Les annonces",
      pathHeadComment: "Pour composer mon voyage à la carte",
      placeHeadComment: "Pour composer mon voyage à la carte",
      eventHeadComment: "Pour composer mon voyage à la carte",
      courseHeadComment: "Pour composer mon voyage à la carte",
      offerAndNeedHeadComment: "Pour composer mon voyage à la carte",
    }
  },
};