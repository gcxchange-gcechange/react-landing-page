const Lang = {
    "en-us": {
        title: 'gcxchange - Register',
        hero: {
            h1: 'GC<span class="info-highlight">X</span>change is here',
            subtitle: 'Say hello to the Government of Canada’s new digital workspace. Register to access GCXchange with your GC device; no password required. On GCXchange you can:',
            list1: '<span class="info-highlight">Collaborate</span> with public servants across the GC',
            list2: '<span class="info-highlight">Stay in touch</span> with what other departments are working on',
            list3: '<span class="info-highlight">Access information</span> that matters most to you',
            list4: '<span class="info-highlight">Share</span> your content with the GC community',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
            learnMore: 'Learn more about GCX',
            visitLink: 'Already regsitered? <a href="https://gcxgce.sharepoint.com">Visit the homepage</a> (Remember to bookmark the link!)',
        },
        form: {
            loading: 'Loading, please wait',
            emailLabel: 'Government of Canada email address',
            browserInfo: 'Use Microsoft Edge, Chrome, or Firefox to continue with the registration.',
            emailPlaceholder: 'john.smith@tbs-sct.gc.ca, john.smith@ssc-spc.gc.ca',
            emailHelperText: 'Use a Government of Canada email address - If you are from the Department of National Defence, use your email that ends in @ecn.forces.gc.ca or @jdcp.forces.gc.ca.',
            confirmEmail: 'Confirm Government of Canada email address',
            confirmEmailHelperText: 'Email does not match',
            cloudEmailCheck: 'Send notifications to a different email address?',
            cloudPlaceholder: 'john.smith@canada.ca',
            cloudLabel: 'Do you have a second work email? Enter it here: (Optional)',
            departmentLabel: 'Department',
            departmentPlaceholder: 'Select an option',
            submitBtn: 'Register',
            help: 'Need help? <a href="mailto:support-soutien@gcx-gce.gc.ca">Contact our help desk</a>',
            backendError: 'There was an error. Please try again later',
            backendErrorUserRegistered: 'Looks like you’ve already registered for gcxchange. <a class="b-link" href="https://gcxgce.sharepoint.com">Visit the homepage here</a>.',
        },
        process: {
            title: 'Sit tight, we’re almost finished setting up your account! You’ll be getting an email from us soon. ',
            subtitle: 'If you don\'t receive an email after 10 minutes, please contact us at <a href="mailto:support-soutien@gcx-gce.gc.ca">support-soutien@gcx-gce.gc.ca. </a>',
        },
        infoMessage: {
            msg: 'We are aware there are issues with the following departments:',
        },
        footer: {
            heading: 'Contact',
            linkText: 'gcintranet link',
            linkHref: '#',
            goc: 'Government of Canada',
            symbol: 'Symbol of the Government of Canada',
            terms: 'Terms and Conditions',
            about: 'About',
            help: 'Help',
            visit: 'Go to GCX'
        },
    },
    "fr-ca": {
        title: 'gcéchange - S\'inscrire',
        hero: {
            h1: 'GC<span className="info-highlight">É</span>change est arrivé',
            subtitle: 'Inscrivez-vous pour accéder à GCÉchange avec votre appareil du GC; aucun mot de passe requis. Sur GCÉchange vous pouvez : ',
            list1: '<span class="info-highlight">Collaborer</span> avec les fonctionnaires de l’ensemble du GC ',
            list2: '<span class="info-highlight">Être au courant</span> des travaux des autres ministères ',
            list3: '<span class="info-highlight">Accéder à l’information</span> qui vous est la plus précieuse ',
            list4: '<span class="info-highlight">Partager</span> votre contenu avec la collectivité du GC ',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
            learnMore: 'Pour en savoir plus sur gcé',
            visitLink: 'Vous vous êtes déjà inscrit(e)?  <a href="https://gcxgce.sharepoint.com/SitePages/fr/Home.aspx">Veuillez consulter la page d’accueil </a>(n’oubliez pas d’ajouter le lien à vos favoris!) ',
        },
        form: {
            loading: 'Chargement, veuillez patienter',
            emailLabel: 'Adresse de courriel du gouvernement du Canada',
            browserInfo: 'Utilisez Microsoft Edge, Chrome, ou Firefox pour continuer l’inscription. ',
            emailPlaceholder: 'jeanne.tremblay@tbs-sct.gc.ca, jeanne.tremblay@ssc-spc.gc.ca',
            emailHelperText: 'Veuillez utiliser une adresse courriel du gouvernement du Canada – Si vous faites partie du ministère de la Défense nationale, veuillez utiliser votre adresse courriel qui se termine par @ecn.forces.gc.ca ou @jdcp.forces.gc.ca.',
            confirmEmail: 'Confirmez l’adresse de courriel du gouvernement du Canada',
            confirmEmailHelperText: 'Adresse courriel ne correspond pas',
            cloudEmailCheck: 'Envoyez les avis à une adresse de courriel différente?',
            cloudPlaceholder: 'jeanne.tremblaly@canada.ca',
            cloudLabel: 'Avez-vous un deuxième courriel au travail? Écrivez-le ici : (Optionnel)',
            departmentLabel: 'Ministère',
            departmentPlaceholder: 'Choisir une option',
            submitBtn: 'S\'inscrire',
            help: 'Besoin d\'aide? <a href="mailto:support-soutien@gcx-gce.gc.ca">Contactez notre service d\'assistance</a>',
            backendError: 'Un problème est survenu; veuillez réessayer plus tard.',
            backendErrorUserRegistered: 'Il semble que vous êtes déjà inscrits à gcéchange. <a class="b-link" href="https://gcxgce.sharepoint.com/SitePages/fr/Home.aspx">Visitez la page d\'accueil ici.</a>',
        },
        process: {
            title: 'Attendez patiemment, nous avons presque fini de configurer votre compte! Vous recevrez bientôt un courriel de notre part.',
            subtitle: 'Si vous ne recevez pas de courriel après 10 minutes, veuillez communiquer avec nous à l’adresse suivante : <a href="mailto:support-soutien@gcx-gce.gc.ca">support-soutien@gcx-gce.gc.ca.</a>',
        },
        infoMessage: {
            msg: "Nous sommes conscients qu'il y a des problèmes avec les départements suivants:",
        },
        footer: {
            heading: 'Contact',
            linkText: 'gcintranet link',
            linkHref: '#',
            goc: 'Gouvernement du Canada',
            symbol: 'Symbole du gouvernement du Canada',
            terms: 'Conditions d\'utilisation',
            about: 'About',
            help: 'Aide',
            visit: 'Aller à gcé'
        },
    }
};

export default Lang;