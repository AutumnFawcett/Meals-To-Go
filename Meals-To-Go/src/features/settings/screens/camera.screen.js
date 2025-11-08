// camera.screen.js
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
  Alert,
  Animated,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export const CameraScreen = ({ navigation, route }) => {
  const { user } = route.params; // pass user object from Settings
  const [permission, requestPermission] = useCameraPermissions();
  useEffect(() => {
    if (!permission) {
      requestPermission(); // ask immediately on mount
    }
  }, [permission]);
  const [cameraType, setCameraType] = useState("back");
  const [mediaPermission, setMediaPermission] = useState(null);
  const cameraRef = useRef(null);

  // 🔹 Animated scale value for snap button
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animateSnap = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Take picture
  const snap = async () => {
    animateSnap(); // 👈 animate button

    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
    

      if (mediaPermission === "granted") {
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        Alert.alert("Saved!", "Your photo has been saved to the gallery.");
      }

      // Save per-user avatar in AsyncStorage
      try {
        const key = `@user_photo_${user.uid}`;
        await AsyncStorage.setItem(key, photo.uri);
      } catch (e) {
        console.log("Error saving photo:", e);
      }

      navigation.navigate("Settings"); // return to Settings
    }
  };

  // Flip camera
  const toggleCameraType = () => {
    setCameraType((prev) => (prev === "back" ? "front" : "back"));
  };

  // Ask for media library access
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setMediaPermission(status);
    })();
  }, []);

  // Camera permission denied UI
  if (!permission?.granted) {
  return (
    <View style={styles.permissionContainer}>
      <Ionicons name="alert-circle-outline" size={50} color="red" />
      <TouchableOpacity
        onPress={() => requestPermission()}
        style={{ marginTop: 20 }}
      >
        <Ionicons name="settings-outline" size={40} color="blue" />
      </TouchableOpacity>
    </View>
  );
}

  // Permission granted: show camera
  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={cameraType}>
        {/* Flip Button - Top Right */}
        <TouchableOpacity onPress={toggleCameraType} style={styles.flipButton}>
          <Ionicons name="camera-reverse-outline" size={28} color="black" />
        </TouchableOpacity>

        {/* Capture Button - Bottom Center (with animation) */}
        <Animated.View
          style={[
            styles.captureButton,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <TouchableOpacity onPress={snap} style={styles.innerButton}>
            <Ionicons name="camera-outline" size={40} color="black" />
          </TouchableOpacity>
        </Animated.View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  flipButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 50,
  },
  captureButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
