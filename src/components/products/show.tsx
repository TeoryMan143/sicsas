import { productTypes, type ProductValues } from './data';

type Props = {
  value: ProductValues;
};

function ShowProducts({ value }: Props) {
  if (value !== 'all') {
    return (
      <div>
        <div className='flex flex-wrap gap-3 justify-center'>
          {Array.from({ length: 3 }).map((_, i) => (
            <img
              key={i}
              src={`/img/prods/${value}/${i + 1}.webp`}
              className='aspect-square object-contain size-24 border border-detail rounded-sm lg:size-36'
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 gap-y-5 gap-x-1 md:grid-cols-2 lg:grid-cols-3'>
      {productTypes.map(({ label, value }) => {
        if (value === 'all') return;

        return (
          <div key={value} className='flex flex-col items-center'>
            <h3 className='text-center font-bold text-bright mb-2 lg:text-xl'>
              {label}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {Array.from({ length: 3 }).map((_, i) => (
                <img
                  key={value + 'img' + i}
                  src={`/img/prods/${value}/${i + 1}.webp`}
                  className='aspect-square object-contain size-24 border border-detail rounded-sm lg:size-36'
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ShowProducts;
