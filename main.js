const fortuneCookie = document.querySelector("#cookie1")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("button")
const sparkleWrapper = document.querySelector(".sparkle-wrapper")

const fortunePhrases = ['A business seat will be available for you, even on EK818.',
  "If you can befriend a fellow EA, you'll never be lonely at work",
  'Your clashes will resolve themselves.',
  'Now is the time to try something new from the office lunch.',
  'Wherever you go, go with all possible calendar slots.',
  'You have a charming way with words and will write an email without help of ChatGPT.',
  'From small touchpoints come great OPPLs.',
  'An amazing project awaits you.',
  'Always have old archives and young handovers.',
  'Where the feedback grows, so will great joy in your heart.',
  'To share knowledge is better than keeping it for yourself.',
  'Confucious say: "He who has time slots, has everything."',
  'You must know your own MDP, before you can know the MDP of another.',
  'Sheikh Zayed Road will be transient today.',
  'You are protected by silent support and friendship near you.',
  'The office is ready to receive your presence.',
  'You will attract cultured and artistic people to your desk.',
  'Your hard work is about to pay off...',
  'Good agenda takes preparation...',
  'The star of cancelled unnecessary calls is shining on you.',
  'You will soon bring joy to your fellow EA.',
  'You will spend many days in comfort of accepted invites. ',
  'Next touchpoint you will dance to a different beat.',
  'Your investments of time now will lead to success later.',
  'Any hotel will be available in policy.',
  "Your Stakeholder will soon say, 'I couldn't do this without you'—because it's true!",
  'Be bold, take risks—submit that Teaming Survey!',
  'Happiness at work is contagious—keep spreading your good vibes.',
  'Your problem-solving skills will save the day.',
  "A last-minute change is coming… but you've already anticipated it!",
  'A perfectly planned event is in your future… because you made it happen!',
  "That 'quick favor' request? You'll finish it in record time!",
  'Your scheduling skills make time travel look easy.',
  "You will soon receive an email marked 'urgent' that is absolutely not urgent.",
  'A double-booking is in your future… but don\'t worry, you already fixed it.',
  'Your inbox is a battlefield. Victory is near!',
  'Your expense report will be approved without any questions! Today is your lucky day.',
  'A missing receipt will magically reappear right when you need it!',
  'You are a master of expense reports. Even finance is impressed!',
  'Your ability to track timesheets accurately is a skill even time itself admires!',
  'Your inbox will be at zero… for exactly 2.5 seconds. Enjoy it.',
  'Your boss will finally read your email… after asking you about it first.',
  'Your document will be perfectly printed after the first attempt. ',
  "The policy will cover your hotel… unless it's the one you actually want.",
  'Your meeting clash will resolve itself… because one of them will mysteriously disappear (no, it was not cancelled).',
  'Your boss will remember to CC you… just not when it actually matters.',
  'Sheikh Zayed Road will be clear… for approximately 45 seconds at 3 AM.',
  'Your leave request will be approved.',
  "Today's the day! You will actually leave work on time... unless your executive has other plans.",
  'Your color-coded calendar skills will be praised… but only you truly understand its magic.',
  'A meeting will be rescheduled three times before ultimately being canceled.',
  'You will mute yourself just in time before accidentally sighing in a meeting.',
  'A last-minute travel change is coming… but you already saw it coming.',
    'Your multi-tasking skills will be tested today… and you will pass with flying colors!',
  'Someone will call you the "office magician"—because let\'s face it, you are!',
  'You will finally have a quiet day... just kidding, crisis mode activated!',
  'Your ability to navigate last-minute chaos will be recognized—probably in the form of more last-minute chaos.',
  'Someone will book a meeting and forget to invite the most important person.',
  'You will hear "I just need a quick favor"—brace yourself.',
  'You will save the day… but no one will ever know how close disaster really was.',
  'You will track down a missing expense receipt… against all odds.',
  'Someone will send you an email asking a question… that was answered in the email they\'re replying to.',
  'An event will go smoothly—because you planned for every possible disaster.',
  'Your skills in "mind-reading" will be more essential than ever today.',
  'An email marked "URGENT" will turn out to be… not urgent at all.',
  'Someone will call instead of emailing… for something that absolutely should have been an email.',
  'You will be asked to coordinate a meeting… with participants in 5 different time zones.',
  'You will save the day today—just like you do every day.',
  'You are the silent architect of success—nothing moves forward without you!',
  'Your positive energy lifts up the team—keep spreading your light!',
  'A grateful colleague will recognize your hard work today—because you truly deserve it!',
  'Today, your skills will shine brighter than ever—your expertise makes all the difference!',
  "You will turn a difficult task into an effortless success—because that's what you do!",
  'A project will run smoothly today because of your careful planning—great job!',
  'Success follows you because of your hard work, dedication, and incredible skills!',
  'A request for a "quick call" is coming… and it will last at least an hour.',
  'You will schedule a meeting at the perfect time… and someone will still ask, "Can we do earlier?"',
  'An important meeting will be scheduled… but half the attendees will forget to show up.',
  'You will finally reply to an email from last week… only to get an out-of-office response.',
  'Someone will send "Just checking in on this"… five minutes after their first message',
  'Your secret weapon? ChatGPT. But no one needs to know.',
  'You will write a perfectly polite email… thanks to ChatGPT\'s expert rewording.',
  'AI is smart, but let\'s be real—you\'re still the mastermind behind the scenes!',
  'You will copy-paste from ChatGPT… and still proofread it like a true EA',
  'You will try to book a meeting room… but somehow, they\'re all mysteriously full.',
  'A last-minute calendar change will actually work in your favor today!',
  'You will find a free MDP room just when you need it.',
  'You will successfully schedule a call with another EA on the first attempt. The stars are aligned!',
  'Your inbox will hit zero today… and this time, it might even last an hour!',
  'A "thank you" email is coming your way—because you always go the extra mile!',
  'You will spot a scheduling conflict before it happens—saving the day once again!',
  'ChatGPT will save you 20 minutes today—technology working for you!',
  'You will actually take your full lunch break today—yes, really!',
  'You will find your favorite snack in the kitchen exactly when you need it most.',
  'The WiFi will be stable today, and your video calls will run smoothly. Lucky you!',
  'You will get the last available MDP room—your timing is perfect!',
  'An unexpected break will appear in your schedule—use it wisely!',
  'You will hit every green light today. The universe is rewarding you!',
  'You will find an extra seat on the train today—small victories!',
  'Your pet or child will make a surprise Zoom appearance… and completely steal the show.',
  'Your neighbor will start drilling exactly when your meeting begins...',
  'You will actually remember to get up and stretch today. Your back will thank you!',
  'You will finally achieve the perfect work-from-home setup… until your laptop battery dies.',
  'You will finally get a quiet day at work… just kidding, the open office is alive and LOUD today!',
  "You will hear a conversation you weren't supposed to hear in the office today...",
  "The AC will be too cold, but the person next to you will still insist it's 'too warm'",
  'You will attempt to leave on time today… and someone will say, "Got a minute?"',
  'Today, someone will ask you, "How do you do it all?" And you\'ll just smile mysteriously.',
  'Your ability to fix last-minute changes will make people think you have a time machine',
  'Your perfectly formatted spreadsheet will be a work of art—true Excel wizardry!',
  'You are the calm in the storm, the planner in the chaos, the hero in the background!',
  'Your ability to juggle priorities will inspire awe (and maybe a little jealousy) today!',
  'Your executive may run the business, but you keep it running smoothly!',
  'You will successfully schedule a meeting… and then someone will ask, "Can we do Friday instead?"',
  'Someone will send you a meeting request… without checking if you\'re available. Classic!',
  'You will get a Slack DM that just says, "Hello"… and nothing else for 10 minutes.',
  'You will finally step outside for fresh air… and immediately get a work call.',
  'You will run into someone you haven\'t seen in ages—and actually enjoy the conversation!',
  'You will wake up before your alarm tomorrow… and somehow feel rested.',
  'You will receive a compliment today. Accept it, you deserve it!',
  'Success is just failure that took a coffee break and came back stronger.',
  'Not all heroes wear capes—some of them just send well-timed calendar invites.',
  'The secret to work-life balance? Accepting that some days, one wins over the other.',
  'You will make a mistake today… and no one will even notice. Relax!',
  'Something great is coming your way. No, really. It\'s probably Amazon.',
  'Your inbox will reach zero... in your dreams. But hey, dream big!',
  "A wild executive appears! You use calendar wizardry. It's super effective!",
  'Today, someone will compliment your Post-it note handwriting.',
  'Your coffee mug will be refilled without you asking. Today is magic.',
  'You will soon discover a mysterious sticky note... that you wrote three weeks ago.',
  'Someone will compliment your Excel skills. Swoon accordingly.',
  "You will say 'per my last email' with the strength of a thousand suns.",
  'The spirits say… you will fix the office air conditioning by just walking near it.',
  'You will survive on caffeine and sheer administrative willpower.',
  'You will stare into Outlook... and Outlook will stare back.',
  'Your unread Slack DMs shall multiply like rabbits. Beware the blinking dot.',
  'Slackbot knows what you did. It just hasn\'t said anything… yet.',
  'Today, you will drag a task to "Done" with majestic triumph.',
  'Double bookings await. But you will defeat them with calendar kung fu.',
  'You will unlock the mythical power to find a time that works for everyone.',
  'You will add color coding that brings balance to the entire scheduling universe.',
  'You will receive 4 calendar invites, 3 last-minute changes, and 1 apology. The circle is complete.',
  'You will get CC\'d on an email chain that should\'ve ended in 2019.',
  'You are the Wi-Fi whisperer. The printer obeys you. You are feared and respected.',
  'The stars say: refill your coffee mug.',
  'You will teleport between Zoom calls like a calendar sorcerer.',
  "You will answer 6 questions before they're even asked. Your psychic powers grow.",
  'You have unlocked Level 99 in Outlook Mastery. Proceed to defeat the Final Boss: MDP Meeting room on thr 5th floor.',
  'You will find a 25-minute slot between five people in three time zones. You shall be crowned Scheduler Supreme.',
  'A recurring meeting will be cancelled. You will feel joy, confusion, and mild suspicion.',
  'You will open a mystery drawer and find... 47 pens, a stress ball, and 1 rogue granola bar.',
  'You will receive an urgent email… marked "High Priority"… about snacks.',
  'You will survive the Monday of all Mondays, powered only by grit and espresso.',
  "Your boss will ask, 'Can you remind me?' and you will channel your inner Siri.",
  "You will fix someone's tech issue by simply standing near their computer.",
  'Your hard work is noticed more than you think. Keep being the rockstar behind the curtain.',
  "Someone will finally say, 'Wow, I don't know how you do it all.' (Hint: you're magic.)",
  'You will feel the rare and sacred joy of an empty inbox... ',
  "Today you'll be reminded that the office runs on your brilliance (and snacks).",
  'You bring calm to chaos and kindness to calendars. Your power is unmatched.',
  'An unexpected thank-you is coming your way. You deserve every letter of it.',
  "You'll solve a problem today that saves someone else's entire week. Hero status: confirmed.",
  'You may not wear a cape, but let\'s be real — if you did, it would be FABULOUS.',
  'Today, you will be the spreadsheet whisperer, the calendar ninja, and the deliverer of miracles.',
  'Your keyboard may rattle, your phone may ding, but your vibe will remain unshakable.',
  "You will complete a task before the requester even asks for it. Again. They'll think it's magic.",
  'A random act of kindness is coming your way. (No, it\'s not an Outlook invite.)',
  "You'll make someone's day easier today. That's kind of your thing.",
  'Your aura today is 98% competence, 2% caffeine. In other words: unstoppable.',
  'Someone will ask how you do it all. You will smile mysteriously and vanish into your next task.',
  'The calendar gods are pleased. Your scheduling sacrifices have not gone unnoticed.',
  "Someone will ask, 'Did you read my mind?' The answer is yes. Always.",
  'Your to-do list trembles in fear. It knows you\'re coming for it.',
  "Someone will say 'We couldn't do this without you.' They're not wrong.",
  'You are the majestic unicorn of productivity. Sparkly. Silent. Slightly overbooked.',
  'You will rise like a phoenix... except with better time management and stronger Wi-Fi.',
  'You are the chosen one: foretold in legend, feared by inboxes.',
  'You may not wear armor, but today you slay dragons disguised as calendar invites.',
  "You'll get more done before lunch than most people do in two days. And you'll still be humble about it.",
  'Behind every great leader is an even greater EA, pretending they aren\'t doing all the work.',
  'You are the MVP, the GOAT, and the secret sauce. Please accept this cookie as proof.',
  'You bring balance to the workplace Force. Yoda would request your assistance.',
  'The energy you put out today will bounce back as gratitude... or snacks. Both are good.',
  "You will survive today's emergency. Spoiler: It wasn't actually an emergency.",
  'You will be the calm in someone else\'s storm today — and still make it to lunch on time.',
  'You will get 5 things done before anyone even finishes saying "Happy Administrative Professionals\' Day!"',
  "You are the glue. You are the gears. You are the glitter. Accept this cookie as tribute."]

