export interface Sponsor {
  href: string;
  logo: string;
  name: string;
}

export const goldSponsors: Sponsor[] = [
  {
    href: "https://www.microsoft.com/",
    logo: "/img/msft-logo.svg",
    name: "Microsoft",
  },
];

export const silverSponsors: Sponsor[] = [
  {
    href: "https://aws.amazon.com/location/",
    logo: "/img/aws-logo.svg",
    name: "Amazon (AWS)",
  },
  {
    href: "https://www.mierune.co.jp/?lang=en",
    logo: "/img/mierune-logo.svg",
    name: "Mierune",
  },
  { href: "https://komoot.com/", logo: "/img/komoot-logo.svg", name: "Komoot" },
  {
    href: "https://www.jawg.io/",
    logo: "/img/jawgmaps-logo.svg",
    name: "Jawg",
  },
  {
    href: "https://www.radar.com/",
    logo: "/img/radar-logo.svg",
    name: "Radar",
  },
  { href: "https://mapme.com/", logo: "/img/mapme-logo.svg", name: "Mapme" },
  {
    href: "https://www.maptiler.com/",
    logo: "/img/maptiler-logo.svg",
    name: "MapTiler",
  },
  {
    href: "https://www.caltopo.com/",
    logo: "/img/caltopo-logo.svg",
    name: "CalTopo",
  },
];

export const pastSponsors: Sponsor[] = [
  {
    href: "https://www.meta.com/",
    logo: "/img/meta-logo.svg",
    name: "Meta",
  },
  {
    href: "https://www.mappedin.com/",
    logo: "/img/mappedin-logo.svg",
    name: "Mappedin",
  },
  {
    href: "https://www.tomtom.com/",
    logo: "/img/tomtom-logo.svg",
    name: "TomTom",
  },
];
