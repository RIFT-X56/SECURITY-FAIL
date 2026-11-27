---
title: "OWASP Top 10 : édition 2025"
description: "Les 10 risques les plus critiques pour les applications web selon l'OWASP, avec un exemple et la remédiation pour chacun."
category: "web"
updated: 2026-11-27
tags: ["owasp", "web", "appsec"]
---

Classement OWASP Top 10 (édition 2025) des risques de sécurité les plus critiques pour les applications web, établi à partir de données de vulnérabilités réelles. Source : [owasp.org/Top10](https://owasp.org/Top10/).

| Code | Risque | Ce que c'est | Remédiation |
| --- | --- | --- | --- |
| A01 | Broken Access Control | Un utilisateur accède à des données ou fonctions qui ne lui sont pas destinées (IDOR, élévation de privilèges). | Refus par défaut, contrôle d'autorisation côté serveur à chaque requête. |
| A02 | Security Misconfiguration | Paramètres par défaut, services inutiles, erreurs verbeuses, en-têtes de sécurité absents, stockage cloud ouvert. | Durcissement reproductible, revue des configurations, en-têtes de sécurité. |
| A03 | Software Supply Chain Failures | Dépendances, outils de build ou distributions compromis ou obsolètes. | Versions épinglées, SBOM, Dependabot, vérification des signatures. |
| A04 | Cryptographic Failures | Données sensibles non chiffrées, algorithmes faibles, clés mal gérées, transmission en clair. | TLS partout, algorithmes modernes, gestion des secrets dédiée. |
| A05 | Injection | Données non fiables interprétées comme commandes : SQL, OS, XSS, LDAP. | Requêtes paramétrées, encodage en sortie, validation en entrée. |
| A06 | Insecure Design | Absence de modélisation des menaces et de contrôles prévus dès l'architecture. | Modélisation des menaces, exigences de sécurité dès la conception. |
| A07 | Authentication Failures | Mots de passe faibles, pas de MFA, sessions mal gérées, force brute non limitée. | MFA, limitation de débit, gestion de session robuste. |
| A08 | Software or Data Integrity Failures | Mises à jour, pipelines CI/CD ou données désérialisées non vérifiés. | Signatures, pipelines protégés, pas de désérialisation non fiable. |
| A09 | Security Logging & Alerting Failures | Journaux insuffisants, pas d'alertes : les attaques passent inaperçues. | Journaliser les événements de sécurité et alerter sur les anomalies. |
| A10 | Mishandling of Exceptional Conditions | Erreurs et cas limites mal gérés : échec ouvert, fuite d'informations, plantages exploitables. | Échec fermé, messages d'erreur génériques, tests des cas limites. |

**Astuce :** la [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) donne, pour chaque risque, les bonnes pratiques détaillées avec des exemples de code.
