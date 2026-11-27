# xfivesecurity.dev

Site de **XfivesiX Security** : portfolio cybersécurité et pentesting. Astro statique, déployé sur GitHub Pages par GitHub Actions.

## Développer en local

```bash
npm install      # Node 22.23.4 ou plus
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Ajouter du contenu

- Article : un fichier `.md` dans `src/content/blog/` (front matter : `title`, `description`, `date`, `tags`, `draft`).
- Fiche : un fichier `.md` dans `src/content/notes/` (`title`, `description`, `category`, `updated`, `tags`).

Le front matter est validé au build : une erreur arrête le build au lieu de s'afficher sur le site.

## Règles de sécurité du dépôt

- Rien de sensible dans le dépôt, même temporairement : il est public et l'historique git est permanent.
- Rapports non caviardés et brouillons : dans `brouillons/` ou `rapports-bruts/`, ignorés par git.
- Photos : `exiftool -all= -overwrite_original fichier.jpg` avant de les ajouter.
- Aucun script ni style en ligne : la CSP (dans `src/layouts/Base.astro`) les bloquerait.
- Dépendances en versions exactes (`.npmrc`), scripts d'installation désactivés, actions épinglées par SHA.
