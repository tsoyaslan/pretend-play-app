// scenarios.ts - Updated data structure for redesigned play prompt app

export type Scenario = {
  theme: string;
  toddlerRole: string;
  parentRole: string;
  mission: string;
  starterLabel: string;
  starterLine: string;
  twistLabel: string;
  twistLine: string;
  endingLabel: string;
  endingLine: string;
  energy: "active" | "low" | "mixed";
  icon?: string; // Optional, for backwards compatibility
  props?: string[]; // Optional, for backwards compatibility
};

export const scenarios: Scenario[] = [
  // ============================================
  // ACTIVE ENERGY SCENARIOS
  // ============================================
  {
    theme: "Airport Adventure",
    toddlerRole: "flying the plane today",
    parentRole: "your very important passenger!",
    mission: "Help me fly safely to a brand new country",
    starterLabel: "Getting Ready",
    starterLine: "Check all the buttons and switches on the plane. Is everything working? Don't forget to give the passengers their safety instructions!",
    twistLabel: "Surprise in the Sky",
    twistLine: "Oh no! The weather is getting bumpy. Should we fly through the clouds or around them? Ask your passenger what they think!",
    endingLabel: "Safe Landing",
    endingLine: "We made it! Everyone claps for the amazing pilot. What country did we land in? What should we explore first?",
    energy: "active",
    icon: "plane",
    props: ["chair", "backpack", "box"]
  },
  {
    theme: "Rescue Mission",
    toddlerRole: "the brave firefighter",
    parentRole: "the person who needs rescuing!",
    mission: "Save me from the tall building before it's too late",
    starterLabel: "Sound the Alarm",
    starterLine: "Quick! Jump in the fire truck and turn on the sirens. Ring the bell and zoom through the streets. What do you see on the way?",
    twistLabel: "Up the Ladder",
    twistLine: "The ladder goes higher and higher! It's a little wobbly. Hold on tight and climb carefully. Can you see me waving from the window?",
    endingLabel: "Heroes Return",
    endingLine: "You saved me! Everyone cheers. The mayor wants to give you a medal. What should we do to celebrate?",
    energy: "active",
    icon: "bolt",
    props: ["towel", "toy car", "ladder or chairs"]
  },
  {
    theme: "Jungle Explorer",
    toddlerRole: "the expedition leader",
    parentRole: "the wildlife photographer!",
    mission: "Find the hidden treasure deep in the jungle",
    starterLabel: "Into the Wild",
    starterLine: "Pack your backpack with everything we need. What should we bring? Now let's carefully push through the vines and leaves!",
    twistLabel: "Wild Animals",
    twistLine: "Shh! Do you hear that? A tiger is sleeping nearby. Should we tiptoe past it or climb a tree to go around?",
    endingLabel: "Treasure Found",
    endingLine: "Look! The treasure chest! Open it up—what's inside? Should we share it with the jungle animals or bring it home?",
    energy: "active",
    icon: "leaf",
    props: ["backpack", "stuffed animals", "blanket"]
  },
  {
    theme: "Race Car Championship",
    toddlerRole: "the star race car driver",
    parentRole: "your pit crew chief!",
    mission: "Win the big race and become the champion",
    starterLabel: "Ready, Set...",
    starterLine: "Put on your helmet and buckle up! Rev the engine—vroom vroom! The crowd is cheering. Can you hear them?",
    twistLabel: "Tire Trouble",
    twistLine: "Uh oh! One of your tires is getting flat. Quick, pull into the pit stop! How fast can we change it together?",
    endingLabel: "Victory Lap",
    endingLine: "You're in first place! Cross the finish line and do a victory lap. They're giving you a big trophy—how does it feel to win?",
    energy: "active",
    icon: "bolt",
    props: ["toy car", "cushions", "cups or blocks"]
  },

  // ============================================
  // LOW/COZY ENERGY SCENARIOS
  // ============================================
  {
    theme: "Cozy Bakery",
    toddlerRole: "the gentle baker",
    parentRole: "your hungry customer!",
    mission: "Make me the most delicious treat you can imagine",
    starterLabel: "Morning Prep",
    starterLine: "The bakery smells so good already! What should we bake first? Mix the ingredients slowly and carefully in your big bowl.",
    twistLabel: "Special Request",
    twistLine: "A very special customer just walked in—it's a tiny mouse! They want something extra sweet. What should you make for them?",
    endingLabel: "Sharing Time",
    endingLine: "Everything looks beautiful! Let's sit down together and taste what we made. Which one is your favorite?",
    energy: "low",
    icon: "bread",
    props: ["bowls", "spoons", "play food or blocks"]
  },
  {
    theme: "Bedtime Story Library",
    toddlerRole: "the wise librarian",
    parentRole: "looking for the perfect book!",
    mission: "Help me find a magical story to read before bed",
    starterLabel: "Welcome In",
    starterLine: "Hello! The library is quiet and cozy. Walk me through the different sections. What kinds of stories do you have?",
    twistLabel: "A Hidden Book",
    twistLine: "Wait—there's a book glowing softly on the top shelf! How can we reach it? Should we use a ladder or ask the tall giraffe for help?",
    endingLabel: "Story Time",
    endingLine: "Perfect! Let's sit in the comfy reading corner. You can hold the book while I listen. What happens on the first page?",
    energy: "low",
    icon: "compass",
    props: ["books", "blanket", "pillows"]
  },
  {
    theme: "Garden Tea Party",
    toddlerRole: "the kind garden fairy",
    parentRole: "your guest from far away!",
    mission: "Show me the most beautiful parts of your magical garden",
    starterLabel: "Garden Tour",
    starterLine: "Welcome to my garden! Look at all the colorful flowers. Which one smells the best? Let's pick some for our tea table.",
    twistLabel: "Tiny Visitor",
    twistLine: "Oh! A butterfly landed on your hand. It seems lost. Should we help it find its family? Where do you think they might be?",
    endingLabel: "Tea and Talk",
    endingLine: "Let's sit down for tea now. Pour carefully! Tell me a story about your garden—who else lives here?",
    energy: "low",
    icon: "leaf",
    props: ["cups", "stuffed animals", "flowers or leaves"]
  },
  {
    theme: "Veterinary Clinic",
    toddlerRole: "the gentle animal doctor",
    parentRole: "bringing in my sick teddy bear!",
    mission: "Help my teddy feel better—I think they have a cold",
    starterLabel: "Check-Up Time",
    starterLine: "Hello, doctor! My teddy doesn't feel well. Can you check their temperature and heartbeat? What do you notice?",
    twistLabel: "Special Medicine",
    twistLine: "The teddy needs special medicine to feel better. What should we give them? Maybe some warm milk and a cozy bandage?",
    endingLabel: "All Better",
    endingLine: "Look! The teddy is smiling now. What should they do at home to stay healthy? Should they rest or play gently?",
    energy: "low",
    icon: "bone",
    props: ["stuffed animals", "blanket", "toy medical kit or spoons"]
  },

  // ============================================
  // MIXED ENERGY SCENARIOS
  // ============================================
  {
    theme: "Space Station",
    toddlerRole: "the astronaut commander",
    parentRole: "your robot helper!",
    mission: "Fix the broken satellite floating outside our space station",
    starterLabel: "Suit Up",
    starterLine: "Put on your space suit and helmet. Check that everything is sealed tight! Now let's float through the airlock together.",
    twistLabel: "Meteor Shower",
    twistLine: "Look! Tiny rocks are flying past us. We need to dodge them carefully. Can you show me your best slow-motion space moves?",
    endingLabel: "Mission Complete",
    endingLine: "We fixed it! Float back inside for some space ice cream. What flavor do you think astronauts eat? What planet should we visit next?",
    energy: "mixed",
    icon: "compass",
    props: ["box", "flashlight", "aluminum foil"]
  },
  {
    theme: "Mountain Climbing",
    toddlerRole: "the experienced mountain guide",
    parentRole: "learning to climb for the first time!",
    mission: "Lead me safely to the top of the snowy mountain",
    starterLabel: "Base Camp",
    starterLine: "We're starting at the bottom. It's a long way up! What should we pack in our bags? Show me how to tie the climbing rope.",
    twistLabel: "Slippery Ice",
    twistLine: "Careful! This part is icy. Should we crawl slowly or use our ice picks? Hold my hand and guide me across.",
    endingLabel: "Summit Success",
    endingLine: "We made it to the top! Look at the view—what can you see from up here? Should we plant a flag or take a photo?",
    energy: "mixed",
    icon: "mountain",
    props: ["rope or string", "backpack", "stuffed animals"]
  },
  {
    theme: "Submarine Adventure",
    toddlerRole: "the submarine captain",
    parentRole: "your crew member!",
    mission: "Dive deep to discover what lives at the bottom of the ocean",
    starterLabel: "Going Down",
    starterLine: "Close the hatch! Turn the wheel to make us dive deeper and deeper. What fish can you see through the window?",
    twistLabel: "Friendly Whale",
    twistLine: "A huge whale is swimming right next to us! Should we follow it or stay still? It seems like it wants to show us something.",
    endingLabel: "Treasure Discovery",
    endingLine: "Look what the whale showed us—a sunken ship with treasure! Should we explore inside or swim back to the surface to tell everyone?",
    energy: "mixed",
    icon: "compass",
    props: ["box or laundry basket", "blue blanket", "toy fish"]
  },
  {
    theme: "Pizza Restaurant",
    toddlerRole: "the head chef",
    parentRole: "your first customer!",
    mission: "Make me the most creative pizza you can think of",
    starterLabel: "Opening Time",
    starterLine: "Roll out the dough nice and round. Should we throw it in the air like real pizza chefs? What shape should we make it?",
    twistLabel: "Unusual Order",
    twistLine: "The customer wants something really weird on their pizza—like bananas and pickles! Should we make it exactly how they want, or suggest something else?",
    endingLabel: "Tasting Time",
    endingLine: "It's ready! Let's cut it into slices. Take a pretend bite—how does it taste? Should we open the restaurant again tomorrow?",
    energy: "mixed",
    icon: "bread",
    props: ["play dough or paper", "bowls", "toy food"]
  }
];
