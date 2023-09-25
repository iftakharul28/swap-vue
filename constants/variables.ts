export const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const baseMediaPath = process.env.NEXT_PUBLIC_MEDIA_URL;
export const mediaPath = {
  large: `${baseMediaPath}/fl_lossy,f_auto,q_auto,w_850,h_504`,
  medium: `${baseMediaPath}/fl_lossy,f_auto,q_auto,w_660`,
  thumb: `${baseMediaPath}/fl_lossy,f_auto,q_auto,w_288,h_360`,
};
