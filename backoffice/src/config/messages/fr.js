// Model https://github.com/marmelab/react-admin/blob/master/packages/ra-language-french/src/index.ts

module.exports = {
  app: {
    action: {
      search: "Rechercher",
      listView: "liste",
      mapView: "carte",
      publish: "publier",
      unpublish: "dépublier",
    },
    page: {},
    card: {},
    block: {},
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
      status: "Statut",
      publicationStatus: "Statut de publication",
      type: "Type",
      offerAndNeedType: "Type d'annonce",
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
        hasLocation: "Tu vis où ?",
        affiliatedBy: "Membre d'une (ou plusieurs) organisations ?",
        inspiredBy: "Des personnes t'inspirent ?"
      }
    },
    helper: {
      choose: "Choisir...",
      nonVisible: "Non visible sur la plateforme",
      publicPhone: "Numéro public affiché sur la page",
      publicLink: "Lien affiché sur la page",
      directRegistration: "Si non, les voyageurs devront vous écrire via un formulaire de contact au préalable",
      practicalConditions: "Précisez si besoin équipements, modalités d'inscription, hébergement, repas...",
      accessibility: "Précisez l'accessibilité de l'événement aux personnes en situation de handicap",
      full: "Cochez cette case si l'événement est complet",
      financialSupport: "Si éligible, précisez les types de financements (CPF, Qualiopi...)",
    },
    message: {
      welcome: "Une université ouverte, nomade et pair à pair autour des enjeux et des métiers de la transition. Pour apprendre en voyageant et partager des connaissances, expériences et savoir-faire liés aux enjeux écologiques, énergétiques, culturels, sociaux, économiques, technologiques et sociétaux de notre temps.",
      organization: {
        involvedActivities: "Cette organisation est impliquée dans plusieurs activités. Cliquez dessus pour en savoir plus et/ou participer.",
      },
      errorAuth: "Veuillez vous connecter pour accéder au formulaire de contact",
      errorRegistration: "Vous devez vous connecter pour pouvoir vous inscrire",
      moreEvents: "Ce lieu propose plusieurs événements. Cliquez dessus pour en savoir plus et/ou participer.",
      results: "resultat(s)",
      noResult: "Aucun résultat trouvé"
    },
    tab: {
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
        title:"Les lieux",
        subtitle: "",
        linkText:"Voir tous les lieux"

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
      partOf: "Cet événement fait partie du voyage&nbsp;",
      financialSupport: "Découvrir les différents dispositifs de financement",
    },
    validation: {},
  },
};