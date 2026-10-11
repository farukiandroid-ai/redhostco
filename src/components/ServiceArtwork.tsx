import React from 'react';

export type ServiceArtworkVariant = 'website' | 'app' | 'ai' | 'content';

interface ServiceArtworkProps {
  variant: ServiceArtworkVariant;
}

export const ServiceArtwork: React.FC<ServiceArtworkProps> = ({ variant }) => {
  const id = `service-${variant}`;

  return (
    <div className={`service-artwork service-artwork--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 360 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${id}-surface`} x1="55" y1="28" x2="297" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F7F4E9" />
          </linearGradient>
          <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FF5960" />
            <stop offset="1" stopColor="#F20D18" />
          </linearGradient>
          <linearGradient id={`${id}-screen`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFF7F3" />
            <stop offset="1" stopColor="#F4EDE5" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="20" y="10" width="320" height="205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <ellipse cx="181" cy="182" rx="119" ry="15" fill="#7C3430" fillOpacity=".11" filter={`url(#${id}-shadow)`} />

        {variant === 'website' && (
          <g className="service-artwork__drift">
            <g transform="rotate(-3 180 104)">
              <rect x="58" y="31" width="244" height="145" rx="14" fill="#B96A63" fillOpacity=".13" />
              <rect x="54" y="25" width="244" height="145" rx="14" fill={`url(#${id}-surface)`} stroke="#E7DECD" />
              <path d="M54 41C54 32.16 61.16 25 70 25H282C290.84 25 298 32.16 298 41V48H54V41Z" fill="#FFFDFC" />
              <path d="M54 48.5H298" stroke="#ECE5D8" />
              <circle cx="69" cy="37" r="3" fill="#F20D18" />
              <circle cx="80" cy="37" r="3" fill="#EAC6B9" />
              <circle cx="91" cy="37" r="3" fill="#EAC6B9" />
              <rect x="112" y="34" width="116" height="6" rx="3" fill="#F1EEE5" />
              <rect x="70" y="63" width="91" height="7" rx="3.5" fill="#292A26" />
              <rect x="70" y="76" width="74" height="5" rx="2.5" fill="#A4A195" />
              <rect x="70" y="88" width="78" height="27" rx="7" fill={`url(#${id}-accent)`} />
              <rect x="82" y="99" width="50" height="4" rx="2" fill="#FFFFFF" fillOpacity=".95" />
              <rect x="174" y="60" width="108" height="70" rx="9" fill={`url(#${id}-screen)`} />
              <rect x="185" y="71" width="34" height="47" rx="5" fill="#EADFD0" />
              <path d="M185 105L197 91L207 100L219 82V118H185V105Z" fill="#D7887E" fillOpacity=".72" />
              <rect x="228" y="73" width="41" height="5" rx="2.5" fill="#494941" />
              <rect x="228" y="84" width="35" height="4" rx="2" fill="#C3BFB3" />
              <rect x="228" y="94" width="42" height="4" rx="2" fill="#C3BFB3" />
              <rect x="70" y="133" width="64" height="5" rx="2.5" fill="#D5D0C3" />
              <rect x="147" y="133" width="64" height="5" rx="2.5" fill="#D5D0C3" />
              <rect x="224" y="133" width="58" height="5" rx="2.5" fill="#D5D0C3" />
            </g>
            <rect className="service-artwork__drift-chip" x="272" y="20" width="47" height="34" rx="10" fill="#FFFFFF" stroke="#EFE4D4" />
            <path d="M286 39L293 32L299 37L307 27" stroke="#F20D18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}

        {variant === 'app' && (
          <g className="service-artwork__drift">
            <g transform="rotate(4 181 105)">
              <rect x="133" y="19" width="94" height="173" rx="23" fill="#30312E" />
              <rect x="137" y="23" width="86" height="165" rx="20" fill="#FBFAF5" />
              <rect x="164" y="29" width="32" height="5" rx="2.5" fill="#30312E" />
              <rect x="147" y="45" width="66" height="31" rx="9" fill={`url(#${id}-accent)`} />
              <circle cx="160" cy="60" r="7" fill="#FFFFFF" fillOpacity=".9" />
              <rect x="172" y="54" width="31" height="4" rx="2" fill="#FFFFFF" />
              <rect x="172" y="62" width="23" height="3" rx="1.5" fill="#FFFFFF" fillOpacity=".65" />
              <rect x="147" y="86" width="66" height="7" rx="3.5" fill="#302F2A" />
              <rect x="147" y="99" width="66" height="30" rx="8" fill="#F0EEE4" />
              <path d="M155 117L165 107L174 113L185 103L204 119" stroke="#C16D64" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="147" y="139" width="30" height="26" rx="7" fill="#F5E5E0" />
              <rect x="183" y="139" width="30" height="26" rx="7" fill="#F0EEE4" />
              <circle cx="162" cy="151" r="5" fill="#F20D18" fillOpacity=".8" />
              <path d="M192 154H204M192 159H201" stroke="#AAA79D" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="service-artwork__drift-chip">
              <rect x="51" y="91" width="73" height="48" rx="12" fill="#FFFFFF" stroke="#EBE1D4" />
              <circle cx="67" cy="108" r="6" fill="#F20D18" fillOpacity=".85" />
              <rect x="79" y="104" width="32" height="5" rx="2.5" fill="#44443D" />
              <rect x="63" y="120" width="48" height="4" rx="2" fill="#D3CEC2" />
              <rect x="235" y="63" width="75" height="48" rx="12" fill="#FFFFFF" stroke="#EBE1D4" />
              <rect x="247" y="76" width="51" height="5" rx="2.5" fill="#44443D" />
              <path d="M247 91H273M247 98H287" stroke="#D3CEC2" strokeWidth="4" strokeLinecap="round" />
            </g>
          </g>
        )}

        {variant === 'ai' && (
          <g className="service-artwork__drift">
            <path d="M95 106L143 69L183 105L223 61L275 101M95 106L145 146L183 105L230 146L275 101M143 69L145 146M223 61L230 146" stroke="#D5B5A9" strokeWidth="2" />
            <path d="M95 106L143 69L183 105L223 61L275 101M95 106L145 146L183 105L230 146L275 101M143 69L145 146M223 61L230 146" stroke="#F20D18" strokeOpacity=".2" strokeWidth="5" />
            <rect x="126" y="35" width="62" height="37" rx="10" fill="#FFFFFF" stroke="#EAE1D4" />
            <rect x="135" y="45" width="32" height="5" rx="2.5" fill="#4A4942" />
            <rect x="135" y="55" width="42" height="4" rx="2" fill="#D1CCC1" />
            <rect x="223" y="127" width="82" height="38" rx="10" fill="#FFFFFF" stroke="#EAE1D4" />
            <path d="M236 151L245 143L253 148L263 137L276 146L288 135" stroke="#F20D18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="95" cy="106" r="13" fill="#FFFFFF" stroke="#E6D9C8" strokeWidth="2" />
            <circle cx="95" cy="106" r="5" fill="#F20D18" />
            <circle cx="143" cy="69" r="12" fill="#FFFFFF" stroke="#E6D9C8" strokeWidth="2" />
            <circle cx="143" cy="69" r="4" fill="#D8897D" />
            <circle cx="183" cy="105" r="26" fill="#FFFDFC" stroke="#E7D7C8" strokeWidth="2" />
            <circle cx="183" cy="105" r="17" fill={`url(#${id}-accent)`} fillOpacity=".93" />
            <circle cx="183" cy="105" r="7" fill="#FFFFFF" fillOpacity=".92" />
            <circle cx="223" cy="61" r="13" fill="#FFFFFF" stroke="#E6D9C8" strokeWidth="2" />
            <circle cx="223" cy="61" r="5" fill="#F20D18" fillOpacity=".72" />
            <circle cx="275" cy="101" r="14" fill="#FFFFFF" stroke="#E6D9C8" strokeWidth="2" />
            <circle cx="275" cy="101" r="5" fill="#D8897D" />
            <circle cx="145" cy="146" r="12" fill="#FFFFFF" stroke="#E6D9C8" strokeWidth="2" />
            <circle cx="145" cy="146" r="4" fill="#F20D18" fillOpacity=".72" />
            <circle cx="230" cy="146" r="12" fill="#FFFFFF" stroke="#E6D9C8" strokeWidth="2" />
            <circle cx="230" cy="146" r="4" fill="#D8897D" />
          </g>
        )}

        {variant === 'content' && (
          <g className="service-artwork__drift">
            <g transform="rotate(-7 148 105)">
              <rect x="68" y="41" width="141" height="118" rx="13" fill="#D28B7F" fillOpacity=".18" />
              <rect x="63" y="35" width="141" height="118" rx="13" fill={`url(#${id}-surface)`} stroke="#E7DECD" />
              <rect x="73" y="45" width="121" height="66" rx="8" fill="#F3E7D9" />
              <path d="M73 97L103 67L125 88L146 60L194 100V111H73V97Z" fill="#D79183" fillOpacity=".8" />
              <circle cx="166" cy="61" r="9" fill="#F7C9A4" />
              <circle cx="133" cy="78" r="13" fill="#FFFFFF" fillOpacity=".88" />
              <path d="M129 71L140 78L129 85V71Z" fill="#F20D18" />
              <rect x="75" y="120" width="73" height="5" rx="2.5" fill="#4A4942" />
              <rect x="75" y="132" width="46" height="4" rx="2" fill="#CCC6BA" />
              <rect x="181" y="122" width="12" height="12" rx="4" fill={`url(#${id}-accent)`} />
            </g>
            <g className="service-artwork__drift-chip">
              <rect x="222" y="42" width="86" height="57" rx="11" fill="#FFFFFF" stroke="#EAE1D4" />
              <rect x="232" y="52" width="24" height="36" rx="5" fill="#F3E7D9" />
              <path d="M232 81L240 70L246 76L256 62V88H232V81Z" fill="#D88C80" />
              <rect x="262" y="54" width="34" height="5" rx="2.5" fill="#4A4942" />
              <rect x="262" y="65" width="29" height="4" rx="2" fill="#CCC6BA" />
              <rect x="262" y="75" width="34" height="4" rx="2" fill="#CCC6BA" />
              <rect x="222" y="113" width="86" height="33" rx="10" fill="#FFFFFF" stroke="#EAE1D4" />
              <rect x="233" y="125" width="64" height="7" rx="3.5" fill="#EEEAE0" />
              <rect x="233" y="125" width="39" height="7" rx="3.5" fill={`url(#${id}-accent)`} />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};