// src/utils/env.js
import { Platform } from "react-native";

// Your WiFi IP
const localIP = "10.0.0.177";  

// Firebase function URLs
const liveHost = "https://us-central1-mealstogo-f024f.cloudfunctions.net";

// Handle Android emulator quirk (needs 10.0.2.2 instead of host machine IP)
const localHost =
  Platform.OS === "android"
    ? "http://10.0.2.2:5001/mealstogo-f024f/us-central1"
    : `http://${localIP}:5001/mealstogo-f024f/us-central1`;

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";

// Use emulator in dev, Firebase when production
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;


/*
const liveHost = "https://us-central1-mealstogo-f024f.cloudfunctions.net";
const localHost = "http://192.168.1.20:5001/mealstogo-f024f/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
/*
import { Platform } from "react-native";

// 🔹 Replace with your computer's LAN IP (run `ipconfig` or `ifconfig` to find it)
const lanHost = "http://192.168.1.50:5001/mealstogo-f024f/us-central1";

const localHost = `${lanHost}`;
const liveHost = "https://us-central1-mealstogo-f024f.cloudfunctions.net";

export const isDevelopment = process.env.NODE_ENV === "development";

// If running in Expo Go on a device, use LAN. If emulator/simulator, localhost works.
export const host =
  isDevelopment && Platform.OS !== "web" ? localHost : liveHost;


/* 
const liveHost = "https://us-central1-mealstogo-f024f.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-f024f/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
/* restaurant : `https://placesnearby-7o2r7xsmrq-uc.a.run.app/placesNearby?location=${location}` 
 location : https://geocode-7o2r7xsmrq-uc.a.run.app/geocode?city=${searchTerm}`
*/