import toast, { Toast as ToastProps } from 'react-hot-toast';

interface UseToastProps extends Partial<ToastProps> {
  background: string;
  color: string;
  message: string;
  type: 'error' | 'success' | 'loading' | 'custom';
};

export const useToast = ({
  message,
  type,
  background,
  color,
  icon,
  duration = 1500,
}: UseToastProps): void => {
  toast[type](message, {
    duration,

    style: {
      background,
      color,
    },

    icon,
  });
};
