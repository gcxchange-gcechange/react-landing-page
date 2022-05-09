const Lang = {
    "en-us": {
        title: 'gcxchange - Register',
        hero: {
            h1: 'gc<span class="info-highlight">x</span>change is here',
            subtitle: 'Say hello to the Government of Canada’s new digital workspace. With one simple sign-on, you can:',
            list1: '<span class="info-highlight">Collaborate</span> with public servants across the GC',
            list2: '<span class="info-highlight">Stay in touch</span> with what other departments are working on',
            list3: '<span class="info-highlight">Access information</span> that matters most to you',
            list4: '<span class="info-highlight">Share</span> your content with the GC community',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
            learnMore: 'Learn more about GCX',
            visitLink: 'Already regsitered? Go to GCX',
        },
        form: {
            loading: 'Loading, please wait',
            emailLabel: 'Departmental email address',
            emailPlaceholder: 'john.smith@tbs-sct.gc.ca, john.smith@ssc-spc.gc.ca',
            emailHelperText: 'Must be a departmental email address',
            confirmEmail: 'Confirm departmental email address',
            confirmEmailHelperText: 'Email does not match',
            cloudEmailCheck: 'Would you like your gcxchange notifications to be sent to a different email address than the one listed above?',
            cloudPlaceholder: 'john.smith@canada.ca',
            cloudLabel: 'Do you have a second work email? Enter it here: (Optional)',
            departmentLabel: 'Department',
            departmentPlaceholder: 'Select an option',
            submitBtn: 'Register',
            help: 'Need help? <a href="mailto:support-soutien@gcx-gce.gc.ca">Contact our help desk</a>',
            backendError: 'There was an error. Please try again later',
            backendErrorUserRegistered: 'Looks like you’ve already registered for gcxchange. <a href="https://gcxgce.sharepoint.com">Visit the homepage here</a>.',
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
            symbol: 'Symbol of the Government of Canada'
        },
    },
    "fr-ca": {
        title: 'gcéchange - S\'inscrire',
        hero: {
            h1: 'gc<span className="info-highlight">é</span>change est arrivé',
            subtitle: 'Venez découvrir le nouvel espace de travail numérique du gouvernement du Canada. En une seule ouverture de session, vous pouvez : ',
            list1: '<span class="info-highlight">Collaborer</span> avec les fonctionnaires de l’ensemble du GC ',
            list2: '<span class="info-highlight">Être au courant</span> des travaux des autres ministères ',
            list3: '<span class="info-highlight">Accéder à l’information</span> qui vous est la plus précieuse ',
            list4: '<span class="info-highlight">Partager</span> votre contenu avec la collectivité du GC ',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
            learnMore: 'Pour en savoir plus sur gcé',
            visitLink: 'Déjà enregistré? Aller à gcé',
        },
        form: {
            loading: 'Chargement, veuillez patienter',
            emailLabel: 'Adresse courriel du ministère',
            emailPlaceholder: 'jeanne.tremblay@tbs-sct.gc.ca, jeanne.tremblay@ssc-spc.gc.ca',
            emailHelperText: 'Doit être une adresse courriel du ministère',
            confirmEmail: 'Confirmez votre adresse courriel du ministère',
            confirmEmailHelperText: 'Adresse courriel ne correspond pas',
            cloudEmailCheck: 'Aimeriez-vous que les notifications de gcéchange soient envoyées à une adresse de courriel autre que celle que vous venez d’entrer ci-dessus?',
            cloudPlaceholder: 'jeanne.tremblaly@canada.ca',
            cloudLabel: 'Avez-vous un deuxième courriel au travail? Écrivez-le ici : (Optionnel)',
            departmentLabel: 'Ministère',
            departmentPlaceholder: 'Choisir une option',
            submitBtn: 'S\'inscrire',
            help: 'Besoin d\'aide? <a href="mailto:support-soutien@gcx-gce.gc.ca">Contactez notre service d\'assistance</a>',
            backendError: 'Un problème est survenu; veuillez réessayer plus tard.',
            backendErrorUserRegistered: 'Il semble que vous êtes déjà inscrits à gcéchange. <a href="https://gcxgce.sharepoint.com/SitePages/fr/Home.aspx">Visitez la page d\'accueil ici.</a>',
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
            symbol: 'Symbole du gouvernement du Canada'
        },
    }
};

export default Lang;