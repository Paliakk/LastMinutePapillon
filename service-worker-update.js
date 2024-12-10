// service-worker-update.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Enregistrer le service worker
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('Service Worker enregistré avec le scope: ', registration.scope);

            // Vérifier les mises à jour du service worker
            registration.onupdatefound = () => {
                const newWorker = registration.installing;

                newWorker.onstatechange = () => {
                    if (newWorker.state === 'installed') {
                        // Nouveau service worker installé, rafraîchir la page pour appliquer la mise à jour
                        if (navigator.serviceWorker.controller) {
                            // Il y a une nouvelle version disponible, on peut forcer le rafraîchissement
                            window.location.reload();
                        }
                    }
                };
            };
        }).catch((error) => {
            console.error('L\'enregistrement du Service Worker a échoué: ', error);
        });
    });
}
