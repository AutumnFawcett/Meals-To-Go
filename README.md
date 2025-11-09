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
| ![Auth](Meals-To-Go/assets/readme/authentication.png) | ![List](Meals-To-Go/assets/readme/list.png) | ![Details](Meals-To-Go/assets/readme/details.png) |

| Favourites | Checkout | Settings |
|------------|----------|----------|
| ![Favourites](Meals-To-Go/assets/readme/favourites.png) | ![Checkout](Meals-To-Go/assets/readme/checkout.png) | ![Settings](Meals-To-Go/assets/readme/settings.png) |

| Camera Avatar | Map |
|---------------|-----|
| ![Camera](Meals-To-Go/assets/readme/camera.png) | ![Map](Meals-To-Go/assets/readme/map.png) |

---

## 🚀 Quick Start

### Clone this repo and install dependencies with Yarn:

```bash
# 1) clone the from my repo
git clone https://github.com/AutumnFawcett/Meals-To-Go.git

# 2) Open folder
cd Meals-To-Go

# 3 )Install deps
yarn install

# 4) start the dev server (Metro)
yarn start

# 5) run on simulator
#   - press "i" for iOS
#   - press "a" for Android

## 🧑‍🎓 Developer

**Autumn Fawcett**  
📍 Canada  
💼 [Mrs. Roboto Labs](https://github.com/AutumnFawcett)  
🎓 Certified React Native Developer — [Zero To Mastery Academy]([https://academy.zerotomastery.io/a/aff_xzw29mh1/external?affcode=441520_hpzbv2qd])  

> This app was built and extended as part of my **Zero To Mastery React Native Development Certification**, demonstrating mastery of:
> - Cross-platform mobile app development using React Native and Expo  
> - Firebase Authentication and Functions integration  
> - State management via Context API  
> - Component-based architecture and reusable design systems  
> - Real-device features (Camera, AsyncStorage, Maps)

📜 **Certificate:**  
[View Certification →](Meals-To-Go/assets/readme/ZTM_certificate.pdf)


## 🔮 Future Improvements

- Integrate live Google Places API (replace mocks)
- Add real payment processing with Stripe via Firebase Functions
- Connect Map screen with real geolocation markers
- Implement profile persistence via Firebase Firestore
- Improve camera avatar to upload profile images to Firebase Storage
