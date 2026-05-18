export const aboutMeText = `import type {
    PersonalInfo,
    KnownLanguage,
    KnownProgrammingLanguage,
    MyApp,
    DiscordSocialInfo,
    InstagramSocialInfo,
    RevoltSocialInfo,
    GitHubSocialInfo,
    RedditSocialInfo,
    TwitterSocialInfo,
    Socials
} from "@/types/aboutMe";

/* My personal informations */

const personalInfo: PersonalInfo = {
    firstName: "Stefano",
    lastName: "Del Prete",
    getFullName: function(): string {
        return \`\${this.firstName} \${this.lastName}\`
    },
    age: undefined, // Not public
    gender: "Male",
    birthday: new Date([[currentTimestamp]]).toLocaleString('it').split(',')[0].replace('[[currentYear]]', '200#'), // aka 15/03/200#
    nationality: "Italian", // Suca
    status: "[[striketrhoughStart]]Single[[striketrhoughEnd]] [[striketrhoughStart]]Alone... :([[striketrhoughEnd]] Just Want to Die", // how to run "taskkill /f life.exe" for IRL life?
    pets: [{
        type: "rabbit",
        name: "Pallino",
        age: 11 // 81 in rabbit years
    }]
};

/* Spoken Languages */

const knownLanguages: Array<KnownLanguage> = [
    {
        name: "Italian",
        level: 100 // 0-100 (kinda obv since it's my native lang)
    },
    {
        name: "English",
        level: 95 // 0-100 (this is how I think I am, idk if others think so too)
    },
    {
        name: "French",
        level: 2 // 0-100 (I remember just the basic things)
    }
];

/* Programming Languages, Markup Languages and Terminal */

const knownProgramming: Array<KnownProgrammingLanguage> = [
    {
        name: "Javascript", // for the comment on the status value, the question goes also for "fs.unlink('C:\\Life.exe')"
        level: 90 // 0-100
    },
    {
        name: "Typescript",
        level: 90 // 0-100
    },
    {
        name: "HTML", // for the previous comment, also for "document.getElementById('life').remove()"
        level: 60 // 0-100
    },
    {
        name: "CSS", // also for "#life { display: none; }"
        level: 60 // 0-100
    },
    {
        name: "Bash/Shell", // for "sudo rm -rf --no-preserve-root /life.sh" too
        level: 45 // 0-100
    },
    {
        name: "Kotlin",
        level: 50
    }
];

/* My Apps */

const myApps: Array<MyApp> = [
    {
        name: "Zipline Upload",
        description: "A chrome extension that lets users upload right clicked files to their [[aStart_zipline]]Zipline[[aEnd]] instance or shorten URLs with [[aStart_zipline]]Zipline[[aEnd]]",
        url: "[[aStart_ziplineUpload]]https://git.stefdp.com/Stef/Zipline-Upload-Extension[[aEnd]]"
    },
    {
        name: "Zipline Android App",
        description: "An android app that lets users manage their [[aStart_zipline]]Zipline[[aEnd]] instance",
        url: "[[aStart_ziplineApp]]https://git.stefdp.com/Stef/zipline-android-app[[aEnd]]"
    },
    {
        name: "User Apps",
        description: "A user-installed Discord bot for some utility commands such as tags (message presets), reminders, ai and more",
        url: "[[aStart_userApps]]https://discord.com/oauth2/authorize?client_id=1223221223685886032[[aEnd]]"
        source: "[[aStart_userAppsSource]]https://git.stefdp.com/Stef/Discord-User-Installed-Apps[[aEnd]]"
    },
    {
        name: "Receiptify",
        description: "Converts your top tracks to a receipt (supports last.fm and spotify)",
        url: "[[aStart_receiptify]]https://receiptify.stefdp.com[[aEnd]]"
    }
];

/* Some info about my socials */

const discord: DiscordSocialInfo = {
    botDeveloper: true,
    badges: [
        "House of Bravery",
        "Active Developer",
        "Originally Known as Stef#6705" // Switch from discriminator to pomelo (Stef#6705 => stef_dp)
    ]
};

const instagram: InstagramSocialInfo = {
    followers: 94 // Last updated March 4 2024, 21:40 (09:40 PM)
};

const revolt: RevoltSocialInfo = {
    botDeveloper: true, // inactive
    badges: [],
    publicBots: []
};

const gitHub: GitHubSocialInfo = {
    followers: 9, // Last updated March 4 2024, 21:41 (09:41 PM)
    repositories: 29 // Some are private, last updated March 4 2024, 20:41 (09:41 PM)
};

const reddit: RedditSocialInfo = {
    oldAccountKarma: 241,
    newAccountKarma: 13 // Last updated March 4 2024, 21:43 (09:43 PM)
};

const twitter: TwitterSocialInfo = {
    followers: 13 // Last updated March 4 2024, 21:44 (09:44 PM)
};

/* Exports */

const socials: Socials = {
    instagram,
    discord,
    twitter,
    revolt,
    github,
    reddit
};

export default {
    knownProgramming,
    knownLanguages,
    personalInfo,
    socials,
    myApps
};
`;

