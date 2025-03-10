"use client"
import { useState } from 'react';
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';

interface LoginModalProps {
  onSwitchToRegister: () => void;
}

const LoginModal = ({ onSwitchToRegister }: LoginModalProps) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
        <h2 className="text-3xl font-bold text-center mb-8">LOGIN</h2>
        
        <form className="!space-y-4">
          <TextField
            fullWidth
            placeholder="Enter email"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                bgcolor: '#f5f5f5',
              }
            }}
          />

          <TextField
            fullWidth
            type="password"
            placeholder="Password"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                bgcolor: '#f5f5f5',
              }
            }}
          />

          <div className="flex items-center justify-between">
              <FormControlLabel
                control={
                  <Switch 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#3cb815',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#3cb815',
                      },
                    }}
                  />
                }
                label="REMEMBER ME"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '12px',  
                    color: '#666',    
                  }
                }}
              />
              <Button 
                sx={{ 
                  textAlign: 'right',
                  color: '#3cb815',
                  fontSize: '12px',    
                  padding: '0',     
                  minWidth: 'unset',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  }
                }}
              >
                FORGOT PASSWORD?
              </Button>
          </div>
          <div className="text-center mt-4 flex justify-center gap-2">
            <span className="text-sm text-gray-600">Don&apos;t have an account? </span>
              <Button 
                onClick={onSwitchToRegister}
                sx={{ 
                  color: '#3cb815',
                  fontSize: '12px',
                  padding: '0 4px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  }
                }}
              >
                Register here
              </Button>
            </div>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#3cb815',
                  borderRadius: '50px',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#2da012',
                  }
                }}
              >
                SIGN IN
              </Button>
          
        </form>
    </>
  );
};

export default LoginModal;