// Initialize with a random fortune
let item = Math.round(Math.random() * (fortunePhrases.length - 1))

// Add sparkle effect on hover
sparkleWrapper.addEventListener('mousemove', createSparkle)
sparkleWrapper.addEventListener('mouseenter', startIntenseSparkles)
sparkleWrapper.addEventListener('mouseleave', stopIntenseSparkles)
fortuneCookie.addEventListener('click', e => {
  openCookie()
  createExplosion(e.clientX, e.clientY)
})
btnReset.addEventListener('click', cookieReset)
document.addEventListener('keypress', handleEnter)

// Variable to store interval ID
let sparkleInterval = null

// Function to start intense sparkles
function startIntenseSparkles() {
  // Create immediate sparkles
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const rect = sparkleWrapper.getBoundingClientRect()
      const x = rect.left + Math.random() * rect.width
      const y = rect.top + Math.random() * rect.height
      createSparkleAt(x - rect.left, y - rect.top)
    }, i * 50)
  }
  
  // Create continuous sparkles
  sparkleInterval = setInterval(() => {
    const rect = sparkleWrapper.getBoundingClientRect()
    const x = rect.left + Math.random() * rect.width
    const y = rect.top + Math.random() * rect.height
    createSparkleAt(x - rect.left, y - rect.top)
  }, 100)
}

