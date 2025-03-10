"use client"
import { TextField, Button } from '@mui/material';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">REGISTER</h2>
      
      <form className="!space-y-4">
        <TextField
          fullWidth
          placeholder="Full Name"
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
          placeholder="Enter email"
          type="email"
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

        <TextField
          fullWidth
          type="password"
          placeholder="Confirm Password"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              bgcolor: '#f5f5f5',
            }
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#3cb815',
            borderRadius: '50px',
            py: 1.5,
            textTransform: 'none',
            fontSize: '16px',
            '&:hover': {
              bgcolor: '#2da012',
            }
          }}
        >
          Register
        </Button>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Button 
            onClick={onSwitchToLogin}
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
            Login here
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;