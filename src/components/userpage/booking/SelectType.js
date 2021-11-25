import { Select } from '@chakra-ui/react'

const SelectType = ({ onSelect }) => {
  const options = [
    { value: -1, label: 'All' },
    { value: 0, label: 'Waiting' },
    { value: 1, label: 'Booking' },
    { value: 2, label: 'Canceled' },
    { value: 3, label: 'Finished' },
  ]
  return (
    <Select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default SelectType
