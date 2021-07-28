const Lang = {
    "en-us": {
        title: 'gcxchange - Activate your account',
        hero: {
            h1: 'gc<span class="info-highlight">x</span>change is here',
            subtitle: 'Say hello to the Government of Canada’s new digital workspace. With one simple sign-on, you can:',
            list1: '<span class="info-highlight">Collaborate</span> with public servants across the GC',
            list2: '<span class="info-highlight">Stay in touch</span> with what other departments are working on',
            list3: '<span class="info-highlight">Access information</span> that matters most to you',
            list4: '<span class="info-highlight">Share</span> your content with the GC community',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
        },
        form: {
            emailLabel: 'Departmental email address (Required) ',
            cloudEmailCheck: 'Do you have a second work email?',
            cloudHelper: 'I am the helper text',
            cloudLabel: 'Second email address',
            departmentLabel: 'Department',
            submitBtn: 'Register',
            help: 'Having issues? <a href="mailto:support-soutien@gcx-gce.gc.ca.">Contact our help desk</a>',
        },
        process: {
            title: 'Sit tight, we’re almost finished setting up your account! You’ll be getting an email from us soon. ',
            subtitle: 'If you don\'t receive an email after 10 minutes, please contact us at <a href="mailto:support-soutien@gcx-gce.gc.ca.">support-soutien@gcx-gce.gc.ca. </a>',
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
        title: 'gcéchange - Activez votre compte',
        hero: {
            h1: 'gc<span className="info-highlight">é</span>change est arrivé',
            subtitle: 'Venez découvrir le nouvel espace de travail numérique du gouvernement du Canada. En une seule ouverture de session, vous pouvez : ',
            list1: '<span class="info-highlight">Collaborer</span> avec les fonctionnaires de l’ensemble du GC ',
            list2: '<span class="info-highlight">Être au courant</span> des travaux des autres ministères ',
            list3: '<span class="info-highlight">Accéder à l’information</span> qui vous est la plus précieuse ',
            list4: '<span class="info-highlight">Partager</span> votre contenu avec la collectivité du GC ',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
        },
        form: {
            emailLabel: 'Adresse courriel du ministère (Obligatoire) ',
            cloudEmailCheck: 'Do you have a second work email?',
            cloudHelper: 'I am the helper text',
            cloudLabel: 'Second email address',
            departmentLabel: 'Department',
            submitBtn: 'Register',
            help: 'Having issues? <a href="mailto:support-soutien@gcx-gce.gc.ca.">Contact our help desk</a>',
        },
        process: {
            title: 'Attendez patiemment, nous avons presque fini de configurer votre compte! Vous recevrez bientôt un courriel de notre part.',
            subtitle: 'Si vous ne recevez pas de courriel après 10 minutes, veuillez communiquer avec nous à l’adresse suivante : <a href="mailto:support-soutien@gcx-gce.gc.ca.">support-soutien@gcx-gce.gc.ca.</a>',
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