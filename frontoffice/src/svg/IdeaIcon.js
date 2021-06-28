import React from 'react';

const IdeaIcon = ({className}) => {
    return (
        <svg className={className} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.1572 46.2614L25.4562 45.4863C25.6242 45.3861 25.7654 45.2466 25.8677 45.08C27.6817 42.125 27.884 39.1736 26.4227 36.9824C25.3739 35.4097 23.6143 34.5001 21.8079 34.5549C20.0149 32.8986 17.8968 31.9378 15.6493 31.7678C13.4472 31.6018 11.2478 32.2166 9.45585 33.5006C7.75896 34.7161 6.54403 36.4619 6.03483 38.4166C5.4732 40.5721 5.77084 42.8961 6.89532 45.1373C7.0146 45.375 7.20871 45.5668 7.44787 45.6832L8.78014 46.3315V47.0462C8.78014 48.8177 9.38392 50.4498 10.3943 51.7513C7.38829 53.7673 5.57031 57.117 5.57031 60.7894C5.57031 61.4581 6.11245 62.0003 6.78125 62.0003H11.02C11.6888 62.0003 12.231 61.4581 12.231 60.7894C12.231 60.1207 11.6888 59.5785 11.02 59.5785H8.07792C8.4435 57.0223 9.95609 54.775 12.2306 53.457C13.4466 54.2635 14.9032 54.7348 16.4686 54.7348C18.0336 54.7348 19.4902 54.2637 20.7061 53.4574C22.9795 54.7755 24.493 57.0246 24.8591 59.5785H21.9183C21.2495 59.5785 20.7074 60.1207 20.7074 60.7894C20.7074 61.4581 21.2495 62.0003 21.9183 62.0003H26.1561C26.8249 62.0003 27.3671 61.4581 27.3671 60.7894C27.3671 57.1215 25.5479 53.7687 22.5428 51.7517C23.5535 50.4502 24.1574 48.8178 24.1574 47.0462V46.2614H24.1572ZM10.8661 35.4692C13.3347 33.7011 17.2714 33.3833 20.5015 36.6604C20.7754 36.9382 21.1667 37.0671 21.5523 37.0063C22.621 36.8385 23.769 37.3683 24.4078 38.3259C25.2418 39.5764 25.1306 41.3494 24.1205 43.2559C24.0426 42.9402 23.8406 42.664 23.5518 42.4972L23.3951 42.4071C22.3705 41.8198 21.6303 41.3956 21.4395 39.8362C21.3833 39.3765 21.0698 38.9891 20.6321 38.8384C20.1942 38.6875 19.7087 38.7996 19.3813 39.1269C17.5203 40.9879 12.4805 42.3351 9.99108 42.3351C9.35522 42.3351 8.83488 42.8255 8.78511 43.4485C7.254 39.7766 8.89857 36.8788 10.8661 35.4692ZM11.2019 47.0461V44.6911C13.7144 44.44 17.1946 43.4827 19.5718 42.0131C20.1318 43.1537 20.9924 43.7911 21.7354 44.2422V47.0461C21.7354 49.9502 19.3727 52.3128 16.4686 52.3128C13.5646 52.3128 11.2019 49.9502 11.2019 47.0461Z" fill="white"/>
            <path d="M55.2179 55.7913V41.4276C55.2179 36.0864 50.8725 31.741 45.5313 31.741C40.1901 31.741 35.8446 36.0864 35.8446 41.4276V55.7886C35.0614 57.3029 34.6328 59.0079 34.6328 60.7892C34.6328 61.4579 35.1749 62.0001 35.8438 62.0001H55.2188C55.8876 62.0001 56.4297 61.4579 56.4297 60.7892C56.4297 59.0103 56.0012 57.3058 55.2179 55.7913ZM40.2645 47.046V44.6936C42.4325 44.4598 44.1956 43.578 45.5313 42.0605C46.8669 43.578 48.6301 44.4598 50.798 44.6936V47.046C50.798 49.9501 48.4353 52.3127 45.5313 52.3127C42.6272 52.3127 40.2645 49.9501 40.2645 47.046ZM51.6054 51.7515C52.1142 51.0963 52.519 50.3574 52.796 49.5588V52.6743C52.4236 52.3424 52.0261 52.0339 51.6054 51.7515ZM45.5313 34.1628C49.537 34.1628 52.796 37.4218 52.796 41.4276V42.6268C52.5843 42.4453 52.3097 42.335 52.0089 42.335C49.47 42.335 47.7449 41.3953 46.5799 39.3777C46.3637 39.0031 45.9639 38.7723 45.5313 38.7723C45.0986 38.7723 44.6989 39.0031 44.4826 39.3777C43.3177 41.3953 41.5926 42.335 39.0536 42.335C38.7528 42.335 38.4783 42.4453 38.2665 42.6268V41.4276C38.2665 37.4218 41.5255 34.1628 45.5313 34.1628ZM39.4568 51.7511C39.0361 52.0333 38.6388 52.3414 38.2665 52.6731V49.5587C38.5434 50.3572 38.9482 51.096 39.4568 51.7511ZM37.1407 59.5782C37.5062 57.0221 39.0188 54.7748 41.2933 53.4568C42.5094 54.2633 43.966 54.7346 45.5314 54.7346C47.0964 54.7346 48.5529 54.2634 49.7688 53.4572C52.0422 54.7753 53.5558 57.0244 53.9219 59.5782H37.1407Z" fill="white"/>
            <path d="M16.4696 59.5781H16.4688C15.8 59.5781 15.2583 60.1204 15.2583 60.7891C15.2583 61.4577 15.8008 62 16.4696 62C17.1384 62 17.6805 61.4577 17.6805 60.7891C17.6805 60.1204 17.1384 59.5781 16.4696 59.5781Z" fill="white"/>
            <path d="M35.9091 29.8483V26.2776C39.0786 24.5081 41.0868 21.1303 41.0868 17.4647C41.0868 11.9025 36.5618 7.37744 30.9997 7.37744C25.4376 7.37744 20.9126 11.9025 20.9126 17.4647C20.9126 21.1303 22.9208 24.5081 26.0903 26.2776V29.8483C26.0903 32.1474 27.9609 34.0181 30.2599 34.0181H31.7395C34.0386 34.0181 35.9091 32.1475 35.9091 29.8483ZM23.3344 17.4647C23.3344 13.238 26.7729 9.79932 30.9996 9.79932C35.2262 9.79932 38.6648 13.2379 38.6648 17.4647C38.6648 20.4519 36.9094 23.1879 34.1928 24.4348C33.7627 24.6323 33.4871 25.0622 33.4871 25.5354V26.544H28.5121V25.5354C28.5121 25.0622 28.2365 24.6323 27.8063 24.4348C25.0898 23.1878 23.3344 20.4519 23.3344 17.4647ZM31.7395 31.5962H30.2599C29.2963 31.5962 28.5122 30.8121 28.5122 29.8483V28.9658H33.4872V29.8483C33.4872 30.8121 32.7031 31.5962 31.7395 31.5962Z" fill="white"/>
            <path d="M31 4.95528C31.6688 4.95528 32.2109 4.41302 32.2109 3.74434V1.21094C32.2109 0.542258 31.6688 0 31 0C30.3312 0 29.7891 0.542258 29.7891 1.21094V3.74434C29.7891 4.41302 30.3312 4.95528 31 4.95528Z" fill="white"/>
            <path d="M20.442 8.61928C20.6785 8.85565 20.9884 8.97396 21.2983 8.97396C21.6081 8.97396 21.9181 8.85565 22.1545 8.61928C22.6274 8.1464 22.6274 7.37964 22.1545 6.90665L20.3632 5.1153C19.8903 4.64255 19.1235 4.64255 18.6506 5.1153C18.1777 5.58818 18.1777 6.35494 18.6506 6.82793L20.442 8.61928Z" fill="white"/>
            <path d="M14.7466 18.6755H17.28C17.9488 18.6755 18.4909 18.1333 18.4909 17.4646C18.4909 16.7959 17.9488 16.2537 17.28 16.2537H14.7466C14.0778 16.2537 13.5356 16.7959 13.5356 17.4646C13.5356 18.1333 14.0778 18.6755 14.7466 18.6755Z" fill="white"/>
            <path d="M18.6506 29.8138C18.8871 30.0502 19.1969 30.1685 19.5068 30.1685C19.8167 30.1685 20.1267 30.0502 20.3631 29.8138L22.1544 28.0225C22.6273 27.5496 22.6273 26.7829 22.1544 26.3099C21.6815 25.8371 20.9148 25.8371 20.4418 26.3099L18.6504 28.1012C18.1777 28.5742 18.1777 29.341 18.6506 29.8138Z" fill="white"/>
            <path d="M41.558 26.3099C41.0851 25.8371 40.3184 25.8371 39.8454 26.3099C39.3725 26.7828 39.3725 27.5495 39.8454 28.0225L41.6367 29.8139C41.8732 30.0502 42.1831 30.1685 42.493 30.1685C42.8029 30.1685 43.1129 30.0502 43.3492 29.8139C43.8221 29.341 43.8221 28.5742 43.3492 28.1012L41.558 26.3099Z" fill="white"/>
            <path d="M44.7202 18.6755H47.2536C47.9224 18.6755 48.4646 18.1333 48.4646 17.4646C48.4646 16.7959 47.9224 16.2537 47.2536 16.2537H44.7202C44.0514 16.2537 43.5093 16.7959 43.5093 17.4646C43.5093 18.1333 44.0514 18.6755 44.7202 18.6755Z" fill="white"/>
            <path d="M40.7017 8.97371C41.0116 8.97371 41.3216 8.8554 41.558 8.61903L43.3493 6.82769C43.8222 6.35482 43.8222 5.58805 43.3493 5.11506C42.8765 4.64231 42.1097 4.64231 41.6367 5.11506L39.8454 6.9064C39.3725 7.37927 39.3725 8.14604 39.8454 8.61903C40.082 8.85553 40.3919 8.97371 40.7017 8.97371Z" fill="white"/>
        </svg>
    );
};

export default IdeaIcon;