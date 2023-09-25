const scrollEvent = (e: HTMLDivElement, type: 'left' | 'right') => {
  if (!e) return;
  const cardWidth = e.offsetWidth;
  const scrollLeftMax = Number((e as any).scrollLeftMax);
  const scrollLeft = e.scrollLeft;
  // console.log(e);
  switch (type) {
    case 'right':
      if (scrollLeftMax === scrollLeft) {
        return {
          left: true,
          right: false,
        };
      }
      if (scrollLeftMax > scrollLeft) {
        return {
          left: true,
          right: true,
        };
      }
      console.log(cardWidth);
      return {
        length: scrollLeft + cardWidth,
      };
    case 'left':
      if (scrollLeft === 0) {
        return {
          left: false,
          right: true,
        };
      }
      if (scrollLeft > 0) {
        return {
          left: true,
          right: true,
        };
      }
      return {
        length: scrollLeft - cardWidth,
      };
      // console.log(cardWidth);
      break;
  }
};
export default scrollEvent;
