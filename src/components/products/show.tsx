import { productTypes, type ProductTitles, type ProductValues } from './data';

type Props = {
  value: ProductValues;
};

const productTitle = Object.fromEntries(
  productTypes.map(({ value, label }) => [value, label]),
) as Record<ProductValues, ProductTitles>;

function ShowProducts({ value }: Props) {
  if (value !== 'all') {
    return (
      <div>
        <h3 className='text-center font-bold text-bright mb-2'>
          {productTitle[value]}
        </h3>
        <div className='flex flex-wrap gap-3 justify-center'>
          {Array.from({ length: 3 }).map((_, i) => (
            <img
              key={i}
              src={`/img/prods/${value}/${i + 1}.webp`}
              className='aspect-square object-contain size-24 border border-detail rounded-sm'
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-5'>
      {productTypes.map(({ label, value }) => {
        if (value === 'all') return;

        return (
          <div key={value} className='flex flex-col items-center'>
            <h3 className='text-center font-bold text-bright mb-2'>{label}</h3>
            <div className='flex flex-wrap gap-3'>
              {Array.from({ length: 3 }).map((_, i) => (
                <img
                  key={value + 'img'}
                  src={`/img/prods/${value}/${i + 1}.webp`}
                  className='aspect-square object-contain size-24 border border-detail rounded-sm'
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
