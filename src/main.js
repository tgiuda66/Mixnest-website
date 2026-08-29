import './style.css'
import heroMacImage from './assets/mixnest_macapp_v2.png'
import heroPhoneImage from './assets/mixnest_iosapp_8.png'
import showcaseMacbookImage from './assets/mixnest_macapp_macbook.png'
import showcasePhoneImage from './assets/mixnest_iosapp_4.png'
import benefitCommentsIcon from './assets/message-square-text.svg'
import benefitVersionIcon from './assets/chart-no-axes-gantt.svg'
import engineerDropsMixVideo from './assets/recordings/01-engineer-drops-mix.mp4'
import artistOpensSongVideo from './assets/recordings/02-artist-push-opens-song-web.mp4'
import artistFeedbackVideo from './assets/recordings/03-artist-feedback-web.mp4'
import engineerChecksFeedbackVideo from './assets/recordings/04-engineer-checks-timenotes.mp4'
import engineerUploadsMasterVideo from './assets/recordings/05-engineer-uploads-master.mp4'
import artistApprovesMasterVideo from './assets/recordings/06-artist-approves-master-web.mp4'
import engineerReleasesDownloadVideo from './assets/recordings/07-engineer-releases-download.mp4'
import artistDownloadLinkVideo from './assets/recordings/08-artist-download-link-web.mp4'
import {
  createIcons,
  Download,
  MailCheck,
  MessageSquareText,
  ShieldCheck,
  TextAlignJustify,
  UploadCloud,
  UserRound
} from 'lucide'

