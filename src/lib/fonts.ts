import { Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";

/**
 * Signal / Noise type. All three are free Google fonts.
 *
 * Instrument Sans carries the width axis so display type can run condensed
 * (see `.sn-mega` / `.sn-title`); Instrument Serif italic is the one emphasis
 * word per headline; Geist Mono sets every label and data readout.
 */
export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  axes: ["wdth"],
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/** Apply to the element that owns a Signal / Noise subtree. */
export const signalFonts = `${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable}`;
