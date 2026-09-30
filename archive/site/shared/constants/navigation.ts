export enum PagePathnamesEnum {
  Home = 'https://screenberry.com/',
  CaseStudies = 'https://screenberry.com/case-studies',
  Contacts = 'https://screenberry.com/contacts',
  ContactUs = 'https://screenberry.com/contacts/contact-us',
  PartnersDistributors = 'https://screenberry.com/contacts/partners-distributors',
  Resources = 'https://screenberry.com/resources',
  Forum = 'https://forum.screenberry.com',
  Downloads = 'https://screenberry.com/resources/downloads',
  Services = 'https://screenberry.com/services',
  Hardware = 'https://screenberry.com/hardware',
  Software = 'https://screenberry.com/software',
  ProductOverview = 'https://screenberry.com/software/product-overview',
  Features = 'https://screenberry.com/software/features',
  ActivateDemo = 'https://screenberry.com/software/activate-demo',
  SucceedActivate = '/https://screenberry.comsoftware/activate-demo/succeed-activate',
  Licensing = 'https://screenberry.com/software/licensing',
  Solutions = 'https://screenberry.com/solutions',
  Installations3DMapping = 'https://screenberry.com/solutions/installations-3d-mapping',
  FulldomePlanetariums = 'https://screenberry.com/solutions/fulldome-planetariums',
  ExhibitionsGalleries = 'https://screenberry.com/solutions/exhibitions-galleries',
  LiveEvents = 'https://screenberry.com/solutions/live-events',
  TvCinema = 'https://screenberry.com/solutions/tv-cinema',
  LicenseConfigurator = 'https://screenberry.com/software/licensing/license-configurator',
  Cart = 'https://screenberry.com/software/licensing/cart',
  TermsAndConditions = 'https://screenberry.com/terms-and-conditions',
  PrivacyPolicy = 'https://screenberry.com/privacy-policy',
  Sitemap = '/sitemap.xml',
  Signing = '/signing',
  AccountLicenses = 'https://screenberry.com/account/licenses?from=manual',
  ReleaseNotes = '/whats-new/release-notes-3-4',
}

export const middleNavMenu: {
  title: string;
  href: string;
  subMenu?: {
    title: string;
    descripton?: string;
    childLinks: {
      href: string;
      title: string;
      description: string;
      target?: string;
    }[];
  };
  footerSubMenu?: {
    childLinks: { href: string; title: string }[];
  };
}[] = [
  {
    title: 'Software',
    href: PagePathnamesEnum.Software,
    subMenu: {
      title: 'Screenberry 3',
      descripton: 'Flexible cross-platform media server software',
      childLinks: [
        {
          href: PagePathnamesEnum.ProductOverview,
          title: 'Product Overview',
          description: 'Discover Screenberry software',
        },
        {
          href: PagePathnamesEnum.Features,
          title: 'Features',
          description: 'Explore the features of our product',
        },
        {
          href: PagePathnamesEnum.Licensing,
          title: 'Licensing',
          description: 'Compare different types of Screenberry software products',
        },
      ],
    },
  },
  {
    title: 'Solutions',
    href: PagePathnamesEnum.Solutions,
    subMenu: {
      title: 'Solutions',
      descripton: 'Discover how Screenberry can benefit your industry',
      childLinks: [
        {
          href: PagePathnamesEnum.Installations3DMapping,
          title: 'Media Installations & 3D Mapping',
          description: 'Immersive and interactive installations, architectural projection mapping',
        },
        {
          href: PagePathnamesEnum.FulldomePlanetariums,
          title: 'Fulldome & Planetariums',
          description: 'Fulldome theaters, planetariums, immersive concert spaces 360',
        },
        {
          href: PagePathnamesEnum.ExhibitionsGalleries,
          title: 'Exhibitions & Galleries',
          description: 'New media galleries, digital media art, and interactive museum solutions',
        },
        {
          href: PagePathnamesEnum.LiveEvents,
          title: 'Live Events',
          description: 'Concerts, stage shows, sports, corporate and media events',
        },

        {
          href: PagePathnamesEnum.TvCinema,
          title: 'TV & Cinema',
          description: 'Virtual studios, digital backdrops, xR, and virtual production',
        },
      ],
    },
  },
  {
    title: 'Case Studies',
    href: PagePathnamesEnum.CaseStudies,
    footerSubMenu: {
      childLinks: [
        {
          href: PagePathnamesEnum.CaseStudies,
          title: 'Screenberry Cases',
        },
      ],
    },
  },
  {
    title: 'Resources',
    href: PagePathnamesEnum.Resources,
    subMenu: {
      title: 'Resources',
      descripton: 'All useful Screenberry materials for your work',
      childLinks: [
        {
          href: PagePathnamesEnum.Downloads,
          title: 'Downloads',
          description: 'Get a Screenberry demo, software updates, and other useful materials',
        },
        {
          href: PagePathnamesEnum.ReleaseNotes,
          title: 'Release Notes',
          description: 'Read the latest Screenberry release notes',
        },
        {
          href: '/',
          title: 'User Guide',
          description:
            'Check out the user manual for information about the Screenberry interface, configuration, and operations',
        },
        {
          href: 'https://www.youtube.com/playlist?list=PLP22GNZ6JfRUvPo4KWW83vbQZ2o-l-CYM',
          title: 'Video Tutorials',
          description: 'Get detailed video instructions on Screenberry software',
          target: '_blank',
        },
        {
          href: PagePathnamesEnum.Forum,
          title: 'Forum',
          description: 'Discuss Screenberry features, suggest improvements, and become a part of our community',
          target: '_blank',
        },
      ],
    },
  },
  {
    title: 'Contacts',
    href: PagePathnamesEnum.Contacts,
    subMenu: {
      title: 'Contacts',
      descripton: 'Our team is here to assist you',
      childLinks: [
        {
          href: PagePathnamesEnum.ContactUs,
          title: 'Contact Us',
          description: 'Get in touch with our sales team',
        },
        {
          href: PagePathnamesEnum.PartnersDistributors,
          title: 'Partners & Distributors',
          description: 'Reach out to our partners in your country',
        },
      ],
    },
  },
];

export const SoftwareRightBlock = [
  {
    topic: 'Explore Screenberry by industry',
    links: [
      { title: 'Fulldome & Planetariums', href: PagePathnamesEnum.FulldomePlanetariums },
      { title: 'Live Events', href: PagePathnamesEnum.LiveEvents },
      { title: 'Media Installations & 3D Mapping', href: PagePathnamesEnum.Installations3DMapping },
      { title: 'TV & Cinema', href: PagePathnamesEnum.TvCinema },
      { title: 'Exhibitions & Galleries', href: PagePathnamesEnum.ExhibitionsGalleries },
    ],
  },
];