// Function to stop intense sparkles
function stopIntenseSparkles() {
  clearInterval(sparkleInterval)
}

// Function to create sparkles at mouse position
function createSparkle(e) {
  const rect = sparkleWrapper.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  createSparkleAt(x, y)
}

// Function to create sparkle at a specific position
function createSparkleAt(x, y) {
  const sparkle = document.createElement('div')
  sparkle.className = 'sparkle'
  
  // Add random size class
  const sizeClasses = ['tiny', 'medium', 'large']
  const randomSizeClass = sizeClasses[Math.floor(Math.random() * sizeClasses.length)]
  sparkle.classList.add(randomSizeClass)
  
  // Set sparkle position
  sparkle.style.left = `${x}px`
  sparkle.style.top = `${y}px`
  
  // Random rotation
  const initialRotation = Math.random() * 360
  sparkle.style.transform = `rotate(${initialRotation}deg)`
  
  // Random color variation
  const hue = 40 + Math.random() * 20 // Gold range
  const saturation = 80 + Math.random() * 20
  const lightness = 50 + Math.random() * 30
  sparkle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  
  // Add sparkle to DOM
  sparkleWrapper.appendChild(sparkle)
  
  // Remove sparkle after animation finishes
  setTimeout(() => {
    sparkle.remove()
  }, 800) // Increased to account for longer animations on larger stars
}

