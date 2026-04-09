export type ScenarioChoice = {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
};

export type Scenario = {
  id: string;
  title: string;
  situation: string;
  tip: string;
  choices: ScenarioChoice[];
};

export const SCENARIOS: Scenario[] = [
  {
    id: "misinformation",
    title: "Fake News & Misinformation",
    situation:
      "A post says a celebrity is giving away free phones if you share it. Lots of comments say “It worked for me!” but the account name looks slightly misspelled. Your friend wants you to repost it quickly.",
    tip: "Before sharing, check the source, look for trustworthy reporting, and watch for “too good to be true” claims.",
    choices: [
      {
        id: "share-now",
        text: "Repost it right away so your friend doesn’t miss out.",
        isCorrect: false,
        feedback:
          "Sharing quickly can spread misinformation. Misspelled accounts and unrealistic giveaways are common red flags.",
      },
      {
        id: "check-source",
        text: "Pause and verify: check the account, search for reliable sources, and look for fact-checks.",
        isCorrect: true,
        feedback:
          "Great choice. Verifying first helps stop misinformation and protects others from scams.",
      },
      {
        id: "comment-only",
        text: "Comment “Is this real?” but repost it anyway.",
        isCorrect: false,
        feedback:
          "Even if you ask, reposting still spreads the claim to more people. It’s better to verify first.",
      },
    ],
  },
  {
    id: "cyberbullying",
    title: "Cyberbullying",
    situation:
      "In a group chat, someone starts making jokes about a classmate’s appearance. A few people add laughing emojis, and the messages keep getting harsher. The classmate is still in the chat.",
    tip: "Don’t join in. Support the target, set a boundary, and report/block if needed.",
    choices: [
      {
        id: "join-in",
        text: "Add a joke too so you don’t seem “uncool.”",
        isCorrect: false,
        feedback:
          "Joining in increases harm. Even “small” jokes can feel humiliating when everyone piles on.",
      },
      {
        id: "support",
        text: "Message the group to stop and check in with the classmate privately.",
        isCorrect: true,
        feedback:
          "Strong digital citizenship. You’re helping create a safer space and showing kindness.",
      },
      {
        id: "ignore",
        text: "Say nothing and hope it stops on its own.",
        isCorrect: false,
        feedback:
          "Staying silent can look like approval. A respectful boundary or reporting can make a real difference.",
      },
    ],
  },
  {
    id: "disagreement",
    title: "Online Disagreement",
    situation:
      "You disagree with someone in a comment section about a school rule. They reply rudely and misinterpret what you said. You feel annoyed and want to respond immediately.",
    tip: "Respond to ideas, not people. If the conversation turns toxic, step away or move to a calmer space.",
    choices: [
      {
        id: "clapback",
        text: "Reply with an insult to “win” the argument.",
        isCorrect: false,
        feedback:
          "Insults escalate conflict and damage your digital footprint. It rarely changes minds.",
      },
      {
        id: "calm-clarify",
        text: "Take a breath, clarify your point respectfully, and avoid personal attacks.",
        isCorrect: true,
        feedback:
          "Excellent. Calm communication keeps discussions productive and shows maturity online.",
      },
      {
        id: "dogpile",
        text: "Tag friends to back you up and overwhelm the other person.",
        isCorrect: false,
        feedback:
          "Dogpiling can become harassment. It’s better to keep it respectful—or disengage.",
      },
    ],
  },
  {
    id: "personal-info",
    title: "Sharing Personal Information",
    situation:
      "A new online friend asks for your full name, school, and a photo “just to prove you’re real.” They also want your location so they can “meet up” after school. You’ve only chatted for a few days.",
    tip: "Keep personal info private. If someone pressures you, stop, block/report, and talk to a trusted adult.",
    choices: [
      {
        id: "share-details",
        text: "Send your full name, school, and location so they trust you.",
        isCorrect: false,
        feedback:
          "That’s unsafe. Personal details can be used for stalking, scams, or identity misuse.",
      },
      {
        id: "set-boundary",
        text: "Refuse politely, keep chatting, and never tell anyone.",
        isCorrect: false,
        feedback:
          "Setting a boundary is good, but keeping it secret isn’t. Pressure to share info is a red flag—get help.",
      },
      {
        id: "protect-report",
        text: "Don’t share. Block/report the account and tell a trusted adult.",
        isCorrect: true,
        feedback:
          "Great call. Protecting your privacy and getting support is the safest response.",
      },
    ],
  },
];

