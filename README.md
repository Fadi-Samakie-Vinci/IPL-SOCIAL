# IPL-SOCIAL
# IPL Social

Projet DevOps – Examen BIMV2190 Janvier 2025

## Auteur

- **Nom :** Fadi Samakie  
- **Email :** [fadi.samakie@student.vinci.be](mailto:fadi.samakie@student.vinci.be)  
- **GitHub :** [https://github.com/Fadi-Samakie-Vinci/IPL-SOCIAL.git](https://github.com/Fadi-Samakie-Vinci/IPL-SOCIAL.gitl)

---

## Description

Ce projet a pour but de développer une fonction de validation de mot de passe (`passwordChecker`) en utilisant la méthodologie **TDD (Test Driven Development)** avec Jasmine.  
Un pipeline **CI (Intégration Continue)** est mis en place via **GitHub Actions**, permettant d'exécuter automatiquement les tests lors de chaque commit ou pull request sur la branche `main`.

---

## Fonctionnalité

La fonction `passwordChecker` valide un mot de passe en respectant les critères suivants :

1. Le mot de passe doit contenir au moins **8 caractères**.
2. Il doit inclure au moins **un caractère spécial** (ex. : `!@#$%^&*()`).
3. Il doit inclure au moins **un chiffre**.
4. Il ne doit pas contenir la chaîne de caractères **"IPL"** (insensible à la casse).

---

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Jasmine** : Framework de test pour le TDD.
- **GitHub Actions** : Outil pour l'intégration continue.

---

## Installation

1. Clone ce dépôt GitHub :
   ```bash
   git clone https://github.com/Fadi-Samakie-Vinci/IPL-SOCIAL.git
   cd IPL-social