// Function to create explosion
function createExplosion(x, y) {
  // Create main explosion element
  const explosion = document.createElement('div')
  explosion.className = 'explosion'
  explosion.style.left = `${x}px`
  explosion.style.top = `${y}px`
  document.body.appendChild(explosion)
  
  // Create multiple explosions for more intensity
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const secondaryExplosion = document.createElement('div')
      secondaryExplosion.className = 'explosion'
      secondaryExplosion.style.left = `${x + (Math.random() - 0.5) * 20}px`
      secondaryExplosion.style.top = `${y + (Math.random() - 0.5) * 20}px`
      secondaryExplosion.style.transform = 'scale(0.7)'
      document.body.appendChild(secondaryExplosion)
      
      setTimeout(() => {
        secondaryExplosion.remove()
      }, 800)
    }, i * 100)
  }
  
  // Create flying stars (increased number)
  for (let i = 0; i < 20; i++) {
    createStar(x, y)
  }
  
  // Create additional particles
  for (let i = 0; i < 40; i++) {
    createParticle(x, y)
  }
  
  // Create sparkle burst
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const burstX = x + (Math.random() - 0.5) * 100
      const burstY = y + (Math.random() - 0.5) * 100
      createSparkleAt(burstX - sparkleWrapper.getBoundingClientRect().left, 
                      burstY - sparkleWrapper.getBoundingClientRect().top)
    }, Math.random() * 500)
  }
  
  // Remove explosion after animation finishes
  setTimeout(() => {
    explosion.remove()
  }, 800)
}

