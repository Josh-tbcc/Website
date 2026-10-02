// Condition pages. Each `slug` matches the address the old website used,
// so existing Google rankings carry over (e.g. /back-pain).
// Wording follows AHPRA advertising rules: no guarantees, no cure claims.

export interface Condition {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  signs: string[];
  why: string[];
  focus: string[];
  photo: string;
  photoAlt: string;
  video?: { file: string; title: string; blurb: string };
  faqs: { q: string; a: string }[];
}

export const conditions: Condition[] = [
  {
    slug: 'back-pain',
    video: { file: 'emptying-the-bucket', title: 'Why back pain overflows: the bucket analogy', blurb: 'Dr Josh explains how everyday stress builds up in your spine, and the three things we check to find what’s really going on.' },
    name: 'Lower back pain',
    h1: 'Back pain that keeps <span class="hl">coming back?</span>',
    metaTitle: 'Lower Back Pain Chiropractor Yandina & Nambour',
    metaDescription:
      'Lower and mid back pain care in Yandina, near Nambour on the Sunshine Coast. Thermography scan, in-house X-ray and a staged plan that looks beyond short-term relief.',
    intro:
      'Back pain is one of the most common reasons people walk through our door. Often it has been settling and flaring for months or years. We look past the sore spot to understand how your spine is moving, loading and adapting.',
    signs: [
      'Lower back pain that flares after sitting, lifting or sleeping',
      'Stiffness first thing in the morning',
      'Pain that settles with stretching or massage, then returns',
      'Tightness across the mid back or between the shoulder blades',
    ],
    why: [
      'Most back pain isn’t random and it isn’t only tight muscles. It is usually a pattern your body has adapted to over time: some areas of the spine stop moving well and others work overtime to compensate.',
      'Stretching and rest can ease symptoms, but if that underlying pattern isn’t measured and addressed, the same pain tends to return.',
    ],
    focus: [
      'Thermography scan to show where your nervous system is under the most stress',
      'Spinal palpation, orthopaedic and neurological tests',
      'In-house X-ray with motion studies if clinically required',
      'A staged plan: relief, correction, then strengthening',
    ],
    photo: '/images/chronic.jpg',
    photoAlt: 'Dr Josh adjusting a patient’s mid back',
    faqs: [
      { q: 'Do I need a referral for back pain?', a: 'No. You can book directly online or by calling us.' },
      { q: 'Will you take X-rays?', a: 'Only if they’re clinically needed. We have X-ray in-house, so there’s no need to go elsewhere.' },
    ],
  },
  {
    slug: 'neck-pain',
    video: { file: 'tech-neck', title: 'Tech neck: three things you can do', blurb: 'Simple changes to how you use your phone and computer, and when to get your neck checked.' },
    name: 'Neck pain',
    h1: 'Neck pain and <span class="hl">stiffness</span>',
    metaTitle: 'Neck Pain Chiropractor Yandina & Nambour',
    metaDescription:
      'Neck pain, stiffness and posture-related tension care in Yandina, near Nambour on the Sunshine Coast. Objective assessment and a clear plan from The Balanced Chiropractic Centre.',
    intro:
      'Desk work, phones, driving and sleep positions all load the neck. When stiffness and tension keep returning, it’s usually a sign of a pattern rather than a one-off strain.',
    signs: [
      'A stiff neck that’s hard to turn when reversing the car',
      'Tension across the shoulders by the end of the day',
      'Neck pain linked with headaches',
      'Clicking, grinding or reduced range of movement',
    ],
    why: [
      'Your posture isn’t the whole story. It’s the pattern behind it. You can sit up straighter and stretch more, but if parts of your neck aren’t moving well, your body keeps falling back into the same positions.',
      'That’s why we assess how your spine is actually moving and adapting before recommending care.',
    ],
    focus: [
      'Thermography scan and postural assessment',
      'Range of motion, orthopaedic and neurological testing',
      'X-ray with motion studies if clinically required',
      'Care plus practical advice for your desk, car and sleep setup',
    ],
    photo: '/images/adjusting.jpg',
    photoAlt: 'Dr Josh providing chiropractic care',
    faqs: [
      { q: 'Is neck adjusting safe?', a: 'We complete a thorough history and examination first, and tailor techniques to you. If something needs a different approach or a referral, we’ll tell you.' },
      { q: 'How many visits will I need?', a: 'It depends on what we find. Your report of findings sets clear expectations before you start care.' },
    ],
  },
  {
    slug: 'headaches',
    video: { file: 'three-signs', title: 'Three signs it’s time to see a chiropractor', blurb: 'Including headaches and neck pain that just won’t go away.' },
    name: 'Headaches',
    h1: 'Headaches and <span class="hl">tension</span>',
    metaTitle: 'Headache Chiropractor Yandina & Nambour',
    metaDescription:
      'Tension-type and neck-related headache care in Yandina, near Nambour on the Sunshine Coast. Thorough assessment of your neck, posture and nervous system.',
    intro:
      'Many people who see us for headaches also notice neck stiffness, shoulder tension or poor sleep. We look at how your neck and upper back are functioning and whether they may be contributing.',
    signs: [
      'Headaches that start at the base of the skull',
      'Headaches that build through a workday',
      'Tension across the neck, shoulders and jaw',
      'Relying on pain relief more often than you’d like',
    ],
    why: [
      'Headaches have many possible causes, so a thorough history comes first. Where the neck and upper back are involved, restricted movement and muscle tension can be part of the picture.',
      'If anything in your history or examination suggests a different cause, we’ll refer you to the right health professional.',
    ],
    focus: [
      'Detailed headache and health history',
      'Thermography scan and neck assessment',
      'Neurological screening',
      'Care focused on the neck and upper back, plus lifestyle advice',
    ],
    photo: '/images/adjusting.jpg',
    photoAlt: 'Chiropractic care at The Balanced Chiropractic Centre',
    faqs: [
      { q: 'Can chiropractic help my headaches?', a: 'It depends on the type and cause. Our assessment is designed to work out whether your neck may be contributing and what the best next step is.' },
      { q: 'What if my headaches are severe or sudden?', a: 'Sudden, severe or unusual headaches need urgent medical attention. Please see your GP or call 000.' },
    ],
  },
  {
    slug: 'sciatica',
    video: { file: 'three-technologies', title: 'Three technologies for lower back pain and sciatica', blurb: 'The scan, spinal assessment and X-ray we use to see what’s behind lower back and leg pain.' },
    name: 'Sciatica',
    h1: 'Sciatica and <span class="hl">leg pain</span>',
    metaTitle: 'Sciatica Chiropractor Yandina & Nambour',
    metaDescription:
      'Sciatica and radiating leg pain assessment and care in Yandina, near Nambour on the Sunshine Coast. Thermography, neurological testing and in-house X-ray.',
    intro:
      'Sciatica can stop you sitting, sleeping and moving the way you want. Finding out what’s irritating the nerve is the first step, so we start with a thorough assessment.',
    signs: [
      'Pain running from the lower back or buttock down the leg',
      'Tingling, pins and needles or numbness in the leg or foot',
      'Pain worse with sitting, bending or coughing',
      'Difficulty getting comfortable at night',
    ],
    why: [
      'Sciatica describes symptoms along the sciatic nerve, not a single cause. Pressure or irritation can come from the lower back, pelvis or surrounding muscles.',
      'Neurological testing and imaging when required help us understand what’s going on, and whether chiropractic care is appropriate for you.',
    ],
    focus: [
      'Neurological and orthopaedic testing',
      'Thermography scan',
      'In-house X-ray with motion studies if clinically required',
      'Gentle, staged care matched to how irritated the nerve is',
    ],
    photo: '/images/chronic.jpg',
    photoAlt: 'Dr Josh assessing a patient’s lower back',
    faqs: [
      { q: 'When should I see a doctor instead?', a: 'Loss of bladder or bowel control, numbness in the groin, or rapidly worsening leg weakness need urgent medical care. Go to emergency or call 000.' },
      { q: 'Can I book straight in?', a: 'Yes. Book a new patient consultation online and mention your symptoms.' },
    ],
  },
  {
    slug: 'hip-pain',
    name: 'Hip pain',
    h1: 'Hip pain and <span class="hl">pelvic imbalance</span>',
    metaTitle: 'Hip Pain Chiropractor Yandina & Nambour',
    metaDescription:
      'Hip and pelvic pain assessment in Yandina, near Nambour on the Sunshine Coast. We look at how your hips, pelvis and lower back work together.',
    intro:
      'Hip pain often doesn’t start at the hip. Your lower back, pelvis and hips work as a unit, so we assess all three to understand where the problem is coming from.',
    signs: [
      'Pain at the side or front of the hip',
      'Hip pain when walking, running or climbing stairs',
      'Uneven leg length or a feeling of being “out of balance”',
      'Hip pain alongside lower back pain',
    ],
    why: [
      'When the pelvis and lower back aren’t moving well, the hips can end up carrying extra load. Over time that can show up as pain, tightness or reduced range of movement.',
      'Measuring how you stand, move and bear weight helps us build a plan that targets the cause, not just the sore spot.',
    ],
    focus: [
      'Postural and weight-bearing assessment',
      'Hip, pelvis and lower back movement testing',
      'Thermography scan and X-ray if clinically required',
      'Care plus corrective exercises to support stability',
    ],
    photo: '/images/sports.jpg',
    photoAlt: 'Dr Josh checking leg length and balance',
    faqs: [
      { q: 'Should I see a chiropractor or a physio for hip pain?', a: 'Both can help depending on the cause. We’ll tell you honestly after your assessment and refer if another approach suits you better.' },
    ],
  },
  {
    slug: 'knee-pain',
    name: 'Knee pain',
    h1: 'Knee pain that’s <span class="hl">slowing you down?</span>',
    metaTitle: 'Knee Pain Chiropractor Yandina & Nambour',
    metaDescription:
      'Knee pain assessment and care in Yandina, near Nambour on the Sunshine Coast. We look at how your knees, hips, feet and lower back work together.',
    intro:
      'Knee pain can make walking, stairs, sport and even sleep harder. Sometimes the problem starts at the knee itself, and sometimes it’s linked to how your hips, pelvis, feet and lower back are moving and carrying load. We assess the whole chain, not just the sore spot.',
    signs: [
      'Pain going up or down stairs, or when squatting',
      'Stiffness after sitting or first thing in the morning',
      'Knee pain when walking, running or playing sport',
      'One leg feeling weaker or different to the other',
    ],
    why: [
      'Your knee sits between your hip and your foot, so it often takes the extra load when something above or below isn’t moving well.',
      'Rest can calm things down, but if the way you move and load your legs stays the same, the discomfort can return.',
    ],
    focus: [
      'Assessment of your knees, hips, pelvis, feet and lower back',
      'Orthopaedic and neurological tests',
      'Gentle adjustments and soft-tissue work where appropriate',
      'Specific strengthening and mobility exercises to do at home',
    ],
    photo: '/images/sports.jpg',
    photoAlt: 'Dr Josh assessing leg length and lower-limb balance',
    faqs: [
      { q: 'Do you see knee injuries?', a: 'We assess knee pain and care for many common knee complaints. If your assessment suggests you need further imaging, a specialist or another health professional, we’ll refer you.' },
      { q: 'Can I keep exercising?', a: 'Usually, yes, with some changes. We’ll give you guidance based on your assessment.' },
    ],
  },
  {
    slug: 'shoulder-pain',
    name: 'Shoulder pain',
    h1: 'Shoulder pain or <span class="hl">stiffness?</span>',
    metaTitle: 'Shoulder Pain Chiropractor Yandina & Nambour',
    metaDescription:
      'Shoulder pain and stiffness care in Yandina, near Nambour on the Sunshine Coast. We assess your shoulder, neck and upper back together.',
    intro:
      'Shoulder pain can make reaching, lifting, sleeping on your side or even getting dressed frustrating. Your shoulder relies on your neck, upper back and shoulder blade moving well, so we assess all of them to understand what’s really going on.',
    signs: [
      'Pain reaching overhead or behind your back',
      'Pain lying on that side at night',
      'Stiffness, clicking or reduced movement',
      'Pain spreading from your neck into your shoulder or arm',
    ],
    why: [
      'Your shoulder is the most mobile joint in your body, and it depends on a stable upper back and shoulder blade. When the mid back stiffens or posture changes, the shoulder can end up doing extra work.',
      'That’s why shoulder pain often keeps returning when only the sore spot is looked at.',
    ],
    focus: [
      'Assessment of shoulder, neck and upper back movement',
      'Orthopaedic and neurological tests',
      'Thermography scan of the neck and upper back',
      'Adjustments, mobility work and specific shoulder exercises',
    ],
    photo: '/images/david-care.jpg',
    photoAlt: 'Dr David providing chiropractic care',
    faqs: [
      { q: 'Could my shoulder pain be coming from my neck?', a: 'Sometimes. Pain can be referred from the neck into the shoulder and arm, so our assessment checks both.' },
      { q: 'Do I need a scan first?', a: 'No. If imaging is needed we can take X-rays in-house, or refer you for other scans such as an ultrasound.' },
    ],
  },
  {
    slug: 'chronic-pain',
    name: 'Chronic & ongoing pain',
    h1: 'Living with pain that <span class="hl">won’t go away?</span>',
    metaTitle: 'Chronic Pain Chiropractor Sunshine Coast',
    metaDescription:
      'Help for ongoing back, neck and body pain in Yandina, near Nambour on the Sunshine Coast. A thorough assessment and a staged, long-term plan.',
    intro:
      'When pain has hung around for months or years, it can affect your sleep, your mood, your work and the things you love doing. We take the time to understand your whole history and measure what’s going on, so your care is built around you.',
    signs: [
      'Aches across your back, neck, shoulders or hips that seem to move around',
      'Pain that has lasted more than three months',
      'Flare-ups with stress, poor sleep or long days',
      'Feeling like you’ve tried everything',
    ],
    why: [
      'Ongoing pain is rarely about one sore spot. It’s often a combination of how your spine is moving, how your nervous system is adapting, and everyday stresses like sleep, work and posture.',
      'We look at the whole picture and work alongside your GP or other health professionals where needed.',
    ],
    focus: [
      'A detailed health history and clear goals',
      'Thermography scan, spinal and neurological assessment',
      'In-house X-ray if clinically required',
      'A staged plan with regular progress checks',
    ],
    photo: '/images/david-adjusting.jpg',
    photoAlt: 'Dr David adjusting a patient at The Balanced Chiropractic Centre',
    faqs: [
      { q: 'I’ve tried everything. Is it worth coming in?', a: 'Many of our practice members came to us after trying other options. Our assessment lets us tell you honestly whether we think we can help, and if not, who might.' },
      { q: 'Will you work with my doctor?', a: 'Yes. We’re happy to work alongside your GP, physio or specialist.' },
    ],
  },
  {
    slug: 'mid-back-pain',
    name: 'Upper & mid back pain',
    h1: 'Tight, aching <span class="hl">upper back?</span>',
    metaTitle: 'Upper Back Pain Chiropractor Yandina & Nambour',
    metaDescription:
      'Upper and mid back pain care in Yandina, near Nambour on the Sunshine Coast. Assessment of your posture, rib and spinal movement, and a clear plan.',
    intro:
      'Pain between the shoulder blades or across the upper back is common for people who sit at desks, drive a lot, lift kids or work with their arms. We look at how your mid back, ribs, neck and posture are working together.',
    signs: [
      'An ache or burning between the shoulder blades',
      'Stiffness when turning or twisting',
      'Discomfort after long days at the desk or in the car',
      'Tension that spreads up into your neck',
    ],
    why: [
      'Your mid back is built for rotation and stability. When it stiffens, the muscles around it work harder and your neck and lower back often pick up the slack.',
      'Massage can ease the tightness, but if the joints underneath aren’t moving well, it tends to come back.',
    ],
    focus: [
      'Postural and spinal assessment',
      'Thermography scan of the upper back',
      'Adjustments and mobility work for the mid back and ribs',
      'Simple desk and posture changes to support your progress',
    ],
    photo: '/images/adjusting.jpg',
    photoAlt: 'Dr Josh adjusting a patient’s upper back',
    faqs: [
      { q: 'Is upper back pain related to posture?', a: 'Often, yes. Long periods of sitting, screens and driving can all play a part, which is why we assess posture alongside how your spine moves.' },
      { q: 'Do I need a referral?', a: 'No. You can book directly online or by calling us.' },
    ],
  },
  {
    slug: 'whiplash',
    name: 'Whiplash & car accidents',
    h1: 'Sore after a <span class="hl">car accident?</span>',
    metaTitle: 'Whiplash Chiropractor Yandina & Nambour',
    metaDescription:
      'Whiplash and post-accident neck and back care in Yandina, near Nambour on the Sunshine Coast. Thorough assessment and in-house X-ray if needed.',
    intro:
      'A car accident, even a minor bump, can jolt your neck and back. Symptoms can appear straight away or creep in days later. We assess you thoroughly and, if X-rays are clinically required, take them on site.',
    signs: [
      'Neck pain or stiffness after an accident or fall',
      'Headaches that started after the incident',
      'Upper back, shoulder or lower back pain',
      'Reduced movement when turning your head',
    ],
    why: [
      'A sudden jolt can strain the muscles, ligaments and joints of the neck and spine. How your body adapts in the weeks afterwards matters.',
      'Getting assessed early helps rule out anything that needs medical attention and gives you a clear plan for recovery.',
    ],
    focus: [
      'Detailed history of the accident and your symptoms',
      'Neurological and orthopaedic tests',
      'In-house X-ray if clinically required',
      'Gentle, staged care and home exercises',
    ],
    photo: '/images/chronic.jpg',
    photoAlt: 'Dr Josh assessing a patient’s neck and back',
    faqs: [
      { q: 'Should I see a doctor first?', a: 'If you have severe pain, numbness, weakness, dizziness or a head injury, see a doctor or go to hospital first. For ongoing neck and back pain after an accident, you can book with us directly.' },
      { q: 'Can you help with my CTP or insurance claim?', a: 'Please call us to discuss your claim. We can provide reports of our findings where required.' },
    ],
  },
  {
    slug: 'sports-chiropractic',
    name: 'Sports & active people',
    h1: 'Move better, <span class="hl">perform better.</span>',
    metaTitle: 'Sports Chiropractor Yandina & Nambour',
    metaDescription:
      'Sports chiropractic in Yandina, near Nambour on the Sunshine Coast. For runners, surfers, gym-goers and weekend sport: mobility, balance and recovery support.',
    intro:
      'Whether you run, surf, lift, ride or play weekend footy, how well your spine and joints move affects how well you move. We work with active people of all levels to improve mobility and balance and support recovery, so you can keep training consistently.',
    signs: [
      'Niggles that keep returning during training',
      'One side feeling tighter or weaker than the other',
      'Back, neck, hip, knee or shoulder pain with activity',
      'Wanting to recover well and stay consistent',
    ],
    why: [
      'Small restrictions in how your spine and joints move can change how you load your body over thousands of repetitions.',
      'Finding and addressing those patterns early helps you keep moving and training the way you want to.',
    ],
    focus: [
      'Movement, balance and leg-length assessment',
      'Spinal and extremity adjustments',
      'Thermography scan to show areas under stress',
      'Mobility and strengthening exercises for your sport',
    ],
    photo: '/images/sports.jpg',
    photoAlt: 'Dr Josh checking leg length and balance',
    faqs: [
      { q: 'Do I need to be an athlete?', a: 'Not at all. We see everyone from weekend walkers to competitive athletes.' },
      { q: 'Can I keep training?', a: 'In most cases, yes. We’ll guide you on what to change while you’re under care.' },
    ],
  },
  {
    slug: 'jaw-pain',
    name: 'Jaw pain (TMJ)',
    h1: 'Clicking, tight or <span class="hl">sore jaw?</span>',
    metaTitle: 'Jaw Pain & TMJ Chiropractor Yandina',
    metaDescription:
      'Jaw pain, clicking and tension (TMJ) assessment in Yandina, near Nambour on the Sunshine Coast. We look at your jaw, neck and posture together.',
    intro:
      'Jaw pain, clicking and tension are often linked with neck tension, posture and stress. We assess how your jaw and upper neck are moving and work alongside your dentist where needed.',
    signs: [
      'Clicking or popping when you open your mouth',
      'Jaw tightness, especially in the morning',
      'Clenching or grinding',
      'Headaches or neck tension alongside jaw pain',
    ],
    why: [
      'Your jaw and upper neck are closely connected. Tension or restriction in one often shows up in the other.',
      'Stress, posture and sleep habits can all add to the load on your jaw.',
    ],
    focus: [
      'Assessment of jaw, upper neck and posture',
      'Gentle techniques for the jaw and neck',
      'Thermography scan of the neck and upper back',
      'Simple habits and exercises to support your progress',
    ],
    photo: '/images/adjusting.jpg',
    photoAlt: 'Chiropractic care at The Balanced Chiropractic Centre',
    faqs: [
      { q: 'Should I see my dentist too?', a: 'Yes. If you grind your teeth or have bite concerns, your dentist is an important part of your care, and we’re happy to work alongside them.' },
      { q: 'Is it related to my headaches?', a: 'It can be. Jaw and neck tension are often linked with headaches, which is why we assess them together.' },
    ],
  },
  {
    slug: 'arthritis',
    name: 'Arthritis',
    h1: 'Moving better with <span class="hl">arthritis</span>',
    metaTitle: 'Arthritis Chiropractic Care Yandina & Nambour',
    metaDescription:
      'Gentle chiropractic care for people with arthritis and joint stiffness in Yandina, near Nambour on the Sunshine Coast. Tailored techniques and long-term support.',
    intro:
      'Arthritis and joint degeneration are common, especially as we age. Our focus is helping you keep moving as comfortably and freely as possible, with gentle techniques tailored to you.',
    signs: [
      'Morning stiffness that takes time to ease',
      'Aching joints after activity or long periods of sitting',
      'Reduced range of movement in the neck or back',
      'Wanting to stay active and independent',
    ],
    why: [
      'Degenerative changes are often visible on X-ray, but how they affect you depends a lot on how well the surrounding joints and muscles are moving.',
      'Regular care, movement and good habits can support mobility and comfort over the long term. Every plan is tailored to your age, health and goals.',
    ],
    focus: [
      'Thorough health history, including other conditions and medications',
      'X-ray if clinically required to understand joint changes',
      'Gentle, low-force techniques where appropriate',
      'Home exercises and practical advice to keep you moving',
    ],
    photo: '/images/wellness.jpg',
    photoAlt: 'Gentle chiropractic care at The Balanced Chiropractic Centre',
    faqs: [
      { q: 'Is chiropractic suitable if I have arthritis?', a: 'Often yes, with the right techniques. We assess first and adapt our approach to suit you, including gentle low-force options.' },
    ],
  },
  {
    slug: 'poor-posture',
    video: { file: 'office-tips', title: 'Three quick posture tips for office workers', blurb: 'Easy habits to reset your posture during the workday.' },
    name: 'Poor posture',
    h1: 'It’s not just your posture. <span class="hl">It’s the pattern.</span>',
    metaTitle: 'Posture Correction Chiropractor Yandina & Nambour',
    metaDescription:
      'Posture assessment and correction in Yandina, near Nambour on the Sunshine Coast. Digital postural analysis, thermography and a plan to change the pattern, not just the position.',
    intro:
      'Rounded shoulders, forward head posture and slouching are rarely just about willpower. When parts of the spine stop moving well, your body settles into positions that feel “normal” even when they aren’t.',
    signs: [
      'Rounded shoulders or head sitting forward of your body',
      'Aching after long periods at a desk or on your phone',
      'Tension between the shoulder blades',
      'Being told to “sit up straight” without it lasting',
    ],
    why: [
      'You can sit up straighter for a few minutes, but your body will keep falling back into the same positions until the underlying pattern changes.',
      'We measure your posture at the start and re-check it every 12 visits, so you can see how it’s changing over time.',
    ],
    focus: [
      'Postural analysis and thermography scan',
      'Spinal X-ray if clinically required',
      'Care focused on restoring movement',
      'Corrective exercises and workstation advice, with progress re-measured every 12 visits',
    ],
    photo: '/images/thermal-scanning.jpg',
    photoAlt: 'Dr Josh performing a postural and thermography assessment',
    faqs: [
      { q: 'How long does posture correction take?', a: 'Posture patterns develop over years, so meaningful change takes consistent care over months. We re-measure regularly so you can track progress.' },
    ],
  },
  {
    slug: 'stress',
    name: 'Stress & tension',
    h1: 'Stress, tension and <span class="hl">your nervous system</span>',
    metaTitle: 'Stress & Tension Chiropractic Yandina & Nambour',
    metaDescription:
      'Holding stress in your neck, shoulders and back? Chiropractic assessment and care in Yandina, Sunshine Coast, with a focus on your nervous system.',
    intro:
      'Stress shows up in the body: tight shoulders, a clenched jaw, restless sleep and a back that never quite relaxes. Many of our practice members come in for the physical tension that builds up with a busy life.',
    signs: [
      'Tight neck and shoulders that never seem to let go',
      'Tension headaches',
      'Trouble switching off or sleeping well',
      'Feeling physically “wound up”',
    ],
    why: [
      'Your nervous system coordinates how your body responds to stress. When we’re under pressure for long periods, muscles stay guarded and posture changes.',
      'Chiropractic care is one part of looking after yourself, alongside sleep, movement, nutrition and support from your GP or other health professionals where needed.',
    ],
    focus: [
      'Thermography scan to assess areas of tension and stress',
      'Care for the neck, upper back and shoulders',
      'Simple breathing, movement and posture strategies',
      'Referral to other health professionals when appropriate',
    ],
    photo: '/images/thermography-scan.jpg',
    photoAlt: 'Thermography scan showing areas of stress along the upper back',
    faqs: [
      { q: 'Can chiropractic treat anxiety or depression?', a: 'No. Chiropractic care may help with the physical tension that comes with stress, but mental health conditions should be managed with your GP or a mental health professional.' },
    ],
  },
  {
    slug: 'pregnancy-chiropractic',
    name: 'Pregnancy',
    h1: 'Pregnancy <span class="hl">chiropractic care</span>',
    metaTitle: 'Pregnancy Chiropractor Yandina & Nambour',
    metaDescription:
      'Gentle pregnancy and post-natal chiropractic care in Yandina, near Nambour on the Sunshine Coast. Pregnancy-friendly positioning and techniques through every trimester.',
    intro:
      'Your body changes quickly during pregnancy, and your spine and pelvis carry much of that load. We use pregnancy-friendly positioning and gentle techniques to support your comfort through each trimester and after your baby arrives.',
    signs: [
      'Lower back or pelvic pain as your bump grows',
      'Hip or pubic discomfort when walking or rolling over in bed',
      'Upper back and neck tension',
      'Wanting support for your body after birth',
    ],
    why: [
      'Hormonal changes loosen ligaments while your centre of gravity shifts forward. That combination changes how your spine and pelvis move and carry load.',
      'Gentle, regular care focused on comfort and movement can be a valuable part of looking after yourself during pregnancy and afterwards.',
    ],
    focus: [
      'Thorough history, including your pregnancy and any concerns from your midwife or doctor',
      'Pregnancy-friendly tables, cushions and positioning',
      'Gentle techniques suited to each stage of pregnancy',
      'Post-natal care as your body recovers',
    ],
    photo: '/images/pregnancy-care.jpg',
    photoAlt: 'Dr Josh adjusting a patient lying on a pregnancy pillow on the chiropractic table',
    faqs: [
      { q: 'Is chiropractic safe during pregnancy?', a: 'We adapt our techniques and positioning for each stage of pregnancy and work alongside your midwife or doctor. Always let us know about any pregnancy complications.' },
      { q: 'When can I start after giving birth?', a: 'It depends on your birth and recovery. We’re happy to discuss timing with you and your care team.' },
    ],
  },
];
