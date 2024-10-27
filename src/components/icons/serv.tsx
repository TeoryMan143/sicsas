function ServIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        <g id='fill-serv'>
          <path
            fill='currentColor'
            stroke='none'
            d='
M 122.75 126.45
Q 126 123.2 126 118.75 126 114.35 122.75 111.1 119.75 108.1 115.3 108.1 110.9 108.1 107.65 111.1 104.45 114.35 104.45 118.75 104.45 123.2 107.65 126.45 110.9 129.45 115.3 129.45 119.75 129.45 122.75 126.45
M 210.45 118.75
Q 210.45 114.35 207.2 111.1 204 108.1 199.55 108.1 195.1 108.1 192.1 111.1 188.85 114.35 188.85 118.75 188.85 123.2 192.1 126.45 195.1 129.45 199.55 129.45 204 129.45 207.2 126.45 210.45 123.2 210.45 118.75 Z'
          />
        </g>

        <path
          id='str-serv'
          stroke='currentColor'
          stroke-width='16'
          stroke-linejoin='round'
          stroke-linecap='round'
          fill='none'
          d='
M 325.1 96
Q 336 97.8 341.45 94.2 345.65 91.35 348.1 82.9 351.1 72.4 352.9 69.4 354.95 66.75 357.75 65.55 361 64.15 363.6 65.35 366.8 66.95 368.45 72.2 370.45 78.05 370.05 84.5 369.65 90.95 367 96.6 377.9 97.4 387.6 98.6 392 99.2 394.05 100.65 396.05 102.25 396.85 105.05 397.45 107.1 397.65 110.5 397.85 120.4 396.85 131.65 396.25 140.35 393 144.75 388.6 151 378.1 152.85 364.2 156.05 350.1 152.2 335.8 148.4 325.1 138.7
L 325.1 140.55
Q 325.1 153.85 317.85 153.85
L 298.3 153.85
Q 291.25 153.85 291.25 140.55
L 291.25 105.05
Q 291.25 91.75 298.3 91.75
L 317.85 91.75
Q 325.1 91.75 325.1 105.05
L 325.1 138.7
M 242.3 183.85
Q 230.6 160.5 230.6 132.45 230.6 84.5 264.45 50.65 298.3 16.8 346.05 16.8 394.05 16.8 427.9 50.65 461.55 84.5 461.55 132.45 461.55 168.95 442 197.15 440.6 199.2 439.15 201 436.15 205 432.7 208.85
M 451.65 333.6
Q 451.65 390.05 411.75 429.75 371.85 469.85 315.45 469.85 259 469.85 219.1 429.75 179.2 390.05 179.2 333.6 179.2 277.15 219.1 237.05 237.45 218.75 259.4 208.85 285 197.15 315.45 197.15 361 197.15 395.65 223.15 400.9 227 405.9 231.4 408.95 234.25 411.75 237.05 415.4 240.7 418.6 244.3 451.65 282.2 451.65 333.6 Z
M 316.05 414.6
L 242.7 341.65
Q 242.05 340.85 241.45 339.85 233.4 327.35 236.25 310.4 239.25 290.9 254.35 281.2 269.5 271.75 288.45 276.95 307.55 282.4 315.25 298.75 320.85 288.85 330.75 282.6 340.6 276.35 351.9 275.75 363.2 275.15 373.45 280.8 383.95 286.45 389.4 295.9 395.05 305.8 394.25 317.7 393.4 329.35 385.55 338.05
L 316.05 414.6 Z
M 199.35 167.15
Q 196.35 176.6 188.45 184.25 175.75 197.15 157.85 197.15 139.7 197.15 126.8 184.25 119.15 176.6 116.1 167.15
M 166.1 256.4
Q 161.05 257 155.8 257 109.85 257 77.4 224.55 45 192.15 45 146.2 45 100.45 77.4 67.8 92.55 52.85 110.25 44.8 131.25 35.35 155.8 35.35 190.3 35.35 217.1 53.65
M 185.45 437.4
Q 181.6 442.65 177 447.25 153 471.25 118.95 471.25 84.9 471.25 60.9 447.25 36.9 423.1 36.9 389.2 36.9 355.15 60.9 331 72 319.9 85.3 313.85 100.6 307 118.95 307 137.7 307 153.4 314.25
M 82.05 386.8
L 118.55 386.8 118.55 350.55
M 154.8 386.8
L 118.55 386.8 118.55 423.3'
        />
      </defs>

      <g transform='matrix( 1, 0, 0, 1, 0,0) '>
        <use href='#fill-serv' />

        <use href='#str-serv' />
      </g>
    </svg>
  );
}

export default ServIcon;