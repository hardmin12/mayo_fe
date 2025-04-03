import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ServiceModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>서비스 준비중</Text> 
          <Text style={styles.description}>🛠 해당 서비스는 준비 중입니다.{"\n"}조금만 기다려 주세요!</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderColor: "#fff",
    borderWidth: 2, 
    borderStyle: "solid",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    fontFamily: "Moneygraphy-Rounded",
  },
  description: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Moneygraphy-Rounded",
    lineHeight: 20,
    letterSpacing: 1.5,
  },
  closeButton: {
    backgroundColor: "#566BC7",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Moneygraphy-Rounded",
  },
});

export default ServiceModal;
