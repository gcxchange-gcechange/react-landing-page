const Lang = {
    "en-us": {
        title: 'gcxchange - Activate your account',
        hero: {
            h1: 'You\'re <span class="highlight">so</span> close!',
            subtitle: 'It\'s time to get you onboarded onto gcxchange, the new platform for GC-wide communication and collaboration.  Review the steps below and once you’re ready, click the green “Activate your account” button at the bottom to kickstart the account activation process.',
            ctabutton: 'Activate your account',
            link: process.env.REACT_APP_ACCESS_PACKAGE_EN,
        },
        step1: {
            heading: 'Step <span class="highlight">one</span>',
            paragraph1: '<strong>Check off</strong> the circle beside “Get access to gcxchange.”<br/> Then, click <strong>+ Request access</strong>.'
        },
        step2: {
            heading: 'Step <span class="highlight">two</span>',
            paragraph1: 'You\'ll see a Request access window pop-out from the right-hand side of the page.',
            paragraph2: 'All you need to do is <strong>check the box</strong> at the bottom that says “by requesting access…” and click <strong>submit</strong>. Leave everything else as-is.',
            paragraph3: 'No need to touch the <strong>business justification</strong> or the toggle to <strong>request for specific</strong> period.'
        },
        step3: {
            heading: 'Step <span class="highlight">three</span>',
            paragraph1: 'Check your email.',
            paragraph2: 'You\'ll receive two emails. The first one you\'ll get is the "You\'re in" message. This is the important one. It\'s where you\'ll find the <strong>Click here to get started</strong> link that will bring you to the gcxchange homepage.',
            paragraph3: 'But don\'t click it yet, the system needs a few minutes (5 minutes tops) to complete the activation. Patience is a virtue, and the reward is that when you finally do click the link, you\'ll be in right away.',
            paragraph4: 'If you got a "That didn\'t work" message when you clicked the link, don’t panic. The system just needs a bit more time to activate your account. Wait a few more minutes then refresh the page.',
            paragraph5: 'You\'ll also receive a second email from our friends at Microsoft Azure, which you can simply ignore (it’s system-generated).'
        },
        onboarding: {
            paragraph: 'While you\'re waiting, why not watch this video introducing you to your new sidekick, gcxchange.',
            videoPlay: 'Play video',
            videoPause: 'Pause video',
            videoMute: 'Mute video',
            videoUnmute: 'Unmute video',
            videoVolume: 'Change volume',
            videoFullscreen: 'View video fullscreen',
            videoSeek: 'Seek video',
            videoCaptions: 'Toggle captions',
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
            h1: 'Vous y <span class="highlight">êtes</span> presque!',
            subtitle: 'Le moment est venu de vous intégrer à gcéchange, la nouvelle plateforme de communication et de collaboration à l’échelle du gouvernement du Canada (GC). Passez en revue les étapes à suivre ci-dessous et, une fois que vous êtes prêt, cliquez sur le bouton vert « Activez votre compte » au bas de la page pour lancer le processus d’activation du compte.',
            ctabutton: 'Activez votre compte',
            link: process.env.REACT_APP_ACCESS_PACKAGE_FR,
        },
        step1: {
            heading: '<span class="highlight">Première</span> étape',
            paragraph1: '<strong>Cochez le cercle</strong> à côté de « Accédez à gcéchange ».<br/> Cliquez ensuite sur <strong>+ Demande d’accès</strong>.'
        },
        step2: {
            heading: '<span class="highlight">Deuxième</span> étape',
            paragraph1: 'Une fenêtre contextuelle intitulée Demande d’accès apparaîtra au côté droit de la page.',
            paragraph2: 'Vous n’avez qu’à <strong>cocher la case</strong> en bas qui indique « en demandant l’accès… » et à cliquer sur <strong>soumettre</strong>. Laissez tout le reste tel quel.',
            paragraph3: 'Il n’est pas nécessaire de toucher à la <strong>justification opérationnelle</strong> ou au bouton à bascule pour <strong>demander une période donnée</strong>.'
        },
        step3: {
            heading: '<span class="highlight">Troisième</span> étape ',
            paragraph1: 'Vérifiez votre boîte de réception.',
            paragraph2: 'Vous recevrez deux courriels. Le premier message que vous recevrez est le suivant : « Vous y êtes arrivé! ». Celui-ci est le plus important. C’est celui qui vous fournira le lien <strong>Cliquez ici pour commencer</strong> qui vous mènera à la page d’accueil de gcéchange.',
            paragraph3: 'Toutefois, attendez avant de cliquer — le système a besoin de quelques minutes (au plus cinq minutes) pour terminer l’activation. La patience est mère de toutes les vertus, et la récompense, c’est que lorsque vous cliquerez finalement sur le lien, vous y serez déjà.',
            paragraph4: 'Si vous recevez le message « Ça n’a pas marché » après avoir cliqué sur le lien, ne paniquez pas. Le système a tout simplement besoin d’un peu plus de temps pour activer votre compte. Attendez encore quelques minutes, puis actualisez la page.',
            paragraph5: 'Vous recevrez également un second courriel de nos amis de Microsoft Azure, que vous pouvez tout simplement ignorer (il est généré par le système).'
        },
        onboarding: {
            paragraph: 'Pendant que vous attendez, pourquoi ne pas regarder cette vidéo qui vous présente votre nouveau compagnon, gcéchange?',
            videoPlay: 'lire la vidéo',
            videoPause: 'mettre la vidéo en pause',
            videoMute: 'couper le son de la vidéo',
            videoUnmute: 'réactiver la vidéo',
            videoVolume: 'changer le volume',
            videoFullscreen: 'voir la vidéo en plein écran',
            videoSeek: 'chercher une vidéo',
            videoCaptions: 'basculer les légendes',
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