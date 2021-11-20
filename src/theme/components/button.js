export const Button = {
  baseStyle: {
    '&:focus': {
      boxShadow: 'none',
    },
    padding: '16px 24px',
    color: 'white',
    borderRadius: '90px',
  },
  sizes: {
    small: {
      fontSize: '14px',
      lineHeight: '16px',
      px: '16px',
      py: '12px',
    },
    medium: {
      fontSize: '16px',
      lineHeight: '16px',
      px: '24px',
      py: '16px',
    },
  },
  variants: {
    neutral: {
      bg: 'primary.1',
      '&:hover': {
        bg: 'primary.variant',
        '&:disabled': {
          bg: 'primary.variant',
        },
      },
    },
    light: {
      bg: 'neutrals.8',
      border: '2px',
      borderColor: 'neutrals.6',
      color: 'neutrals.2',
      '&:hover': {
        bg: 'neutrals.2',
        color: 'neutrals.8',
        '&:disabled': {
          bg: 'neutrals.2',
        },
      },
      '&:disabled': {
        bg: 'neutrals.2',
        color: 'neutrals.8',
      },
    },
  },
  defaultProps: {
    variant: 'neutral',
    size: 'medium',
  },
}
