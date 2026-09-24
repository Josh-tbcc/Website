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
  faqs: { q: string; a: string }[];
}

export const conditions: Condition[] = [
  {
    slug: 'back-pain',
    name: 'Back pain',
    h1: 'Back pain that keeps <span class="hl">coming back?</span>',
    metaTitle: 'Back Pain Chiropractor Yandina',
    metaDescription:
      'Lower and mid back pain care in Yandina, Sunshine Coast. Thermography scan, in-house X-ray and a staged plan that looks beyond short-term relief.',
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
    name: 'Neck pain',
    h1: 'Neck pain and <span class="hl">stiffness</span>',
    metaTitle: 'Neck Pain Chiropractor Yandina',
    metaDescription:
      'Neck pain, stiffness and posture-related tension care in Yandina, Sunshine Coast. Objective assessment and a clear plan from The Balanced Chiropractic Centre.',
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
    name: 'Headaches',
    h1: 'Headaches and <span class="hl">tension</span>',
    metaTitle: 'Headache Chiropractor Yandina',
    metaDescription:
      'Tension-type and neck-related headache care in Yandina, Sunshine Coast. Thorough assessment of your neck, posture and nervous system.',
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
    name: 'Sciatica',
    h1: 'Sciatica and <span class="hl">leg pain</span>',
    metaTitle: 'Sciatica Chiropractor Yandina',
    metaDescription:
      'Sciatica and radiating leg pain assessment and care in Yandina, Sunshine Coast. Thermography, neurological testing and in-house X-ray.',
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
    metaTitle: 'Hip Pain Chiropractor Yandina',
    metaDescription:
      'Hip and pelvic pain assessment in Yandina, Sunshine Coast. We look at how your hips, pelvis and lower back work together.',
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
    slug: 'arthritis',
    name: 'Arthritis',
    h1: 'Moving better with <span class="hl">arthritis</span>',
    metaTitle: 'Arthritis Chiropractic Care Yandina',
    metaDescription:
      'Gentle chiropractic care for people with arthritis and joint stiffness in Yandina, Sunshine Coast. Tailored techniques and long-term support.',
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
    name: 'Poor posture',
    h1: 'It’s not just your posture. <span class="hl">It’s the pattern.</span>',
    metaTitle: 'Posture Correction Chiropractor Yandina',
    metaDescription:
      'Posture assessment and correction in Yandina, Sunshine Coast. Digital postural analysis, thermography and a plan to change the pattern, not just the position.',
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
    metaTitle: 'Stress & Tension Chiropractic Yandina',
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
    metaTitle: 'Pregnancy Chiropractor Yandina',
    metaDescription:
      'Gentle pregnancy and post-natal chiropractic care in Yandina, Sunshine Coast. Pregnancy-friendly positioning and techniques through every trimester.',
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
    photo: '/images/wellness.jpg',
    photoAlt: 'Gentle chiropractic care at The Balanced Chiropractic Centre',
    faqs: [
      { q: 'Is chiropractic safe during pregnancy?', a: 'We adapt our techniques and positioning for each stage of pregnancy and work alongside your midwife or doctor. Always let us know about any pregnancy complications.' },
      { q: 'When can I start after giving birth?', a: 'It depends on your birth and recovery. We’re happy to discuss timing with you and your care team.' },
    ],
  },
];
