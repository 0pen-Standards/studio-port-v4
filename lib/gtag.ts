export const GA_MEASUREMENT_ID = 'G-WNC4CHD8NP'; // Replace with your ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};