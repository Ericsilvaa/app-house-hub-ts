import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@radix-ui/react-popover'
import { Button } from './button'
import { Calendar } from './calendar'

type DateRangePickerProps = {
  className?: string
  minDate?: Date
  maxDate?: Date
  onChange: React.Dispatch<React.SetStateAction<undefined>>
  placeholder: string
  value: any | null
}

export const DateRangePicker = ({
  className,
  minDate,
  maxDate,
  onChange,
  placeholder,
  value
}: DateRangePickerProps) => {
  const handleDatesChange = (dates: any) => {
    onChange(dates)
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant='outline'
            className={cn(
              'w-[250px] justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            <span className='truncate'>
              {value?.from ? (
                value.to ? (
                  <>
                    {format(value.from, 'LLL dd, y')} -{' '}
                    {format(value.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(value.from, 'LLL dd, y')
                )
              ) : (
                placeholder
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto border-none p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={value?.from}
            selected={value}
            onSelect={handleDatesChange}
            numberOfMonths={2}
            fromDate={minDate}
            toDate={maxDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
