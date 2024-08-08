import { Search } from 'lucide-react'
import { memo, useState } from 'react'
import { Button } from './ui/button'
import { DateRangePicker } from './ui/DateRangePicker'
import { Input } from './ui/input'
import { Stepper } from './ui/Stepper'

type Props = {
  onChange: (filters: any) => void
}

const ProductFilters = ({ onChange }: Props) => {
  const [dates, setDates] = useState()
  const [guests, setGuests] = useState(0)
  const [search, setSearch] = useState('')

  const handleSubmit = () => {
    onChange({ dates, guests, search })
  }

  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <Input
        className='w-[400px]'
        placeholder='Search destinations'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DateRangePicker
        value={dates}
        onChange={setDates}
        minDate={new Date()}
        placeholder='Add dates'
      />
      <Stepper label='guest' value={guests} onChange={setGuests} />
      <Button onClick={handleSubmit}>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  )
}

export default memo(ProductFilters)
