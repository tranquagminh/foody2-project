"use client"
import { useState } from 'react';
import { Modal, Box, Fade } from '@mui/material';
import LoginModal from './LoginModal';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal = ({ open, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="auth-modal"
    >
      <Fade in={open}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
        }}>
          {isLogin ? (
            <LoginModal onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default AuthModal;