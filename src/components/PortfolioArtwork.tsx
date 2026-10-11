import React, { useId } from 'react';
import { PortfolioArtworkType } from '../data/portfolio';

interface PortfolioArtworkProps {
  variant: PortfolioArtworkType;
}

export const PortfolioArtwork: React.FC<PortfolioArtworkProps> = ({ variant }) => {
  const uniqueId = useId().replace(/:/g, '');
  const id = `portfolio-${variant}-${uniqueId}`;

  return (
    <svg className="portfolio-artwork" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-paper`} x1="44" y1="30" x2="429" y2="338" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E8F3EE" />
        </linearGradient>
        <linearGradient id={`${id}-red`} x1="116" y1="62" x2="359" y2="311" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7775" />
          <stop offset="1" stopColor="#F20D18" />
        </linearGradient>
        <linearGradient id={`${id}-mint`} x1="100" y1="20" x2="400" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1FBF8" />
          <stop offset="1" stopColor="#B9E6DB" />
        </linearGradient>
        <linearGradient id={`${id}-ink`} x1="130" y1="35" x2="350" y2="315" gradientUnits="userSpaceOnUse">
          <stop stopColor="#414440" />
          <stop offset="1" stopColor="#161817" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="30" y="24" width="420" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <clipPath id={`${id}-clip`}>
          <rect x="23" y="20" width="434" height="320" rx="20" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}-clip)`}>
        {variant === 'ai-visual' && (
          <>
            <rect x="23" y="20" width="434" height="320" fill={`url(#${id}-mint)`} />
            <circle cx="350" cy="80" r="104" fill="#FFFFFF" fillOpacity=".36" />
            <ellipse cx="246" cy="291" rx="126" ry="22" fill="#304D48" fillOpacity=".15" filter={`url(#${id}-shadow)`} />
            <ellipse cx="247" cy="190" rx="118" ry="44" transform="rotate(-25 247 190)" stroke="#FFFFFF" strokeOpacity=".9" strokeWidth="4" />
            <ellipse cx="247" cy="190" rx="118" ry="44" transform="rotate(27 247 190)" stroke="#E85A59" strokeOpacity=".72" strokeWidth="3" />
            <circle cx="244" cy="183" r="77" fill={`url(#${id}-red)`} />
            <path d="M178 191C200 153 236 127 277 113C299 131 319 161 321 191C299 225 267 247 226 254C205 239 187 216 178 191Z" fill="#FBABA0" fillOpacity=".72" />
            <path d="M194 153C220 169 245 202 259 246" stroke="#FFF7EF" strokeOpacity=".84" strokeWidth="5" strokeLinecap="round" />
            <circle cx="245" cy="183" r="13" fill="#FFF7EF" />
            <circle cx="352" cy="260" r="21" fill="#FFFDFC" />
            <circle cx="352" cy="260" r="7" fill="#F20D18" />
          </>
        )}

        {variant === 'video-motion' && (
          <>
            <rect x="23" y="20" width="434" height="320" fill="#242825" />
            <circle cx="346" cy="104" r="76" fill="#F7B29B" fillOpacity=".26" />
            <circle cx="346" cy="104" r="47" fill={`url(#${id}-red)`} />
            <path d="M23 251C89 221 140 226 198 248C257 270 311 255 366 217C397 196 430 192 457 198V340H23V251Z" fill="#343B36" />
            <path d="M23 273C91 243 139 249 203 276C271 304 339 279 397 240C421 224 443 218 457 221V340H23V273Z" fill="#717F75" fillOpacity=".78" />
            <path d="M23 303C99 278 145 283 214 309C278 334 366 309 457 265V340H23V303Z" fill="#B4C6BA" />
            <path d="M106 20H112V340H106V20Z" fill="#FFFFFF" fillOpacity=".12" />
            <path d="M150 20H151V340H150V20Z" fill="#FFFFFF" fillOpacity=".08" />
            <rect x="48" y="50" width="54" height="4" rx="2" fill="#FFFFFF" fillOpacity=".75" />
            <rect x="48" y="62" width="32" height="4" rx="2" fill="#FFFFFF" fillOpacity=".34" />
            <circle cx="244" cy="196" r="31" fill="#FFFFFF" fillOpacity=".84" />
            <path d="M238 182L258 196L238 210V182Z" fill="#F20D18" />
          </>
        )}

        {variant === 'social-media' && (
          <>
            <rect x="23" y="20" width="434" height="320" fill="#E8F3EE" />
            <circle cx="395" cy="65" r="60" fill="#FFFFFF" fillOpacity=".5" />
            <g transform="rotate(-7 148 180)">
              <rect x="61" y="61" width="145" height="231" rx="12" fill="#FFFFFF" />
              <rect x="71" y="71" width="125" height="153" rx="7" fill="#E4ECE5" />
              <circle cx="151" cy="118" r="33" fill="#F1C8AF" />
              <path d="M84 197C102 159 121 152 139 173C159 145 174 156 196 187V224H71V197H84Z" fill="#F20D18" fillOpacity=".82" />
              <rect x="72" y="237" width="83" height="6" rx="3" fill="#282B28" />
              <rect x="72" y="250" width="112" height="4" rx="2" fill="#CACDC4" />
              <rect x="72" y="260" width="91" height="4" rx="2" fill="#CACDC4" />
            </g>
            <g transform="rotate(7 315 174)">
              <rect x="240" y="48" width="151" height="244" rx="15" fill="#FFFFFF" />
              <rect x="250" y="58" width="131" height="164" rx="8" fill={`url(#${id}-red)`} />
              <circle cx="317" cy="132" r="44" fill="#F4CDAA" />
              <path d="M259 201C280 170 299 165 317 181C339 155 357 164 382 193V222H250V201H259Z" fill="#373A35" />
              <rect x="260" y="236" width="94" height="6" rx="3" fill="#282B28" />
              <rect x="260" y="250" width="111" height="4" rx="2" fill="#CACDC4" />
              <rect x="260" y="260" width="73" height="4" rx="2" fill="#CACDC4" />
            </g>
            <rect x="200" y="272" width="72" height="38" rx="10" fill="#FFFFFF" />
            <circle cx="218" cy="291" r="7" fill="#F20D18" />
            <rect x="232" y="287" width="27" height="5" rx="2.5" fill="#5F655F" />
          </>
        )}

        {variant === 'product-ad' && (
          <>
            <rect x="23" y="20" width="434" height="320" fill="#F3F0E7" />
            <circle cx="356" cy="82" r="100" fill="#FFFFFF" fillOpacity=".64" />
            <ellipse cx="242" cy="293" rx="86" ry="15" fill="#3B352C" fillOpacity=".14" filter={`url(#${id}-shadow)`} />
            <path d="M331 340C329 282 352 222 384 194M350 281C323 264 308 237 306 211M361 248C385 234 400 210 403 187" stroke="#718477" strokeWidth="5" strokeLinecap="round" />
            <path d="M333 271C312 265 300 248 299 230C318 231 333 241 342 257M374 230C376 210 391 196 410 191C408 211 396 226 377 237M349 301C330 296 318 281 316 263C335 265 349 276 356 293" fill="#BDD6C8" />
            <rect x="209" y="88" width="66" height="25" rx="6" fill="#FFFFFF" />
            <rect x="219" y="69" width="46" height="23" rx="5" fill="#D9D4C8" />
            <rect x="202" y="109" width="80" height="155" rx="20" fill={`url(#${id}-red)`} />
            <rect x="210" y="118" width="64" height="138" rx="15" fill="#F9F3E9" fillOpacity=".14" />
            <path d="M214 161H270" stroke="#FFE8DD" strokeOpacity=".76" strokeWidth="2" />
            <circle cx="242" cy="190" r="15" fill="#FFF9F1" fillOpacity=".91" />
            <path d="M237 190H247M242 185V195" stroke="#F20D18" strokeWidth="2" strokeLinecap="round" />
            <rect x="221" y="221" width="42" height="4" rx="2" fill="#FFF9F1" fillOpacity=".78" />
            <rect x="228" y="231" width="28" height="3" rx="1.5" fill="#FFF9F1" fillOpacity=".5" />
          </>
        )}

        {variant === 'brand-campaign' && (
          <>
            <rect x="23" y="20" width="434" height="320" fill="#F6F4EE" />
            <rect x="49" y="44" width="170" height="260" rx="6" fill="#F20D18" />
            <path d="M73 229C111 167 150 132 198 101V281H73V229Z" fill="#B60B14" fillOpacity=".75" />
            <circle cx="156" cy="123" r="42" fill="#F7C1A6" />
            <path d="M79 230C104 194 133 184 157 202C175 185 192 186 219 208V281H73V230H79Z" fill="#292B29" />
            <rect x="71" y="65" width="91" height="6" rx="3" fill="#FFFFFF" />
            <rect x="71" y="78" width="61" height="4" rx="2" fill="#FFFFFF" fillOpacity=".7" />
            <rect x="243" y="57" width="177" height="114" rx="10" fill="#FFFFFF" />
            <rect x="257" y="71" width="78" height="86" rx="6" fill="#E3EFE9" />
            <circle cx="296" cy="107" r="23" fill="#F1BEA5" />
            <path d="M262 148C274 126 287 125 299 137C310 122 323 129 331 145V157H257V148H262Z" fill="#F20D18" />
            <rect x="347" y="78" width="58" height="6" rx="3" fill="#343633" />
            <rect x="347" y="91" width="48" height="4" rx="2" fill="#C4C3B9" />
            <rect x="347" y="102" width="52" height="4" rx="2" fill="#C4C3B9" />
            <rect x="347" y="113" width="42" height="4" rx="2" fill="#C4C3B9" />
            <rect x="243" y="190" width="177" height="91" rx="10" fill="#292B29" />
            <rect x="261" y="207" width="79" height="6" rx="3" fill="#FFFFFF" />
            <rect x="261" y="221" width="118" height="4" rx="2" fill="#FFFFFF" fillOpacity=".52" />
            <rect x="261" y="232" width="102" height="4" rx="2" fill="#FFFFFF" fillOpacity=".52" />
            <rect x="261" y="249" width="55" height="17" rx="8.5" fill={`url(#${id}-red)`} />
          </>
        )}

        {variant === 'creative-lab' && (
          <>
            <rect x="23" y="20" width="434" height="320" fill="#F0F5F0" />
            <circle cx="358" cy="91" r="91" fill="#DDF5F1" />
            <path d="M91 247L165 72L250 253L91 247Z" fill={`url(#${id}-red)`} />
            <path d="M165 72L250 253L325 96L165 72Z" fill="#FFFFFF" fillOpacity=".78" />
            <path d="M250 253L325 96L397 255L250 253Z" fill="#B6DCCF" />
            <path d="M91 247L250 253L173 319L91 247Z" fill="#292D29" />
            <path d="M250 253L397 255L324 319L173 319L250 253Z" fill="#E9C9B5" />
            <circle cx="165" cy="72" r="9" fill="#FFFFFF" stroke="#F20D18" strokeWidth="3" />
            <circle cx="325" cy="96" r="8" fill="#F20D18" />
            <circle cx="250" cy="253" r="10" fill="#FFFDF6" stroke="#D3A18F" strokeWidth="3" />
            <path d="M82 85H119M100 66V103M362 181H403M382 160V202" stroke="#F20D18" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="85" r="19" stroke="#F20D18" strokeOpacity=".28" strokeWidth="2" />
            <circle cx="382" cy="181" r="22" stroke="#F20D18" strokeOpacity=".22" strokeWidth="2" />
          </>
        )}
      </g>
    </svg>
  );
};