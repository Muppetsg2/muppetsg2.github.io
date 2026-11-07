/*
   =============================================================================
   PRIVACY POLICIES – one application = one entity.
   Policy page: privacy.html?id=<id>,  list of all policies: privacy.html

   id        unique identifier, no spaces – used in the URL
   app       name of the application
   provider  creator of the application
   email     contact address for privacy-related inquiries
   effective date (YYYY-MM-DD)
   store     link to the app store – optional
   project   project ID from data/projects.js – if provided, a "Privacy policy"
             button will appear on the corresponding project page
   template  specifies which text template to use from data/privacy-templates.js
   summary   optional – custom text for the "In short" section
   sections  optional – modifications to individual sections of the template:
               "key": { text: [...] }                → replaces the section text
               "key": null                           → removes the section
               "new": { after: "key", title, text } → adds a new section
   ==============================================================================
*/

export const privacyPolicies = [
    {
        id: "shooter",
        app: "Shooter",
        provider: "Marceli Antosik",
        email: "muppetsg2@gmail.com",
        effective: "2026-03-09",
        store: "https://play.google.com/store/apps/details?id=com.Muppetsg2.Shooter",
        project: "shooter",
        template: "no-data",
    },
];