document.querySelector('#app').innerHTML = `

  <header class="site-header">

    <div class="container">
      <nav class="navbar">

        <a class="brand" href="#top">
          <img src="/brand_mixnest.png" alt="MixNest Logo" />
          <span>MixNest</span>
        </a>

        <div class="nav-links">
          <a href="#product-flow">Product flow</a>
          <a href="#how-it-works">How it works</a>
          <a href="#waitlist">Join waitlist</a>
        </div>

        <div class="nav-actions">
          
          <button class="menu-button" aria-label="Open-Menu">
            <i data-lucide="text-align-justify"></i>
          </button>

        </div>
      
      </nav>

      <div class="mobile-menu">
        <a href="#product-flow" class="mobile-menu-item">Product flow</a>
        <a href="#how-it-works" class="mobile-menu-item">How it works</a>
        <a href="#waitlist" class="mobile-menu-item">Join waitlist</a>
        <a href="https://app.mymixnest.com/" class="mobile-menu-item">Log in</a>
        <a href="https://app.mymixnest.com/" class="mobile-menu-item">Sign up</a> 
      </div>

    </div>

  </header>

  <section class="hero" id="top">
    <div class="container">
      <div class="hero-content">
        <div class="hero-copy">
          <p class="hero-eyebrow">Audio review & delivery</p>

          <h1>
            Review, approve and deliver your mix in one place.
          </h1>

          <p class="hero-description">
            MixNest gives engineers and artists one clean workspace
            for feedback, revisions and final delivery. 
          </p>

          <form class="hero-waitlist">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />

            <button type="submit">Join the waitlist</button>
          </form>

        </div>

        <div class="hero-visual">
          <img src="${heroMacImage}" alt="MixNest Mac App" class="hero-mac" />

          <img src="${heroPhoneImage}" alt="MixNest iPhone App" class="hero-iphone" />
        </div>

      </div>
    </div>
  </section>

  <section class="how-it-works" id="how-it-works">
    <div class="container">
      <div class="how-layout">
        <div class="how-copy">
          <p class="section-eyebrow">How it works</p>

          <h2>One simple flow from first bounce to final master.</h2>

          <p class="how-intro">
            MixNest keeps every upload, timestamp note, approval and final download
            in one shared place, so engineers and artists always know what changed
            and what comes next.
          </p>
        </div>

        <div class="how-steps" aria-label="How MixNest works">
          <article class="how-step">
            <span class="step-icon"><i data-lucide="upload-cloud"></i></span>
            <h3>Upload the mix</h3>
            <p>
              Engineers drop new versions into a private workspace. Artists see
              the latest file instantly without searching through chats.
            </p>
          </article>

          <article class="how-step">
            <span class="step-icon"><i data-lucide="message-square-text"></i></span>
            <h3>Collect exact feedback</h3>
            <p>
              Artists listen on mobile, leave notes on the timeline and mark what
              needs changes. The engineer sees every open point clearly.
            </p>
          </article>

          <article class="how-step">
            <span class="step-icon"><i data-lucide="download"></i></span>
            <h3>Deliver the master</h3>
            <p>
              When the master is ready, MixNest sends a secure download link by
              app and email, with the whole project kept organized.
            </p>
          </article>
        </div>

        <div class="how-showcase">
          <div class="showcase-copy">
            <p class="section-eyebrow">Built for both sides</p>
            <h3>Feedback stays connected to the audio.</h3>
            <p>
              The Mac workspace gives engineers a clean view of revisions and open
              notes. The iPhone app lets artists review, comment and receive final
              files wherever they are.
            </p>
          </div>

          <div class="showcase-devices" aria-label="MixNest product preview">
            <img src="${showcaseMacbookImage}" alt="MixNest engineer workspace on MacBook" class="showcase-macbook" />
            <img src="${showcasePhoneImage}" alt="MixNest artist app on iPhone" class="showcase-phone" />
          </div>
        </div>

        <div class="benefit-strip" id="benefits" aria-label="MixNest benefits">
          <div class="benefit-item">
            <i data-lucide="shield-check"></i>
            <span>Private workspaces</span>
          </div>
          <div class="benefit-item">
            <img src="${benefitCommentsIcon}" alt="" class="benefit-custom-icon" />
            <span>Timestamped notes</span>
          </div>
          <div class="benefit-item">
            <img src="${benefitVersionIcon}" alt="" class="benefit-custom-icon" />
            <span>Clear version history</span>
          </div>
          <div class="benefit-item">
            <i data-lucide="mail-check"></i>
            <span>Final delivery links</span>
          </div>
        </div>

        <div class="how-cta" id="waitlist">
          <div>
            <p class="section-eyebrow">Early access</p>
            <h3>Join the waitlist before MixNest opens up.</h3>
          </div>

          <form class="section-waitlist">
            <input type="email" placeholder="Enter your email" aria-label="Email address for waitlist" />
            <button type="submit">Join the waitlist</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="workflow-demo" id="product-flow">
    <div class="container">
      <div class="workflow-scroll">
        <div class="workflow-stage" aria-label="MixNest product flow preview">
          <div class="workflow-heading">
            <p class="section-eyebrow">Product flow</p>
            <h2>Watch the session move from upload to final delivery.</h2>
            <p>
              The engineer works on Mac. The artist reacts on iPhone. MixNest keeps
              every update, note and delivery step connected.
            </p>
          </div>

          <div class="workflow-device workflow-mac-device">
            <div class="workflow-screen">
              <video class="workflow-video active" data-flow-video="0" data-side="engineer" src="${engineerDropsMixVideo}" muted playsinline preload="auto"></video>
              <video class="workflow-video" data-flow-video="2" data-side="engineer" src="${engineerChecksFeedbackVideo}" muted playsinline preload="auto"></video>
              <video class="workflow-video" data-flow-video="3" data-side="engineer" src="${engineerUploadsMasterVideo}" muted playsinline preload="auto"></video>
              <video class="workflow-video" data-flow-video="5" data-side="engineer" src="${engineerReleasesDownloadVideo}" muted playsinline preload="auto"></video>
            </div>
          </div>

          <div class="workflow-device workflow-phone-device">
            <div class="workflow-phone-frame">
              <div class="workflow-phone-notch"></div>
              <video class="workflow-video active" data-flow-video="1" data-side="artist" data-sequence-index="0" src="${artistOpensSongVideo}" muted playsinline preload="auto"></video>
              <video class="workflow-video" data-flow-video="1" data-side="artist" data-sequence-index="1" src="${artistFeedbackVideo}" muted playsinline preload="auto"></video>
              <video class="workflow-video" data-flow-video="4" data-side="artist" src="${artistApprovesMasterVideo}" muted playsinline preload="auto"></video>
              <video class="workflow-video" data-flow-video="6" data-side="artist" src="${artistDownloadLinkVideo}" muted playsinline preload="auto"></video>
            </div>
          </div>

          <div class="workflow-progress" aria-label="MixNest workflow progress">
            <button class="workflow-progress-item active" type="button" data-flow-progress="0">
              <strong>Upload Mix</strong>
            </button>
            <button class="workflow-progress-item" type="button" data-flow-progress="1">
              <strong>Get Feedback</strong>
            </button>
            <button class="workflow-progress-item" type="button" data-flow-progress="2">
              <strong>Review</strong>
            </button>
            <button class="workflow-progress-item" type="button" data-flow-progress="3">
              <strong>Upload Master</strong>
            </button>
            <button class="workflow-progress-item" type="button" data-flow-progress="4">
              <strong>Get Master Approved</strong>
            </button>
            <button class="workflow-progress-item" type="button" data-flow-progress="5">
              <strong>Release Download</strong>
            </button>
            <button class="workflow-progress-item" type="button" data-flow-progress="6">
              <strong>Deliver</strong>
            </button>
          </div>
        </div>

        <div class="workflow-steps" aria-hidden="true">
          <article class="workflow-step active" data-flow-step="0">
            <span>01</span>
            <h3>Engineer uploads the first mix.</h3>
            <p>The project updates instantly and the artist can jump straight into the new version.</p>
          </article>

          <article class="workflow-step" data-flow-step="1">
            <span>02</span>
            <h3>Artist leaves feedback.</h3>
            <p>Feedback is written directly on the timeline, so every comment stays attached to the audio.</p>
          </article>

          <article class="workflow-step" data-flow-step="2">
            <span>03</span>
            <h3>Engineer checks every timestamp.</h3>
            <p>Open notes are visible inside the Mac workspace and can be marked off one by one.</p>
          </article>

          <article class="workflow-step" data-flow-step="3">
            <span>04</span>
            <h3>Engineer uploads the master.</h3>
            <p>The approved master lands in the same private project space.</p>
          </article>

          <article class="workflow-step" data-flow-step="4">
            <span>05</span>
            <h3>The master gets approved.</h3>
            <p>The artist reviews the master on mobile, approves it, and the final handoff is ready.</p>
          </article>

          <article class="workflow-step" data-flow-step="5">
            <span>06</span>
            <h3>Engineer releases the download.</h3>
            <p>The final file is unlocked only when the engineer decides it is ready.</p>
          </article>

          <article class="workflow-step" data-flow-step="6">
            <span>07</span>
            <h3>Final download is delivered.</h3>
            <p>MixNest sends the secure download link through the app and email, with the project kept organized.</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-layout">
        <div class="footer-brand-block">
          <a class="footer-brand" href="#top">
            <img src="/brand_mixnest.png" alt="MixNest Logo" />
            <span>MixNest</span>
          </a>

          <p>
            A focused workspace for audio feedback, revision approval and final
            master delivery.
          </p>
        </div>

        <div class="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#product-flow">Product flow</a>
            <a href="#how-it-works">How it works</a>
            <a href="#waitlist">Join waitlist</a>
          </div>

          <div>
            <h4>Access</h4>
            <a href="https://app.mymixnest.com/">Log in</a>
            <a href="https://app.mymixnest.com/">Sign up</a>
            <a href="#waitlist">Waiting list</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 MixNest. All rights reserved.</span>
        <span>Built for engineers and artists.</span>
      </div>
    </div>
  </footer>

`
createIcons({
  icons: {
    Download,
    MailCheck,
    MessageSquareText,
    ShieldCheck,
    UserRound,
    TextAlignJustify,
    UploadCloud
  }
})

