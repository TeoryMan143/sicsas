import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { productTypes, type ProductValues } from './data';

import { cn } from '@/core/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ShowProducts from './show';

function ProductsMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>(productTypes[0].value);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='
              w-[300px] text-center justify-center mt-3 relative bg-bright text-white rounded-sm transition
              hover:bg-pale hover:text-white
              active:scale-95
            '
          >
            <svg
              className={cn(
                'text-xl absolute top-1/2 -translate-y-1/2 left-3 transition-transform',
                {
                  '-rotate-90': open,
                },
              )}
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z'
              />
            </svg>
            <span>
              {productTypes.find(prod => prod.value === value)?.label}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className=' p-0'>
          <Command>
            <CommandInput placeholder='Buscar producto...' />
            <CommandList>
              <CommandEmpty>Producto no encontrado</CommandEmpty>
              <CommandGroup>
                {productTypes.map(prod => (
                  <CommandItem
                    className='data-[selected=true]:bg-bright/85 data-[selected=true]:text-white'
                    key={prod.value}
                    value={prod.value}
                    keywords={[prod.label]}
                    onSelect={currentValue => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === prod.value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {prod.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className='flex flex-col items-center my-5'>
        <ShowProducts value={value as ProductValues} />
      </div>
    </>
  );
}

export default ProductsMenu;
