import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import ShowProducts from '../src/components/products/show';

beforeEach(() => {
  vi.stubGlobal(
    'Image',
    class {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      constructor() {
        setTimeout(() => {
          if (this.onload) {
            this.onload();
          }
        }, 100);
      }
    },
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('<ShowProducts />', () => {
  it('Should have 3 images', () => {
    const { getAllByRole } = render(<ShowProducts value='res' />);

    const images = getAllByRole('img');

    expect(images.length).toBe(3);
  });

  it('Should have a valid url', () => {
    const { getAllByRole } = render(<ShowProducts value='all' />);

    const images = getAllByRole('img') as HTMLImageElement[];

    for (const img of images) {
      expect(img.src).toMatch(
        new RegExp(
          '/img/prods/(res|vis|aud|head|hand|high|feet|body|sign|emer)/[1-3].webp',
        ),
      );
    }
  });
});
