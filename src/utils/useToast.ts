/* eslint-disable no-useless-return */
import toast from 'react-hot-toast';

type Props = {
  message: string;
  type: string;
  background: string;
  color: string;
};

export const useToast = ({
  message, type, background, color,
}: Props): void => {
  if (type === 'error') {
    toast.error(message, {
      duration: 1500,

      style: {
        background,
        color,
      },
    });
  } else if (type === 'success') {
    toast.success(message, {
      duration: 1500,

      style: {
        background,
        color,
      },

      icon: '🌓',
    });
  } else if (type === 'loading') {
    toast.loading(message, {
      duration: 1500,

      style: {
        background,
        color,
      },
    });
  }
};
