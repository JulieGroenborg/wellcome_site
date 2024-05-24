import HeaderTwo from "./components/global/HeaderTwo";
import LinkBtn from "./components/global/LinkBtn";
import Footer from "./components/global/Footer";
import MedlemsSection from "./components/landingpage/MedlemsSection";
import styles from "./landingpage.module.scss";
import Header from "./components/global/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        {/* ________________________Hero Section______________ */}
        <article className={`${styles.hero_section}`}>
          <section className={styles.hero_text}>
            <h1>
              Ekslusiv
              <br /> <span className={styles.italic_h1}>fitness og spa</span>
              <br /> i hjertet af Hellerup
            </h1>
            <div className={styles.btn}>
              <LinkBtn href="/" text="Bliv medlem" variant="primary" />
              <LinkBtn href="/" text="book hold" variant="tertiary_light" />
            </div>
          </section>
        </article>
        {/* ________________________Info section______________ */}
        <article className={styles.info_section}>
          <div className={styles.text_box}>
            <h2>Om Wellcome</h2>
            <p className={styles.paragraph}>
              Siden 2005 har Wellcome tilbudt luksuriøs træning og velvære på
              første sal af Waterfront Shoppingcenter i Hellerup. Med
              state-of-the-art udstyr, ugentlige hold og et dedikeret team af
              instruktører og behandlere, er vi dit frirum til træning,
              afslapning, spaoplevelser og netværk med andre medlemmer.
              Velkommen til Wellcome!
            </p>
          </div>
          <div className={styles.info_box}>
            <div className={styles.box1}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1146_3501)">
                  <path
                    d="M79.3707 68.5243H71.9926V25.072C71.9926 23.1091 70.8747 21.5031 68.8625 21.5031H52.094V3.56897C52.094 1.60604 50.4842 0 48.472 0H22.1344C20.1669 0 18.5571 1.60604 18.5571 3.56897V11.153H12.118C10.1505 11.153 8.54074 12.7591 8.54074 14.722V68.5243H1.20733C0.536591 68.5243 0 69.0596 0 69.7288C0 70.398 0.536591 70.9333 1.20733 70.9333H79.4154C80.0415 70.9333 80.5333 70.3534 80.5333 69.7288C80.4886 69.1042 79.952 68.5243 79.3707 68.5243ZM24.9068 68.5243H19.3173V58.5758H24.9068V68.5243ZM33.2686 68.5243H27.4108V57.3266C27.4108 56.7021 26.8743 56.2113 26.2929 56.2113H18.0652C17.4392 56.2113 16.9473 56.7467 16.9473 57.3266V68.5689H10.9107V14.4543C10.9107 13.7405 11.492 13.1606 12.2522 13.1606H32.0166C32.732 13.1606 33.3581 13.7405 33.3581 14.4543L33.2686 68.5243ZM31.9272 11.153H20.5246V3.70281C20.5246 2.98901 21.1059 2.40906 21.8661 2.40906H48.8298C49.5452 2.40906 50.1712 2.98901 50.1712 3.70281V12.3576H34.5207C33.8499 11.6438 32.9109 11.153 31.9272 11.153ZM50.0818 14.3651V20.7447H35.3256V14.3651H50.0818ZM43.285 68.9258H35.3256V40.6417H43.3297C43.285 40.6417 43.285 68.9258 43.285 68.9258ZM43.285 38.2772H35.3256V31.8977H43.3297C43.285 31.8977 43.285 38.2772 43.285 38.2772ZM43.285 24.9382V29.4886H35.3256V23.1091H43.8216C43.5086 23.6444 43.285 24.269 43.285 24.9382ZM70.0698 68.5243H45.3419V24.8044C45.3419 24.0906 45.9232 23.5106 46.6834 23.5106H68.8178C69.5332 23.5106 70.1592 24.0906 70.1592 24.8044L70.0698 68.5243Z"
                    fill="white"
                  />
                  <path
                    d="M24.2361 17.9346H19.9434C19.5857 17.9346 19.3174 18.2022 19.3174 18.5591V22.8419C19.3174 23.1988 19.5857 23.4665 19.9434 23.4665H24.2808C24.6386 23.4665 24.9069 23.1988 24.9069 22.8419V18.5591C24.9069 18.2469 24.5939 17.9346 24.2361 17.9346Z"
                    fill="white"
                  />
                  <path
                    d="M24.2808 27.0791H19.9434C19.5857 27.0791 19.3174 27.3468 19.3174 27.7037V31.9864C19.3174 32.3433 19.5857 32.611 19.9434 32.611H24.2808C24.6386 32.611 24.9069 32.3433 24.9069 31.9864V27.7037C24.9069 27.3914 24.6386 27.0791 24.2808 27.0791Z"
                    fill="white"
                  />
                  <path
                    d="M24.2808 36.2695H19.9434C19.5857 36.2695 19.3174 36.5372 19.3174 36.8941V41.1769C19.3174 41.5338 19.5857 41.8014 19.9434 41.8014H24.2808C24.6386 41.8014 24.9069 41.5338 24.9069 41.1769V36.8495C24.9069 36.5818 24.6386 36.2695 24.2808 36.2695Z"
                    fill="white"
                  />
                  <path
                    d="M24.2808 45.415H19.9434C19.5857 45.415 19.3174 45.6827 19.3174 46.0396V50.3224C19.3174 50.6793 19.5857 50.9469 19.9434 50.9469H24.2808C24.6386 50.9469 24.9069 50.6793 24.9069 50.3224V46.0396C24.9069 45.7273 24.6386 45.415 24.2808 45.415Z"
                    fill="white"
                  />
                  <path
                    d="M64.6593 29.0869H60.3218C59.9641 29.0869 59.6958 29.3546 59.6958 29.7115V33.9943C59.6958 34.3511 59.9641 34.6188 60.3218 34.6188H64.6593C65.017 34.6188 65.2853 34.3511 65.2853 33.9943V29.6669C65.33 29.3546 65.017 29.0869 64.6593 29.0869Z"
                    fill="white"
                  />
                  <path
                    d="M55.4478 29.0869H51.1104C50.7527 29.0869 50.4844 29.3546 50.4844 29.7115V33.9943C50.4844 34.3511 50.7527 34.6188 51.1104 34.6188H55.4478C55.8056 34.6188 56.0739 34.3511 56.0739 33.9943V29.7115C56.1186 29.3546 55.8056 29.0869 55.4478 29.0869Z"
                    fill="white"
                  />
                  <path
                    d="M64.6593 38.6338H60.3218C59.9641 38.6338 59.6958 38.9015 59.6958 39.2584V43.5411C59.6958 43.898 59.9641 44.1657 60.3218 44.1657H64.6593C65.017 44.1657 65.2853 43.898 65.2853 43.5411V39.2137C65.33 38.9907 65.017 38.6338 64.6593 38.6338Z"
                    fill="white"
                  />
                  <path
                    d="M55.4478 38.6338H51.1104C50.7527 38.6338 50.4844 38.9015 50.4844 39.2584V43.5411C50.4844 43.898 50.7527 44.1657 51.1104 44.1657H55.4478C55.8056 44.1657 56.0739 43.898 56.0739 43.5411V39.2137C56.1186 38.9907 55.8056 38.6338 55.4478 38.6338Z"
                    fill="white"
                  />
                  <path
                    d="M64.6593 48.627H60.3218C59.9641 48.627 59.6958 48.8946 59.6958 49.2515V53.5343C59.6958 53.8912 59.9641 54.1589 60.3218 54.1589H64.6593C65.017 54.1589 65.2853 53.8912 65.2853 53.5343V49.2069C65.33 48.8946 65.017 48.627 64.6593 48.627Z"
                    fill="white"
                  />
                  <path
                    d="M55.4478 48.627H51.1104C50.7527 48.627 50.4844 48.8946 50.4844 49.2515V53.5343C50.4844 53.8912 50.7527 54.1589 51.1104 54.1589H55.4478C55.8056 54.1589 56.0739 53.8912 56.0739 53.5343V49.2515C56.1186 48.8946 55.8056 48.627 55.4478 48.627Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1146_3501">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>4000+ lyse kvadratmeter</p>
            </div>
            <div className={styles.box2}>
              <svg
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.2098 23.3744C66.8386 14.8128 62.1758 8.51006 53.9507 6.19888C44.9919 3.73009 35.9284 3.57249 26.9172 6.04128C16.6489 8.93006 11.7765 17.754 14.7105 27.944C15.3917 30.3075 16.3345 32.6187 17.6445 34.6671C19.2161 37.1359 19.3733 39.0267 17.7493 41.7055C12.2481 50.7922 13.2437 60.0366 18.7973 68.8605C21.312 72.8525 24.9792 75.2685 29.642 76.2665H51.3839C63.4862 73.7453 70.1918 55.5718 63.5386 43.6491C61.443 39.9199 61.1286 37.1359 63.4338 33.3543C65.1098 30.5179 65.9478 26.7888 66.2098 23.3744ZM38.2859 65.3301L29.3272 56.8738L31.7372 54.3526L37.7619 60.0254L49.5499 43.4803L52.3791 45.4763L38.2859 65.3301ZM52.5359 29.5611C51.6975 30.3491 49.7067 30.7167 48.5543 30.3491C42.9487 28.5631 37.4999 28.4583 31.9468 30.3491C29.2748 31.2419 27.3888 30.0863 26.4456 27.5652C25.8168 25.9896 25.5024 24.256 25.2932 23.5208C25.3456 18.6884 27.2316 15.9572 31.1608 15.6948C37.0807 15.3272 43.0535 15.3796 48.9735 15.6424C52.0647 15.7476 54.5266 17.5332 55.2602 20.79C55.8366 24.0988 54.9982 27.25 52.5359 29.5611Z"
                  fill="white"
                />
              </svg>
              <p>100+ instruktører</p>
            </div>
            <div className={styles.box3}>
              <svg
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M74.3378 36.8127H68.5642V29.2158C68.5642 26.9151 66.2634 25.0918 63.9626 25.0918C63.0076 25.0918 62.096 25.3523 61.6619 25.8732V22.7476C61.6619 20.4468 59.7952 18.667 57.4944 18.667C55.1936 18.667 53.4138 20.4468 53.4138 22.7476V36.8127H25.7611V22.8778C25.7611 20.5771 23.9378 18.667 21.637 18.667C19.3363 18.667 17.513 20.5771 17.513 22.8778V26.3073C16.6448 25.7864 15.6029 25.5259 14.6479 25.5259H14.6045C12.3037 25.5259 10.5673 27.3492 10.5673 29.6499V36.8127H5.70526C4.01224 36.8127 2.6665 38.1585 2.6665 39.8515C2.6665 41.5445 4.05565 42.8902 5.70526 42.8902H10.6107V50.7042C10.6107 53.005 12.3471 54.6112 14.6479 54.6112C15.6029 54.6112 16.6448 54.5678 17.513 54.0468V57.129C17.513 59.4298 19.3797 61.2096 21.6805 61.2096C23.9812 61.2096 25.7611 59.4298 25.7611 57.129V42.8902H53.4572V57.0422C53.4572 59.343 55.2805 61.253 57.5812 61.253C59.882 61.253 61.7053 59.343 61.7053 57.0422V53.6127C62.5735 54.1337 63.051 54.1771 64.006 54.1771H64.0494C66.3502 54.1771 68.651 52.5709 68.651 50.2267V42.8902H74.2944C75.9874 42.8902 77.3332 41.5445 77.3332 39.8515C77.3332 38.1585 76.0309 36.8127 74.3378 36.8127ZM21.3766 61.1662C21.3332 61.1662 21.3332 61.1662 21.3766 61.1662V61.1662ZM57.2774 18.667C57.3208 18.667 57.3208 18.667 57.2774 18.667V18.667Z"
                  fill="white"
                />
              </svg>
              <p>12+ personlige trænere</p>
            </div>
            <div className={styles.box4}>
              <svg
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.4456 70.0651L62.6141 69.0041L61.4129 67.9431L60.3041 67.0204L57.9018 65.5904L56.7007 64.9445L55.6381 64.6677L54.2984 64.2064L53.2358 64.068L51.8037 63.7912H51.5727L51.2031 63.5144L50.3715 62.8225L49.9557 62.315L49.6785 61.254L49.1704 60.3314L48.9394 59.7317L48.5698 59.0858L48.3388 57.9325L47.9692 57.2867L47.461 56.3179L47.23 55.1185L47.0914 53.1349V51.6586L47.3224 50.8744L47.5996 49.0292L48.0154 47.7375L48.616 44.8773L49.1242 43.4011L49.2628 41.9249L49.6785 40.5871L49.7709 38.788L49.8633 37.5885L50.0019 36.6659L50.5563 35.0052L52.0346 32.145L52.7738 30.7149L53.8826 28.3622L54.7141 26.2402L55.3147 23.7491L55.8691 21.7193L56.2387 20.2431L56.3773 19.0437L56.6083 18.121L56.7007 17.4752V17.1062L56.4235 16.5064L55.9153 16.1374H55.5457L54.9913 15.999L53.051 15.2148L51.2955 14.6151L48.154 13.554L45.8903 12.9543L44.6891 12.7237L43.3494 12.2623L42.6102 12.0317L42.1944 11.7549L41.7786 11.6165L41.3628 11.1552L40.8547 10.5093L40.2541 8.47956L39.9769 7.41854L39.4687 6.58817L39.5149 5.98846L39.3763 5.29649L39.1453 4.65065L39.0529 4.51225V4.05094L38.9605 3.68189L38.8219 3.58962L38.9143 3.12831L38.8219 2.66699H38.3138L38.1752 2.94378H37.8056V3.22057L37.7132 3.68189L37.5746 3.77415L37.4822 4.46612L37.3898 5.11196L37.1588 5.48101L36.9278 5.94233L36.7892 7.74146L36.512 8.29504L36.3734 9.21767L36.281 11.2475L36.1886 11.6165L36.0962 11.9856L36.0038 12.2162H35.7267L35.4495 12.5391L34.7103 13.0005L32.539 13.6924L28.9355 14.6612L27.6882 15.1686L25.6092 16.0913L22.8373 17.2445L22.283 17.3829L21.7286 17.6136L21.2204 17.7981L20.8508 18.3978V18.9975L20.9894 19.9202L21.128 20.4276L21.4052 21.8577L22.0058 24.0259L23.2069 27.2551L24.4543 29.9768L25.0549 31.1301L26.1636 32.9293L27.7806 35.4204L28.5197 36.8966L29.0279 37.7269L29.4437 38.788L29.8133 40.6794L30.0905 41.7404L30.2291 42.4324L30.5987 43.4934L31.2916 45.3848L31.6612 46.8148L32.077 48.0143L32.3542 48.7062L32.77 49.9979L33.001 51.7048L33.2782 53.3655L33.3706 54.8417L33.2782 55.8105L32.6776 56.7793L32.308 57.7019L32.0308 58.3477L31.7998 60.193V60.562L31.5226 60.7927L31.0144 61.5769L30.7834 62.1766L30.8758 62.4534L30.4601 62.7302L30.3215 62.9609V63.0993L29.4899 63.007L28.5659 63.2838L28.3349 63.376L28.0577 63.4683L27.8268 63.6067L27.7344 63.8835L27.8268 64.0219L27.9192 64.1142V64.2526L27.411 64.3909L26.1636 64.6216L24.2233 65.2674L20.8508 66.6975L19.1415 67.8969L17.2474 69.6038L16.2772 70.5726L16 71.1723V71.8181L16.0924 72.464L16.3234 73.0637L16.4158 73.7556L16.5544 74.5399L17.0626 75.0473L17.5707 75.3241H17.9865L18.8181 75.8316L19.3725 76.0622L20.2964 76.6619L20.9894 76.8003H25.1935L26.9028 76.5235L29.3051 75.8316L31.7536 75.0473L34.2021 74.2631L36.6044 73.7556L38.6371 73.4789L41.0857 72.8791L41.8248 72.7407H43.1184L43.6266 72.5101L44.0423 72.6023L44.7815 72.6946L45.6131 72.9253L46.1213 73.0175L48.385 74.0786L49.3551 74.5399L51.6651 75.4625L52.9124 75.8316L54.3446 76.2929H55.2685L55.5457 76.1545L56.3773 76.4313L56.9317 76.5235L57.8556 76.6158L59.6574 76.339L60.5813 76.0622L61.3205 75.8316L61.8287 75.7393L62.6602 75.2318L63.1684 74.586L63.538 73.8018L63.8152 73.2021L63.9076 72.6023L64 71.2645L63.4456 70.0651ZM38.2676 7.04949L38.36 6.81883L38.4062 6.26525L38.6371 6.40364V8.06438L38.5448 7.83372L38.3138 7.37241L38.2676 7.04949ZM45.4283 32.3296L45.1973 32.7909L44.9663 33.0215L43.9038 32.9293L43.5342 32.7909L43.026 32.5141L42.4716 31.8682L42.333 31.4069L42.4716 30.5766L42.7026 29.4233L42.795 28.5929L43.1646 27.9471L43.3032 27.1628L43.3956 26.3786L43.488 26.2863H43.7652L44.0423 26.1941L44.2733 25.9173V25.4098L44.4119 25.1792L44.5505 24.8101L44.6429 24.3488L44.8739 23.5646V22.9187L44.7815 22.5497H44.5043L44.2733 22.6881V20.4276L44.1809 19.5973L43.5804 18.6746L42.8412 17.7059L41.64 16.8755L40.4389 16.5064L39.2377 16.4142L38.4524 16.5987L37.3436 16.8294L36.4658 17.4291L35.7729 18.0749L34.8489 19.0437L34.5717 19.6895L34.4331 21.1657V21.6732L34.3869 22.319L34.4793 23.1494V23.2878H34.3869L34.1559 23.4262L34.0635 23.6568L34.1559 24.2565L34.2945 24.5333L34.3869 25.133L34.6641 25.5021L34.8951 25.8711V26.2402L35.0337 26.6092H35.3109L35.5419 26.517L35.7729 27.8087L36.1424 28.3161L36.3734 28.5468L36.4658 29.3771L36.5582 31.1763V32.0066L36.281 32.6525L35.8653 33.0215L35.5419 33.2522C35.5419 33.2522 35.0337 33.3444 34.9875 33.3906C34.8951 33.3906 34.5717 33.2983 34.5717 33.2983H33.9249L33.6939 32.7909L33.3243 32.145L32.8162 31.4531L32.077 30.6688L31.2916 29.9307L30.4601 29.0081L29.7209 28.3161L29.2127 27.3473L28.5197 25.6405L27.5958 24.072L26.5332 22.2729L26.025 21.4425V21.2119L26.3022 20.8428C26.3022 20.8428 27.2724 20.0124 27.2724 19.9202C27.3648 19.8279 28.7507 18.8592 28.8431 18.7669C28.9355 18.7669 30.0443 18.1672 30.0443 18.1672L31.1068 17.4752L33.2782 16.1835L34.8489 15.3993L36.3272 14.7996C36.3272 14.7996 36.9278 14.5228 37.0202 14.5228C37.1126 14.5228 37.5746 14.246 37.5746 14.246L38.1752 13.7847L38.5448 13.5079L38.9143 13.0005H39.0067L39.1453 13.2311L39.4225 13.3234H40.3465L40.5775 13.6924L41.409 13.9692L42.3792 14.3383L44.2733 15.1225L45.3359 15.4916L48.1078 16.9216L50.0019 17.8904L51.2031 18.6746L51.5727 19.0437L52.0808 19.5511L52.2194 19.9202V20.2892L52.0808 20.7967L51.8037 21.4425L51.3879 22.3651L50.6949 23.8414L49.8633 26.1941L49.1242 27.7164L48.7546 28.2238L47.6458 29.5617L46.5371 31.0379L45.4283 32.3296Z"
                  fill="white"
                />
              </svg>
              <p>150+ forskellige hold</p>
            </div>
          </div>
        </article>
        {/* ________________________Medlemsskabs Section______________ */}
        <MedlemsSection />
        {/* ________________________Event/Nyheder______________ */}
        <article className={styles.event_section}>
          <section className={styles.eventlink}>
            <div className={styles.infobox}>
              <p className={styles.date}>22. maj 2024</p>
              <h3 className={styles.h3event}>
                <span className={styles.bold}>Boost dit løb:</span> Motivation,
                <br />
                teknik og ernæring
              </h3>
            </div>
          </section>

          <div className={styles.textbox}>
            <h2>Events & Nyheder</h2>
            <p className={styles.eventparagraph}>
              I Wellcome byder vi på forskellige, spændende events for vores
              medlemmer. Under eventsiden kan du holde dig opdateret på, hvad
              der sker i Wellcome. Forløb, foredrag, koncerter og meget mere.
            </p>
            <LinkBtn
              margin={true}
              variant="tertiary_dark"
              href="*"
              text="Se Events"
            ></LinkBtn>
          </div>
        </article>
        {/* ________________________Proevetime Section______________ */}
        <article className={styles.proevetime_section}>
          <HeaderTwo type="fitness" title="Brug for en prøvetime?"></HeaderTwo>
          <p className={styles.proevetime_paragraph}>
            Er du interesseret i at lære Wellcome bedre at kende? Find ud af om
            Wellcome er et sted for dig ved at booke en prøvetime til et af
            vores populære hold eller få mulighed for at afprøve vores fitness
            faciliteter.
          </p>
          <div className={styles.align_btns}>
            <LinkBtn
              margin={true}
              variant="secondary"
              href="*"
              text="Kontakt"
            ></LinkBtn>
            <LinkBtn
              margin={true}
              variant="tertiary_dark"
              href="*"
              text="Se holdplan"
            ></LinkBtn>
          </div>
        </article>
        {/* _________________________ Spa Section ____________________ */}
        <article className={styles.spa_section}>
          <div className={styles.spa_info}>
            <HeaderTwo
              type="spa"
              white={true}
              title="  Er det tid til selvforkælelse?"
            ></HeaderTwo>

            <p className={styles.spa_text}>
              Trænger du til at passe lidt på dig selv? Eller ønsker du en
              romantisk oplevelse med din udkårne? Hos Wellcome har vi et kæmpe
              udvalg af luksuriøse behandlinger. Se vores behandlinger og læse
              mere om vores Amazing Space Spa.
            </p>
            <LinkBtn
              margin={true}
              variant="spa"
              href="*"
              text="Se holdplan"
            ></LinkBtn>
          </div>

          <div className={styles.spa_image}></div>
        </article>
      </main>
      <Footer />
    </>
  );
}
