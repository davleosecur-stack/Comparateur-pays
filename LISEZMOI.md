# Comparateur de villes — site web

Site statique (aucun serveur, aucune base de données) : 14 pays, 78 villes, FR/EN, installable sur téléphone et utilisable hors ligne.

| Fichier | Rôle |
|---|---|
| `index.html` | L’application (données, traductions, interface) |
| `a-propos.html` | Méthode, sources, avertissement, confidentialité (FR/EN) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Installation sur l’écran d’accueil et mode hors ligne |
| `_headers` | Réglages d’en-têtes (Netlify et Cloudflare Pages) |

## Mettre en ligne (gratuit)

### Option 1 — Netlify Drop (5 minutes, sans compte technique)
1. Aller sur **app.netlify.com/drop**
2. Glisser le dossier `site` (décompressé) dans la page
3. Le site est en ligne à une adresse du type `nom-aleatoire.netlify.app`
4. Créer un compte gratuit pour garder le site et changer son nom

### Option 2 — Cloudflare Pages
Tableau de bord Cloudflare › Workers & Pages › Créer › Pages › « Upload assets » › glisser le dossier.

### Option 3 — GitHub Pages
Créer un dépôt, y téléverser le contenu du dossier, puis Settings › Pages › Branch : main.

### Nom de domaine (optionnel, ≈ 15 à 25 $/an)
Acheter un domaine (ex. chez Cloudflare ou Namecheap), puis l’associer dans les réglages du site Netlify / Cloudflare. Le HTTPS est fourni automatiquement.

## Mettre à jour
1. Remplacer `index.html` (et `a-propos.html` au besoin)
2. Dans `sw.js`, changer la ligne `const VERSION = "villes-v1.1.0";` (ex. `v1.2.0`) — sinon les visiteurs gardent l’ancienne version en cache
3. Glisser de nouveau le dossier (Netlify : onglet *Deploys*)

## Tester sur votre Mac avant la mise en ligne
```
cd ~/Downloads/site
python3 -m http.server 8000
```
puis ouvrir http://localhost:8000 (le mode hors ligne ne s’active qu’en HTTPS, donc une fois en ligne).

## Avant d’ouvrir le site au public
- **Licence des données** : les estimations s’inspirent de Numbeo, qui interdit la réutilisation commerciale sans licence. Pour un usage public, prendre une licence ou passer à des sources ouvertes (Banque mondiale, OMS, OCDE, statistiques nationales).
- Revoir les règles de visa (datées de 2025) et mettre à jour la date dans les notes.
