/*
   =============================================================================
   PRIVACY POLICIES – one application = one entity.
   Policy page: privacy.html?id=<id>,  list of all policies: privacy.html

   id        unique identifier, no spaces – used in the URL
   app       name of the application
   provider  creator of the application
   email     contact address for privacy-related inquiries
   effective date (YYYY-MM-DD)
   pricing   optional, default "Free"
   store     link to the app store – optional
   project   project ID from data/projects.js – if provided, a "Privacy policy"
             button will appear on the corresponding project page

   THE TEXT
   template  specifies which text template to use from data/privacy-templates.js
   summary   optional – custom text for the "In short" section
   tags      optional – replaces the chips under the title
   sections  optional – modifications to individual sections of the template:
               "key": { text: [...] }                → replaces the section text
               "key": null                           → removes the section
               "new": { after: "key", title, text } → adds a new section
   ==============================================================================
*/

/*
{
    id: "my-online-game",
    app: "My Online Game",
    provider: "Marceli Antosik",
    email: "muppetsg2@gmail.com",
    effective: "2027-01-01",
    pricing: "Free",
    retention: "12 months",
    summary: "the app stores your nickname and scores to show the online leaderboard.",
    sections: {
    information: {
        text: ["The Application collects the nickname you choose and your scores."],
        list: ["Nickname", "Scores and play time", "Anonymous crash reports"],
    },
    "how-collected": {
        after: "information",
        title: "How is the information collected?",
        text: ["Scores are sent to our server when a level ends. Data is kept for {retention}."],
    },
    "third-parties": { text: ["Crash reports are processed by …"] },
    security: { text: ["…"] },
    },
},
*/

export const privacyPolicies = [
    {
        id: "shooter",
        app: "Shooter",
        provider: "Marceli Antosik",
        email: "muppetsg2@gmail.com",
        effective: "2026-03-09",
        pricing: "Free",
        store: "https://play.google.com/store/apps/details?id=com.Muppetsg2.Shooter",
        project: "shooter",
        template: "no-data",
    },
    {
        id: "calculator-rpg",
        app: "Calculator RPG",
        provider: "Patryk Antosik",
        email: "marcelipatryk@gmail.com",
        effective: "2026-03-09",
        pricing: "Free",
        store: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.CalculatorRPG",
        template: "no-data",
    },
    {
        id: "marry-kiss-kill",
        app: "Marry, Kiss & Kill",
        provider: "Marceli Antosik & Patryk Antosik",
        email: "marcelipatryk@gmail.com",
        effective: "2026-03-09",
        pricing: "Free",
        store: "https://play.google.com/store/apps/details?id=com.MAIPA.INCandMuppetsg2.MKandK",
        project: "marry-kiss-kill",
        template: "no-data",
    },
    {
        id: "diler",
        app: "Diler - The Last 7Week",
        provider: "Marceli Antosik & Patryk Antosik",
        email: "marcelipatryk@gmail.com",
        effective: "2026-03-09",
        pricing: "Free",
        store: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.Muppetsg2.Last7Weeks",
        project: "diler",
        template: "no-data",
    },
    {
        id: "the-wizards",
        app: "The Wizards",
        provider: "Marceli Antosik & Patryk Antosik",
        email: "marcelipatryk@gmail.com",
        effective: "2026-03-09",
        pricing: "Free",
        store: "https://play.google.com/store/apps/details?id=com.MAIPA.INC.Muppetsg2Company.TheWizards",
        project: "the-wizards",
        template: "no-data",
    },
];
