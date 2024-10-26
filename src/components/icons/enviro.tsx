function EnviroIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio='none'
      x='0px'
      y='0px'
      width='1em'
      height='1em'
      viewBox='0 0 500 500'
      {...props}
    >
      <defs>
        <g id='fill-enviro'>
          <path
            fill='currentColor'
            stroke='none'
            d='
M 203.05 455.15
Q 201.3 412.05 163.5 409.5 125.75 407 99.1 385.75 98.85 416.05 109.4 441.1 138.85 505.95 198.1 471.5 175.25 466.45 148.45 451.75 147.8 443.6 156.5 437.1 177.8 448.65 203.05 455.15
M 232.85 477.6
Q 236.15 468.85 235.65 460.8 212.25 460.9 203.05 455.15
L 198.1 471.5
Q 219.75 477.6 232.85 477.6
M 161.25 232.65
Q 156.7 247.05 156.7 263.35 156.7 301.35 181.3 329
L 198.35 295.3 188.45 283.75 204.6 256.55 191.1 242.5 180.6 250.35 161.25 232.65
M 39.5 64.95
Q 29.95 63.6 24.15 69.4 18.4 75.15 19.7 84.75 20.95 94.35 26.65 102.45 32.4 110.1 40.65 108.25 49 106.2 55.3 100.1 61.85 93.9 62.8 85.25 63.95 76.8 56.5 71.55 48.9 66.5 39.5 64.95
M 114.85 76.6
Q 96.4 76.6 83.3 94.1 69.9 111.25 66.5 132.75 62.9 154.2 79.3 164.3 95.55 174.3 115.65 174.9 135.55 175.15 150.9 163.35 166.25 151.3 162.45 131.3 158.75 111.25 146.05 94.1 133.2 76.6 114.85 76.6
M 105.7 36.7
Q 100.65 29.1 92.5 24.05 84.25 19.1 76.6 22.3 69.2 25.4 66.7 34.85 64.15 44.15 66.3 53.8 68.7 63.1 77 64.55 85.5 65.9 93.7 62.6 102.15 59.4 106.3 51.75 110.6 44.45 105.7 36.7
M 201.5 179.75
Q 193.3 185.3 185.95 192.65 174.5 204.2 167.5 217.5
L 183.7 232.1 202.05 225.75 222.95 250.35 212.45 278.5 222.95 287.45 196.15 343
Q 205 349.9 214.8 354.45
L 225.75 315
Q 248.3 314.75 261.5 286.65
L 238.95 267.25
Q 226.15 241.1 223.05 211.7
L 210.6 211.7 201.5 179.75
M 167.9 53.8
Q 170 44.15 167.5 34.85 164.95 25.4 157.6 22.3 149.9 19.1 141.65 24.05 133.5 29.1 128.45 36.7 123.6 44.45 127.85 51.75 132.05 59.4 140.5 62.6 148.65 65.9 157.2 64.55 165.45 63.1 167.9 53.8
M 192.15 65.25
Q 182.75 66.8 175.15 71.85 167.7 77.1 168.85 85.55 169.8 94.2 176.35 100.4 182.65 106.5 191 108.55 199.25 110.4 205 102.75 210.7 94.65 211.95 85.05 213.25 75.45 207.5 69.7 201.7 63.9 192.15 65.25
M 327.25 333.95
Q 340.05 321.15 347.35 305.9
L 341.8 296.1
Q 327.85 286.1 296.05 277.75
L 268.9 230.75 284.05 213.65 297.25 217.9 319 201.2 335.2 201.5
Q 331.5 196.95 327.25 192.65 297.9 163.4 256.55 163.4 232.45 163.4 212.45 173.35
L 220.3 198.1 244.8 198.1
Q 236.15 237.05 255.65 257.55
L 264.2 257.55
Q 271.9 272.1 282.65 286.65 261.9 325.8 238.2 329
L 228.95 359.6
Q 242 363.2 256.55 363.2 297.9 363.2 327.25 333.95
M 348.3 222.95
L 338.4 222.95
Q 329.2 224.3 322.1 219.05
L 298.8 234.6 291 234.6 310.45 265.7 354.95 281.7
Q 356.5 272.9 356.5 263.35 356.5 241.5 348.3 222.95
M 437.2 164.4
Q 433.8 170.2 433.8 174.6 433.8 179.15 437.2 182.25 440.7 185.35 445.55 185.35 449.05 185.35 451.75 183.9 451.85 183.6 451.95 183.6 452.9 183.05 453.8 182.25 457.3 179.15 457.3 174.6 457.3 170.2 453.8 164.4 450.5 158.55 445.65 158.55 440.8 158.55 437.2 164.4
M 451.45 120.7
Q 454.3 122.15 457.85 120.3 461.35 118.45 461.35 113.9 461.35 109.45 456.8 103.6 452.05 97.85 445.55 97.85 438.95 97.85 434.55 103.6 429.9 109.45 430 114 430 118.45 433 120.4 436 122.35 439.05 120.9 442.05 119.45 445.35 119.35 448.65 119.15 451.45 120.7
M 485.95 144.85
Q 483.6 139.9 469.7 134.7 455.85 129.45 452.15 133.1 448.45 136.7 454.4 150.1 460.4 163.5 464.85 165.85 469.45 168.1 474.85 167.6 480.4 167.1 483.4 164 486.6 161 487.5 155.45 488.35 149.85 485.95 144.85
M 404.65 144.95
Q 402.2 149.9 403.1 155.55 403.95 161.1 407.2 164.1 410.2 167.2 415.7 167.7 421.15 168.2 425.75 165.95 430.2 163.6 436.2 150.2 442.15 136.8 438.45 133.2 434.75 129.55 420.85 134.75 407 140 404.65 144.95 Z'
          />
        </g>

        <path
          id='str-enviro'
          stroke='currentColor'
          stroke-width='16'
          stroke-linejoin='round'
          stroke-linecap='round'
          fill='none'
          d='
M 476.8 227.15
Q 478.85 242.75 478.85 259.2 478.85 352.2 413.1 417.95 354.45 476.65 274.15 482.95
M 215.15 37.75
Q 234.1 34.65 254.3 34.65 335.1 34.65 395.35 84.25
M 60.25 373.2
Q 29.8 322.5 29.8 259.2 29.8 223.85 39.3 192.35'
        />
      </defs>

      <g transform='matrix( 1, 0, 0, 1, 0,0) '>
        <use href='#fill-enviro' />

        <use href='#str-enviro' />
      </g>
    </svg>
  );
}

export default EnviroIcon;
