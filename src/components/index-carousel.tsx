import { cn } from '@/core/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import { useEffect, useState } from 'react';
import SecTitle from './ui/sec-title';

const TITLES = [
  'Soluciones Integrales en Sistemas Contra Incendio',
  'Trabajamos de acuerdo con los lineamientos de las normas NFPA - IMP en los Sistemas Contra Incendio',
  'Servicio personalizado para nuestros clientes',
] as const;

function IndexCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className='bg-carousel bg-cover relative py-8'>
      <div className='absolute top-0 left-0 size-full bg-slate-950/60 z-10' />
      <div className='relative z-20 space-y-5'>
        <SecTitle>{TITLES[current]}</SecTitle>
        <Carousel opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i}>
                <img
                  className='object-cover aspect-video '
                  src={`img/car${i + 1}.webp`}
                  alt='Sistemas contra incendios'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-2 opacity-75' />
          <CarouselNext className='right-2 opacity-75' />
        </Carousel>
        <div className='flex gap-2 justify-center'>
          {Array.from({ length: 3 }).map((_, i) => (
            <button
              onClick={() => {
                api?.scrollTo(i);
              }}
              className='p-1'
              key={i}
            >
              <div
                className={cn(
                  'h-1.5 w-14 rounded-lg bg-white/45 transition-colors',
                  {
                    'bg-white/95': current == i,
                  },
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default IndexCarousel;