export const aboutMeTextPlain = `<h1><b>Personal Info</b></h1>
<ul class="list-disc">
  <li>
    <b>First Name</b>: Stefano
  </li>
  <li>
    <b>Last Name</b>: Del Prete
  </li>
  <li>
    <b>Age</b>: Not Public
  </li>
  <li>
    <b>Gender</b>: male
  </li>
  <li>
    <b>Birthday</b>: 15/03/200#
  </li>
  <li>
    <b>Status</b>: <s>Single</s> <s>Alone... :(</s> Just Want to Die
  </li>
  <li>
    <b>Pets</b>: 
    <ul class="list-disc">
      <li>
        <b>Pallino</b> (11 years old rabbit)
      </li>
    </ul>
  </li>
</ul>

<h1><b>Known Languages</b></h1>
<ul class="list-disc">
  <li>
    <b>Italian</b>: 100% (kinda obv since it's my native lang)
  </li>
  <li>
    <b>English</b>: 95% (this is how I think I am, idk if others think so too)
  </li>
  <li>
    <b>French</b>: 2% (I remember just the basic things)
  </li>
</ul>

<h1><b>Known Programming Languages</b></h1>
<ul class="list-disc">
  <li>
    <b>Javasvript</b>: 90%
  </li>
  <li>
    <b>Typescript</b>: 90%
  </li>
  <li>
    <b>HTML</b>: 60%
  </li>
  <li>
    <b>CSS</b>: 60%
  </li>
  <li>
    <b>Bash/Shell</b>: 45%
  </li>
  <li>
    <b>Kotlin</b>: 50%
  </li>
</ul>

<h1><b>My Apps</b></h1>
<ul class="list-disc">
  <li>
    <b><a href="https://git.stefdp.com/Stef/Zipline-Upload-Extension">Zipline</a></b>: A chrome extension that lets users upload right clicked files to their <a href="https://github.com/diced/zipline">Zipline</a> instance or shorten URLs with <a href="https://github.com/diced/zipline">Zipline</a>
  </li>
  <li>
    <b><a href="https://git.stefdp.com/Stef/zipline-android-app">Zipline Android App</a></b>: An android app that lets users manage their <a href="https://github.com/diced/zipline">Zipline</a> instance
  </li>
  <li>
    <b><a href="https://discord.com/oauth2/authorize?client_id=1223221223685886032">User Apps</a></b>: A user-installed Discord bot for some utility commands such as tags (message presets), reminders, ai and more
  </li>
  <li>
    <b><a href="https://receiptify.stefdp.com">Receiptify</a></b>: Converts your top tracks to a receipt (supports last.fm and spotify)
  </li>
</ul>`