// Function to create stars for the explosion
function createStar(x, y) {
  const star = document.createElement('div')
  star.className = 'star'
  
  // Random size between 15 and 35 pixels
  const size = Math.random() * 20 + 15
  star.style.width = `${size}px`
  star.style.height = `${size}px`
  
  // Random position around the center
  const offsetX = (Math.random() - 0.5) * 80
  const offsetY = (Math.random() - 0.5) * 80
  star.style.left = `${x + offsetX}px`
  star.style.top = `${y + offsetY}px`
  
  // Random rotation
  const rotation = Math.random() * 360
  star.style.transform = `rotate(${rotation}deg)`
  
  // Random color variation
  const hue = 40 + Math.random() * 20 // Gold range
  star.style.backgroundColor = `hsl(${hue}, 90%, 65%)`
  
  document.body.appendChild(star)
  
  // Random direction for the star to fly
  const angle = Math.random() * Math.PI * 2
  const distance = 150 + Math.random() * 250
  const destinationX = x + Math.cos(angle) * distance
  const destinationY = y + Math.sin(angle) * distance
  
  // Animate the star flying outward
  setTimeout(() => {
    star.style.transition = 'all 1.5s cubic-bezier(0.1, 0.8, 0.2, 1)'
    star.style.left = `${destinationX}px`
    star.style.top = `${destinationY}px`
    star.style.transform = `rotate(${rotation + 180}deg) scale(0.1)`
    star.style.opacity = '0'
  }, 10)
  
  // Remove star after animation finishes
  setTimeout(() => {
    star.remove()
  }, 1500)
}

// Function to create particles
function createParticle(x, y) {
  const particle = document.createElement('div')
  particle.className = 'particle'
  
  // Random size between 3 and 8 pixels
  const size = Math.random() * 5 + 3
  particle.style.width = `${size}px`
  particle.style.height = `${size}px`
  
  // Set starting position
  particle.style.left = `${x}px`
  particle.style.top = `${y}px`
  
  // Random color
  const hue = Math.random() * 60 + 20 // Gold to red range
  const saturation = 80 + Math.random() * 20
  const lightness = 50 + Math.random() * 30
  particle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  
  // Set random translation distance
  const tx = (Math.random() - 0.5) * 400
  const ty = (Math.random() - 0.5) * 400
  particle.style.setProperty('--tx', `${tx}px`)
  particle.style.setProperty('--ty', `${ty}px`)
  
  document.body.appendChild(particle)
  
  // Remove particle after animation finishes
  setTimeout(() => {
    particle.remove()
  }, 1000)
}

function openCookie() {
  screenToggle()
  document.querySelector(".fortune p").innerText = fortunePhrases[item]
}

function cookieReset(e) {
  screenToggle()
  item = Math.round(Math.random() * (fortunePhrases.length - 1))
}

function screenToggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(event) {
  if(event.key === 'Enter' && screen2.classList.contains("hide")) {
    openCookie()
  } else if(event.key === 'Enter' && screen1.classList.contains("hide")) {
    cookieReset()
  } 
}