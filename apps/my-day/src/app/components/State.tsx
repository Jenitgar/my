import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material'
import { selectStateById } from '@my/shared/redux'
import { useSelector } from 'react-redux'
import { StateType, StateUuid } from '../types'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import StateNumber from './StateNumber'

export default function State({ uuid }: { uuid: StateUuid }) {
  const state = useSelector(selectStateById(uuid))

  const handleTypeChange = (e: SelectChangeEvent<StateType>) => {
    const typeName = e.target.value

    console.log(typeName)
  }

  return (
    <Stack>
      <FormControl fullWidth>
        <InputLabel>Name</InputLabel>
        <Input type="text" value={state.name} />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Info</InputLabel>
        <Input type="text" value={state.info} />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select value={state.type} label="Type" onChange={handleTypeChange}>
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="choice">Choice</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export function StateType({ uuid }: { uuid: StateUuid }) {
  const state = useSelector(selectStateById(uuid))

  const handleTypeChange = (e: SelectChangeEvent<StateType>) => {
    const typeName = e.target.value

    console.log(typeName)
  }

  return (
    <Stack>
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select value={state.type} label="Type" onChange={handleTypeChange}>
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="choice">Choice</MenuItem>
        </Select>
      </FormControl>
      {state.type === 'number' ? <StateNumber /> : null}
      {state.type === 'choice' ? <StateNumber /> : null}
    </Stack>
  )
}
