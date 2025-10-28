'use client'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor } from '@/components/motion-primitives/cursor'
import { PlusIcon } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS, EMAIL } from '../data'

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
      className="space-y-24 overflow-hidden"
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
              <p>With a focus in design, art direction,
            and strategy, partnered with brands and organizations on projects that range from global campaigns and culturally grounded initiatives alike—always driven by insight, curiosity, and craft. My work includes launching brands and products for tech and
            retail companies, designing publications and editorial experiences
            with cultural institutions, developing digital platforms for
            startups and artists, and creating campaigns and pitches that
            engage audiences while delivering measurable impact for
            stakeholders.</p><br></br>
            

            <p className="mb-5">
            Available to collaborate:{' '}
            <a className="underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)]">
            <h3 className="mb-5 text-lg font-medium">Expereinces</h3>
            <p>
              2022—Present&nbsp;&nbsp;Open Standards
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
                    More <PlusIcon className="ml-1 h-4 w-4" />
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
            <video
              className="h-auto w-full object-contain"
              controls
              controlsList="nodownload noremoteplayback"
              poster="/project/olla/olla-image-11.png"
              preload="auto"
            >
              <source src="/project/olla/OLLA-video-01.mp4" type="video/mp4" />
            </video>
          </MediaBlock>

          <div className="flex flex-wrap justify-center pb-5">
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
            <p className="mt-2 text-center text-sm text-zinc-400">
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
              Palm NFT Studio Socials, Branding
            </p>
          </div>
                <MediaBlock>
            <Image
              src="/project/misc/nouhtrangthao-vice-waypoint.jpg"
              alt="I-D AZLA"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Waypoint, Poster
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
            <video
              className="h-auto w-full object-contain"
              controls
              controlsList="nodownload noremoteplayback"
              poster="/project/give-and-go/g-league-give-and-go-poster.png"
              preload="auto"
            >
              <source
                src="/project/give-and-go/g-league-give-and-go.mp4"
                type="video/mp4"
              />
            </video>
          </MediaBlock>
          <div className="mx-auto w-full">
            <Image
              src="/project/give-and-go/g-league-give-and-go.png"
              alt="g league give and go"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
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
              className="h-auto w-full object-cover"
            />
            <p className="mt-2 pb-5 text-center text-sm text-zinc-400">
              Sapporo East Meets West, Campaign Branding
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
            <video
              className="h-auto w-full object-contain"
              controls
              controlsList="nodownload noremoteplayback"
              poster="/project/misc/nouhtrangthao-the-north-face-poster.png"
              preload="auto"
            >
              <source
                src="/project/misc/nouhtrangthao-the-north-face-5.mp4"
                type="video/mp4"
              />
            </video>
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

          <div className="mx-auto w-1/3">
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
        </>
      </motion.section>
    </motion.main>
    
  )
}
