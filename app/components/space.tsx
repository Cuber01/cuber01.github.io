

export function StarsBackground() {
   return (
      <div className='bg-animation'>
         <div id='stars-1px'></div>
         <div id='stars-2px'></div>
         <div id='stars-3px'></div>
      </div>
   )
}

export function Universe() {
   return (
      <div>
         <div id="smallest-universe" className="universe">
            <div className="scale-[0.7] rotate-45">
               <svg className='orbital-ring-group' height="500" width="500">
                  <circle className='ring' cx="250" cy="250" r="225" />
                  <rect className="fill-[var(--bg-color)]" x="50" y="360" width="50" height="50" />
                  <rect className="fill-[var(--bg-color)]" x="450" y="225" width="50" height="50" />
                  <circle className="stroke-[var(--pink)] fill-[var(--bg-color)] stroke-5" cx="475" cy="250" r="11" />
                  <rect className=" stroke-[var(--red)] fill-[var(--bg-color)] stroke-5" x="62" y="377" rx="0.10" ry="20" width="20" height="20" />
               </svg>
            </div>
            <div id="welcome"  >Jan Englert</div>
         </div>



         <div className="universe element-to-hide-2 scale-[1.2]">
            <svg className='orbital-ring-group anim-reverse' height="500" width="500">
               <g>
                  <circle className="ring" cx="250" cy="250" r="225" />
                  <rect className="fill-[var(--bg-color)]" x="50" y="360" width="50" height="50" />
                  <rect className="fill-[var(--bg-color)]" x="450" y="225" width="50" height="50" />
                  <circle className="stroke-[var(--text-color)] fill-[var(--bg-color)] stroke-5" cx="475" cy="250" r="11" />
               </g>
               <g transform="translate(60,375) rotate(10 10 10)" height="100" width="100" viewBox="-15 -15 55 55">
                  <path
                     d="M 6.7 1.14
                      l 2.8 4.7
                      s 1.3 3 -1.82 3.22
                      l -5.4 0
                      s -3.28 -.14 -1.74 -3.26
                      l 2.76 -4.7
                      s 1.7 -2.3 3.4 0
                      z" transform="scale(2.5)" className="stroke-2 stroke-[var(--orange)] fill-[var(--bg-color)]">
                  </path>
               </g>
            </svg>
         </div>


         <div className="universe element-to-hide-1 scale-[1.8] rotate-90">
            <svg className='orbital-ring-group' height="500" width="500">
               <circle className='ring' cx="250" cy="250" r="225" />
               <rect className="fill-[var(--bg-color)]" x="50" y="360" width="50" height="50" />
               <rect className="fill-[var(--bg-color)]" x="450" y="225" width="50" height="50" />
               <circle className='stroke-[var(--blue)] fill-[var(--bg-color)] stroke-5' cx="475" cy="250" r="11" />
               <rect className="stroke-[var(--green)] fill-[var(--bg-color)] stroke-5" x="62" y="377" rx="0.10" ry="20" width="20" height="20" />             </svg>
         </div>
      </div>
   )
}