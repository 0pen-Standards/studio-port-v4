'use client'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor } from '@/components/motion-primitives/cursor'
import { PlusIcon } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS, EMAIL } from '../dataList'
import GoogleDriveEmbed from '@/components/GoogleDriveEmbed'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const FullWidthImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full">
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />
  </div>
)

const MediaBlock = ({
  children,
  width = 'w-3/5',
  justify = 'justify-center',
}: {
  children: React.ReactNode
  width?: string
  justify?: string
}) => (
  <div className={`flex ${justify}`}>
    <div className={`${width}`}>{children}</div>
  </div>
)

export default function SelectedProjects() {
  const [isHovering, setIsHovering] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect()
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      setIsHovering(isInside)
    }
  }

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="grid grid-cols-1 gap-8 text-zinc-400 md:grid-cols-2">
          <div>
            <div className="bg-[rgba(255,255,255,0.05)]">
              <p>
            With a focus on design, art direction, and strategy, I’ve partnered with brands and organizations on projects ranging from global campaigns to culturally grounded initiatives—always driven by insight, curiosity, and craft. My work spans brand identities, publications and editorial experiences for cultural institutions, digital platforms for startups and artists, and high-impact campaigns and pitch development.
              </p>
              <br></br>

              <p className="mb-5">
                Available to collaborate:{' '}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)]">
            <h3 className="mb-5 text-lg font-medium">Experiences</h3>
            <p>
              2022—Present&nbsp;&nbsp;Freelancer
              <br />
              2017—2022&nbsp;&nbsp;VICE Media
              <br />
              2017—2022&nbsp;&nbsp;The Third Rail Quarterly
              <br />
              2016—2016&nbsp;&nbsp;Walker Art Center
              <br />
              2015—2017&nbsp;&nbsp;DesignWorks
              <br />
              2013—2014&nbsp;&nbsp;Brook Stevens Inc.
            </p>
            <br></br>
            <h3 className="mb-5 text-lg font-medium">Selected Clients</h3>
            <p>
              adidas, American Express, Brut, DSG, Google, Lenovo, Levi's,
              Madden, Merrell, Microsoft, Mini USA, Municipal, National
              Association of Realtors, NBA, NCAA, Nike, Reign, SAP, Sapporo,
              Spotify, The North Face, The Olympics Channel, The Third Rail
            </p>
          </div>
        </div>
      </motion.section>

      <div className="flex w-full items-center justify-center">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1.2, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          springConfig={{
            bounce: 0.001,
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.15,
          }}
          onPositionChange={handlePositionChange}
        >
          <motion.div
            animate={{
              width: isHovering ? 80 : 16,
              height: isHovering ? 32 : 16,
            }}
            className="flex items-center justify-center bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
          >
            <AnimatePresence>
              {isHovering ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full items-center justify-center"
                >
                  <div className="inline-flex items-center text-sm text-white dark:text-black">
                    View <PlusIcon className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Cursor>
        <div ref={targetRef}>
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            {/* <h3 className="mb-3 text-lg font-medium">Blog</h3> */}
            <div className="w-screen px-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {BLOG_POSTS.map((post) => (
                  <Link
                    key={post.uid}
                    className="cursor-none rounded-xl"
                    href={post.link}
                    data-id={post.uid}
                  >
                    <AnimatedBackground
                      enableHover
                      className="h-full w-full bg-[rgba(255,255,255,0.05)]"
                      transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2,
                      }}
                    >
                      <div className="flex h-full flex-col space-y-2">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-800">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover object-top"
                            unoptimized
                          />
                        </div>
                        <h4 className="font-normal text-zinc-400">
                          {post.title}
                        </h4>
                      </div>
                    </AnimatedBackground>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <>
          <MediaBlock>
            <GoogleDriveEmbed fileId="1NGTovHYnt_DTAF40ia-xtC17cu-w7tmj" />
          </MediaBlock>

          <div className="flex flex-wrap justify-center">
            {['olla-image-1.png', 'olla-image-7.png', 'olla-image-3.png'].map(
              (img, i) => (
                <div key={i} className="w-1/3">
                  <Image
                    src={`/project/olla/${img}`}
                    alt={`Olla still ${i + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
          <div className="mx-auto w-1/3">
            <Image
              src={`/project/olla/olla-image-12.png`}
              alt="Olla still 6"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Only Lovers Left Alive Workshop, Lara Mimosa Montes, Identity
            </p>
          </div>

          <MediaBlock>
            <Image
              src="/project/palm-nft/image/palm-nft.gif"
              alt="Palm NFT Studio branding"
              width={1200}
              height={800}
              className="h-auto w-full scroll-pb-0.5 object-cover"
            />
          </MediaBlock>

          <div className="mx-auto w-full">
            <Image
              src="/project/misc/nouhtrangthao-palmnftstudio-brandguide.png"
              alt="palm brandguide"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center pb-5">
            {['nouhtrangthao-palm-IG_5.jpg', 'nouhtrangthao-palm-IG_7.jpg'].map(
              (img, i) => (
                <div key={i} className="w-1/2">
                  <Image
                    src={`/project/misc/${img}`}
                    alt={`palm nft studio socials still ${i + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ),
            )}
            <p className="mt-2 text-center text-sm text-zinc-400">
              Palm NFT Studio, Branding Expansion
            </p>
          </div>
          <div className="mx-auto w-full">
            <Image
              src="/project/vice/VICE-BRAND-UPDATE.png"
              alt="palm brandguide"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              VICE, Branding Toolkit Refresh
            </p>
            <Image
              src="/project/vice/VICE-MEDIA-GROUP-BRAND-UPDATE.png"
              alt="palm brandguide"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              VICE MEIDA GROUP, Branding Toolkit Refresh
            </p>
          </div>
          <MediaBlock>
            <Image
              src="/project/misc/nouhtrangthao-vice-waypoint.jpg"
              alt="vice waypoint"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Waypoint, Poster
            </p>
          </MediaBlock>

          <div className="mx-auto w-full">
            <Image
              src="/project/misc/bullish-toolkit.png"
              alt="palm brandguide"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Bullish Studio, Branding and Marketing Toolkit Guidelines
            </p>
          </div>

          <MediaBlock>
            <Image
              src="/project/misc/nouhtrangthao-adidas-power-02.jpg"
              alt="adidas power"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Adidas, Portraits of Power, Insights Publication
            </p>
          </MediaBlock>

                 <MediaBlock>
            <GoogleDriveEmbed fileId="1uf82CP6ITd3WK90KVyB0bhalC4l0fcXA" />
          </MediaBlock>

                  <MediaBlock>
            <Image
              src="/project/misc/DSG-cover.jpg"
              alt="adidas power"
              width={1200}
              height={800}
              className="h-auto w-full object-cover pt-5"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              DICK’S Sporting Goods in-house apparel brand DSG, Logo Animation

            </p>
          </MediaBlock>

          <MediaBlock>
            <Image
              src="/project/id/I-D-AZLA.webp"
              alt="I-D AZLA"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              iD A—Z of LA, Identity
            </p>
          </MediaBlock>

          <MediaBlock>
            <GoogleDriveEmbed fileId="1RPtwX1plWAtfaTg5OFyuKiKEo2sY372d" />
          </MediaBlock>
          <div className="mx-auto w-full">
            <Image
              src="/project/give-and-go/g-league-give-and-go.png"
              alt="g league give and go"
              width={1200}
              height={800}
              className="h-auto w-full object-cover
              mt-2 pt-5 "
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              G League, Campaign Branding
            </p>
          </div>
          <div className="w-full">
            {['ttr-issue-14-covers.png', 'ttr-issue-14-pages.png'].map(
              (img, i) => (
                <div key={i}>
                  <Image
                    src={`/project/ttr/ttr-14/${img}`}
                    alt={`ttr still ${i + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ),
            )}
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              The Third Rail Issue 14
            </p>
          </div>
          <div className="mx-auto w-full">
            <Image
              src="/project/misc/sapporo-title.jpeg"
              alt="sapporo east meets west"
              width={1200}
              height={800}
              className="h-auto w-full object-cover mt-2 pb-5 "
            />
                   <Image
              src="/project/misc/Sapporo EastMeetsWest_EP1_GIF_1.gif"
              alt="sapporo east meets west 2"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Sapporo East Meets West, Campaign Branding, Social Assets. Campaign <a href="https://tv.booooooom.com/2019/07/26/branded-east-meets-west-koharu-sugawara-matt-vega/" target="_blank" className="underline">Video 🔗</a>
            </p>
          </div>

          <div className="mx-auto w-3/5">
            <Image
              src="/project/misc/nouhtrangthao-vice-offsite.gif"
              alt="jerome"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              VICE Offsite
            </p>
          </div>
          <div className="mx-auto w-full pb-5">
            <Image
              src="/project/misc/nouhtrangthao-the-north-face-hero.png"
              alt="jerome"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <MediaBlock>
            <GoogleDriveEmbed fileId="1MfGoI838gjjjivhLdz8py1mNBm2djxDJ" />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              The North Face—The Invisible Wall, Campaign Branding, Motion
            </p>
          </MediaBlock>

          <div className="w-full">
            {['ttr-issue-13-covers.png', 'ttr-issue-13-pages.png'].map(
              (img, i) => (
                <div key={i}>
                  <Image
                    src={`/project/ttr/ttr-update/${img}`}
                    alt={`ttr still ${i + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ),
            )}
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              The Third Rail Issue 13
            </p>
          </div>

        
          <MediaBlock width="w-1/3">
            <Image
              src="/project/ttr/nouhtrangthao-ttr-carla.gif"
              alt="Nouhtrangthao Carla"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              The Third Rail Issue 12 Promo
            </p>
          </MediaBlock>

          {[
            'ttr-issue-12-covers.png',
            'ttr-issue-12-pages.png',
            'ttr-issue-11-covers.png',
            'ttr-issue-11-pages.png',
          ].map((img, i) => (
            <FullWidthImage
              key={i}
              src={`/project/ttr/${img}`}
              alt={`TTR issue image ${i + 1}`}
            />
            
          ))}
        
                        <div className="mx-auto w-1/3">
            <Image
              src="/project/ttr/issue 10-presscheck.png"
              alt="TTR Material Fair Poster"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
                   <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
               The Third Rail Issue 11
            </p>
          </div>

             <div className="mx-auto w-2/3">
            <Image
              src="/project/ttr/ttr-materialfair-poster.jpg"
              alt="TTR Material Fair Poster"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Material Art Fair Issue 11, Poster
            </p>
          </div>

                <div className="mx-auto w-full">
                          <Image
              src="/project/vice/ces/vice-ces-0.jpg"
              alt="ces 1"
              width={1200}
              height={800}
              className="h-auto w-full object-cover mt-2 pb-5 "
            />
  <div className="grid grid-cols-2 gap-4">
    <Image
      src="/project/vice/ces/vice-ces-1.jpg"
      alt="ces 2"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />

    <Image
      src="/project/vice/ces/vice-ces-2.jpg"
      alt="ces 3"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />

    {/* Optional placeholders or additional content */}
      <Image
      src="/project/vice/ces/vice-ces-4.jpg"
      alt="ces 4"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />

    <Image
      src="/project/vice/ces/vice-ces-5.jpg"
      alt="ces 5"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />
  </div>

  <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
    VICE CES Suite, Over 100 print assets, Print Production
  </p>
</div>

          <MediaBlock>
            <Image
              src="/project/ttr/ttr-auction-guide.jpg"
              alt="TTR Auction Guide"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              The Third Rail Auction, Identity, Publication
            </p>
          </MediaBlock>
                    <div className="mx-auto w-2/3">
            <Image
              src="/project/misc/nouhtrangthao-the_rodina.jpg"
              alt="TTR Material Fair Poster"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              MCAD Visiting Artist Lecture Series, Poster
            </p>
          </div>

       

          <div className="mx-auto w-1/3">
            <Image
              src="/project/misc/nouhtrangthao-chair.png"
              alt="chair"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Chairs, Poster
            </p>
          </div>
          <div className="mx-auto w-full">
            <Image
              src="/project/misc/nouhtrangthao-inreview_wordmark.png"
              alt="sapporo east meets west"
              width={1200}
              height={800}
              className="h-auto w-full object-cover invert"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Inreview, Identity
            </p>
          </div>
          <div className="mx-auto w-3/5">
            <Image
              src="/project/misc/nouhtrangthao-jerome.png"
              alt="jerome"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Jerome Foundation Fellowships, Exhibition
            </p>
          </div>
                <div className="mx-auto w-full">
  <div className="grid grid-cols-2 gap-4">
    <Image
      src="/project/misc/nouhtrangthao-beta-mock.jpg"
      alt="beta-1"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />

    <Image
      src="/project/misc/nouhtrangthao-betaspread.jpg"
      alt="beta-2"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />

    {/* Optional placeholders or additional content */}
      <Image
      src="/project/misc/nouhtrangthao-betaspread2.jpg"
      alt="beta-1"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />

    <Image
      src="/project/misc/nouhtrangthao-betaspread3.jpg"
      alt="beta-2"
      width={1200}
      height={800}
      className="h-auto w-full object-cover"
    />
  </div>

  <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
    BETA v.1, Publication
  </p>
</div>
        </>
      </motion.section>
    </motion.main>
  )
}