const howSection = document.querySelector('#how-it-works')
const workflowSection = document.querySelector('#product-flow')

if (howSection && workflowSection) {
  howSection.before(workflowSection)
}

const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('.mobile-menu')

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
  })
})

const profileButton = document.querySelector('.icon-button')
const profileLinks = document.querySelector('.profile-links')

profileButton?.addEventListener('click', () => {
  profileLinks?.classList.toggle('open')
})

document.querySelectorAll('.hero-waitlist, .section-waitlist').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const input = form.querySelector('input[type="email"]')

    if (input.value.trim()) {
      input.value = ''
      input.placeholder = 'You are on the list'
    }
  })
})

const workflowSteps = Array.from(document.querySelectorAll('.workflow-step'))
const workflowVideos = Array.from(document.querySelectorAll('.workflow-video'))
const workflowProgressItems = Array.from(document.querySelectorAll('.workflow-progress-item'))
let activeWorkflowStep = null
let isWorkflowInView = false
let lastScrollY = window.scrollY
let workflowScrollDirection = 'down'

const getWorkflowInView = () => {
  if (!workflowSection) {
    return false
  }

  const rect = workflowSection.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.78 && rect.bottom > window.innerHeight * 0.22
}

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY
  workflowScrollDirection = currentScrollY >= lastScrollY ? 'down' : 'up'
  lastScrollY = currentScrollY
  isWorkflowInView = getWorkflowInView()

  if (!isWorkflowInView) {
    pauseWorkflowVideos()
  }
}, { passive: true })

