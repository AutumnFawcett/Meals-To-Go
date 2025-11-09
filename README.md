# Meals-To-Go 🍔📱

Cross-platform **React Native (Expo)** mobile app that lets users browse restaurants, view details, save favourites, and check out sample items with a mock payments flow. Built as part of my **Zero To Mastery** React Native development certification and extended with modern tooling, clean UI, and real device features (camera avatar, persistent favourites, etc.).

> **Tech Stack:** Expo SDK 54 • React Native 0.81 • Yarn • React Navigation • React Native Paper • Styled-Components • Firebase (Auth/Functions) • AsyncStorage

---

## ✨ Features

- **Restaurant list + search** (mock Google Places data)
- **Restaurant details** with ratings & open/closed indicator
- **Favourites**: heart/save restaurants (persisted via AsyncStorage)
- **Checkout flow** with mock payment API (Cloud Functions)
- **User auth scaffolding** (Firebase-ready; swap in your keys and rules)
- **Settings screen** with **camera avatar** (Expo Camera + Media Library)
- **Map screen** (component scaffolded; ready to wire up with Map provider)
- **Performant image loading** (works with reliable sources like Unsplash)

---

## 📸 Screenshots

| Auth | List | Details |
|------|------|---------|
| ![Auth](./assets/readme/authentication.png) | ![List](./assets/readme/list.png) | ![Details](./assets/readme/details.png) |

| Favourites | Checkout | Settings |
|------------|---------|----------|
| ![Favourites](./assets/readme/favourites.png) | ![Checkout](./assets/readme/checkout.png) | ![Settings](./assets/readme/settings.png)) |

| Camera Avatar | Map |
|---------------|-----|
| ![Camera](./assets/readme/camera.png) | ![Map](./assets/readme/map.png) |

---

## 🚀 Quick Start

```bash
# 1) install deps
yarn

# 2) start the dev server (Metro)
yarn start

# 3) run on simulator
#   - press "i" for iOS
#   - press "a" for Android
