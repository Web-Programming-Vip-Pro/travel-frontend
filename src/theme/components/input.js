export const Input = {
  baseStyle: {
    field: {
      border: '2px',
      borderColor: 'neutrals.6',
      '&:focus': {
        borderColor: 'primary.1',
        boxShadow: 'none',
      },
      boxSizing: 'border-box',
      px: '16px',
    },
  },
  sizes: {},
  variants: {
    single: {
      field: {
        borderRadius: 'full',
        py: '14px',
      },
      input: {
        field: {
          borderRadius: '12px',
          py: '12px',
        },
      },
    },
  },
  defaultProps: {
    variant: 'input',
  },
}