const getSequenceIndex = (video) => Number(video.dataset.sequenceIndex ?? 0)
const scrollToWorkflowStep = (step) => {
  workflowSteps[Number(step)]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const advanceWorkflowStep = () => {
  const nextStep = Number(activeWorkflowStep) + 1

  if (isWorkflowInView && Number.isFinite(nextStep) && nextStep < workflowSteps.length) {
    scrollToWorkflowStep(nextStep)
  }
}

const pauseWorkflowVideos = () => {
  workflowVideos.forEach((video) => {
    video.pause()
    video.classList.remove('playing')
  })
}

const setWorkflowStep = (step, options = {}) => {
  const currentStep = Number(step)
  const workflowProgress = document.querySelector('.workflow-progress')
  isWorkflowInView = getWorkflowInView()

  if (!options.force && activeWorkflowStep === currentStep) {
    return
  }

  activeWorkflowStep = currentStep

  if (workflowProgress) {
    workflowProgress.dataset.activeStep = String(step)
  }

  workflowSteps.forEach((item) => {
    item.classList.toggle('active', item.dataset.flowStep === String(step))
  })

  workflowProgressItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.flowProgress === String(step))
  })

  const visibleStepBySide = ['engineer', 'artist'].reduce((visibleSteps, side) => {
    const sideVideos = workflowVideos
      .filter((video) => video.dataset.side === side)
      .map((video) => Number(video.dataset.flowVideo))
      .sort((a, b) => a - b)

    visibleSteps[side] = sideVideos.filter((videoStep) => videoStep <= currentStep).at(-1) ?? sideVideos[0]
    return visibleSteps
  }, {})

  workflowVideos.forEach((video) => {
    const videoStep = Number(video.dataset.flowVideo)
    const matchingSideVideos = workflowVideos
      .filter((item) => item.dataset.side === video.dataset.side && Number(item.dataset.flowVideo) === videoStep)
      .sort((a, b) => getSequenceIndex(a) - getSequenceIndex(b))
    const visibleSequence = videoStep >= currentStep ? 0 : matchingSideVideos.length - 1
    const isActive = visibleStepBySide[video.dataset.side] === videoStep && getSequenceIndex(video) === visibleSequence
    const shouldPlay = isWorkflowInView && videoStep === currentStep && getSequenceIndex(video) === 0

    video.classList.toggle('active', isActive)
    video.classList.toggle('playing', shouldPlay)

    if (shouldPlay) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
      if (isActive && videoStep > currentStep) {
        video.currentTime = 0
      }
    }
  })
}

workflowVideos.forEach((video) => {
  video.addEventListener('ended', () => {
    const currentStep = Number(video.dataset.flowVideo)

    if (activeWorkflowStep !== currentStep) {
      return
    }

    const nextVideo = workflowVideos
      .filter((item) => item.dataset.side === video.dataset.side && Number(item.dataset.flowVideo) === currentStep)
      .sort((a, b) => getSequenceIndex(a) - getSequenceIndex(b))
      .find((item) => getSequenceIndex(item) === getSequenceIndex(video) + 1)

    if (!nextVideo) {
      advanceWorkflowStep()
      return
    }

    video.classList.remove('active', 'playing')
    video.pause()

    nextVideo.currentTime = 0
    nextVideo.classList.add('active', 'playing')
    nextVideo.play().catch(() => {})
  })
})

workflowProgressItems.forEach((item) => {
  item.addEventListener('click', () => {
    const step = item.dataset.flowProgress
    setWorkflowStep(step)
    scrollToWorkflowStep(step)
  })
})

if (workflowSteps.length) {
  if (workflowSection) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0]
      const wasInView = isWorkflowInView

      isWorkflowInView = entry.isIntersecting

      if (!isWorkflowInView) {
        pauseWorkflowVideos()
        return
      }

      if (!wasInView) {
        setWorkflowStep(workflowScrollDirection === 'up' ? workflowSteps.length - 1 : 0, { force: true })
      }
    }, {
      threshold: 0.22
    })

    sectionObserver.observe(workflowSection)
  }

  const workflowObserver = new IntersectionObserver((entries) => {
    if (!isWorkflowInView) {
      return
    }

    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

    if (visibleEntry) {
      setWorkflowStep(visibleEntry.target.dataset.flowStep)
    }
  }, {
    threshold: [0.35, 0.55, 0.75],
    rootMargin: '-20% 0px -25% 0px'
  })

  workflowSteps.forEach((step) => workflowObserver.observe(step))
  setWorkflowStep(0)
}
