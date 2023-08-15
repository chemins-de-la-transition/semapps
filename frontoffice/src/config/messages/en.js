// Model https://github.com/marmelab/react-admin/blob/master/packages/ra-language-french/src/index.ts

module.exports = {
  app: {
    action: {
      search: "Search",
      contactPlace: "Contact the place",
      organization: {
        contact: "Contact the organization",
        create: "Add an organization",
        myOrganizations: "My organizations"
      },
      person: {
        contact: "Contact",
      },
      event: {
        contact: "Contact the organizers",
        create: "Add an event",
        myEvents: "List",
        register: "I register",
      },
      place: {
        myPlaces: "My places",
        create: "Add a place",
      }
    },
    page: {
      home: "Welcome to the Transition Pathways !",
    },
    card: {
      organization: {
        description: "Description",
        hasRegion: "Region",
        organizationHostedIn: "Where are we",
        affiliates: "Has contributor",
        supports: "Contributor of",
        organizes: "Upcoming activities",
        onlyFutureEvents: "Display only upcoming activities",
        partnerOf: "Partner of"
      },
      person: {
        hasRegion: "Region",
        hasType: "Person Type",
        proposes: "Host of",
        affiliatedBy: "Member of",
        supports: "Contributor of",
        organizes: "Organizer of",
        mentorOn: "Mentor on",
      },
      event: {
        duration: "Duration",
        onlyFutureEvents: "Display only upcoming events",
      },
      course: {
        onlyFutureCourse: "Only display upcoming trips",
      },
      registration: {
        bookingPeriod: "Booking date: from ",
        to: " to ",
        bookedOn: " Booked on: "
      }
    },
    block: {
      search: "Follow the pathways of transition",
    },
    input: {
      courseType: "Course type",
      sector: "Activity sector",
      region: "Region",
      targetAudience: "Target Audience",
      listView: 'List View',
      dates: 'Dates',
      organizer: 'Organizer',
      facilitator: 'Facilitator',
      linkedPath: 'Linked Path',
      placeType: "Place type",
      organization: {
        label: "Organization Name",
        hasType: "What type of organization?",
        comment: "Could you describe it in one sentence?",
        description: "Feel free to describe it in more detail here",
        depictedBy: "Add a logo!",
        hasSector: "In which sectors does it operate?",
        hasTopic: "What keywords would you use to characterize it?",
        hasFinality: "What goals are you pursuing?",
        intentions: "What are your intentions in coming to the paths of transition?",
        practicalConditions: "Can you accommodate travelers? If yes, under what conditions?",
        maximumCapacity: "How many travelers maximum?",
        hasCourseType: "In what travel modes can you accommodate travelers?",
        produces: "What skills can you offer?",
        partnerOf: "Do you have partners on the Paths of Transition?",
        inspiredBy: "Organizations that inspire you?",
        affiliates: "Members of your organization on the Paths of Transition?",
        supports: "Are you joining a path?",
        organizationHostedIn: "In which place(s) are you present?",
        capacityUnit: "persons",
      },
      event: {
        type: "Event type",
        hasTargetAudience: "Target Audience",
        listView: 'List View',
        duplicate: "Duplicate an existing event?",
      },
      person: {
        firstName: "Your first name",
        lastName: "Your last name",
        alternativeLabel: "Your username",
        comment: "Who are you in one sentence?",
        homePage: "A link about you?",
        description: "Feel free to describe yourself in more detail!",
        intentions: "Your intentions in coming to the paths of transition?",
        depictedBy: "Your photo! (It's important for the platform's friendliness)",
        hasSector: "Are you interested in specific activity sectors?",
        hasTopic: "What are your areas of interest?",
        offers: "What are your current skills?",
        aims: "What skills are you looking for?",
        hasFinality: "What goals are you pursuing?",
        phone: "Your phone number?",
        hasLocation: "Where do you live?",
        affiliatedBy: "Member of one (or more) organizations?",
        inspiredBy: "Are there individuals who inspire you?"
      }
    },
    helper: {
      choose: "Choose...",
      organization: {
        email: "Not visible on the platform",
        phone: "Not visible on the platform",
        publicPhone: "Public number displayed on the page",
      },
      person: {
        email: "Not visible on the platform",
        phone: "Not visible on the platform",
        publicPhone: "Public number displayed on the page",
      },
      nonVisible: "Not visible on the platform",
      publicPhone: "Publicly displayed phone number on the page",
      publicLink: "Link publicly displayed on the page",
      directRegistration: "If not, travelers will need to contact you directly via a contact form beforehand",
      practicalConditions: "Specify if equipment is needed, registration procedures, accommodation, meals...",
      accessibility: "Specify the event's accessibility for people with disabilities",
      full: "Check this box if the event is full",
      financialSupport: "If eligible, specify the types of funding (CPF, Qualiopi...)"
    },
    message: {
      welcome: "An open, nomadic, peer-to-peer university focusing on transition issues and professions. Learn while you travel, and share knowledge, experience and know-how on the ecological, energy, cultural, social, economic, technological and societal issues of our time.",
      organization: {
        involvedActivities: "This organization is involved in multiple activities. Click to learn more and/or participate.",
      },
      errorAuth: "Please log in to access the contact form",
      errorRegistration: "You must be logged in to register",
      moreEvents: "This place offers multiple events. Click on it to learn more and/or participate."
    },
    tab: {
      organization: {
        about: "About this organization",
        links: "Organization links",
        contact: "Contact",
        visibility: "Visibility",
        skills: "Skills",
        accommodation: "Accommodation",
        activities: "Activities",
        inspiredBy: "Inspired by",
      },
      person: {
        about: "About",
        affiliates: "Connected with you",
        links: "Linked with the organization",
        contact: "Contact",
        visibility: "Visibility",
        skills: "Skills",
        inspiredBy: "Inspired by",
      },
      course: {
        about: "About the journey",
        pathway: "Journey program",
        location: "Location",
        title: "Our journeys",
        subtitle: "For more inspiration",
        linkText: "View all journeys",
      },
      event: {
        about: "About ",
        pathway: "Journey Program",
        location: "Location",
        title: "Our journeys",
        subtitle: "For more inspiration",
        linkText: "See all journeys",
        learningObjectives: "Learning Objectives",
        practicalConditions: "Practical Information",
      },
      place: {
        about: "About the place",
        link: "Related to the place",
        contact: "Contact",
        title:"More places",
        subtitle: "For more inspiration",
        linkText: "See all places"
      },
      economicalConditions: 'Economical Conditions',
      accommodation: 'Accommodation',
      contact: 'Contact',
      visibility: 'Visibility',
      skills: 'Skills',
      inspiredBy: 'Inspired by',
      links: 'Links',
      description: 'Description',
      dates: 'Dates',
      organizer: 'Organizer',
      facilitator: 'Facilitator',
      linkedPath: 'Linked Path',
    },
    notification: {
      full: "This event is full",
      partOf: "This event is part of the journey&nbsp;",
      financialSupport: "Discover various funding mechanisms",
    },
    validation: {},
  },
};