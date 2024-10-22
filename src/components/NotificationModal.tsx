import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { NotificationModalStyles as styles } from '../styles/NotificationModalStyles';

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
  notificationText: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ visible, onClose, notificationText }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{notificationText}</Text>
        <TouchableOpacity onPress={onClose}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default NotificationModal;
