/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !  ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from "react";


/* ----- PROPS ----- */
type EspeenIconProps = {
    size?: number;
    stroke?: string;
};


/* ----- COMPONENT ----- */
const EspeenIcon: React.FC<EspeenIconProps> = ({ size = 24, stroke = '#000' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 900 900"
        >
            <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.47639779 15.96466518 2.15144093 29.96140244 -0.4375 44.6875 C-0.93060079 47.58134435 -1.41881158 50.47596027 -1.90455627 53.37104797 C-2.20419578 55.1473345 -2.5087406 56.92280441 -2.81944275 58.69718933 C-6.79396998 81.74864716 -6.8227127 107.09211466 -2 130 C-1.70996094 131.39508789 -1.70996094 131.39508789 -1.4140625 132.81835938 C8.32935685 178.19743285 31.08210047 218.82418402 60.55712891 254.25292969 C61.81990763 255.78193892 63.05853319 257.33083048 64.29296875 258.8828125 C69.96914846 266.01797273 76.16687288 272.60263871 82.43359375 279.21484375 C85.20021236 282.13712519 87.90143034 285.10580507 90.5625 288.125 C94.80354748 292.88913682 99.3089138 297.36856158 103.86547852 301.82861328 C106.63862292 304.56005925 109.29572275 307.31618946 111.79833984 310.29833984 C117.08523797 316.36728705 122.8582331 321.96830635 128.56388855 327.63905334 C130.69431126 329.75658088 132.82147922 331.8773315 134.94787598 333.99890137 C139.46243603 338.50209648 143.98091876 343.00134263 148.5 347.5 C153.74138632 352.71769801 158.98110377 357.93704956 164.21659851 363.16065979 C166.30107178 365.23870342 168.38855921 367.31368535 170.47619629 369.3885498 C176.52977925 375.41866443 182.53382992 381.42177475 188 388 C188.99717082 389.16685899 189.99453992 390.3335486 190.9921875 391.5 C198.17507081 400.13268451 203.9279476 408.99196931 209 419 C209.40460449 419.79148437 209.80920898 420.58296875 210.22607422 421.3984375 C222.70193014 446.0335763 231.9577649 472.42233636 235 500 C235.10957031 500.87914062 235.21914063 501.75828125 235.33203125 502.6640625 C239.67430818 543.77095078 229.88145905 585.08633533 212 622 C211.61730957 622.8048584 211.23461914 623.6097168 210.84033203 624.43896484 C201.10755644 644.85778666 189.64101622 663.52414147 174 680 C173.5364209 680.49612793 173.0728418 680.99225586 172.59521484 681.50341797 C138.03002731 718.31177401 85.68119508 737.92913735 35.81640625 740.21484375 C-3.59484098 741.40156019 -48.18046948 729.81421823 -77.40454102 702.43823242 C-78.94505932 700.96756512 -80.4737769 699.48549261 -82 698 C-82.57427734 697.44618652 -83.14855469 696.89237305 -83.74023438 696.32177734 C-114.22059325 666.83820858 -137.13688255 630.50423614 -138.28540039 587.09741211 C-138.58748928 560.23327286 -129.81242393 536.34992176 -111 517 C-94.65549535 501.00114953 -72.53966514 494.54880293 -50.02734375 494.7890625 C-26.37134284 495.74307598 -6.46174721 503.88782256 12.6875 517.375 C25.8293628 526.61147514 44.1604277 539.17284804 61 537 C69.63198236 534.84837018 76.64811846 531.24159026 81.53125 523.60546875 C88.21340457 510.95987973 88.80866083 497.14998643 85.15234375 483.3671875 C68.2555145 433.99407965 12.65075391 399.34202343 -31.46875 377.140625 C-74.82548526 355.93295775 -120.39677617 347.87526071 -168.43310547 347.75976562 C-170.86590493 347.75003637 -173.29786473 347.71885683 -175.73046875 347.6875 C-190.27714252 347.58752696 -204.08399479 349.29792444 -217.75 354.5625 C-218.66120605 354.90474609 -219.57241211 355.24699219 -220.51123047 355.59960938 C-236.08334286 361.58538268 -251.75667535 368.41078259 -264.63671875 379.2109375 C-267.36342315 381.27512034 -268.66360122 381.38130272 -272 381 C-271.44698335 376.82911032 -270.50708594 373.49510711 -268.6640625 369.71875 C-268.18267822 368.72343262 -267.70129395 367.72811523 -267.20532227 366.70263672 C-266.42306274 365.11733154 -266.42306274 365.11733154 -265.625 363.5 C-265.08480225 362.39285645 -264.54460449 361.28571289 -263.98803711 360.14501953 C-262.87102545 357.86074945 -261.75015492 355.57836243 -260.62548828 353.29785156 C-259.14516159 350.29450929 -257.67831973 347.28501401 -256.21484375 344.2734375 C-250.16324935 331.9047207 -243.54849193 319.9214694 -236.69580078 307.98144531 C-234.96926862 304.94597011 -233.27501503 301.89454982 -231.58984375 298.8359375 C-208.57305444 257.09296207 -180.96785812 218.12181643 -150.08178711 181.83374023 C-147.20812163 178.45169166 -144.4013944 175.02536554 -141.625 171.5625 C-136.99722783 165.86934143 -132.00608975 160.54957238 -126.98828125 155.203125 C-124.79539746 152.86386908 -122.65168627 150.49547641 -120.5625 148.0625 C-115.52448704 142.23226878 -110.19110992 136.66575406 -104.91894531 131.04833984 C-103.00124164 129.00132536 -101.0897361 126.94868837 -99.1796875 124.89453125 C-92.8974757 118.1488776 -86.55806205 111.49312025 -79.99780273 105.01708984 C-76.7765196 101.82272858 -73.77656783 98.51229616 -70.83984375 95.05859375 C-68.49503628 92.43499813 -66.00348552 89.97032399 -63.5 87.5 C-59.86149616 83.90469579 -56.38421665 80.24108676 -53.06640625 76.34765625 C-50.76041143 73.72780202 -48.37616933 71.19314704 -45.98095703 68.6550293 C-39.68839199 61.98418194 -33.69011167 55.19809179 -28 48 C-27.09762389 46.89999883 -26.19390736 45.8010963 -25.2890625 44.703125 C-14.14407813 31.05507106 -6.96744232 16.08058441 0 0 Z " fill={stroke} transform="translate(546,100)"/>
            <path d="M0 0 C1.63398828 1.51117217 3.25860902 3.03251986 4.875 4.5625 C6.29039062 5.88121094 6.29039062 5.88121094 7.734375 7.2265625 C22.8544555 21.60655095 41.21954872 43.85108012 43.04296875 65.5625 C43.08042881 69.39841035 43.07996981 72.25504528 40.875 75.5625 C36.71281597 75.90390078 34.88813755 75.27318229 31.6875 72.625 C30.90632813 71.98175781 30.12515625 71.33851563 29.3203125 70.67578125 C24.16940258 66.22427603 19.11292724 61.68400328 14.171875 57 C-10.14788608 34.14208248 -34.33238972 18.95245225 -68.34301758 19.17138672 C-71.28970317 19.1873763 -74.23499825 19.1715177 -77.18164062 19.15234375 C-111.47426529 19.11208132 -133.98959373 30.23751662 -159.125 53.5625 C-159.80175781 54.17351562 -160.47851562 54.78453125 -161.17578125 55.4140625 C-179.2388465 72.42737045 -188.9513138 96.5377188 -193.125 120.5625 C-193.33125 121.73941406 -193.5375 122.91632813 -193.75 124.12890625 C-201.46344425 177.21240106 -185.07455225 231.92844093 -153.35546875 274.82299805 C-148.04026737 281.79709065 -142.16689826 288.22288501 -136.125 294.5625 C-135.35929688 295.39265625 -134.59359375 296.2228125 -133.8046875 297.078125 C-117.35588065 314.36331186 -96.396637 325.90043004 -75.38598633 336.68652344 C-66.927159 341.08084451 -58.76847278 345.64881204 -53.125 353.5625 C-53.1875 355.75 -53.1875 355.75 -54.125 357.5625 C-66.7736529 365.99493527 -93.85323603 358.05481977 -107.59570312 355.31103516 C-147.31426478 346.88705134 -183.98425347 328.55782852 -213.75390625 300.7578125 C-215.6882794 298.96684428 -217.65422701 297.25221076 -219.65625 295.5390625 C-224.81341982 291.03906723 -229.65114883 286.22240696 -234.48803711 281.38476562 C-236.05108734 279.82389673 -237.62197365 278.27122112 -239.19335938 276.71875 C-245.6211874 270.32718875 -251.52257693 263.70331891 -257.125 256.5625 C-257.6929126 255.85383789 -258.2608252 255.14517578 -258.84594727 254.41503906 C-289.75982481 215.71894757 -312.07364147 168.76982213 -319.125 119.5625 C-319.30933594 118.27730469 -319.49367188 116.99210938 -319.68359375 115.66796875 C-321.77268882 95.94859093 -321.69297522 73.88097201 -317.125 54.5625 C-316.82698486 53.295271 -316.82698486 53.295271 -316.52294922 52.00244141 C-307.50292669 15.0507536 -285.88750367 -17.62450006 -253.11376953 -37.66748047 C-177.88887845 -81.89103318 -62.74255043 -55.19756019 0 0 Z " fill={stroke} transform="translate(562.125,533.4375)"/>
        </svg>
    );
};

export default EspeenIcon;